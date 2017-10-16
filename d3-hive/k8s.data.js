var clusterData = {
  "items": {
    "0eb5e85e-b25f-11e7-9e5e-0a4bee56cee8": {
      "api_version": null, 
      "kind": "Pod", 
      "metadata": {
        "annotations": {
          "kubernetes.io/created-by": "{\"kind\":\"SerializedReference\",\"apiVersion\":\"v1\",\"reference\":{\"kind\":\"ReplicaSet\",\"namespace\":\"kube-system\",\"name\":\"kube-dns-2058077965\",\"uid\":\"7f506219-ad8c-11e7-994c-0a1c759dde8c\",\"apiVersion\":\"extensions\",\"resourceVersion\":\"2955359\"}}\n", 
          "scheduler.alpha.kubernetes.io/critical-pod": "", 
          "scheduler.alpha.kubernetes.io/tolerations": "[{\"key\":\"CriticalAddonsOnly\", \"operator\":\"Exists\"}]"
        }, 
        "cluster_name": null, 
        "creation_timestamp": "Mon, 16 Oct 2017 10:44:59 GMT", 
        "deletion_grace_period_seconds": 30, 
        "deletion_timestamp": "Mon, 16 Oct 2017 10:45:35 GMT", 
        "finalizers": null, 
        "generate_name": "kube-dns-2058077965-", 
        "generation": null, 
        "initializers": null, 
        "labels": {
          "k8s-app": "kube-dns", 
          "pod-template-hash": "2058077965"
        }, 
        "name": "kube-dns-2058077965-bwkxt", 
        "namespace": "kube-system", 
        "owner_references": [
          {
            "api_version": "extensions/v1beta1", 
            "block_owner_deletion": true, 
            "controller": true, 
            "kind": "ReplicaSet", 
            "name": "kube-dns-2058077965", 
            "uid": "7f506219-ad8c-11e7-994c-0a1c759dde8c"
          }
        ], 
        "resource_version": "2955412", 
        "self_link": "/api/v1/namespaces/kube-system/pods/kube-dns-2058077965-bwkxt", 
        "uid": "0eb5e85e-b25f-11e7-9e5e-0a4bee56cee8"
      }, 
      "spec": {
        "active_deadline_seconds": null, 
        "affinity": null, 
        "automount_service_account_token": null, 
        "containers": [
          {
            "args": [
              "--domain=us-west-2.compute.internal.", 
              "--dns-port=10053", 
              "--config-map=kube-dns", 
              "-v=2"
            ], 
            "command": null, 
            "env": [
              {
                "name": "PROMETHEUS_PORT", 
                "value": "10055", 
                "value_from": null
              }
            ], 
            "env_from": null, 
            "image": "gcr.io/google_containers/k8s-dns-kube-dns-amd64:1.14.5", 
            "image_pull_policy": "IfNotPresent", 
            "lifecycle": null, 
            "liveness_probe": {
              "_exec": null, 
              "failure_threshold": 5, 
              "http_get": {
                "host": null, 
                "http_headers": null, 
                "path": "/healthcheck/kubedns", 
                "port": "10054", 
                "scheme": "HTTP"
              }, 
              "initial_delay_seconds": 60, 
              "period_seconds": 10, 
              "success_threshold": 1, 
              "tcp_socket": null, 
              "timeout_seconds": 5
            }, 
            "name": "kubedns", 
            "ports": [
              {
                "container_port": 10053, 
                "host_ip": null, 
                "host_port": null, 
                "name": "dns-local", 
                "protocol": "UDP"
              }, 
              {
                "container_port": 10053, 
                "host_ip": null, 
                "host_port": null, 
                "name": "dns-tcp-local", 
                "protocol": "TCP"
              }, 
              {
                "container_port": 10055, 
                "host_ip": null, 
                "host_port": null, 
                "name": "metrics", 
                "protocol": "TCP"
              }
            ], 
            "readiness_probe": {
              "_exec": null, 
              "failure_threshold": 3, 
              "http_get": {
                "host": null, 
                "http_headers": null, 
                "path": "/readiness", 
                "port": "8081", 
                "scheme": "HTTP"
              }, 
              "initial_delay_seconds": 3, 
              "period_seconds": 10, 
              "success_threshold": 1, 
              "tcp_socket": null, 
              "timeout_seconds": 5
            }, 
            "resources": {
              "limits": {
                "memory": "170Mi"
              }, 
              "requests": {
                "cpu": "100m", 
                "memory": "70Mi"
              }
            }, 
            "security_context": null, 
            "stdin": null, 
            "stdin_once": null, 
            "termination_message_path": "/dev/termination-log", 
            "termination_message_policy": "File", 
            "tty": null, 
            "volume_mounts": [
              {
                "mount_path": "/var/run/secrets/kubernetes.io/serviceaccount", 
                "name": "default-token-6t3vm", 
                "read_only": true, 
                "sub_path": null
              }
            ], 
            "working_dir": null
          }, 
          {
            "args": [
              "--log-facility=-", 
              "--no-resolv", 
              "--cache-size=1000", 
              "--server=127.0.0.1#10053"
            ], 
            "command": null, 
            "env": null, 
            "env_from": null, 
            "image": "gcr.io/google_containers/k8s-dns-dnsmasq-amd64:1.14.5", 
            "image_pull_policy": "IfNotPresent", 
            "lifecycle": null, 
            "liveness_probe": {
              "_exec": null, 
              "failure_threshold": 5, 
              "http_get": {
                "host": null, 
                "http_headers": null, 
                "path": "/healthcheck/dnsmasq", 
                "port": "10054", 
                "scheme": "HTTP"
              }, 
              "initial_delay_seconds": 60, 
              "period_seconds": 10, 
              "success_threshold": 1, 
              "tcp_socket": null, 
              "timeout_seconds": 5
            }, 
            "name": "dnsmasq", 
            "ports": [
              {
                "container_port": 53, 
                "host_ip": null, 
                "host_port": null, 
                "name": "dns", 
                "protocol": "UDP"
              }, 
              {
                "container_port": 53, 
                "host_ip": null, 
                "host_port": null, 
                "name": "dns-tcp", 
                "protocol": "TCP"
              }
            ], 
            "readiness_probe": null, 
            "resources": {
              "limits": null, 
              "requests": {
                "cpu": "150m", 
                "memory": "10Mi"
              }
            }, 
            "security_context": null, 
            "stdin": null, 
            "stdin_once": null, 
            "termination_message_path": "/dev/termination-log", 
            "termination_message_policy": "File", 
            "tty": null, 
            "volume_mounts": [
              {
                "mount_path": "/var/run/secrets/kubernetes.io/serviceaccount", 
                "name": "default-token-6t3vm", 
                "read_only": true, 
                "sub_path": null
              }
            ], 
            "working_dir": null
          }, 
          {
            "args": [
              "--v=2", 
              "--logtostderr", 
              "--probe=kubedns,127.0.0.1:10053,kubernetes.default.svc.us-west-2.compute.internal,5,A", 
              "--probe=dnsmasq,127.0.0.1:53,kubernetes.default.svc.us-west-2.compute.internal,5,A"
            ], 
            "command": null, 
            "env": null, 
            "env_from": null, 
            "image": "gcr.io/google_containers/k8s-dns-sidecar-amd64:1.14.5", 
            "image_pull_policy": "IfNotPresent", 
            "lifecycle": null, 
            "liveness_probe": {
              "_exec": null, 
              "failure_threshold": 5, 
              "http_get": {
                "host": null, 
                "http_headers": null, 
                "path": "/metrics", 
                "port": "10054", 
                "scheme": "HTTP"
              }, 
              "initial_delay_seconds": 60, 
              "period_seconds": 10, 
              "success_threshold": 1, 
              "tcp_socket": null, 
              "timeout_seconds": 5
            }, 
            "name": "sidecar", 
            "ports": [
              {
                "container_port": 10054, 
                "host_ip": null, 
                "host_port": null, 
                "name": "metrics", 
                "protocol": "TCP"
              }
            ], 
            "readiness_probe": null, 
            "resources": {
              "limits": null, 
              "requests": {
                "cpu": "10m", 
                "memory": "20Mi"
              }
            }, 
            "security_context": null, 
            "stdin": null, 
            "stdin_once": null, 
            "termination_message_path": "/dev/termination-log", 
            "termination_message_policy": "File", 
            "tty": null, 
            "volume_mounts": [
              {
                "mount_path": "/var/run/secrets/kubernetes.io/serviceaccount", 
                "name": "default-token-6t3vm", 
                "read_only": true, 
                "sub_path": null
              }
            ], 
            "working_dir": null
          }
        ], 
        "dns_policy": "Default", 
        "host_aliases": null, 
        "host_ipc": null, 
        "host_network": null, 
        "host_pid": null, 
        "hostname": null, 
        "image_pull_secrets": null, 
        "init_containers": null, 
        "node_name": "ip-10-0-10-13.us-west-2.compute.internal", 
        "node_selector": null, 
        "restart_policy": "Always", 
        "scheduler_name": "default-scheduler", 
        "security_context": {
          "fs_group": null, 
          "run_as_non_root": null, 
          "run_as_user": null, 
          "se_linux_options": null, 
          "supplemental_groups": null
        }, 
        "service_account": "default", 
        "service_account_name": "default", 
        "subdomain": null, 
        "termination_grace_period_seconds": 30, 
        "tolerations": [
          {
            "effect": "NoSchedule", 
            "key": "node-role.kubernetes.io/master", 
            "operator": null, 
            "toleration_seconds": null, 
            "value": null
          }
        ], 
        "volumes": [
          {
            "aws_elastic_block_store": null, 
            "azure_disk": null, 
            "azure_file": null, 
            "cephfs": null, 
            "cinder": null, 
            "config_map": null, 
            "downward_api": null, 
            "empty_dir": null, 
            "fc": null, 
            "flex_volume": null, 
            "flocker": null, 
            "gce_persistent_disk": null, 
            "git_repo": null, 
            "glusterfs": null, 
            "host_path": null, 
            "iscsi": null, 
            "name": "default-token-6t3vm", 
            "nfs": null, 
            "persistent_volume_claim": null, 
            "photon_persistent_disk": null, 
            "portworx_volume": null, 
            "projected": null, 
            "quobyte": null, 
            "rbd": null, 
            "scale_io": null, 
            "secret": {
              "default_mode": 420, 
              "items": null, 
              "optional": null, 
              "secret_name": "default-token-6t3vm"
            }, 
            "storageos": null, 
            "vsphere_volume": null
          }
        ]
      }, 
      "status": {
        "conditions": [
          {
            "last_probe_time": null, 
            "last_transition_time": "Mon, 16 Oct 2017 10:44:59 GMT", 
            "message": null, 
            "reason": null, 
            "status": "True", 
            "type": "Initialized"
          }, 
          {
            "last_probe_time": null, 
            "last_transition_time": "Mon, 16 Oct 2017 10:44:59 GMT", 
            "message": "containers with unready status: [kubedns]", 
            "reason": "ContainersNotReady", 
            "status": "False", 
            "type": "Ready"
          }, 
          {
            "last_probe_time": null, 
            "last_transition_time": "Mon, 16 Oct 2017 10:44:59 GMT", 
            "message": null, 
            "reason": null, 
            "status": "True", 
            "type": "PodScheduled"
          }
        ], 
        "container_statuses": [
          {
            "container_id": "docker://b5b1b80fdc28ec138f6fc9f57a11ce4a9ea5392a1dbd0754ba20485f937bf803", 
            "image": "gcr.io/google_containers/k8s-dns-dnsmasq-amd64:1.14.5", 
            "image_id": "docker-pullable://gcr.io/google_containers/k8s-dns-dnsmasq-amd64@sha256:60ef7b261e81df47490155558ec1e8cef3f787c8db9adee4fdd7af351190141e", 
            "last_state": {
              "running": null, 
              "terminated": null, 
              "waiting": null
            }, 
            "name": "dnsmasq", 
            "ready": true, 
            "restart_count": 0, 
            "state": {
              "running": {
                "started_at": "Mon, 16 Oct 2017 10:45:00 GMT"
              }, 
              "terminated": null, 
              "waiting": null
            }
          }, 
          {
            "container_id": "docker://245ccccb4281455ff52703a8644ee8116f0cc060b101201aee8cb10518aadc5b", 
            "image": "gcr.io/google_containers/k8s-dns-kube-dns-amd64:1.14.5", 
            "image_id": "docker-pullable://gcr.io/google_containers/k8s-dns-kube-dns-amd64@sha256:1a3fc069de481ae690188f6f1ba4664b5cc7760af37120f70c86505c79eea61d", 
            "last_state": {
              "running": null, 
              "terminated": null, 
              "waiting": null
            }, 
            "name": "kubedns", 
            "ready": false, 
            "restart_count": 0, 
            "state": {
              "running": {
                "started_at": "Mon, 16 Oct 2017 10:45:00 GMT"
              }, 
              "terminated": null, 
              "waiting": null
            }
          }, 
          {
            "container_id": "docker://a0458dc6ba569b0df588f143c770d865eb84165b69d1d26561df5ede1eef6d66", 
            "image": "gcr.io/google_containers/k8s-dns-sidecar-amd64:1.14.5", 
            "image_id": "docker-pullable://gcr.io/google_containers/k8s-dns-sidecar-amd64@sha256:9aab42bf6a2a068b797fe7d91a5d8d915b10dbbc3d6f2b10492848debfba6044", 
            "last_state": {
              "running": null, 
              "terminated": null, 
              "waiting": null
            }, 
            "name": "sidecar", 
            "ready": true, 
            "restart_count": 0, 
            "state": {
              "running": {
                "started_at": "Mon, 16 Oct 2017 10:45:00 GMT"
              }, 
              "terminated": null, 
              "waiting": null
            }
          }
        ], 
        "host_ip": "10.0.10.13", 
        "init_container_statuses": null, 
        "message": null, 
        "phase": "Running", 
        "pod_ip": "10.0.213.30", 
        "qos_class": "Burstable", 
        "reason": null, 
        "start_time": "Mon, 16 Oct 2017 10:44:59 GMT"
      }
    }, 
    "17dfa513-ad8c-11e7-994c-0a1c759dde8c": {
      "api_version": null, 
      "kind": "Service", 
      "metadata": {
        "annotations": null, 
        "cluster_name": null, 
        "creation_timestamp": "Tue, 10 Oct 2017 07:24:46 GMT", 
        "deletion_grace_period_seconds": null, 
        "deletion_timestamp": null, 
        "finalizers": null, 
        "generate_name": null, 
        "generation": null, 
        "initializers": null, 
        "labels": {
          "component": "apiserver", 
          "provider": "kubernetes"
        }, 
        "name": "kubernetes", 
        "namespace": "default", 
        "owner_references": null, 
        "resource_version": "8", 
        "self_link": "/api/v1/namespaces/default/services/kubernetes", 
        "uid": "17dfa513-ad8c-11e7-994c-0a1c759dde8c"
      }, 
      "spec": {
        "cluster_ip": "10.254.0.1", 
        "external_i_ps": null, 
        "external_name": null, 
        "external_traffic_policy": null, 
        "health_check_node_port": null, 
        "load_balancer_ip": null, 
        "load_balancer_source_ranges": null, 
        "ports": [
          {
            "name": "https", 
            "node_port": null, 
            "port": 443, 
            "protocol": "TCP", 
            "target_port": "4430"
          }
        ], 
        "selector": null, 
        "session_affinity": "ClientIP", 
        "type": "ClusterIP"
      }, 
      "status": {
        "load_balancer": {
          "ingress": null
        }
      }
    }, 
    "2280a0e5-ad8c-11e7-994c-0a1c759dde8c": {
      "api_version": null, 
      "kind": "Service", 
      "metadata": {
        "annotations": {
          "kubectl.kubernetes.io/last-applied-configuration": "{\"apiVersion\":\"v1\",\"kind\":\"Service\",\"metadata\":{\"annotations\":{},\"labels\":{\"addonmanager.kubernetes.io/mode\":\"Reconcile\",\"k8s-app\":\"kubernetes-dashboard\",\"kubernetes.io/cluster-service\":\"true\"},\"name\":\"kubernetes-dashboard\",\"namespace\":\"kube-system\"},\"spec\":{\"ports\":[{\"port\":80,\"targetPort\":9090}],\"selector\":{\"k8s-app\":\"kubernetes-dashboard\"},\"type\":\"NodePort\"}}\n"
        }, 
        "cluster_name": null, 
        "creation_timestamp": "Tue, 10 Oct 2017 07:25:04 GMT", 
        "deletion_grace_period_seconds": null, 
        "deletion_timestamp": null, 
        "finalizers": null, 
        "generate_name": null, 
        "generation": null, 
        "initializers": null, 
        "labels": {
          "addonmanager.kubernetes.io/mode": "Reconcile", 
          "k8s-app": "kubernetes-dashboard", 
          "kubernetes.io/cluster-service": "true"
        }, 
        "name": "kubernetes-dashboard", 
        "namespace": "kube-system", 
        "owner_references": null, 
        "resource_version": "2955403", 
        "self_link": "/api/v1/namespaces/kube-system/services/kubernetes-dashboard", 
        "uid": "2280a0e5-ad8c-11e7-994c-0a1c759dde8c"
      }, 
      "spec": {
        "cluster_ip": "10.254.164.245", 
        "external_i_ps": null, 
        "external_name": null, 
        "external_traffic_policy": null, 
        "health_check_node_port": null, 
        "load_balancer_ip": null, 
        "load_balancer_source_ranges": null, 
        "ports": [
          {
            "name": null, 
            "node_port": 30821, 
            "port": 80, 
            "protocol": "TCP", 
            "target_port": "9090"
          }
        ], 
        "selector": {
          "k8s-app": "kubernetes-dashboard"
        }, 
        "session_affinity": "None", 
        "type": "NodePort"
      }, 
      "status": {
        "load_balancer": {
          "ingress": null
        }
      }
    }, 
    "2294903b-ad8c-11e7-994c-0a1c759dde8c": {
      "api_version": null, 
      "kind": "Service", 
      "metadata": {
        "annotations": {
          "kubectl.kubernetes.io/last-applied-configuration": "{\"apiVersion\":\"v1\",\"kind\":\"Service\",\"metadata\":{\"annotations\":{},\"labels\":{\"addonmanager.kubernetes.io/mode\":\"Reconcile\",\"k8s-app\":\"kube-dns\",\"kubernetes.io/cluster-service\":\"true\",\"kubernetes.io/name\":\"KubeDNS\"},\"name\":\"kube-dns\",\"namespace\":\"kube-system\"},\"spec\":{\"clusterIP\":\"10.254.0.10\",\"ports\":[{\"name\":\"dns\",\"port\":53,\"protocol\":\"UDP\"},{\"name\":\"dns-tcp\",\"port\":53,\"protocol\":\"TCP\"}],\"selector\":{\"k8s-app\":\"kube-dns\"}}}\n"
        }, 
        "cluster_name": null, 
        "creation_timestamp": "Tue, 10 Oct 2017 07:25:04 GMT", 
        "deletion_grace_period_seconds": null, 
        "deletion_timestamp": null, 
        "finalizers": null, 
        "generate_name": null, 
        "generation": null, 
        "initializers": null, 
        "labels": {
          "addonmanager.kubernetes.io/mode": "Reconcile", 
          "k8s-app": "kube-dns", 
          "kubernetes.io/cluster-service": "true", 
          "kubernetes.io/name": "KubeDNS"
        }, 
        "name": "kube-dns", 
        "namespace": "kube-system", 
        "owner_references": null, 
        "resource_version": "2955418", 
        "self_link": "/api/v1/namespaces/kube-system/services/kube-dns", 
        "uid": "2294903b-ad8c-11e7-994c-0a1c759dde8c"
      }, 
      "spec": {
        "cluster_ip": "10.254.0.10", 
        "external_i_ps": null, 
        "external_name": null, 
        "external_traffic_policy": null, 
        "health_check_node_port": null, 
        "load_balancer_ip": null, 
        "load_balancer_source_ranges": null, 
        "ports": [
          {
            "name": "dns", 
            "node_port": null, 
            "port": 53, 
            "protocol": "UDP", 
            "target_port": "53"
          }, 
          {
            "name": "dns-tcp", 
            "node_port": null, 
            "port": 53, 
            "protocol": "TCP", 
            "target_port": "53"
          }
        ], 
        "selector": {
          "k8s-app": "kube-dns"
        }, 
        "session_affinity": "None", 
        "type": "ClusterIP"
      }, 
      "status": {
        "load_balancer": {
          "ingress": null
        }
      }
    }, 
    "3a9d8e97-ad8e-11e7-994c-0a1c759dde8c": {
      "api_version": null, 
      "kind": "Node", 
      "metadata": {
        "annotations": {
          "node.alpha.kubernetes.io/ttl": "0", 
          "volumes.kubernetes.io/controller-managed-attach-detach": "true"
        }, 
        "cluster_name": null, 
        "creation_timestamp": "Tue, 10 Oct 2017 07:40:03 GMT", 
        "deletion_grace_period_seconds": null, 
        "deletion_timestamp": null, 
        "finalizers": null, 
        "generate_name": null, 
        "generation": null, 
        "initializers": null, 
        "labels": {
          "beta.kubernetes.io/arch": "amd64", 
          "beta.kubernetes.io/instance-type": "t2.medium", 
          "beta.kubernetes.io/os": "linux", 
          "failure-domain.beta.kubernetes.io/region": "us-west-2", 
          "failure-domain.beta.kubernetes.io/zone": "us-west-2c", 
          "kubernetes.io/hostname": "ip-10-0-10-30", 
          "node-role.kubernetes.io/node": "true"
        }, 
        "name": "ip-10-0-10-30.us-west-2.compute.internal", 
        "namespace": null, 
        "owner_references": null, 
        "resource_version": "2955348", 
        "self_link": "/api/v1/nodesip-10-0-10-30.us-west-2.compute.internal", 
        "uid": "3a9d8e97-ad8e-11e7-994c-0a1c759dde8c"
      }, 
      "spec": {
        "external_id": "i-0d98d8a3ff6aa13bf", 
        "pod_cidr": null, 
        "provider_id": "aws:///us-west-2c/i-0d98d8a3ff6aa13bf", 
        "taints": null, 
        "unschedulable": null
      }, 
      "status": {
        "addresses": [
          {
            "address": "10.0.10.30", 
            "type": "InternalIP"
          }, 
          {
            "address": "10.0.10.30", 
            "type": "LegacyHostIP"
          }, 
          {
            "address": "52.43.133.186", 
            "type": "ExternalIP"
          }, 
          {
            "address": "ip-10-0-10-30.us-west-2.compute.internal", 
            "type": "InternalDNS"
          }, 
          {
            "address": "ec2-52-43-133-186.us-west-2.compute.amazonaws.com", 
            "type": "ExternalDNS"
          }, 
          {
            "address": "ip-10-0-10-30", 
            "type": "Hostname"
          }
        ], 
        "allocatable": {
          "cpu": "2", 
          "memory": "3942800Ki", 
          "pods": "110"
        }, 
        "capacity": {
          "cpu": "2", 
          "memory": "4045200Ki", 
          "pods": "110"
        }, 
        "conditions": [
          {
            "last_heartbeat_time": "Mon, 16 Oct 2017 10:44:57 GMT", 
            "last_transition_time": "Wed, 11 Oct 2017 05:43:51 GMT", 
            "message": "kubelet has sufficient disk space available", 
            "reason": "KubeletHasSufficientDisk", 
            "status": "False", 
            "type": "OutOfDisk"
          }, 
          {
            "last_heartbeat_time": "Mon, 16 Oct 2017 10:44:57 GMT", 
            "last_transition_time": "Wed, 11 Oct 2017 05:43:51 GMT", 
            "message": "kubelet has sufficient memory available", 
            "reason": "KubeletHasSufficientMemory", 
            "status": "False", 
            "type": "MemoryPressure"
          }, 
          {
            "last_heartbeat_time": "Mon, 16 Oct 2017 10:44:57 GMT", 
            "last_transition_time": "Wed, 11 Oct 2017 05:43:51 GMT", 
            "message": "kubelet has no disk pressure", 
            "reason": "KubeletHasNoDiskPressure", 
            "status": "False", 
            "type": "DiskPressure"
          }, 
          {
            "last_heartbeat_time": "Mon, 16 Oct 2017 10:44:57 GMT", 
            "last_transition_time": "Wed, 11 Oct 2017 05:43:51 GMT", 
            "message": "kubelet is posting ready status. AppArmor enabled", 
            "reason": "KubeletReady", 
            "status": "True", 
            "type": "Ready"
          }
        ], 
        "daemon_endpoints": {
          "kubelet_endpoint": {
            "port": 10250
          }
        }, 
        "images": [
          {
            "names": [
              "tomkukral/flask-app-demo@sha256:a18ba8e7e8fe3e476c9b9ee22166c8596d61b3e82c4f926c2d7ac2e2c35e9614", 
              "tomkukral/flask-app-demo:latest"
            ], 
            "size_bytes": 701272422
          }, 
          {
            "names": [
              "gcr.io/google_containers/hyperkube-amd64@sha256:c71e7c774880af498c6d8cdc30cbac64ea4d802011c963572c1de29c34d6a5e8", 
              "gcr.io/google_containers/hyperkube-amd64:v1.6.4"
            ], 
            "size_bytes": 586086363
          }, 
          {
            "names": [
              "quantlane/telescope@sha256:823cac69fbd626e1bb629476d060fd1de5a242c72c6e1d339c37819b9f5796ab", 
              "quantlane/telescope:devel-20160415"
            ], 
            "size_bytes": 417291909
          }, 
          {
            "names": [
              "mongo@sha256:532a19da83ee0e4e2a2ec6bc4212fc4af26357c040675d5c2629a4e4c4563cef", 
              "mongo:3.2.10"
            ], 
            "size_bytes": 342482932
          }, 
          {
            "names": [
              "calico/node@sha256:edff71e613fa4d3c0ffa565393fe6b9549fd5a4ec04dd8522ac09ac4a4bbe2a9", 
              "calico/node:latest"
            ], 
            "size_bytes": 281643619
          }, 
          {
            "names": [
              "calico/cni@sha256:c86dd7b84548f6cdf80e4b177e7c0688fb849983fbdf4f2ada7f54296f28cd5d", 
              "calico/cni:latest"
            ], 
            "size_bytes": 70883432
          }, 
          {
            "names": [
              "gcr.io/google_containers/k8s-dns-kube-dns-amd64@sha256:1a3fc069de481ae690188f6f1ba4664b5cc7760af37120f70c86505c79eea61d", 
              "gcr.io/google_containers/k8s-dns-kube-dns-amd64:1.14.5"
            ], 
            "size_bytes": 49387411
          }, 
          {
            "names": [
              "calico/ctl@sha256:7b2719d5461ff873c5a212b7a2622c6dfcb61eae81b3ab433d4b97df3af1636c", 
              "calico/ctl:latest"
            ], 
            "size_bytes": 44417275
          }, 
          {
            "names": [
              "gcr.io/google_containers/k8s-dns-sidecar-amd64@sha256:9aab42bf6a2a068b797fe7d91a5d8d915b10dbbc3d6f2b10492848debfba6044", 
              "gcr.io/google_containers/k8s-dns-sidecar-amd64:1.14.5"
            ], 
            "size_bytes": 41819177
          }, 
          {
            "names": [
              "gcr.io/google_containers/k8s-dns-dnsmasq-amd64@sha256:60ef7b261e81df47490155558ec1e8cef3f787c8db9adee4fdd7af351190141e", 
              "gcr.io/google_containers/k8s-dns-dnsmasq-amd64:1.14.5"
            ], 
            "size_bytes": 4324973
          }, 
          {
            "names": [
              "gcr.io/google_containers/pause-amd64@sha256:163ac025575b775d1c0f9bf0bdd0f086883171eb475b5068e7defa4ca9e76516", 
              "gcr.io/google_containers/pause-amd64:3.0"
            ], 
            "size_bytes": 746888
          }
        ], 
        "node_info": {
          "architecture": "amd64", 
          "boot_id": "7e24e8b0-d53c-4f56-8f12-0e6903a58671", 
          "container_runtime_version": "docker://1.12.6", 
          "kernel_version": "4.4.0-1038-aws", 
          "kube_proxy_version": "v1.6.4", 
          "kubelet_version": "v1.6.4", 
          "machine_id": "48ff44e4268e4cb289ca8fcae20c2387", 
          "operating_system": "linux", 
          "os_image": "Ubuntu 16.04.2 LTS", 
          "system_uuid": "EC20B458-6C28-28E7-AFF8-B07E0FBD438A"
        }, 
        "phase": null, 
        "volumes_attached": null, 
        "volumes_in_use": null
      }
    }, 
    "40d6cba5-ad8e-11e7-994c-0a1c759dde8c": {
      "api_version": null, 
      "kind": "Node", 
      "metadata": {
        "annotations": {
          "node.alpha.kubernetes.io/ttl": "0", 
          "volumes.kubernetes.io/controller-managed-attach-detach": "true"
        }, 
        "cluster_name": null, 
        "creation_timestamp": "Tue, 10 Oct 2017 07:40:14 GMT", 
        "deletion_grace_period_seconds": null, 
        "deletion_timestamp": null, 
        "finalizers": null, 
        "generate_name": null, 
        "generation": null, 
        "initializers": null, 
        "labels": {
          "beta.kubernetes.io/arch": "amd64", 
          "beta.kubernetes.io/instance-type": "t2.medium", 
          "beta.kubernetes.io/os": "linux", 
          "failure-domain.beta.kubernetes.io/region": "us-west-2", 
          "failure-domain.beta.kubernetes.io/zone": "us-west-2c", 
          "kubernetes.io/hostname": "ip-10-0-10-95", 
          "node-role.kubernetes.io/node": "true"
        }, 
        "name": "ip-10-0-10-95.us-west-2.compute.internal", 
        "namespace": null, 
        "owner_references": null, 
        "resource_version": "2955347", 
        "self_link": "/api/v1/nodesip-10-0-10-95.us-west-2.compute.internal", 
        "uid": "40d6cba5-ad8e-11e7-994c-0a1c759dde8c"
      }, 
      "spec": {
        "external_id": "i-0f0aeb112d2c16f01", 
        "pod_cidr": null, 
        "provider_id": "aws:///us-west-2c/i-0f0aeb112d2c16f01", 
        "taints": null, 
        "unschedulable": null
      }, 
      "status": {
        "addresses": [
          {
            "address": "10.0.10.95", 
            "type": "InternalIP"
          }, 
          {
            "address": "10.0.10.95", 
            "type": "LegacyHostIP"
          }, 
          {
            "address": "35.162.233.125", 
            "type": "ExternalIP"
          }, 
          {
            "address": "ip-10-0-10-95.us-west-2.compute.internal", 
            "type": "InternalDNS"
          }, 
          {
            "address": "ec2-35-162-233-125.us-west-2.compute.amazonaws.com", 
            "type": "ExternalDNS"
          }, 
          {
            "address": "ip-10-0-10-95", 
            "type": "Hostname"
          }
        ], 
        "allocatable": {
          "cpu": "2", 
          "memory": "3942800Ki", 
          "pods": "110"
        }, 
        "capacity": {
          "cpu": "2", 
          "memory": "4045200Ki", 
          "pods": "110"
        }, 
        "conditions": [
          {
            "last_heartbeat_time": "Mon, 16 Oct 2017 10:44:56 GMT", 
            "last_transition_time": "Wed, 11 Oct 2017 08:25:48 GMT", 
            "message": "kubelet has sufficient disk space available", 
            "reason": "KubeletHasSufficientDisk", 
            "status": "False", 
            "type": "OutOfDisk"
          }, 
          {
            "last_heartbeat_time": "Mon, 16 Oct 2017 10:44:56 GMT", 
            "last_transition_time": "Wed, 11 Oct 2017 08:25:48 GMT", 
            "message": "kubelet has sufficient memory available", 
            "reason": "KubeletHasSufficientMemory", 
            "status": "False", 
            "type": "MemoryPressure"
          }, 
          {
            "last_heartbeat_time": "Mon, 16 Oct 2017 10:44:56 GMT", 
            "last_transition_time": "Wed, 11 Oct 2017 08:25:48 GMT", 
            "message": "kubelet has no disk pressure", 
            "reason": "KubeletHasNoDiskPressure", 
            "status": "False", 
            "type": "DiskPressure"
          }, 
          {
            "last_heartbeat_time": "Mon, 16 Oct 2017 10:44:56 GMT", 
            "last_transition_time": "Wed, 11 Oct 2017 08:25:48 GMT", 
            "message": "kubelet is posting ready status. AppArmor enabled", 
            "reason": "KubeletReady", 
            "status": "True", 
            "type": "Ready"
          }
        ], 
        "daemon_endpoints": {
          "kubelet_endpoint": {
            "port": 10250
          }
        }, 
        "images": [
          {
            "names": [
              "tomkukral/flask-app-demo@sha256:a18ba8e7e8fe3e476c9b9ee22166c8596d61b3e82c4f926c2d7ac2e2c35e9614", 
              "tomkukral/flask-app-demo:latest"
            ], 
            "size_bytes": 701272422
          }, 
          {
            "names": [
              "gcr.io/google_containers/hyperkube-amd64@sha256:c71e7c774880af498c6d8cdc30cbac64ea4d802011c963572c1de29c34d6a5e8", 
              "gcr.io/google_containers/hyperkube-amd64:v1.6.4"
            ], 
            "size_bytes": 586086363
          }, 
          {
            "names": [
              "quantlane/telescope@sha256:823cac69fbd626e1bb629476d060fd1de5a242c72c6e1d339c37819b9f5796ab", 
              "quantlane/telescope:devel-20160415"
            ], 
            "size_bytes": 417291909
          }, 
          {
            "names": [
              "mongo@sha256:532a19da83ee0e4e2a2ec6bc4212fc4af26357c040675d5c2629a4e4c4563cef", 
              "mongo:3.2.10"
            ], 
            "size_bytes": 342482932
          }, 
          {
            "names": [
              "calico/node@sha256:edff71e613fa4d3c0ffa565393fe6b9549fd5a4ec04dd8522ac09ac4a4bbe2a9", 
              "calico/node:latest"
            ], 
            "size_bytes": 281643619
          }, 
          {
            "names": [
              "redis@sha256:07e7b6cb753f8d06a894e22af30f94e04844461ab6cb002c688841873e5e5116", 
              "redis:latest"
            ], 
            "size_bytes": 106634695
          }, 
          {
            "names": [
              "calico/cni@sha256:c86dd7b84548f6cdf80e4b177e7c0688fb849983fbdf4f2ada7f54296f28cd5d", 
              "calico/cni:latest"
            ], 
            "size_bytes": 70883432
          }, 
          {
            "names": [
              "gcr.io/google_containers/k8s-dns-kube-dns-amd64@sha256:1a3fc069de481ae690188f6f1ba4664b5cc7760af37120f70c86505c79eea61d", 
              "gcr.io/google_containers/k8s-dns-kube-dns-amd64:1.14.5"
            ], 
            "size_bytes": 49387411
          }, 
          {
            "names": [
              "calico/ctl@sha256:7b2719d5461ff873c5a212b7a2622c6dfcb61eae81b3ab433d4b97df3af1636c", 
              "calico/ctl:latest"
            ], 
            "size_bytes": 44417275
          }, 
          {
            "names": [
              "gcr.io/google_containers/k8s-dns-sidecar-amd64@sha256:9aab42bf6a2a068b797fe7d91a5d8d915b10dbbc3d6f2b10492848debfba6044", 
              "gcr.io/google_containers/k8s-dns-sidecar-amd64:1.14.5"
            ], 
            "size_bytes": 41819177
          }, 
          {
            "names": [
              "gcr.io/google_containers/k8s-dns-dnsmasq-amd64@sha256:60ef7b261e81df47490155558ec1e8cef3f787c8db9adee4fdd7af351190141e", 
              "gcr.io/google_containers/k8s-dns-dnsmasq-amd64:1.14.5"
            ], 
            "size_bytes": 4324973
          }, 
          {
            "names": [
              "gcr.io/google_containers/pause-amd64@sha256:163ac025575b775d1c0f9bf0bdd0f086883171eb475b5068e7defa4ca9e76516", 
              "gcr.io/google_containers/pause-amd64:3.0"
            ], 
            "size_bytes": 746888
          }
        ], 
        "node_info": {
          "architecture": "amd64", 
          "boot_id": "77b44b0e-f921-46c1-96f2-8d0c4a5439f6", 
          "container_runtime_version": "docker://1.12.6", 
          "kernel_version": "4.4.0-1038-aws", 
          "kube_proxy_version": "v1.6.4", 
          "kubelet_version": "v1.6.4", 
          "machine_id": "208fefc386254fe08b8c8b3cb340de14", 
          "operating_system": "linux", 
          "os_image": "Ubuntu 16.04.2 LTS", 
          "system_uuid": "EC2E1257-F677-1580-1E44-55B38B01728E"
        }, 
        "phase": null, 
        "volumes_attached": [
          {
            "device_path": "/dev/xvdbb", 
            "name": "kubernetes.io/aws-ebs/aws://us-west-2c/vol-0c12d20e20c2a7428"
          }
        ], 
        "volumes_in_use": [
          "kubernetes.io/aws-ebs/aws://us-west-2c/vol-0c12d20e20c2a7428"
        ]
      }
    }, 
    "7ea76904-ad8c-11e7-994c-0a1c759dde8c": {
      "api_version": null, 
      "kind": "Node", 
      "metadata": {
        "annotations": {
          "node.alpha.kubernetes.io/ttl": "0", 
          "volumes.kubernetes.io/controller-managed-attach-detach": "true"
        }, 
        "cluster_name": null, 
        "creation_timestamp": "Tue, 10 Oct 2017 07:27:39 GMT", 
        "deletion_grace_period_seconds": null, 
        "deletion_timestamp": null, 
        "finalizers": null, 
        "generate_name": null, 
        "generation": null, 
        "initializers": null, 
        "labels": {
          "beta.kubernetes.io/arch": "amd64", 
          "beta.kubernetes.io/instance-type": "t2.medium", 
          "beta.kubernetes.io/os": "linux", 
          "failure-domain.beta.kubernetes.io/region": "us-west-2", 
          "failure-domain.beta.kubernetes.io/zone": "us-west-2c", 
          "kubernetes.io/hostname": "ctl01", 
          "node-role.kubernetes.io/master": "true"
        }, 
        "name": "ip-10-0-10-10.us-west-2.compute.internal", 
        "namespace": null, 
        "owner_references": null, 
        "resource_version": "2955352", 
        "self_link": "/api/v1/nodesip-10-0-10-10.us-west-2.compute.internal", 
        "uid": "7ea76904-ad8c-11e7-994c-0a1c759dde8c"
      }, 
      "spec": {
        "external_id": "i-0f4c6e92bfaac05f4", 
        "pod_cidr": null, 
        "provider_id": "aws:///us-west-2c/i-0f4c6e92bfaac05f4", 
        "taints": [
          {
            "effect": "NoSchedule", 
            "key": "node-role.kubernetes.io/master", 
            "time_added": null, 
            "value": null
          }
        ], 
        "unschedulable": null
      }, 
      "status": {
        "addresses": [
          {
            "address": "10.0.10.10", 
            "type": "InternalIP"
          }, 
          {
            "address": "10.0.10.10", 
            "type": "LegacyHostIP"
          }, 
          {
            "address": "52.88.184.32", 
            "type": "ExternalIP"
          }, 
          {
            "address": "ec2-52-88-184-32.us-west-2.compute.amazonaws.com", 
            "type": "ExternalDNS"
          }, 
          {
            "address": "ctl01", 
            "type": "Hostname"
          }, 
          {
            "address": "ip-10-0-10-10.us-west-2.compute.internal", 
            "type": "InternalDNS"
          }
        ], 
        "allocatable": {
          "cpu": "2", 
          "memory": "3942800Ki", 
          "pods": "110"
        }, 
        "capacity": {
          "cpu": "2", 
          "memory": "4045200Ki", 
          "pods": "110"
        }, 
        "conditions": [
          {
            "last_heartbeat_time": "Mon, 16 Oct 2017 10:44:58 GMT", 
            "last_transition_time": "Wed, 11 Oct 2017 10:22:52 GMT", 
            "message": "kubelet has sufficient disk space available", 
            "reason": "KubeletHasSufficientDisk", 
            "status": "False", 
            "type": "OutOfDisk"
          }, 
          {
            "last_heartbeat_time": "Mon, 16 Oct 2017 10:44:58 GMT", 
            "last_transition_time": "Wed, 11 Oct 2017 10:22:52 GMT", 
            "message": "kubelet has sufficient memory available", 
            "reason": "KubeletHasSufficientMemory", 
            "status": "False", 
            "type": "MemoryPressure"
          }, 
          {
            "last_heartbeat_time": "Mon, 16 Oct 2017 10:44:58 GMT", 
            "last_transition_time": "Wed, 11 Oct 2017 10:22:52 GMT", 
            "message": "kubelet has no disk pressure", 
            "reason": "KubeletHasNoDiskPressure", 
            "status": "False", 
            "type": "DiskPressure"
          }, 
          {
            "last_heartbeat_time": "Mon, 16 Oct 2017 10:44:58 GMT", 
            "last_transition_time": "Wed, 11 Oct 2017 10:23:02 GMT", 
            "message": "kubelet is posting ready status. AppArmor enabled", 
            "reason": "KubeletReady", 
            "status": "True", 
            "type": "Ready"
          }
        ], 
        "daemon_endpoints": {
          "kubelet_endpoint": {
            "port": 10250
          }
        }, 
        "images": [
          {
            "names": [
              "gcr.io/google_containers/hyperkube-amd64@sha256:c71e7c774880af498c6d8cdc30cbac64ea4d802011c963572c1de29c34d6a5e8", 
              "gcr.io/google_containers/hyperkube-amd64:v1.6.4"
            ], 
            "size_bytes": 586086363
          }, 
          {
            "names": [
              "calico/node@sha256:edff71e613fa4d3c0ffa565393fe6b9549fd5a4ec04dd8522ac09ac4a4bbe2a9", 
              "calico/node:latest"
            ], 
            "size_bytes": 281643619
          }, 
          {
            "names": [
              "gcr.io/google_containers/kubernetes-dashboard-amd64@sha256:46a09eb9c611e625e7de3fcf325cf78e629d002e57dc80348e9b0638338206b5", 
              "gcr.io/google_containers/kubernetes-dashboard-amd64:v1.5.1"
            ], 
            "size_bytes": 103563297
          }, 
          {
            "names": [
              "calico/cni@sha256:c86dd7b84548f6cdf80e4b177e7c0688fb849983fbdf4f2ada7f54296f28cd5d", 
              "calico/cni:latest"
            ], 
            "size_bytes": 70883432
          }, 
          {
            "names": [
              "gcr.io/google_containers/k8s-dns-kube-dns-amd64@sha256:1a3fc069de481ae690188f6f1ba4664b5cc7760af37120f70c86505c79eea61d", 
              "gcr.io/google_containers/k8s-dns-kube-dns-amd64:1.14.5"
            ], 
            "size_bytes": 49387411
          }, 
          {
            "names": [
              "calico/ctl@sha256:7b2719d5461ff873c5a212b7a2622c6dfcb61eae81b3ab433d4b97df3af1636c", 
              "calico/ctl:latest"
            ], 
            "size_bytes": 44417275
          }, 
          {
            "names": [
              "gcr.io/google_containers/k8s-dns-sidecar-amd64@sha256:9aab42bf6a2a068b797fe7d91a5d8d915b10dbbc3d6f2b10492848debfba6044", 
              "gcr.io/google_containers/k8s-dns-sidecar-amd64:1.14.5"
            ], 
            "size_bytes": 41819177
          }, 
          {
            "names": [
              "quay.io/coreos/etcd@sha256:cd883d7626ee742a8e0302efa6b7eca2e3207bd959e7bbe57339cdd6893304ae", 
              "quay.io/coreos/etcd:latest"
            ], 
            "size_bytes": 35729498
          }, 
          {
            "names": [
              "gcr.io/google_containers/k8s-dns-dnsmasq-amd64@sha256:60ef7b261e81df47490155558ec1e8cef3f787c8db9adee4fdd7af351190141e", 
              "gcr.io/google_containers/k8s-dns-dnsmasq-amd64:1.14.5"
            ], 
            "size_bytes": 4324973
          }, 
          {
            "names": [
              "gcr.io/google_containers/pause-amd64@sha256:163ac025575b775d1c0f9bf0bdd0f086883171eb475b5068e7defa4ca9e76516", 
              "gcr.io/google_containers/pause-amd64:3.0"
            ], 
            "size_bytes": 746888
          }
        ], 
        "node_info": {
          "architecture": "amd64", 
          "boot_id": "88066a91-5570-430e-9881-3cf946bec447", 
          "container_runtime_version": "docker://1.12.6", 
          "kernel_version": "4.4.0-1038-aws", 
          "kube_proxy_version": "v1.6.4", 
          "kubelet_version": "v1.6.4", 
          "machine_id": "8b6a74b0107e4dbf9f91e0b9c6763191", 
          "operating_system": "linux", 
          "os_image": "Ubuntu 16.04.2 LTS", 
          "system_uuid": "EC2D3721-37E4-0C64-3B52-88CBEF69B8EF"
        }, 
        "phase": null, 
        "volumes_attached": null, 
        "volumes_in_use": null
      }
    }, 
    "7ee98cad-ad8c-11e7-91dd-0a573e877b3e": {
      "api_version": null, 
      "kind": "Node", 
      "metadata": {
        "annotations": {
          "node.alpha.kubernetes.io/ttl": "0", 
          "volumes.kubernetes.io/controller-managed-attach-detach": "true"
        }, 
        "cluster_name": null, 
        "creation_timestamp": "Tue, 10 Oct 2017 07:27:39 GMT", 
        "deletion_grace_period_seconds": null, 
        "deletion_timestamp": null, 
        "finalizers": null, 
        "generate_name": null, 
        "generation": null, 
        "initializers": null, 
        "labels": {
          "beta.kubernetes.io/arch": "amd64", 
          "beta.kubernetes.io/instance-type": "t2.small", 
          "beta.kubernetes.io/os": "linux", 
          "failure-domain.beta.kubernetes.io/region": "us-west-2", 
          "failure-domain.beta.kubernetes.io/zone": "us-west-2c", 
          "kubernetes.io/hostname": "ctl03", 
          "node-role.kubernetes.io/master": "true"
        }, 
        "name": "ip-10-0-10-13.us-west-2.compute.internal", 
        "namespace": null, 
        "owner_references": null, 
        "resource_version": "2955395", 
        "self_link": "/api/v1/nodesip-10-0-10-13.us-west-2.compute.internal", 
        "uid": "7ee98cad-ad8c-11e7-91dd-0a573e877b3e"
      }, 
      "spec": {
        "external_id": "i-02a2e132596c479f3", 
        "pod_cidr": null, 
        "provider_id": "aws:///us-west-2c/i-02a2e132596c479f3", 
        "taints": [
          {
            "effect": "NoSchedule", 
            "key": "node-role.kubernetes.io/master", 
            "time_added": null, 
            "value": null
          }
        ], 
        "unschedulable": null
      }, 
      "status": {
        "addresses": [
          {
            "address": "10.0.10.13", 
            "type": "InternalIP"
          }, 
          {
            "address": "10.0.10.13", 
            "type": "LegacyHostIP"
          }, 
          {
            "address": "35.161.221.218", 
            "type": "ExternalIP"
          }, 
          {
            "address": "ip-10-0-10-13.us-west-2.compute.internal", 
            "type": "InternalDNS"
          }, 
          {
            "address": "ec2-35-161-221-218.us-west-2.compute.amazonaws.com", 
            "type": "ExternalDNS"
          }, 
          {
            "address": "ctl03", 
            "type": "Hostname"
          }
        ], 
        "allocatable": {
          "cpu": "1", 
          "memory": "1944440Ki", 
          "pods": "110"
        }, 
        "capacity": {
          "cpu": "1", 
          "memory": "2046840Ki", 
          "pods": "110"
        }, 
        "conditions": [
          {
            "last_heartbeat_time": "Mon, 16 Oct 2017 10:45:01 GMT", 
            "last_transition_time": "Wed, 11 Oct 2017 02:11:35 GMT", 
            "message": "kubelet has sufficient disk space available", 
            "reason": "KubeletHasSufficientDisk", 
            "status": "False", 
            "type": "OutOfDisk"
          }, 
          {
            "last_heartbeat_time": "Mon, 16 Oct 2017 10:45:01 GMT", 
            "last_transition_time": "Wed, 11 Oct 2017 02:11:35 GMT", 
            "message": "kubelet has sufficient memory available", 
            "reason": "KubeletHasSufficientMemory", 
            "status": "False", 
            "type": "MemoryPressure"
          }, 
          {
            "last_heartbeat_time": "Mon, 16 Oct 2017 10:45:01 GMT", 
            "last_transition_time": "Wed, 11 Oct 2017 02:11:35 GMT", 
            "message": "kubelet has no disk pressure", 
            "reason": "KubeletHasNoDiskPressure", 
            "status": "False", 
            "type": "DiskPressure"
          }, 
          {
            "last_heartbeat_time": "Mon, 16 Oct 2017 10:45:01 GMT", 
            "last_transition_time": "Wed, 11 Oct 2017 02:11:35 GMT", 
            "message": "kubelet is posting ready status. AppArmor enabled", 
            "reason": "KubeletReady", 
            "status": "True", 
            "type": "Ready"
          }
        ], 
        "daemon_endpoints": {
          "kubelet_endpoint": {
            "port": 10250
          }
        }, 
        "images": [
          {
            "names": [
              "gcr.io/google_containers/hyperkube-amd64@sha256:c71e7c774880af498c6d8cdc30cbac64ea4d802011c963572c1de29c34d6a5e8", 
              "gcr.io/google_containers/hyperkube-amd64:v1.6.4"
            ], 
            "size_bytes": 586086363
          }, 
          {
            "names": [
              "calico/node@sha256:edff71e613fa4d3c0ffa565393fe6b9549fd5a4ec04dd8522ac09ac4a4bbe2a9", 
              "calico/node:latest"
            ], 
            "size_bytes": 281643619
          }, 
          {
            "names": [
              "calico/cni@sha256:c86dd7b84548f6cdf80e4b177e7c0688fb849983fbdf4f2ada7f54296f28cd5d", 
              "calico/cni:latest"
            ], 
            "size_bytes": 70883432
          }, 
          {
            "names": [
              "gcr.io/google_containers/k8s-dns-kube-dns-amd64@sha256:1a3fc069de481ae690188f6f1ba4664b5cc7760af37120f70c86505c79eea61d", 
              "gcr.io/google_containers/k8s-dns-kube-dns-amd64:1.14.5"
            ], 
            "size_bytes": 49387411
          }, 
          {
            "names": [
              "gcr.io/google_containers/cluster-proportional-autoscaler-amd64@sha256:5a3bdd25a5b0f7f8f285e8ff8f4402cf86ddfdfa537e9f053c77c5f043821f70", 
              "gcr.io/google_containers/cluster-proportional-autoscaler-amd64:1.0.0"
            ], 
            "size_bytes": 48159325
          }, 
          {
            "names": [
              "calico/ctl@sha256:7b2719d5461ff873c5a212b7a2622c6dfcb61eae81b3ab433d4b97df3af1636c", 
              "calico/ctl:latest"
            ], 
            "size_bytes": 44417275
          }, 
          {
            "names": [
              "gcr.io/google_containers/k8s-dns-sidecar-amd64@sha256:9aab42bf6a2a068b797fe7d91a5d8d915b10dbbc3d6f2b10492848debfba6044", 
              "gcr.io/google_containers/k8s-dns-sidecar-amd64:1.14.5"
            ], 
            "size_bytes": 41819177
          }, 
          {
            "names": [
              "quay.io/coreos/etcd@sha256:cd883d7626ee742a8e0302efa6b7eca2e3207bd959e7bbe57339cdd6893304ae", 
              "quay.io/coreos/etcd:latest"
            ], 
            "size_bytes": 35729498
          }, 
          {
            "names": [
              "gcr.io/google_containers/k8s-dns-dnsmasq-amd64@sha256:60ef7b261e81df47490155558ec1e8cef3f787c8db9adee4fdd7af351190141e", 
              "gcr.io/google_containers/k8s-dns-dnsmasq-amd64:1.14.5"
            ], 
            "size_bytes": 4324973
          }, 
          {
            "names": [
              "gcr.io/google_containers/pause-amd64@sha256:163ac025575b775d1c0f9bf0bdd0f086883171eb475b5068e7defa4ca9e76516", 
              "gcr.io/google_containers/pause-amd64:3.0"
            ], 
            "size_bytes": 746888
          }
        ], 
        "node_info": {
          "architecture": "amd64", 
          "boot_id": "024f2965-e7c4-4c63-8a96-3d305b8242b3", 
          "container_runtime_version": "docker://1.12.6", 
          "kernel_version": "4.4.0-1038-aws", 
          "kube_proxy_version": "v1.6.4", 
          "kubelet_version": "v1.6.4", 
          "machine_id": "e00ca4e3553b4a299777cd2795af4fef", 
          "operating_system": "linux", 
          "os_image": "Ubuntu 16.04.2 LTS", 
          "system_uuid": "EC2AAD10-6647-B087-6B63-D14FDDBA4C00"
        }, 
        "phase": null, 
        "volumes_attached": null, 
        "volumes_in_use": null
      }
    }, 
    "7ef24311-ad8c-11e7-994c-0a1c759dde8c": {
      "api_version": null, 
      "kind": "Node", 
      "metadata": {
        "annotations": {
          "node.alpha.kubernetes.io/ttl": "0", 
          "volumes.kubernetes.io/controller-managed-attach-detach": "true"
        }, 
        "cluster_name": null, 
        "creation_timestamp": "Tue, 10 Oct 2017 07:27:39 GMT", 
        "deletion_grace_period_seconds": null, 
        "deletion_timestamp": null, 
        "finalizers": null, 
        "generate_name": null, 
        "generation": null, 
        "initializers": null, 
        "labels": {
          "beta.kubernetes.io/arch": "amd64", 
          "beta.kubernetes.io/instance-type": "t2.small", 
          "beta.kubernetes.io/os": "linux", 
          "failure-domain.beta.kubernetes.io/region": "us-west-2", 
          "failure-domain.beta.kubernetes.io/zone": "us-west-2c", 
          "kubernetes.io/hostname": "ctl02", 
          "node-role.kubernetes.io/master": "true"
        }, 
        "name": "ip-10-0-10-12.us-west-2.compute.internal", 
        "namespace": null, 
        "owner_references": null, 
        "resource_version": "2955351", 
        "self_link": "/api/v1/nodesip-10-0-10-12.us-west-2.compute.internal", 
        "uid": "7ef24311-ad8c-11e7-994c-0a1c759dde8c"
      }, 
      "spec": {
        "external_id": "i-0ea3adf9a61b201e5", 
        "pod_cidr": null, 
        "provider_id": "aws:///us-west-2c/i-0ea3adf9a61b201e5", 
        "taints": [
          {
            "effect": "NoSchedule", 
            "key": "node-role.kubernetes.io/master", 
            "time_added": null, 
            "value": null
          }
        ], 
        "unschedulable": null
      }, 
      "status": {
        "addresses": [
          {
            "address": "10.0.10.12", 
            "type": "InternalIP"
          }, 
          {
            "address": "10.0.10.12", 
            "type": "LegacyHostIP"
          }, 
          {
            "address": "52.27.170.201", 
            "type": "ExternalIP"
          }, 
          {
            "address": "ip-10-0-10-12.us-west-2.compute.internal", 
            "type": "InternalDNS"
          }, 
          {
            "address": "ec2-52-27-170-201.us-west-2.compute.amazonaws.com", 
            "type": "ExternalDNS"
          }, 
          {
            "address": "ctl02", 
            "type": "Hostname"
          }
        ], 
        "allocatable": {
          "cpu": "1", 
          "memory": "1944440Ki", 
          "pods": "110"
        }, 
        "capacity": {
          "cpu": "1", 
          "memory": "2046840Ki", 
          "pods": "110"
        }, 
        "conditions": [
          {
            "last_heartbeat_time": "Mon, 16 Oct 2017 10:44:58 GMT", 
            "last_transition_time": "Fri, 13 Oct 2017 15:07:53 GMT", 
            "message": "kubelet has sufficient disk space available", 
            "reason": "KubeletHasSufficientDisk", 
            "status": "False", 
            "type": "OutOfDisk"
          }, 
          {
            "last_heartbeat_time": "Mon, 16 Oct 2017 10:44:58 GMT", 
            "last_transition_time": "Fri, 13 Oct 2017 15:07:53 GMT", 
            "message": "kubelet has sufficient memory available", 
            "reason": "KubeletHasSufficientMemory", 
            "status": "False", 
            "type": "MemoryPressure"
          }, 
          {
            "last_heartbeat_time": "Mon, 16 Oct 2017 10:44:58 GMT", 
            "last_transition_time": "Fri, 13 Oct 2017 15:07:53 GMT", 
            "message": "kubelet has no disk pressure", 
            "reason": "KubeletHasNoDiskPressure", 
            "status": "False", 
            "type": "DiskPressure"
          }, 
          {
            "last_heartbeat_time": "Mon, 16 Oct 2017 10:44:58 GMT", 
            "last_transition_time": "Fri, 13 Oct 2017 15:07:53 GMT", 
            "message": "kubelet is posting ready status. AppArmor enabled", 
            "reason": "KubeletReady", 
            "status": "True", 
            "type": "Ready"
          }
        ], 
        "daemon_endpoints": {
          "kubelet_endpoint": {
            "port": 10250
          }
        }, 
        "images": [
          {
            "names": [
              "gcr.io/google_containers/hyperkube-amd64@sha256:c71e7c774880af498c6d8cdc30cbac64ea4d802011c963572c1de29c34d6a5e8", 
              "gcr.io/google_containers/hyperkube-amd64:v1.6.4"
            ], 
            "size_bytes": 586086363
          }, 
          {
            "names": [
              "calico/node@sha256:edff71e613fa4d3c0ffa565393fe6b9549fd5a4ec04dd8522ac09ac4a4bbe2a9", 
              "calico/node:latest"
            ], 
            "size_bytes": 281643619
          }, 
          {
            "names": [
              "calico/cni@sha256:c86dd7b84548f6cdf80e4b177e7c0688fb849983fbdf4f2ada7f54296f28cd5d", 
              "calico/cni:latest"
            ], 
            "size_bytes": 70883432
          }, 
          {
            "names": [
              "gcr.io/google_containers/k8s-dns-kube-dns-amd64@sha256:1a3fc069de481ae690188f6f1ba4664b5cc7760af37120f70c86505c79eea61d", 
              "gcr.io/google_containers/k8s-dns-kube-dns-amd64:1.14.5"
            ], 
            "size_bytes": 49387411
          }, 
          {
            "names": [
              "calico/ctl@sha256:7b2719d5461ff873c5a212b7a2622c6dfcb61eae81b3ab433d4b97df3af1636c", 
              "calico/ctl:latest"
            ], 
            "size_bytes": 44417275
          }, 
          {
            "names": [
              "gcr.io/google_containers/k8s-dns-sidecar-amd64@sha256:9aab42bf6a2a068b797fe7d91a5d8d915b10dbbc3d6f2b10492848debfba6044", 
              "gcr.io/google_containers/k8s-dns-sidecar-amd64:1.14.5"
            ], 
            "size_bytes": 41819177
          }, 
          {
            "names": [
              "quay.io/coreos/etcd@sha256:cd883d7626ee742a8e0302efa6b7eca2e3207bd959e7bbe57339cdd6893304ae", 
              "quay.io/coreos/etcd:latest"
            ], 
            "size_bytes": 35729498
          }, 
          {
            "names": [
              "gcr.io/google_containers/k8s-dns-dnsmasq-amd64@sha256:60ef7b261e81df47490155558ec1e8cef3f787c8db9adee4fdd7af351190141e", 
              "gcr.io/google_containers/k8s-dns-dnsmasq-amd64:1.14.5"
            ], 
            "size_bytes": 4324973
          }, 
          {
            "names": [
              "gcr.io/google_containers/pause-amd64@sha256:163ac025575b775d1c0f9bf0bdd0f086883171eb475b5068e7defa4ca9e76516", 
              "gcr.io/google_containers/pause-amd64:3.0"
            ], 
            "size_bytes": 746888
          }
        ], 
        "node_info": {
          "architecture": "amd64", 
          "boot_id": "3b2aee5b-1153-43e8-9676-228a15a1b569", 
          "container_runtime_version": "docker://1.12.6", 
          "kernel_version": "4.4.0-1038-aws", 
          "kube_proxy_version": "v1.6.4", 
          "kubelet_version": "v1.6.4", 
          "machine_id": "65f6923fefd34bbe89ddc0da9b8e6ea2", 
          "operating_system": "linux", 
          "os_image": "Ubuntu 16.04.2 LTS", 
          "system_uuid": "EC21F9EA-86D9-76BB-895C-CDCCE2BAB7A3"
        }, 
        "phase": null, 
        "volumes_attached": null, 
        "volumes_in_use": null
      }
    }, 
    "7ff0aa11-ad8c-11e7-994c-0a1c759dde8c": {
      "api_version": null, 
      "kind": "Pod", 
      "metadata": {
        "annotations": {
          "kubernetes.io/created-by": "{\"kind\":\"SerializedReference\",\"apiVersion\":\"v1\",\"reference\":{\"kind\":\"ReplicaSet\",\"namespace\":\"kube-system\",\"name\":\"kube-dns-autoscaler-3664449161\",\"uid\":\"7f50751d-ad8c-11e7-994c-0a1c759dde8c\",\"apiVersion\":\"extensions\",\"resourceVersion\":\"62\"}}\n"
        }, 
        "cluster_name": null, 
        "creation_timestamp": "Tue, 10 Oct 2017 07:27:41 GMT", 
        "deletion_grace_period_seconds": null, 
        "deletion_timestamp": null, 
        "finalizers": null, 
        "generate_name": "kube-dns-autoscaler-3664449161-", 
        "generation": null, 
        "initializers": null, 
        "labels": {
          "k8s-app": "kube-dns-autoscaler", 
          "pod-template-hash": "3664449161"
        }, 
        "name": "kube-dns-autoscaler-3664449161-171xz", 
        "namespace": "kube-system", 
        "owner_references": [
          {
            "api_version": "extensions/v1beta1", 
            "block_owner_deletion": true, 
            "controller": true, 
            "kind": "ReplicaSet", 
            "name": "kube-dns-autoscaler-3664449161", 
            "uid": "7f50751d-ad8c-11e7-994c-0a1c759dde8c"
          }
        ], 
        "resource_version": "158318", 
        "self_link": "/api/v1/namespaces/kube-system/pods/kube-dns-autoscaler-3664449161-171xz", 
        "uid": "7ff0aa11-ad8c-11e7-994c-0a1c759dde8c"
      }, 
      "spec": {
        "active_deadline_seconds": null, 
        "affinity": null, 
        "automount_service_account_token": null, 
        "containers": [
          {
            "args": null, 
            "command": [
              "/cluster-proportional-autoscaler", 
              "--namespace=kube-system", 
              "--configmap=kube-dns-autoscaler", 
              "--mode=linear", 
              "--target=Deployment/kube-dns", 
              "--default-params={\"linear\":{\"coresPerReplica\":256,\"nodesPerReplica\":10,\"min\":2}}", 
              "--logtostderr=true", 
              "--v=2"
            ], 
            "env": null, 
            "env_from": null, 
            "image": "gcr.io/google_containers/cluster-proportional-autoscaler-amd64:1.0.0", 
            "image_pull_policy": "IfNotPresent", 
            "lifecycle": null, 
            "liveness_probe": null, 
            "name": "autoscaler", 
            "ports": null, 
            "readiness_probe": null, 
            "resources": {
              "limits": null, 
              "requests": {
                "cpu": "20m", 
                "memory": "10Mi"
              }
            }, 
            "security_context": null, 
            "stdin": null, 
            "stdin_once": null, 
            "termination_message_path": "/dev/termination-log", 
            "termination_message_policy": "File", 
            "tty": null, 
            "volume_mounts": [
              {
                "mount_path": "/var/run/secrets/kubernetes.io/serviceaccount", 
                "name": "default-token-6t3vm", 
                "read_only": true, 
                "sub_path": null
              }
            ], 
            "working_dir": null
          }
        ], 
        "dns_policy": "ClusterFirst", 
        "host_aliases": null, 
        "host_ipc": null, 
        "host_network": null, 
        "host_pid": null, 
        "hostname": null, 
        "image_pull_secrets": null, 
        "init_containers": null, 
        "node_name": "ip-10-0-10-13.us-west-2.compute.internal", 
        "node_selector": null, 
        "restart_policy": "Always", 
        "scheduler_name": "default-scheduler", 
        "security_context": {
          "fs_group": null, 
          "run_as_non_root": null, 
          "run_as_user": null, 
          "se_linux_options": null, 
          "supplemental_groups": null
        }, 
        "service_account": "default", 
        "service_account_name": "default", 
        "subdomain": null, 
        "termination_grace_period_seconds": 30, 
        "tolerations": [
          {
            "effect": "NoSchedule", 
            "key": "node-role.kubernetes.io/master", 
            "operator": null, 
            "toleration_seconds": null, 
            "value": null
          }
        ], 
        "volumes": [
          {
            "aws_elastic_block_store": null, 
            "azure_disk": null, 
            "azure_file": null, 
            "cephfs": null, 
            "cinder": null, 
            "config_map": null, 
            "downward_api": null, 
            "empty_dir": null, 
            "fc": null, 
            "flex_volume": null, 
            "flocker": null, 
            "gce_persistent_disk": null, 
            "git_repo": null, 
            "glusterfs": null, 
            "host_path": null, 
            "iscsi": null, 
            "name": "default-token-6t3vm", 
            "nfs": null, 
            "persistent_volume_claim": null, 
            "photon_persistent_disk": null, 
            "portworx_volume": null, 
            "projected": null, 
            "quobyte": null, 
            "rbd": null, 
            "scale_io": null, 
            "secret": {
              "default_mode": 420, 
              "items": null, 
              "optional": null, 
              "secret_name": "default-token-6t3vm"
            }, 
            "storageos": null, 
            "vsphere_volume": null
          }
        ]
      }, 
      "status": {
        "conditions": [
          {
            "last_probe_time": null, 
            "last_transition_time": "Tue, 10 Oct 2017 07:27:41 GMT", 
            "message": null, 
            "reason": null, 
            "status": "True", 
            "type": "Initialized"
          }, 
          {
            "last_probe_time": null, 
            "last_transition_time": "Wed, 11 Oct 2017 10:21:45 GMT", 
            "message": null, 
            "reason": null, 
            "status": "True", 
            "type": "Ready"
          }, 
          {
            "last_probe_time": null, 
            "last_transition_time": "Tue, 10 Oct 2017 07:27:41 GMT", 
            "message": null, 
            "reason": null, 
            "status": "True", 
            "type": "PodScheduled"
          }
        ], 
        "container_statuses": [
          {
            "container_id": "docker://351a1c35e716b127b521e5f6794e625d8b6760baeac55045ea44b6c14adaff51", 
            "image": "gcr.io/google_containers/cluster-proportional-autoscaler-amd64:1.0.0", 
            "image_id": "docker-pullable://gcr.io/google_containers/cluster-proportional-autoscaler-amd64@sha256:5a3bdd25a5b0f7f8f285e8ff8f4402cf86ddfdfa537e9f053c77c5f043821f70", 
            "last_state": {
              "running": null, 
              "terminated": {
                "container_id": "docker://43be90a26bed5a2a9be8d84012defe7fa0af65e6305f3b18ddd887b072e9fe25", 
                "exit_code": 0, 
                "finished_at": "Wed, 11 Oct 2017 10:20:11 GMT", 
                "message": null, 
                "reason": "Completed", 
                "signal": null, 
                "started_at": null
              }, 
              "waiting": null
            }, 
            "name": "autoscaler", 
            "ready": true, 
            "restart_count": 1, 
            "state": {
              "running": {
                "started_at": "Wed, 11 Oct 2017 10:21:44 GMT"
              }, 
              "terminated": null, 
              "waiting": null
            }
          }
        ], 
        "host_ip": "10.0.10.13", 
        "init_container_statuses": null, 
        "message": null, 
        "phase": "Running", 
        "pod_ip": "10.0.213.13", 
        "qos_class": "Burstable", 
        "reason": null, 
        "start_time": "Tue, 10 Oct 2017 07:27:41 GMT"
      }
    }, 
    "7ff2bb48-ad8c-11e7-994c-0a1c759dde8c": {
      "api_version": null, 
      "kind": "Pod", 
      "metadata": {
        "annotations": {
          "kubernetes.io/created-by": "{\"kind\":\"SerializedReference\",\"apiVersion\":\"v1\",\"reference\":{\"kind\":\"ReplicaSet\",\"namespace\":\"kube-system\",\"name\":\"kubernetes-dashboard-1839600786\",\"uid\":\"7f505816-ad8c-11e7-994c-0a1c759dde8c\",\"apiVersion\":\"extensions\",\"resourceVersion\":\"60\"}}\n", 
          "scheduler.alpha.kubernetes.io/critical-pod": "", 
          "scheduler.alpha.kubernetes.io/tolerations": "[{\"key\":\"CriticalAddonsOnly\", \"operator\":\"Exists\"}]"
        }, 
        "cluster_name": null, 
        "creation_timestamp": "Tue, 10 Oct 2017 07:27:41 GMT", 
        "deletion_grace_period_seconds": null, 
        "deletion_timestamp": null, 
        "finalizers": null, 
        "generate_name": "kubernetes-dashboard-1839600786-", 
        "generation": null, 
        "initializers": null, 
        "labels": {
          "k8s-app": "kubernetes-dashboard", 
          "pod-template-hash": "1839600786"
        }, 
        "name": "kubernetes-dashboard-1839600786-k0gbv", 
        "namespace": "kube-system", 
        "owner_references": [
          {
            "api_version": "extensions/v1beta1", 
            "block_owner_deletion": true, 
            "controller": true, 
            "kind": "ReplicaSet", 
            "name": "kubernetes-dashboard-1839600786", 
            "uid": "7f505816-ad8c-11e7-994c-0a1c759dde8c"
          }
        ], 
        "resource_version": "158979", 
        "self_link": "/api/v1/namespaces/kube-system/pods/kubernetes-dashboard-1839600786-k0gbv", 
        "uid": "7ff2bb48-ad8c-11e7-994c-0a1c759dde8c"
      }, 
      "spec": {
        "active_deadline_seconds": null, 
        "affinity": null, 
        "automount_service_account_token": null, 
        "containers": [
          {
            "args": null, 
            "command": null, 
            "env": null, 
            "env_from": null, 
            "image": "gcr.io/google_containers/kubernetes-dashboard-amd64:v1.5.1", 
            "image_pull_policy": "IfNotPresent", 
            "lifecycle": null, 
            "liveness_probe": {
              "_exec": null, 
              "failure_threshold": 3, 
              "http_get": {
                "host": null, 
                "http_headers": null, 
                "path": "/", 
                "port": "9090", 
                "scheme": "HTTP"
              }, 
              "initial_delay_seconds": 30, 
              "period_seconds": 10, 
              "success_threshold": 1, 
              "tcp_socket": null, 
              "timeout_seconds": 30
            }, 
            "name": "kubernetes-dashboard", 
            "ports": [
              {
                "container_port": 9090, 
                "host_ip": null, 
                "host_port": null, 
                "name": null, 
                "protocol": "TCP"
              }
            ], 
            "readiness_probe": null, 
            "resources": {
              "limits": {
                "cpu": "100m", 
                "memory": "50Mi"
              }, 
              "requests": {
                "cpu": "100m", 
                "memory": "50Mi"
              }
            }, 
            "security_context": null, 
            "stdin": null, 
            "stdin_once": null, 
            "termination_message_path": "/dev/termination-log", 
            "termination_message_policy": "File", 
            "tty": null, 
            "volume_mounts": [
              {
                "mount_path": "/var/run/secrets/kubernetes.io/serviceaccount", 
                "name": "default-token-6t3vm", 
                "read_only": true, 
                "sub_path": null
              }
            ], 
            "working_dir": null
          }
        ], 
        "dns_policy": "ClusterFirst", 
        "host_aliases": null, 
        "host_ipc": null, 
        "host_network": null, 
        "host_pid": null, 
        "hostname": null, 
        "image_pull_secrets": null, 
        "init_containers": null, 
        "node_name": "ip-10-0-10-10.us-west-2.compute.internal", 
        "node_selector": null, 
        "restart_policy": "Always", 
        "scheduler_name": "default-scheduler", 
        "security_context": {
          "fs_group": null, 
          "run_as_non_root": null, 
          "run_as_user": null, 
          "se_linux_options": null, 
          "supplemental_groups": null
        }, 
        "service_account": "default", 
        "service_account_name": "default", 
        "subdomain": null, 
        "termination_grace_period_seconds": 30, 
        "tolerations": [
          {
            "effect": "NoSchedule", 
            "key": "node-role.kubernetes.io/master", 
            "operator": null, 
            "toleration_seconds": null, 
            "value": null
          }
        ], 
        "volumes": [
          {
            "aws_elastic_block_store": null, 
            "azure_disk": null, 
            "azure_file": null, 
            "cephfs": null, 
            "cinder": null, 
            "config_map": null, 
            "downward_api": null, 
            "empty_dir": null, 
            "fc": null, 
            "flex_volume": null, 
            "flocker": null, 
            "gce_persistent_disk": null, 
            "git_repo": null, 
            "glusterfs": null, 
            "host_path": null, 
            "iscsi": null, 
            "name": "default-token-6t3vm", 
            "nfs": null, 
            "persistent_volume_claim": null, 
            "photon_persistent_disk": null, 
            "portworx_volume": null, 
            "projected": null, 
            "quobyte": null, 
            "rbd": null, 
            "scale_io": null, 
            "secret": {
              "default_mode": 420, 
              "items": null, 
              "optional": null, 
              "secret_name": "default-token-6t3vm"
            }, 
            "storageos": null, 
            "vsphere_volume": null
          }
        ]
      }, 
      "status": {
        "conditions": [
          {
            "last_probe_time": null, 
            "last_transition_time": "Tue, 10 Oct 2017 07:27:41 GMT", 
            "message": null, 
            "reason": null, 
            "status": "True", 
            "type": "Initialized"
          }, 
          {
            "last_probe_time": null, 
            "last_transition_time": "Wed, 11 Oct 2017 10:23:21 GMT", 
            "message": null, 
            "reason": null, 
            "status": "True", 
            "type": "Ready"
          }, 
          {
            "last_probe_time": null, 
            "last_transition_time": "Tue, 10 Oct 2017 07:27:41 GMT", 
            "message": null, 
            "reason": null, 
            "status": "True", 
            "type": "PodScheduled"
          }
        ], 
        "container_statuses": [
          {
            "container_id": "docker://8bed803a4b9aa304568d42a7f2dc361bf75583f4197d38162aab66ae9eae3678", 
            "image": "gcr.io/google_containers/kubernetes-dashboard-amd64:v1.5.1", 
            "image_id": "docker-pullable://gcr.io/google_containers/kubernetes-dashboard-amd64@sha256:46a09eb9c611e625e7de3fcf325cf78e629d002e57dc80348e9b0638338206b5", 
            "last_state": {
              "running": null, 
              "terminated": {
                "container_id": "docker://ff5424646d30c11b980afce2a30f774c453eac826d517b6ecba87cd5817a4a7d", 
                "exit_code": 0, 
                "finished_at": "Wed, 11 Oct 2017 10:20:54 GMT", 
                "message": null, 
                "reason": "Completed", 
                "signal": null, 
                "started_at": null
              }, 
              "waiting": null
            }, 
            "name": "kubernetes-dashboard", 
            "ready": true, 
            "restart_count": 118, 
            "state": {
              "running": {
                "started_at": "Wed, 11 Oct 2017 10:23:20 GMT"
              }, 
              "terminated": null, 
              "waiting": null
            }
          }
        ], 
        "host_ip": "10.0.10.10", 
        "init_container_statuses": null, 
        "message": null, 
        "phase": "Running", 
        "pod_ip": "10.0.194.183", 
        "qos_class": "Guaranteed", 
        "reason": null, 
        "start_time": "Tue, 10 Oct 2017 07:27:41 GMT"
      }
    }, 
    "bc0949cc-adad-11e7-994c-0a1c759dde8c": {
      "api_version": null, 
      "kind": "Service", 
      "metadata": {
        "annotations": null, 
        "cluster_name": null, 
        "creation_timestamp": "Tue, 10 Oct 2017 11:25:35 GMT", 
        "deletion_grace_period_seconds": null, 
        "deletion_timestamp": null, 
        "finalizers": null, 
        "generate_name": null, 
        "generation": null, 
        "initializers": null, 
        "labels": null, 
        "name": "mongodb", 
        "namespace": "default", 
        "owner_references": null, 
        "resource_version": "25481", 
        "self_link": "/api/v1/namespaces/default/services/mongodb", 
        "uid": "bc0949cc-adad-11e7-994c-0a1c759dde8c"
      }, 
      "spec": {
        "cluster_ip": "10.254.231.137", 
        "external_i_ps": null, 
        "external_name": null, 
        "external_traffic_policy": null, 
        "health_check_node_port": null, 
        "load_balancer_ip": null, 
        "load_balancer_source_ranges": null, 
        "ports": [
          {
            "name": "mongodb", 
            "node_port": 31281, 
            "port": 27017, 
            "protocol": "TCP", 
            "target_port": "mongodb"
          }, 
          {
            "name": "telescope", 
            "node_port": 2280, 
            "port": 2280, 
            "protocol": "TCP", 
            "target_port": "http"
          }
        ], 
        "selector": {
          "app": "mongodb"
        }, 
        "session_affinity": "None", 
        "type": "NodePort"
      }, 
      "status": {
        "load_balancer": {
          "ingress": null
        }
      }
    }, 
    "bff727b4-adf4-11e7-9340-0a573e877b3e": {
      "api_version": null, 
      "kind": "Service", 
      "metadata": {
        "annotations": {
          "kubectl.kubernetes.io/last-applied-configuration": "{\"apiVersion\":\"v1\",\"kind\":\"Service\",\"metadata\":{\"annotations\":{},\"name\":\"flask\",\"namespace\":\"default\"},\"spec\":{\"ports\":[{\"name\":\"http\",\"nodePort\":null,\"port\":80,\"protocol\":\"TCP\",\"targetPort\":5000}],\"selector\":{\"app\":\"flask\"},\"type\":\"LoadBalancer\"}}\n"
        }, 
        "cluster_name": null, 
        "creation_timestamp": "Tue, 10 Oct 2017 19:53:56 GMT", 
        "deletion_grace_period_seconds": null, 
        "deletion_timestamp": null, 
        "finalizers": null, 
        "generate_name": null, 
        "generation": null, 
        "initializers": null, 
        "labels": null, 
        "name": "flask", 
        "namespace": "default", 
        "owner_references": null, 
        "resource_version": "90612", 
        "self_link": "/api/v1/namespaces/default/services/flask", 
        "uid": "bff727b4-adf4-11e7-9340-0a573e877b3e"
      }, 
      "spec": {
        "cluster_ip": "10.254.93.207", 
        "external_i_ps": null, 
        "external_name": null, 
        "external_traffic_policy": null, 
        "health_check_node_port": null, 
        "load_balancer_ip": null, 
        "load_balancer_source_ranges": null, 
        "ports": [
          {
            "name": "http", 
            "node_port": 3715, 
            "port": 80, 
            "protocol": "TCP", 
            "target_port": "5000"
          }
        ], 
        "selector": {
          "app": "flask"
        }, 
        "session_affinity": "None", 
        "type": "LoadBalancer"
      }, 
      "status": {
        "load_balancer": {
          "ingress": [
            {
              "hostname": "abff727b4adf411e793400a573e877b3-1499223038.us-west-2.elb.amazonaws.com", 
              "ip": null
            }
          ]
        }
      }
    }, 
    "c2997356-adf4-11e7-9340-0a573e877b3e": {
      "api_version": null, 
      "kind": "Service", 
      "metadata": {
        "annotations": {
          "kubectl.kubernetes.io/last-applied-configuration": "{\"apiVersion\":\"v1\",\"kind\":\"Service\",\"metadata\":{\"annotations\":{},\"name\":\"redis\",\"namespace\":\"default\"},\"spec\":{\"ports\":[{\"port\":6379,\"protocol\":\"TCP\"}],\"selector\":{\"app\":\"redis\"},\"type\":\"ClusterIP\"}}\n"
        }, 
        "cluster_name": null, 
        "creation_timestamp": "Tue, 10 Oct 2017 19:54:00 GMT", 
        "deletion_grace_period_seconds": null, 
        "deletion_timestamp": null, 
        "finalizers": null, 
        "generate_name": null, 
        "generation": null, 
        "initializers": null, 
        "labels": null, 
        "name": "redis", 
        "namespace": "default", 
        "owner_references": null, 
        "resource_version": "90619", 
        "self_link": "/api/v1/namespaces/default/services/redis", 
        "uid": "c2997356-adf4-11e7-9340-0a573e877b3e"
      }, 
      "spec": {
        "cluster_ip": "10.254.24.150", 
        "external_i_ps": null, 
        "external_name": null, 
        "external_traffic_policy": null, 
        "health_check_node_port": null, 
        "load_balancer_ip": null, 
        "load_balancer_source_ranges": null, 
        "ports": [
          {
            "name": null, 
            "node_port": null, 
            "port": 6379, 
            "protocol": "TCP", 
            "target_port": "6379"
          }
        ], 
        "selector": {
          "app": "redis"
        }, 
        "session_affinity": "None", 
        "type": "ClusterIP"
      }, 
      "status": {
        "load_balancer": {
          "ingress": null
        }
      }
    }, 
    "ca8d4fa6-b25e-11e7-9e5e-0a4bee56cee8": {
      "api_version": null, 
      "kind": "Pod", 
      "metadata": {
        "annotations": {
          "kubernetes.io/created-by": "{\"kind\":\"SerializedReference\",\"apiVersion\":\"v1\",\"reference\":{\"kind\":\"ReplicaSet\",\"namespace\":\"kube-system\",\"name\":\"kube-dns-2094712589\",\"uid\":\"c5740565-adae-11e7-994c-0a1c759dde8c\",\"apiVersion\":\"extensions\",\"resourceVersion\":\"2954798\"}}\n", 
          "scheduler.alpha.kubernetes.io/critical-pod": "", 
          "scheduler.alpha.kubernetes.io/tolerations": "[{\"key\":\"CriticalAddonsOnly\", \"operator\":\"Exists\"}]"
        }, 
        "cluster_name": null, 
        "creation_timestamp": "Mon, 16 Oct 2017 10:43:05 GMT", 
        "deletion_grace_period_seconds": null, 
        "deletion_timestamp": null, 
        "finalizers": null, 
        "generate_name": "kube-dns-2094712589-", 
        "generation": null, 
        "initializers": null, 
        "labels": {
          "k8s-app": "kube-dns", 
          "pod-template-hash": "2094712589"
        }, 
        "name": "kube-dns-2094712589-wthnc", 
        "namespace": "kube-system", 
        "owner_references": [
          {
            "api_version": "extensions/v1beta1", 
            "block_owner_deletion": true, 
            "controller": true, 
            "kind": "ReplicaSet", 
            "name": "kube-dns-2094712589", 
            "uid": "c5740565-adae-11e7-994c-0a1c759dde8c"
          }
        ], 
        "resource_version": "2954902", 
        "self_link": "/api/v1/namespaces/kube-system/pods/kube-dns-2094712589-wthnc", 
        "uid": "ca8d4fa6-b25e-11e7-9e5e-0a4bee56cee8"
      }, 
      "spec": {
        "active_deadline_seconds": null, 
        "affinity": null, 
        "automount_service_account_token": null, 
        "containers": [
          {
            "args": [
              "--domain=us-west-2.compute.internal.", 
              "--dns-port=10053", 
              "--config-map=kube-dns", 
              "-v=2"
            ], 
            "command": null, 
            "env": [
              {
                "name": "PROMETHEUS_PORT", 
                "value": "10055", 
                "value_from": null
              }
            ], 
            "env_from": null, 
            "image": "gcr.io/google_containers/k8s-dns-kube-dns-amd64:1.14.5", 
            "image_pull_policy": "IfNotPresent", 
            "lifecycle": null, 
            "liveness_probe": {
              "_exec": null, 
              "failure_threshold": 5, 
              "http_get": {
                "host": null, 
                "http_headers": null, 
                "path": "/healthcheck/kubedns", 
                "port": "10054", 
                "scheme": "HTTP"
              }, 
              "initial_delay_seconds": 60, 
              "period_seconds": 10, 
              "success_threshold": 1, 
              "tcp_socket": null, 
              "timeout_seconds": 5
            }, 
            "name": "kubedns", 
            "ports": [
              {
                "container_port": 10053, 
                "host_ip": null, 
                "host_port": null, 
                "name": "dns-local", 
                "protocol": "UDP"
              }, 
              {
                "container_port": 10053, 
                "host_ip": null, 
                "host_port": null, 
                "name": "dns-tcp-local", 
                "protocol": "TCP"
              }, 
              {
                "container_port": 10055, 
                "host_ip": null, 
                "host_port": null, 
                "name": "metrics", 
                "protocol": "TCP"
              }
            ], 
            "readiness_probe": {
              "_exec": null, 
              "failure_threshold": 3, 
              "http_get": {
                "host": null, 
                "http_headers": null, 
                "path": "/readiness", 
                "port": "8081", 
                "scheme": "HTTP"
              }, 
              "initial_delay_seconds": 3, 
              "period_seconds": 10, 
              "success_threshold": 1, 
              "tcp_socket": null, 
              "timeout_seconds": 5
            }, 
            "resources": {
              "limits": {
                "memory": "170Mi"
              }, 
              "requests": {
                "cpu": "100m", 
                "memory": "70Mi"
              }
            }, 
            "security_context": null, 
            "stdin": null, 
            "stdin_once": null, 
            "termination_message_path": "/dev/termination-log", 
            "termination_message_policy": "File", 
            "tty": null, 
            "volume_mounts": [
              {
                "mount_path": "/var/run/secrets/kubernetes.io/serviceaccount", 
                "name": "default-token-6t3vm", 
                "read_only": true, 
                "sub_path": null
              }
            ], 
            "working_dir": null
          }, 
          {
            "args": [
              "--no-resolv", 
              "--log-facility=-", 
              "--cache-size=1000", 
              "--server=127.0.0.1#10053"
            ], 
            "command": null, 
            "env": null, 
            "env_from": null, 
            "image": "gcr.io/google_containers/k8s-dns-dnsmasq-amd64:1.14.5", 
            "image_pull_policy": "IfNotPresent", 
            "lifecycle": null, 
            "liveness_probe": {
              "_exec": null, 
              "failure_threshold": 5, 
              "http_get": {
                "host": null, 
                "http_headers": null, 
                "path": "/healthcheck/dnsmasq", 
                "port": "10054", 
                "scheme": "HTTP"
              }, 
              "initial_delay_seconds": 60, 
              "period_seconds": 10, 
              "success_threshold": 1, 
              "tcp_socket": null, 
              "timeout_seconds": 5
            }, 
            "name": "dnsmasq", 
            "ports": [
              {
                "container_port": 53, 
                "host_ip": null, 
                "host_port": null, 
                "name": "dns", 
                "protocol": "UDP"
              }, 
              {
                "container_port": 53, 
                "host_ip": null, 
                "host_port": null, 
                "name": "dns-tcp", 
                "protocol": "TCP"
              }
            ], 
            "readiness_probe": null, 
            "resources": {
              "limits": null, 
              "requests": {
                "cpu": "150m", 
                "memory": "10Mi"
              }
            }, 
            "security_context": null, 
            "stdin": null, 
            "stdin_once": null, 
            "termination_message_path": "/dev/termination-log", 
            "termination_message_policy": "File", 
            "tty": null, 
            "volume_mounts": [
              {
                "mount_path": "/var/run/secrets/kubernetes.io/serviceaccount", 
                "name": "default-token-6t3vm", 
                "read_only": true, 
                "sub_path": null
              }
            ], 
            "working_dir": null
          }, 
          {
            "args": [
              "--v=2", 
              "--logtostderr", 
              "--probe=kubedns,127.0.0.1:10053,kubernetes.default.svc.us-west-2.compute.internal,5,A", 
              "--probe=dnsmasq,127.0.0.1:53,kubernetes.default.svc.us-west-2.compute.internal,5,A"
            ], 
            "command": null, 
            "env": null, 
            "env_from": null, 
            "image": "gcr.io/google_containers/k8s-dns-sidecar-amd64:1.14.5", 
            "image_pull_policy": "IfNotPresent", 
            "lifecycle": null, 
            "liveness_probe": {
              "_exec": null, 
              "failure_threshold": 5, 
              "http_get": {
                "host": null, 
                "http_headers": null, 
                "path": "/metrics", 
                "port": "10054", 
                "scheme": "HTTP"
              }, 
              "initial_delay_seconds": 60, 
              "period_seconds": 10, 
              "success_threshold": 1, 
              "tcp_socket": null, 
              "timeout_seconds": 5
            }, 
            "name": "sidecar", 
            "ports": [
              {
                "container_port": 10054, 
                "host_ip": null, 
                "host_port": null, 
                "name": "metrics", 
                "protocol": "TCP"
              }
            ], 
            "readiness_probe": null, 
            "resources": {
              "limits": null, 
              "requests": {
                "cpu": "10m", 
                "memory": "20Mi"
              }
            }, 
            "security_context": null, 
            "stdin": null, 
            "stdin_once": null, 
            "termination_message_path": "/dev/termination-log", 
            "termination_message_policy": "File", 
            "tty": null, 
            "volume_mounts": [
              {
                "mount_path": "/var/run/secrets/kubernetes.io/serviceaccount", 
                "name": "default-token-6t3vm", 
                "read_only": true, 
                "sub_path": null
              }
            ], 
            "working_dir": null
          }
        ], 
        "dns_policy": "Default", 
        "host_aliases": null, 
        "host_ipc": null, 
        "host_network": null, 
        "host_pid": null, 
        "hostname": null, 
        "image_pull_secrets": null, 
        "init_containers": null, 
        "node_name": "ip-10-0-10-95.us-west-2.compute.internal", 
        "node_selector": null, 
        "restart_policy": "Always", 
        "scheduler_name": "default-scheduler", 
        "security_context": {
          "fs_group": null, 
          "run_as_non_root": null, 
          "run_as_user": null, 
          "se_linux_options": null, 
          "supplemental_groups": null
        }, 
        "service_account": "default", 
        "service_account_name": "default", 
        "subdomain": null, 
        "termination_grace_period_seconds": 30, 
        "tolerations": [
          {
            "effect": "NoSchedule", 
            "key": "node-role.kubernetes.io/master", 
            "operator": null, 
            "toleration_seconds": null, 
            "value": null
          }
        ], 
        "volumes": [
          {
            "aws_elastic_block_store": null, 
            "azure_disk": null, 
            "azure_file": null, 
            "cephfs": null, 
            "cinder": null, 
            "config_map": null, 
            "downward_api": null, 
            "empty_dir": null, 
            "fc": null, 
            "flex_volume": null, 
            "flocker": null, 
            "gce_persistent_disk": null, 
            "git_repo": null, 
            "glusterfs": null, 
            "host_path": null, 
            "iscsi": null, 
            "name": "default-token-6t3vm", 
            "nfs": null, 
            "persistent_volume_claim": null, 
            "photon_persistent_disk": null, 
            "portworx_volume": null, 
            "projected": null, 
            "quobyte": null, 
            "rbd": null, 
            "scale_io": null, 
            "secret": {
              "default_mode": 420, 
              "items": null, 
              "optional": null, 
              "secret_name": "default-token-6t3vm"
            }, 
            "storageos": null, 
            "vsphere_volume": null
          }
        ]
      }, 
      "status": {
        "conditions": [
          {
            "last_probe_time": null, 
            "last_transition_time": "Mon, 16 Oct 2017 10:43:05 GMT", 
            "message": null, 
            "reason": null, 
            "status": "True", 
            "type": "Initialized"
          }, 
          {
            "last_probe_time": null, 
            "last_transition_time": "Mon, 16 Oct 2017 10:43:15 GMT", 
            "message": null, 
            "reason": null, 
            "status": "True", 
            "type": "Ready"
          }, 
          {
            "last_probe_time": null, 
            "last_transition_time": "Mon, 16 Oct 2017 10:43:05 GMT", 
            "message": null, 
            "reason": null, 
            "status": "True", 
            "type": "PodScheduled"
          }
        ], 
        "container_statuses": [
          {
            "container_id": "docker://911835d4871e64288d64500f08599a69f7bfd134ef62b601076eed0393dbf259", 
            "image": "gcr.io/google_containers/k8s-dns-dnsmasq-amd64:1.14.5", 
            "image_id": "docker-pullable://gcr.io/google_containers/k8s-dns-dnsmasq-amd64@sha256:60ef7b261e81df47490155558ec1e8cef3f787c8db9adee4fdd7af351190141e", 
            "last_state": {
              "running": null, 
              "terminated": null, 
              "waiting": null
            }, 
            "name": "dnsmasq", 
            "ready": true, 
            "restart_count": 0, 
            "state": {
              "running": {
                "started_at": "Mon, 16 Oct 2017 10:43:06 GMT"
              }, 
              "terminated": null, 
              "waiting": null
            }
          }, 
          {
            "container_id": "docker://4cc4a9b4eb30ac3c8be8449d520fc745651ceaaf0890d11ccdf9779aa0024866", 
            "image": "gcr.io/google_containers/k8s-dns-kube-dns-amd64:1.14.5", 
            "image_id": "docker-pullable://gcr.io/google_containers/k8s-dns-kube-dns-amd64@sha256:1a3fc069de481ae690188f6f1ba4664b5cc7760af37120f70c86505c79eea61d", 
            "last_state": {
              "running": null, 
              "terminated": null, 
              "waiting": null
            }, 
            "name": "kubedns", 
            "ready": true, 
            "restart_count": 0, 
            "state": {
              "running": {
                "started_at": "Mon, 16 Oct 2017 10:43:06 GMT"
              }, 
              "terminated": null, 
              "waiting": null
            }
          }, 
          {
            "container_id": "docker://59c4e59f9e03074b48dcc3b5aff200416e06362d89f71431f5cb9b15879d3f22", 
            "image": "gcr.io/google_containers/k8s-dns-sidecar-amd64:1.14.5", 
            "image_id": "docker-pullable://gcr.io/google_containers/k8s-dns-sidecar-amd64@sha256:9aab42bf6a2a068b797fe7d91a5d8d915b10dbbc3d6f2b10492848debfba6044", 
            "last_state": {
              "running": null, 
              "terminated": null, 
              "waiting": null
            }, 
            "name": "sidecar", 
            "ready": true, 
            "restart_count": 0, 
            "state": {
              "running": {
                "started_at": "Mon, 16 Oct 2017 10:43:06 GMT"
              }, 
              "terminated": null, 
              "waiting": null
            }
          }
        ], 
        "host_ip": "10.0.10.95", 
        "init_container_statuses": null, 
        "message": null, 
        "phase": "Running", 
        "pod_ip": "10.0.157.225", 
        "qos_class": "Burstable", 
        "reason": null, 
        "start_time": "Mon, 16 Oct 2017 10:43:05 GMT"
      }
    }, 
    "d5d3271d-aff3-11e7-bf93-0a573e877b3e": {
      "api_version": null, 
      "kind": "Pod", 
      "metadata": {
        "annotations": {
          "kubernetes.io/created-by": "{\"kind\":\"SerializedReference\",\"apiVersion\":\"v1\",\"reference\":{\"kind\":\"ReplicaSet\",\"namespace\":\"default\",\"name\":\"redis-1559358183\",\"uid\":\"c48bc031-adf4-11e7-96f4-0a4bee56cee8\",\"apiVersion\":\"extensions\",\"resourceVersion\":\"157468\"}}\n"
        }, 
        "cluster_name": null, 
        "creation_timestamp": "Fri, 13 Oct 2017 08:52:25 GMT", 
        "deletion_grace_period_seconds": null, 
        "deletion_timestamp": null, 
        "finalizers": null, 
        "generate_name": "redis-1559358183-", 
        "generation": null, 
        "initializers": null, 
        "labels": {
          "app": "redis", 
          "pod-template-hash": "1559358183"
        }, 
        "name": "redis-1559358183-fj11m", 
        "namespace": "default", 
        "owner_references": [
          {
            "api_version": "extensions/v1beta1", 
            "block_owner_deletion": true, 
            "controller": true, 
            "kind": "ReplicaSet", 
            "name": "redis-1559358183", 
            "uid": "c48bc031-adf4-11e7-96f4-0a4bee56cee8"
          }
        ], 
        "resource_version": "1692695", 
        "self_link": "/api/v1/namespaces/default/pods/redis-1559358183-fj11m", 
        "uid": "d5d3271d-aff3-11e7-bf93-0a573e877b3e"
      }, 
      "spec": {
        "active_deadline_seconds": null, 
        "affinity": null, 
        "automount_service_account_token": null, 
        "containers": [
          {
            "args": null, 
            "command": null, 
            "env": null, 
            "env_from": null, 
            "image": "redis", 
            "image_pull_policy": "Always", 
            "lifecycle": null, 
            "liveness_probe": null, 
            "name": "redis", 
            "ports": [
              {
                "container_port": 6379, 
                "host_ip": null, 
                "host_port": null, 
                "name": null, 
                "protocol": "TCP"
              }
            ], 
            "readiness_probe": null, 
            "resources": {
              "limits": null, 
              "requests": null
            }, 
            "security_context": null, 
            "stdin": null, 
            "stdin_once": null, 
            "termination_message_path": "/dev/termination-log", 
            "termination_message_policy": "File", 
            "tty": null, 
            "volume_mounts": [
              {
                "mount_path": "/data", 
                "name": "redis-storage-volume", 
                "read_only": null, 
                "sub_path": null
              }, 
              {
                "mount_path": "/var/run/secrets/kubernetes.io/serviceaccount", 
                "name": "default-token-zscp6", 
                "read_only": true, 
                "sub_path": null
              }
            ], 
            "working_dir": null
          }
        ], 
        "dns_policy": "ClusterFirst", 
        "host_aliases": null, 
        "host_ipc": null, 
        "host_network": null, 
        "host_pid": null, 
        "hostname": null, 
        "image_pull_secrets": null, 
        "init_containers": null, 
        "node_name": "ip-10-0-10-95.us-west-2.compute.internal", 
        "node_selector": null, 
        "restart_policy": "Always", 
        "scheduler_name": "default-scheduler", 
        "security_context": {
          "fs_group": null, 
          "run_as_non_root": null, 
          "run_as_user": null, 
          "se_linux_options": null, 
          "supplemental_groups": null
        }, 
        "service_account": "default", 
        "service_account_name": "default", 
        "subdomain": null, 
        "termination_grace_period_seconds": 30, 
        "tolerations": null, 
        "volumes": [
          {
            "aws_elastic_block_store": null, 
            "azure_disk": null, 
            "azure_file": null, 
            "cephfs": null, 
            "cinder": null, 
            "config_map": null, 
            "downward_api": null, 
            "empty_dir": null, 
            "fc": null, 
            "flex_volume": null, 
            "flocker": null, 
            "gce_persistent_disk": null, 
            "git_repo": null, 
            "glusterfs": null, 
            "host_path": null, 
            "iscsi": null, 
            "name": "redis-storage-volume", 
            "nfs": null, 
            "persistent_volume_claim": {
              "claim_name": "redis-disk", 
              "read_only": null
            }, 
            "photon_persistent_disk": null, 
            "portworx_volume": null, 
            "projected": null, 
            "quobyte": null, 
            "rbd": null, 
            "scale_io": null, 
            "secret": null, 
            "storageos": null, 
            "vsphere_volume": null
          }, 
          {
            "aws_elastic_block_store": null, 
            "azure_disk": null, 
            "azure_file": null, 
            "cephfs": null, 
            "cinder": null, 
            "config_map": null, 
            "downward_api": null, 
            "empty_dir": null, 
            "fc": null, 
            "flex_volume": null, 
            "flocker": null, 
            "gce_persistent_disk": null, 
            "git_repo": null, 
            "glusterfs": null, 
            "host_path": null, 
            "iscsi": null, 
            "name": "default-token-zscp6", 
            "nfs": null, 
            "persistent_volume_claim": null, 
            "photon_persistent_disk": null, 
            "portworx_volume": null, 
            "projected": null, 
            "quobyte": null, 
            "rbd": null, 
            "scale_io": null, 
            "secret": {
              "default_mode": 420, 
              "items": null, 
              "optional": null, 
              "secret_name": "default-token-zscp6"
            }, 
            "storageos": null, 
            "vsphere_volume": null
          }
        ]
      }, 
      "status": {
        "conditions": [
          {
            "last_probe_time": null, 
            "last_transition_time": "Fri, 13 Oct 2017 09:29:22 GMT", 
            "message": null, 
            "reason": null, 
            "status": "True", 
            "type": "Initialized"
          }, 
          {
            "last_probe_time": null, 
            "last_transition_time": "Fri, 13 Oct 2017 09:29:45 GMT", 
            "message": null, 
            "reason": null, 
            "status": "True", 
            "type": "Ready"
          }, 
          {
            "last_probe_time": null, 
            "last_transition_time": "Fri, 13 Oct 2017 09:29:22 GMT", 
            "message": null, 
            "reason": null, 
            "status": "True", 
            "type": "PodScheduled"
          }
        ], 
        "container_statuses": [
          {
            "container_id": "docker://7535bd85fbe7660944bb0a8181bcba42ae81d1c32a26df36808dc48a43b4ad0c", 
            "image": "redis:latest", 
            "image_id": "docker-pullable://redis@sha256:07e7b6cb753f8d06a894e22af30f94e04844461ab6cb002c688841873e5e5116", 
            "last_state": {
              "running": null, 
              "terminated": null, 
              "waiting": null
            }, 
            "name": "redis", 
            "ready": true, 
            "restart_count": 0, 
            "state": {
              "running": {
                "started_at": "Fri, 13 Oct 2017 09:29:45 GMT"
              }, 
              "terminated": null, 
              "waiting": null
            }
          }
        ], 
        "host_ip": "10.0.10.95", 
        "init_container_statuses": null, 
        "message": null, 
        "phase": "Running", 
        "pod_ip": "10.0.157.207", 
        "qos_class": "BestEffort", 
        "reason": null, 
        "start_time": "Fri, 13 Oct 2017 09:29:22 GMT"
      }
    }, 
    "faba6189-b1ca-11e7-9e5e-0a4bee56cee8": {
      "api_version": null, 
      "kind": "Pod", 
      "metadata": {
        "annotations": {
          "kubernetes.io/created-by": "{\"kind\":\"SerializedReference\",\"apiVersion\":\"v1\",\"reference\":{\"kind\":\"ReplicaSet\",\"namespace\":\"kube-system\",\"name\":\"kube-dns-2094712589\",\"uid\":\"c5740565-adae-11e7-994c-0a1c759dde8c\",\"apiVersion\":\"extensions\",\"resourceVersion\":\"2636723\"}}\n", 
          "scheduler.alpha.kubernetes.io/critical-pod": "", 
          "scheduler.alpha.kubernetes.io/tolerations": "[{\"key\":\"CriticalAddonsOnly\", \"operator\":\"Exists\"}]"
        }, 
        "cluster_name": null, 
        "creation_timestamp": "Sun, 15 Oct 2017 17:05:00 GMT", 
        "deletion_grace_period_seconds": null, 
        "deletion_timestamp": null, 
        "finalizers": null, 
        "generate_name": "kube-dns-2094712589-", 
        "generation": null, 
        "initializers": null, 
        "labels": {
          "k8s-app": "kube-dns", 
          "pod-template-hash": "2094712589"
        }, 
        "name": "kube-dns-2094712589-lc4ck", 
        "namespace": "kube-system", 
        "owner_references": [
          {
            "api_version": "extensions/v1beta1", 
            "block_owner_deletion": true, 
            "controller": true, 
            "kind": "ReplicaSet", 
            "name": "kube-dns-2094712589", 
            "uid": "c5740565-adae-11e7-994c-0a1c759dde8c"
          }
        ], 
        "resource_version": "2636774", 
        "self_link": "/api/v1/namespaces/kube-system/pods/kube-dns-2094712589-lc4ck", 
        "uid": "faba6189-b1ca-11e7-9e5e-0a4bee56cee8"
      }, 
      "spec": {
        "active_deadline_seconds": null, 
        "affinity": null, 
        "automount_service_account_token": null, 
        "containers": [
          {
            "args": [
              "--domain=us-west-2.compute.internal.", 
              "--dns-port=10053", 
              "--config-map=kube-dns", 
              "-v=2"
            ], 
            "command": null, 
            "env": [
              {
                "name": "PROMETHEUS_PORT", 
                "value": "10055", 
                "value_from": null
              }
            ], 
            "env_from": null, 
            "image": "gcr.io/google_containers/k8s-dns-kube-dns-amd64:1.14.5", 
            "image_pull_policy": "IfNotPresent", 
            "lifecycle": null, 
            "liveness_probe": {
              "_exec": null, 
              "failure_threshold": 5, 
              "http_get": {
                "host": null, 
                "http_headers": null, 
                "path": "/healthcheck/kubedns", 
                "port": "10054", 
                "scheme": "HTTP"
              }, 
              "initial_delay_seconds": 60, 
              "period_seconds": 10, 
              "success_threshold": 1, 
              "tcp_socket": null, 
              "timeout_seconds": 5
            }, 
            "name": "kubedns", 
            "ports": [
              {
                "container_port": 10053, 
                "host_ip": null, 
                "host_port": null, 
                "name": "dns-local", 
                "protocol": "UDP"
              }, 
              {
                "container_port": 10053, 
                "host_ip": null, 
                "host_port": null, 
                "name": "dns-tcp-local", 
                "protocol": "TCP"
              }, 
              {
                "container_port": 10055, 
                "host_ip": null, 
                "host_port": null, 
                "name": "metrics", 
                "protocol": "TCP"
              }
            ], 
            "readiness_probe": {
              "_exec": null, 
              "failure_threshold": 3, 
              "http_get": {
                "host": null, 
                "http_headers": null, 
                "path": "/readiness", 
                "port": "8081", 
                "scheme": "HTTP"
              }, 
              "initial_delay_seconds": 3, 
              "period_seconds": 10, 
              "success_threshold": 1, 
              "tcp_socket": null, 
              "timeout_seconds": 5
            }, 
            "resources": {
              "limits": {
                "memory": "170Mi"
              }, 
              "requests": {
                "cpu": "100m", 
                "memory": "70Mi"
              }
            }, 
            "security_context": null, 
            "stdin": null, 
            "stdin_once": null, 
            "termination_message_path": "/dev/termination-log", 
            "termination_message_policy": "File", 
            "tty": null, 
            "volume_mounts": [
              {
                "mount_path": "/var/run/secrets/kubernetes.io/serviceaccount", 
                "name": "default-token-6t3vm", 
                "read_only": true, 
                "sub_path": null
              }
            ], 
            "working_dir": null
          }, 
          {
            "args": [
              "--no-resolv", 
              "--log-facility=-", 
              "--cache-size=1000", 
              "--server=127.0.0.1#10053"
            ], 
            "command": null, 
            "env": null, 
            "env_from": null, 
            "image": "gcr.io/google_containers/k8s-dns-dnsmasq-amd64:1.14.5", 
            "image_pull_policy": "IfNotPresent", 
            "lifecycle": null, 
            "liveness_probe": {
              "_exec": null, 
              "failure_threshold": 5, 
              "http_get": {
                "host": null, 
                "http_headers": null, 
                "path": "/healthcheck/dnsmasq", 
                "port": "10054", 
                "scheme": "HTTP"
              }, 
              "initial_delay_seconds": 60, 
              "period_seconds": 10, 
              "success_threshold": 1, 
              "tcp_socket": null, 
              "timeout_seconds": 5
            }, 
            "name": "dnsmasq", 
            "ports": [
              {
                "container_port": 53, 
                "host_ip": null, 
                "host_port": null, 
                "name": "dns", 
                "protocol": "UDP"
              }, 
              {
                "container_port": 53, 
                "host_ip": null, 
                "host_port": null, 
                "name": "dns-tcp", 
                "protocol": "TCP"
              }
            ], 
            "readiness_probe": null, 
            "resources": {
              "limits": null, 
              "requests": {
                "cpu": "150m", 
                "memory": "10Mi"
              }
            }, 
            "security_context": null, 
            "stdin": null, 
            "stdin_once": null, 
            "termination_message_path": "/dev/termination-log", 
            "termination_message_policy": "File", 
            "tty": null, 
            "volume_mounts": [
              {
                "mount_path": "/var/run/secrets/kubernetes.io/serviceaccount", 
                "name": "default-token-6t3vm", 
                "read_only": true, 
                "sub_path": null
              }
            ], 
            "working_dir": null
          }, 
          {
            "args": [
              "--v=2", 
              "--logtostderr", 
              "--probe=kubedns,127.0.0.1:10053,kubernetes.default.svc.us-west-2.compute.internal,5,A", 
              "--probe=dnsmasq,127.0.0.1:53,kubernetes.default.svc.us-west-2.compute.internal,5,A"
            ], 
            "command": null, 
            "env": null, 
            "env_from": null, 
            "image": "gcr.io/google_containers/k8s-dns-sidecar-amd64:1.14.5", 
            "image_pull_policy": "IfNotPresent", 
            "lifecycle": null, 
            "liveness_probe": {
              "_exec": null, 
              "failure_threshold": 5, 
              "http_get": {
                "host": null, 
                "http_headers": null, 
                "path": "/metrics", 
                "port": "10054", 
                "scheme": "HTTP"
              }, 
              "initial_delay_seconds": 60, 
              "period_seconds": 10, 
              "success_threshold": 1, 
              "tcp_socket": null, 
              "timeout_seconds": 5
            }, 
            "name": "sidecar", 
            "ports": [
              {
                "container_port": 10054, 
                "host_ip": null, 
                "host_port": null, 
                "name": "metrics", 
                "protocol": "TCP"
              }
            ], 
            "readiness_probe": null, 
            "resources": {
              "limits": null, 
              "requests": {
                "cpu": "10m", 
                "memory": "20Mi"
              }
            }, 
            "security_context": null, 
            "stdin": null, 
            "stdin_once": null, 
            "termination_message_path": "/dev/termination-log", 
            "termination_message_policy": "File", 
            "tty": null, 
            "volume_mounts": [
              {
                "mount_path": "/var/run/secrets/kubernetes.io/serviceaccount", 
                "name": "default-token-6t3vm", 
                "read_only": true, 
                "sub_path": null
              }
            ], 
            "working_dir": null
          }
        ], 
        "dns_policy": "Default", 
        "host_aliases": null, 
        "host_ipc": null, 
        "host_network": null, 
        "host_pid": null, 
        "hostname": null, 
        "image_pull_secrets": null, 
        "init_containers": null, 
        "node_name": "ip-10-0-10-30.us-west-2.compute.internal", 
        "node_selector": null, 
        "restart_policy": "Always", 
        "scheduler_name": "default-scheduler", 
        "security_context": {
          "fs_group": null, 
          "run_as_non_root": null, 
          "run_as_user": null, 
          "se_linux_options": null, 
          "supplemental_groups": null
        }, 
        "service_account": "default", 
        "service_account_name": "default", 
        "subdomain": null, 
        "termination_grace_period_seconds": 30, 
        "tolerations": [
          {
            "effect": "NoSchedule", 
            "key": "node-role.kubernetes.io/master", 
            "operator": null, 
            "toleration_seconds": null, 
            "value": null
          }
        ], 
        "volumes": [
          {
            "aws_elastic_block_store": null, 
            "azure_disk": null, 
            "azure_file": null, 
            "cephfs": null, 
            "cinder": null, 
            "config_map": null, 
            "downward_api": null, 
            "empty_dir": null, 
            "fc": null, 
            "flex_volume": null, 
            "flocker": null, 
            "gce_persistent_disk": null, 
            "git_repo": null, 
            "glusterfs": null, 
            "host_path": null, 
            "iscsi": null, 
            "name": "default-token-6t3vm", 
            "nfs": null, 
            "persistent_volume_claim": null, 
            "photon_persistent_disk": null, 
            "portworx_volume": null, 
            "projected": null, 
            "quobyte": null, 
            "rbd": null, 
            "scale_io": null, 
            "secret": {
              "default_mode": 420, 
              "items": null, 
              "optional": null, 
              "secret_name": "default-token-6t3vm"
            }, 
            "storageos": null, 
            "vsphere_volume": null
          }
        ]
      }, 
      "status": {
        "conditions": [
          {
            "last_probe_time": null, 
            "last_transition_time": "Sun, 15 Oct 2017 17:05:00 GMT", 
            "message": null, 
            "reason": null, 
            "status": "True", 
            "type": "Initialized"
          }, 
          {
            "last_probe_time": null, 
            "last_transition_time": "Sun, 15 Oct 2017 17:05:05 GMT", 
            "message": null, 
            "reason": null, 
            "status": "True", 
            "type": "Ready"
          }, 
          {
            "last_probe_time": null, 
            "last_transition_time": "Sun, 15 Oct 2017 17:05:00 GMT", 
            "message": null, 
            "reason": null, 
            "status": "True", 
            "type": "PodScheduled"
          }
        ], 
        "container_statuses": [
          {
            "container_id": "docker://716fa0b877f2757997781360b165ce629ffa1ee7508e0246d2ef00726408336e", 
            "image": "gcr.io/google_containers/k8s-dns-dnsmasq-amd64:1.14.5", 
            "image_id": "docker-pullable://gcr.io/google_containers/k8s-dns-dnsmasq-amd64@sha256:60ef7b261e81df47490155558ec1e8cef3f787c8db9adee4fdd7af351190141e", 
            "last_state": {
              "running": null, 
              "terminated": null, 
              "waiting": null
            }, 
            "name": "dnsmasq", 
            "ready": true, 
            "restart_count": 0, 
            "state": {
              "running": {
                "started_at": "Sun, 15 Oct 2017 17:05:01 GMT"
              }, 
              "terminated": null, 
              "waiting": null
            }
          }, 
          {
            "container_id": "docker://a48c58deb10ac9494e14abe69c7bc32ab4211a0860d26021bc7de362cc304112", 
            "image": "gcr.io/google_containers/k8s-dns-kube-dns-amd64:1.14.5", 
            "image_id": "docker-pullable://gcr.io/google_containers/k8s-dns-kube-dns-amd64@sha256:1a3fc069de481ae690188f6f1ba4664b5cc7760af37120f70c86505c79eea61d", 
            "last_state": {
              "running": null, 
              "terminated": null, 
              "waiting": null
            }, 
            "name": "kubedns", 
            "ready": true, 
            "restart_count": 0, 
            "state": {
              "running": {
                "started_at": "Sun, 15 Oct 2017 17:05:01 GMT"
              }, 
              "terminated": null, 
              "waiting": null
            }
          }, 
          {
            "container_id": "docker://ea56ece3a3b87d11a85a7a2fa5e7590fa21ea3f88fc1197ca73a42c6b48f2538", 
            "image": "gcr.io/google_containers/k8s-dns-sidecar-amd64:1.14.5", 
            "image_id": "docker-pullable://gcr.io/google_containers/k8s-dns-sidecar-amd64@sha256:9aab42bf6a2a068b797fe7d91a5d8d915b10dbbc3d6f2b10492848debfba6044", 
            "last_state": {
              "running": null, 
              "terminated": null, 
              "waiting": null
            }, 
            "name": "sidecar", 
            "ready": true, 
            "restart_count": 0, 
            "state": {
              "running": {
                "started_at": "Sun, 15 Oct 2017 17:05:01 GMT"
              }, 
              "terminated": null, 
              "waiting": null
            }
          }
        ], 
        "host_ip": "10.0.10.30", 
        "init_container_statuses": null, 
        "message": null, 
        "phase": "Running", 
        "pod_ip": "10.0.196.178", 
        "qos_class": "Burstable", 
        "reason": null, 
        "start_time": "Sun, 15 Oct 2017 17:05:00 GMT"
      }
    }, 
    "fd561df2-b25e-11e7-9e5e-0a4bee56cee8": {
      "api_version": null, 
      "kind": "Pod", 
      "metadata": {
        "annotations": {
          "kubernetes.io/created-by": "{\"kind\":\"SerializedReference\",\"apiVersion\":\"v1\",\"reference\":{\"kind\":\"ReplicaSet\",\"namespace\":\"kube-system\",\"name\":\"kube-dns-2058077965\",\"uid\":\"7f506219-ad8c-11e7-994c-0a1c759dde8c\",\"apiVersion\":\"extensions\",\"resourceVersion\":\"2955235\"}}\n", 
          "scheduler.alpha.kubernetes.io/critical-pod": "", 
          "scheduler.alpha.kubernetes.io/tolerations": "[{\"key\":\"CriticalAddonsOnly\", \"operator\":\"Exists\"}]"
        }, 
        "cluster_name": null, 
        "creation_timestamp": "Mon, 16 Oct 2017 10:44:30 GMT", 
        "deletion_grace_period_seconds": 30, 
        "deletion_timestamp": "Mon, 16 Oct 2017 10:45:06 GMT", 
        "finalizers": null, 
        "generate_name": "kube-dns-2058077965-", 
        "generation": null, 
        "initializers": null, 
        "labels": {
          "k8s-app": "kube-dns", 
          "pod-template-hash": "2058077965"
        }, 
        "name": "kube-dns-2058077965-04jd3", 
        "namespace": "kube-system", 
        "owner_references": [
          {
            "api_version": "extensions/v1beta1", 
            "block_owner_deletion": true, 
            "controller": true, 
            "kind": "ReplicaSet", 
            "name": "kube-dns-2058077965", 
            "uid": "7f506219-ad8c-11e7-994c-0a1c759dde8c"
          }
        ], 
        "resource_version": "2955322", 
        "self_link": "/api/v1/namespaces/kube-system/pods/kube-dns-2058077965-04jd3", 
        "uid": "fd561df2-b25e-11e7-9e5e-0a4bee56cee8"
      }, 
      "spec": {
        "active_deadline_seconds": null, 
        "affinity": null, 
        "automount_service_account_token": null, 
        "containers": [
          {
            "args": [
              "--domain=us-west-2.compute.internal.", 
              "--dns-port=10053", 
              "--config-map=kube-dns", 
              "-v=2"
            ], 
            "command": null, 
            "env": [
              {
                "name": "PROMETHEUS_PORT", 
                "value": "10055", 
                "value_from": null
              }
            ], 
            "env_from": null, 
            "image": "gcr.io/google_containers/k8s-dns-kube-dns-amd64:1.14.5", 
            "image_pull_policy": "IfNotPresent", 
            "lifecycle": null, 
            "liveness_probe": {
              "_exec": null, 
              "failure_threshold": 5, 
              "http_get": {
                "host": null, 
                "http_headers": null, 
                "path": "/healthcheck/kubedns", 
                "port": "10054", 
                "scheme": "HTTP"
              }, 
              "initial_delay_seconds": 60, 
              "period_seconds": 10, 
              "success_threshold": 1, 
              "tcp_socket": null, 
              "timeout_seconds": 5
            }, 
            "name": "kubedns", 
            "ports": [
              {
                "container_port": 10053, 
                "host_ip": null, 
                "host_port": null, 
                "name": "dns-local", 
                "protocol": "UDP"
              }, 
              {
                "container_port": 10053, 
                "host_ip": null, 
                "host_port": null, 
                "name": "dns-tcp-local", 
                "protocol": "TCP"
              }, 
              {
                "container_port": 10055, 
                "host_ip": null, 
                "host_port": null, 
                "name": "metrics", 
                "protocol": "TCP"
              }
            ], 
            "readiness_probe": {
              "_exec": null, 
              "failure_threshold": 3, 
              "http_get": {
                "host": null, 
                "http_headers": null, 
                "path": "/readiness", 
                "port": "8081", 
                "scheme": "HTTP"
              }, 
              "initial_delay_seconds": 3, 
              "period_seconds": 10, 
              "success_threshold": 1, 
              "tcp_socket": null, 
              "timeout_seconds": 5
            }, 
            "resources": {
              "limits": {
                "memory": "170Mi"
              }, 
              "requests": {
                "cpu": "100m", 
                "memory": "70Mi"
              }
            }, 
            "security_context": null, 
            "stdin": null, 
            "stdin_once": null, 
            "termination_message_path": "/dev/termination-log", 
            "termination_message_policy": "File", 
            "tty": null, 
            "volume_mounts": [
              {
                "mount_path": "/var/run/secrets/kubernetes.io/serviceaccount", 
                "name": "default-token-6t3vm", 
                "read_only": true, 
                "sub_path": null
              }
            ], 
            "working_dir": null
          }, 
          {
            "args": [
              "--log-facility=-", 
              "--no-resolv", 
              "--cache-size=1000", 
              "--server=127.0.0.1#10053"
            ], 
            "command": null, 
            "env": null, 
            "env_from": null, 
            "image": "gcr.io/google_containers/k8s-dns-dnsmasq-amd64:1.14.5", 
            "image_pull_policy": "IfNotPresent", 
            "lifecycle": null, 
            "liveness_probe": {
              "_exec": null, 
              "failure_threshold": 5, 
              "http_get": {
                "host": null, 
                "http_headers": null, 
                "path": "/healthcheck/dnsmasq", 
                "port": "10054", 
                "scheme": "HTTP"
              }, 
              "initial_delay_seconds": 60, 
              "period_seconds": 10, 
              "success_threshold": 1, 
              "tcp_socket": null, 
              "timeout_seconds": 5
            }, 
            "name": "dnsmasq", 
            "ports": [
              {
                "container_port": 53, 
                "host_ip": null, 
                "host_port": null, 
                "name": "dns", 
                "protocol": "UDP"
              }, 
              {
                "container_port": 53, 
                "host_ip": null, 
                "host_port": null, 
                "name": "dns-tcp", 
                "protocol": "TCP"
              }
            ], 
            "readiness_probe": null, 
            "resources": {
              "limits": null, 
              "requests": {
                "cpu": "150m", 
                "memory": "10Mi"
              }
            }, 
            "security_context": null, 
            "stdin": null, 
            "stdin_once": null, 
            "termination_message_path": "/dev/termination-log", 
            "termination_message_policy": "File", 
            "tty": null, 
            "volume_mounts": [
              {
                "mount_path": "/var/run/secrets/kubernetes.io/serviceaccount", 
                "name": "default-token-6t3vm", 
                "read_only": true, 
                "sub_path": null
              }
            ], 
            "working_dir": null
          }, 
          {
            "args": [
              "--v=2", 
              "--logtostderr", 
              "--probe=kubedns,127.0.0.1:10053,kubernetes.default.svc.us-west-2.compute.internal,5,A", 
              "--probe=dnsmasq,127.0.0.1:53,kubernetes.default.svc.us-west-2.compute.internal,5,A"
            ], 
            "command": null, 
            "env": null, 
            "env_from": null, 
            "image": "gcr.io/google_containers/k8s-dns-sidecar-amd64:1.14.5", 
            "image_pull_policy": "IfNotPresent", 
            "lifecycle": null, 
            "liveness_probe": {
              "_exec": null, 
              "failure_threshold": 5, 
              "http_get": {
                "host": null, 
                "http_headers": null, 
                "path": "/metrics", 
                "port": "10054", 
                "scheme": "HTTP"
              }, 
              "initial_delay_seconds": 60, 
              "period_seconds": 10, 
              "success_threshold": 1, 
              "tcp_socket": null, 
              "timeout_seconds": 5
            }, 
            "name": "sidecar", 
            "ports": [
              {
                "container_port": 10054, 
                "host_ip": null, 
                "host_port": null, 
                "name": "metrics", 
                "protocol": "TCP"
              }
            ], 
            "readiness_probe": null, 
            "resources": {
              "limits": null, 
              "requests": {
                "cpu": "10m", 
                "memory": "20Mi"
              }
            }, 
            "security_context": null, 
            "stdin": null, 
            "stdin_once": null, 
            "termination_message_path": "/dev/termination-log", 
            "termination_message_policy": "File", 
            "tty": null, 
            "volume_mounts": [
              {
                "mount_path": "/var/run/secrets/kubernetes.io/serviceaccount", 
                "name": "default-token-6t3vm", 
                "read_only": true, 
                "sub_path": null
              }
            ], 
            "working_dir": null
          }
        ], 
        "dns_policy": "Default", 
        "host_aliases": null, 
        "host_ipc": null, 
        "host_network": null, 
        "host_pid": null, 
        "hostname": null, 
        "image_pull_secrets": null, 
        "init_containers": null, 
        "node_name": "ip-10-0-10-10.us-west-2.compute.internal", 
        "node_selector": null, 
        "restart_policy": "Always", 
        "scheduler_name": "default-scheduler", 
        "security_context": {
          "fs_group": null, 
          "run_as_non_root": null, 
          "run_as_user": null, 
          "se_linux_options": null, 
          "supplemental_groups": null
        }, 
        "service_account": "default", 
        "service_account_name": "default", 
        "subdomain": null, 
        "termination_grace_period_seconds": 30, 
        "tolerations": [
          {
            "effect": "NoSchedule", 
            "key": "node-role.kubernetes.io/master", 
            "operator": null, 
            "toleration_seconds": null, 
            "value": null
          }
        ], 
        "volumes": [
          {
            "aws_elastic_block_store": null, 
            "azure_disk": null, 
            "azure_file": null, 
            "cephfs": null, 
            "cinder": null, 
            "config_map": null, 
            "downward_api": null, 
            "empty_dir": null, 
            "fc": null, 
            "flex_volume": null, 
            "flocker": null, 
            "gce_persistent_disk": null, 
            "git_repo": null, 
            "glusterfs": null, 
            "host_path": null, 
            "iscsi": null, 
            "name": "default-token-6t3vm", 
            "nfs": null, 
            "persistent_volume_claim": null, 
            "photon_persistent_disk": null, 
            "portworx_volume": null, 
            "projected": null, 
            "quobyte": null, 
            "rbd": null, 
            "scale_io": null, 
            "secret": {
              "default_mode": 420, 
              "items": null, 
              "optional": null, 
              "secret_name": "default-token-6t3vm"
            }, 
            "storageos": null, 
            "vsphere_volume": null
          }
        ]
      }, 
      "status": {
        "conditions": [
          {
            "last_probe_time": null, 
            "last_transition_time": "Mon, 16 Oct 2017 10:44:30 GMT", 
            "message": null, 
            "reason": null, 
            "status": "True", 
            "type": "Initialized"
          }, 
          {
            "last_probe_time": null, 
            "last_transition_time": "Mon, 16 Oct 2017 10:44:40 GMT", 
            "message": null, 
            "reason": null, 
            "status": "True", 
            "type": "Ready"
          }, 
          {
            "last_probe_time": null, 
            "last_transition_time": "Mon, 16 Oct 2017 10:44:30 GMT", 
            "message": null, 
            "reason": null, 
            "status": "True", 
            "type": "PodScheduled"
          }
        ], 
        "container_statuses": [
          {
            "container_id": "docker://57d13156e62c177dbea59542b7c8b35ad41db63c9a8e4745a9b48133fa798617", 
            "image": "gcr.io/google_containers/k8s-dns-dnsmasq-amd64:1.14.5", 
            "image_id": "docker-pullable://gcr.io/google_containers/k8s-dns-dnsmasq-amd64@sha256:60ef7b261e81df47490155558ec1e8cef3f787c8db9adee4fdd7af351190141e", 
            "last_state": {
              "running": null, 
              "terminated": null, 
              "waiting": null
            }, 
            "name": "dnsmasq", 
            "ready": true, 
            "restart_count": 0, 
            "state": {
              "running": {
                "started_at": "Mon, 16 Oct 2017 10:44:32 GMT"
              }, 
              "terminated": null, 
              "waiting": null
            }
          }, 
          {
            "container_id": "docker://2830acfcb8b446421fa31db89909786563f5d787ec253e2d17e89656cc4c2e58", 
            "image": "gcr.io/google_containers/k8s-dns-kube-dns-amd64:1.14.5", 
            "image_id": "docker-pullable://gcr.io/google_containers/k8s-dns-kube-dns-amd64@sha256:1a3fc069de481ae690188f6f1ba4664b5cc7760af37120f70c86505c79eea61d", 
            "last_state": {
              "running": null, 
              "terminated": null, 
              "waiting": null
            }, 
            "name": "kubedns", 
            "ready": true, 
            "restart_count": 0, 
            "state": {
              "running": {
                "started_at": "Mon, 16 Oct 2017 10:44:32 GMT"
              }, 
              "terminated": null, 
              "waiting": null
            }
          }, 
          {
            "container_id": "docker://a7dc244ee64e6c0bc1fd9055e8ebc04e337495648e4b6a40a1bf40b608891422", 
            "image": "gcr.io/google_containers/k8s-dns-sidecar-amd64:1.14.5", 
            "image_id": "docker-pullable://gcr.io/google_containers/k8s-dns-sidecar-amd64@sha256:9aab42bf6a2a068b797fe7d91a5d8d915b10dbbc3d6f2b10492848debfba6044", 
            "last_state": {
              "running": null, 
              "terminated": null, 
              "waiting": null
            }, 
            "name": "sidecar", 
            "ready": true, 
            "restart_count": 0, 
            "state": {
              "running": {
                "started_at": "Mon, 16 Oct 2017 10:44:32 GMT"
              }, 
              "terminated": null, 
              "waiting": null
            }
          }
        ], 
        "host_ip": "10.0.10.10", 
        "init_container_statuses": null, 
        "message": null, 
        "phase": "Running", 
        "pod_ip": "10.0.194.144", 
        "qos_class": "Burstable", 
        "reason": null, 
        "start_time": "Mon, 16 Oct 2017 10:44:30 GMT"
      }
    }
  }, 
  "kinds": {
    "Pod": ""
  }, 
  "relations": [
    {
      "source": "faba6189-b1ca-11e7-9e5e-0a4bee56cee8", 
      "target": "3a9d8e97-ad8e-11e7-994c-0a1c759dde8c"
    }, 
    {
      "source": "7ff0aa11-ad8c-11e7-994c-0a1c759dde8c", 
      "target": "7ee98cad-ad8c-11e7-91dd-0a573e877b3e"
    }, 
    {
      "source": "0eb5e85e-b25f-11e7-9e5e-0a4bee56cee8", 
      "target": "7ee98cad-ad8c-11e7-91dd-0a573e877b3e"
    }, 
    {
      "source": "ca8d4fa6-b25e-11e7-9e5e-0a4bee56cee8", 
      "target": "40d6cba5-ad8e-11e7-994c-0a1c759dde8c"
    }, 
    {
      "source": "fd561df2-b25e-11e7-9e5e-0a4bee56cee8", 
      "target": "7ea76904-ad8c-11e7-994c-0a1c759dde8c"
    }, 
    {
      "source": "d5d3271d-aff3-11e7-bf93-0a573e877b3e", 
      "target": "40d6cba5-ad8e-11e7-994c-0a1c759dde8c"
    }, 
    {
      "source": "7ff2bb48-ad8c-11e7-994c-0a1c759dde8c", 
      "target": "7ea76904-ad8c-11e7-994c-0a1c759dde8c"
    }
  ]
}
