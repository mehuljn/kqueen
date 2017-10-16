Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};

// Converts from radians to degrees.
Math.degrees = function(radians) {
  return radians * 180 / Math.PI;
};

var K8SHiveChart = {
  init: function(data, config){
    if(!data){
      throw new Error("Cannot init K8SHiveChart data is invalid!")
    }
    config = config || {};

    var width = config.width || 960
     ,  height = config.height || 600
     ,  outerRadius = config.outerRadius || 300
     ,  innerRadius = config.innerRadius || 40
     ,  data_axes = [
          {x: 0, angle: -45, outer_radius: 240, name:"Pods", kind: "Pod"},
          {x: 1, angle: 45, outer_radius: 240, name:"Nodes", kind: "Node"},
          {x: 2, angle: 135, outer_radius: 240, name:"Services", kind: "Service"},
          {x: 3, angle: 225, outer_radius: 240, name:"Other", kind: "Other"}
        ]
     ,  icon_mapping = {
          Pod: "\uf1fb", // engine
          Node: "\uf48b", // server
          Service: "\uf59f", // web
          Other: "\uf59f" // other services
        }
     ,  color_mapping = {
          Pod: "red",
          Node: "green",
          Service: "orange",
          Other: "black"
    };

    if(typeof data.items === 'object'){
      data.items = Object.values(data.items);
    }

    var nodes = this.createNodes(data.items);
    var links = this.createLinks(nodes, data.relations);

    var angle = function(d) {
      var angle = 0
       ,  found = false;
      data_axes.forEach(function(item) {
        if (d.kind == item.kind) {
          angle = item.angle;
          found=true;
        }
      });
      if(!found){
        console.log("Cannot compute angle for item " + d)
      }
      return angle
    }
    var radius = d3.scaleLinear().range([innerRadius, outerRadius]);
    var icon = function(i) { return icon_mapping[i] };
    var color = function(i) { return color_mapping[i] };

    var NodeMouseFunctions = {
      linkOver: function(d){
        svg.selectAll(".link").classed("active", function(p) { return p === d; });
        svg.selectAll(".node circle").classed("active", function(p) { return p === d.source || p === d.target; });
        svg.selectAll(".node text").classed("active", function(p) { return p === d.source || p === d.target; });
        //NodeMouseFunctions.over();
      },
      nodeOver: function(d) {
        svg.selectAll(".link").classed("active", function(p) { return p.source === d || p.target === d; });
        d3.select(this).select("circle").classed("active", true);
        d3.select(this).select("text").classed("active", true);
        tooltip.html("Node - " + d.name + "<br/>" + "Kind - " + d.kind)
          .style("left", (d3.event.pageX + 5) + "px")
          .style("top", (d3.event.pageY - 28) + "px");
        tooltip.transition()
          .duration(200)
          .style("opacity", .9);
      },
      out: function(d){
        svg.selectAll(".active").classed("active", false);
        tooltip.transition()
          .duration(500)
          .style("opacity", 0);
      }
    };

    var svg = d3.select("body")
      .append("svg")
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", "translate(" + width/2 + "," + height/2 + ")");

    var tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    // Hive plot render

    axes = svg.selectAll(".node").data(data_axes)
      .enter().append("g");

    axes.append("line")
      .attr("class", "axis")
      .attr("transform", function(d){
          return "rotate(" + d.angle + ")";
      })
      .attr("x1", radius.range()[0])
      .attr("x2", radius.range()[1]);

    axes.append("text")
      .attr("class", "axis-label")
      .attr('font-size', function(d) { return '18px'; } )
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'central')
      .text(function(d) { return d.name; })
      .attr("transform", function(d) {
        x = (radius.range()[1] + 40) * Math.cos(Math.radians(d.angle));
        y = (radius.range()[1] + 40) * Math.sin(Math.radians(d.angle));
        return "translate(" + x + ", " + y + ")";
      });

    svg.selectAll(".link").data(links)
      .enter().append("path")
        .attr("class", "link")
        .attr("d", d3.hive.link()
        .angle(function(d) { return Math.radians(angle(d)); })
        .radius(function(d) { return radius(d.y); }))
        //.style("stroke", function(d) { return color(d.source.kind); })
        .on("mouseover", NodeMouseFunctions.linkOver)
        .on("mouseout", NodeMouseFunctions.out);


    nodes = svg.selectAll(".node").data(nodes)
      .enter().append("g")
        .attr("class", "node")
        .attr("transform", function(d) {
          x = radius(d.y) * Math.cos(Math.radians(angle(d)));
          y = radius(d.y) * Math.sin(Math.radians(angle(d)));
          return "translate(" + x + ", " + y + ")";
        })
        .on("mouseover", NodeMouseFunctions.nodeOver)
        .on("mouseout", NodeMouseFunctions.out);

    nodes.append("circle")
      .attr("r", 16)
      .style("stroke", function(d) { return color(d.kind); })

    nodes.append("text")
      .attr('font-family', 'Material Design Icons')
      .attr("color", function(d) { return color(d.kind); })
      .attr('font-size', function(d) { return '18px'; } )
      .text(function(d) { return icon(d.kind); })
      .attr("transform", "translate(-9, 6)")
  },

  createNodes: function(items){
    var itemCounters={Service:0,Pod:0, Node:0, Other:0}
     ,  axisMapping = {
          Pod: 0, // engine
          Node: 1, // server
          Service: 2, // web
          Other: 3 // other services
    };
    return items.map(function(item){
        item["id"] = item.metadata.uid;
        item["name"] = item.metadata.name || "Unnamed node";
        if(["Pod","Service","Node"].indexOf(item.kind) < 0){
          item.kind = "Other";
        }
        item["x"] = axisMapping[item.kind];
        itemCounters[item.kind]++;
        item["y"] = .13*itemCounters[item.kind];
        return item;
    });
  },

  createLinks: function(nodes, relations){
    return relations.map(function(link){
      var retLink = {};
      nodes.forEach(function(node){
        if(link.source == node.id){
          retLink.source = node;
        } else if(link.target == node.id){
          retLink.target = node;
        }
      });
      if(!retLink.hasOwnProperty("source") || !retLink.hasOwnProperty("target")){
        console.log("Cannot found relation node for link " + link);
        retLink = link;
      }
      return retLink;
    });
  }
};