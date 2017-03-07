// var $ = document.querySelector.bind(document);

var button = $("#button")

new DroneDeploy({ version: 1 })
  .then(function(api) {
    // console.log('DroneDeploy Api: ', api);
    button.on("click", function(event){
      console.log("clicked!", event)
    genPDF()
  });
});

function genPDF() {
  html2canvas(leafletLayerImages, {
    onrendered: function(canvas) {
      var img = canvas.toDataURL("img/png");
      var doc = new jsPDF();
      doc.addImage(img, 'JPEG', 20, 20);
      doc.save('test.pdf')
    }
  })
};

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

  // const zoom = 16;
  // const layerName = 'ortho';

  // function dronedeployApiReady(){
  //   return new Promise((resolve) => {
  //     window.dronedeploy.onload(() => {
  //       resolve();
  //     });
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
