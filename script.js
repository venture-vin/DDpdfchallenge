// var $ = document.querySelector.bind(document);
var leafletLayerImages = $('.leaflet-layer').childNodes[1]

// new DroneDeploy({ version: 1 })
//   .then(function(dronedeployApi) {
//     });
//   });

    var button = $("#button")
    button.addEventListener("click", function(){
      console.log("clicked!")
      genPDF()

function genPDF() {
  html2canvas(leafletLayerImages, {
    onrendered: function(canvas) {
      var img = canvas.toDataURL("img/png");
      var doc = new jsPDF();
      doc.addImage(img, 'JPEG', 20, 20);
      doc.save('test.pdf')
    }
  })
}


  // const zoom = 16;
  // const layerName = 'ortho';

  // function dronedeployApiReady(){
  //   return new Promise((resolve) => {
  //     window.dronedeploy.onload(() => {
  //       resolve();
  //     });
  //   });
  // }

  // function getCurrentPlanId(){
  //   return new Promise((resolve) => {
  //     window.dronedeploy.Plans.getCurrentlyViewed()
  //     .subscribe((plan) => resolve(plan.id));
  //   });
  // }
  // // function getTiles(planId, layerName, zoom){
  // //   return new Promise((resolve) => {
  // //     window.dronedeploy.Tiles.get({planId, layerName, zoom})
  // //     .subscribe((tilesRes) => resolve(tilesRes.tiles));
  // //   });
  // // }

  // function getTiles(planId, layerName, zoom){
  //   return new Promise((resolve) => {
  //     window.dronedeployApi.Tiles.get({planId, layerName, zoom})
  //     .then(function(tileInformation) {console.log(tileInformation)});
  //   });
  // }





// });
