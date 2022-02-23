require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "esri/widgets/Legend",
      "esri/widgets/LayerList",
      "dojo/domReady!"
 ], function(WebScene, SceneView, Camera, Home, Legend, LayerList) 
      {
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"786548296cd545b2b23ac6ddd2437af2" 
        }
      });
      
  // USA
      var camera = new Camera({
       position: [
           -95.7129, // lon
          37.0902, // lat
          10000000// elevation in meters
        ],
        tilt:0,
        heading: 0
      })
// California
     var camera2 = new Camera({
        position: [
          -119.4179,
          36.7783,
          3400000
        ],
        tilt: 0,
        heading: 0
      })
      
      // Texas
      var camera3 = new Camera({
        position: [
          -99.9018,
          31.9686,
          3500000
        ],
        tilt:0,
        heading: 0
      })
      
      // Mississippi
      var camera4 = new Camera({
        position: [
           -89.3985,
           32.3547,
           2500000
        ],
        tilt:0,
        heading: 0
      })

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"global",
        camera: camera,
        environment: {
            lighting: {
              directShadowsEnabled: false,
              // don't update the view time when user pans.
              // The clock widget drives the time
              cameraTrackingEnabled: true
            }
        },
    });
    
    var homeBtn = new Home({
        view: view
      });

      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");

view.when(function() {
	
          // get the first layer in the collection of operational layers in the WebMap
          // when the resources in the MapView have loaded.
        var featureLayer1 = scene.layers.getItemAt(0);
        var featureLayer2 = scene.layers.getItemAt(1);

        var legend1 = new Legend({
          view: view,
          layerInfos: [{
            layer: featureLayer1,
            title: ""
          }]
        });
  
  var legend2 = new Legend({
          view: view,
          layerInfos: [{
            layer: featureLayer2,
            title: ""
          }]
        });
  
    var layerList = new LayerList({
  view: view
});

  view.ui.add(legend1, "bottom-left");
  view.ui.add(legend2, "top-right");
view.ui.add(layerList, "bottom-right");
    
    [CA, TX, MS].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'top-left');
    });

    CA.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera2
      });
    });
    
    TX.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera3
      });
    });
    
   
   MS.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera4
      });
   });
});
});
