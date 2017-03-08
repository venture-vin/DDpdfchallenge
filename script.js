var button = $("#button");
const zoom = 16;
const layerName = 'ortho';
const API = new DroneDeploy({version: 1});



  API
  .then(function(ddApi){
    return getCurrentPlanId(ddApi)
  }
    // .then(plan => api.Tiles.get({planId: plan.id,layerName: layerName, zoom: zoom})
  // .then(tile => getAnnotations(api, planId)
  // .then(annotations => sendTileInfo(plan.geometry, tileData, annotations)
  // .then(response => handleResponse(response)
  // .then(responseBlob => handleBlob(responseBlob)
  // .then(reader => downloadPDF(reader))))))));


// function getCurrentPlanId(api){
//   return api.Plans.getCurrentlyViewed();
//   console.log(api.Plans.getCurrentlyViewed());
// }

// function getTiles(api, plan){
//   tileInformation = api.Tiles.get({planId: plan.id, layerName: layerName, zoom: zoom};
//   console.log(tileInformation);
//   return tileInformation
// }

// function getAnnotations(api, planId){
//   api.Annotations.get(planId.id)
//    .then(function(annotations){ console.log(annotations) })
// }

// button.on("click", function(event){
//   console.log("clicked!", event)
// // downloadPDF()
// });

// function sendTileInfo(geo, tileData, annotations){
//   var body = {
//     tiles: tileResponse.tiles
//   }
// }

// $.get("https://powerful-escarpment-84106.herokuapp.com/tileUrl/", function(data){
//   console.log("Data: "data);
// })
// // Got sources from https://developer.mozilla.org/en-US/docs/Web/API/FileReader

// function readBlob(blob){
//   return new Promise ((resolve) => {
//     var reader = new FileReader();
//     reader.onload = () => resolve(reader);
//     reader.readAsBinaryString(blob);
//   })
// }

// // Use jsPDF based on documentation here: http://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html

// function downloadPDF() {
//   var doc = new jsPDF();
//   doc.addImage(img, 'JPEG', 20, 20);
//   doc.save('MAP.pdf')
// };

