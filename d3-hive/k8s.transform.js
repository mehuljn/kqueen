var relations = [];

// Basic Transformation Array > Object with UID as Keys
var transformedData = clusterData.items.reduce(function (acc, cur) {
  acc[cur.metadata.uid] = cur;
  return acc;
}, {});

// Add Containers as top-level resource
var resource = void 0;
for (resource in transformedData) {
  resource = transformedData[resource];
  if (resource.kind === 'Pod') {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = resource.spec.containers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        container = _step.value;

        var containerId = resource.metadata.uid + '-' + container.name;
        transformedData[containerId] = {};
        transformedData[containerId].metadata = container;
        transformedData[containerId].kind = 'Container';

        // Add to relations
        relations.push({ target: resource.metadata.uid, source: containerId });
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
}

var item = void 0,
    kind = void 0;

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = clusterData.items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    item = _step2.value;

    kind = item.kind;
    if (kind === 'Pod') {
      (function () {
        var pod = item;
        // define relationship between pods and nodes
        var podsNode = clusterData.items.find(function (i) {
          return i.metadata.name === pod.spec.nodeName;
        });
        relations.push({ source: pod.metadata.uid, target: podsNode.metadata.uid });

        // define relationships between pods and rep sets and replication controllers
        var ownerReferences = pod.metadata.ownerReferences[0].uid;
        var podsRepController = clusterData.items.find(function (i) {
          return i.metadata.uid === ownerReferences;
        });
        relations.push({ target: pod.metadata.uid, source: podsRepController.metadata.uid });

        // rel'n between pods and services
        var podsService = clusterData.items.find(function (i) {
          if (i.kind === 'Service' && i.spec.selector) {
            return i.spec.selector.run === pod.metadata.labels.run;
          }
        });
        relations.push({ target: pod.metadata.uid, source: podsService.metadata.uid });
      })();
    }

    if (kind === 'Service') {
      var podsService = void 0;
      // console.log('item', item)
      // console.log(item.spec.selector)
    }

    if (kind === 'Deployment') {
      // console.log('item deployment', item)
    }
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

var items = transformedData;

var ingestedData = { items: items, relations: relations };