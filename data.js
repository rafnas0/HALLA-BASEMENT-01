var APP_DATA = {
  "scenes": [
    {
      "id": "0-basement-parking",
      "name": "BASEMENT PARKING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3116418928398474
      },
      "linkHotspots": [
        {
          "yaw": 1.2011243032796273,
          "pitch": 0.011461019513696158,
          "rotation": 0,
          "target": "1-main-entrance"
        },
        {
          "yaw": 0.7135246705814211,
          "pitch": 0.03642947704806332,
          "rotation": 0,
          "target": "8-stair--lift"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-main-entrance",
      "name": "MAIN ENTRANCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3116418928398474
      },
      "linkHotspots": [
        {
          "yaw": -0.008882078523772208,
          "pitch": -0.04659655550076103,
          "rotation": 0,
          "target": "3-diwaniya"
        },
        {
          "yaw": -1.3490252912367051,
          "pitch": 0.03986259885338583,
          "rotation": 0,
          "target": "8-stair--lift"
        },
        {
          "yaw": -0.015542796787524793,
          "pitch": 0.20575571808649862,
          "rotation": 0,
          "target": "2-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-lobby",
      "name": "LOBBY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3116418928398474
      },
      "linkHotspots": [
        {
          "yaw": -0.30515742311836647,
          "pitch": 0.23987186832418672,
          "rotation": 0,
          "target": "3-diwaniya"
        },
        {
          "yaw": 0.054606083874338296,
          "pitch": 0.0044926708002481774,
          "rotation": 0,
          "target": "5-outdoor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-diwaniya",
      "name": "DIWANIYA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3116418928398474
      },
      "linkHotspots": [
        {
          "yaw": 0.30545414849456876,
          "pitch": 0.08030295709183122,
          "rotation": 0,
          "target": "5-outdoor"
        },
        {
          "yaw": -0.6251340770287221,
          "pitch": -0.05755663398899635,
          "rotation": 0,
          "target": "4-guest-wash"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-guest-wash",
      "name": "GUEST WASH",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3116418928398474
      },
      "linkHotspots": [
        {
          "yaw": 0.043331012018489545,
          "pitch": 0.14605386785931707,
          "rotation": 0,
          "target": "3-diwaniya"
        },
        {
          "yaw": 1.5704715266743072,
          "pitch": 0.014761854091112525,
          "rotation": 0,
          "target": "0-basement-parking"
        },
        {
          "yaw": -0.24421756167297737,
          "pitch": 0.03867737722593034,
          "rotation": 0,
          "target": "5-outdoor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-outdoor",
      "name": "OUTDOOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -3.032338073621748,
        "pitch": -0.03785402288137263,
        "fov": 1.3116418928398474
      },
      "linkHotspots": [
        {
          "yaw": -3.0015176686780016,
          "pitch": 0.1974318199745042,
          "rotation": 0,
          "target": "6-outdoor-2"
        },
        {
          "yaw": 3.0730513455661495,
          "pitch": 0.006425537344586729,
          "rotation": 0,
          "target": "7-outdoor-3"
        },
        {
          "yaw": 0.6969830279494715,
          "pitch": 0.08854869431515411,
          "rotation": 0,
          "target": "3-diwaniya"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-outdoor-2",
      "name": "OUTDOOR 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3116418928398474
      },
      "linkHotspots": [
        {
          "yaw": -0.29938326289707895,
          "pitch": 0.14121468606109033,
          "rotation": 0,
          "target": "7-outdoor-3"
        },
        {
          "yaw": 2.994796382917844,
          "pitch": 0.2597434087708166,
          "rotation": 0,
          "target": "5-outdoor"
        },
        {
          "yaw": 3.0078809880785817,
          "pitch": -0.013928273386465406,
          "rotation": 0,
          "target": "10-storage-under-ramp"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-outdoor-3",
      "name": "OUTDOOR 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.978933236659982,
          "pitch": 0.027676447429669793,
          "rotation": 0,
          "target": "5-outdoor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-stair--lift",
      "name": "STAIR & LIFT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3116418928398474
      },
      "linkHotspots": [
        {
          "yaw": 0.006661635999975601,
          "pitch": 0.03551352252921802,
          "rotation": 0,
          "target": "4-guest-wash"
        },
        {
          "yaw": -0.04114210768446824,
          "pitch": 0.40443664710064375,
          "rotation": 0,
          "target": "9-stair--lift-lobby"
        },
        {
          "yaw": 1.2777607344784307,
          "pitch": 0.002780713309306293,
          "rotation": 0,
          "target": "1-main-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-stair--lift-lobby",
      "name": "STAIR & LIFT LOBBY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3116418928398474
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "0-basement-parking"
        },
        {
          "yaw": -2.9273090658287373,
          "pitch": 0.006464917845343976,
          "rotation": 0,
          "target": "4-guest-wash"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-storage-under-ramp",
      "name": "STORAGE UNDER RAMP",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3116418928398474
      },
      "linkHotspots": [
        {
          "yaw": 2.351302775864557,
          "pitch": 0.16507506248565207,
          "rotation": 0,
          "target": "5-outdoor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
