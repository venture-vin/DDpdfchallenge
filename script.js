var button = $("#button");
const zoomVal = 16;
const layer = 'ortho';

// HELPER FUNCTIONS TO HELP GET ALL OF THE DATA TO FEED TO EVENT LISTENER

function getPlanId(){
  new DroneDeploy({version: 1})
  .then(function(dronedeployApi){
    // console.log(dronedeployApi.Plans.getCurrentlyViewed());
    return dronedeployApi.Plans.getCurrentlyViewed();
  });
}

function getTiles(api, plan){
  return api.Tiles.get({
    planId: plan.id,
    layerName: layer,
    zoom: zoomVal
  });
}

function sendTileInfo(geo, tileData, zoom, annotations){
  var body = {
    tiles: tileData.tiles,
    planGeometry: geo,
    zoomLvl: zoom,
    annotations: annotations,
  };

  $.ajax({
    type: "POST",
    url: 'https://powerful-escarpment-84106.herokuapp.com/',
    data: JSON.stringify(body),
    success: function(response){
        console.log(response)
    },
    error: function(){
        alert('Error saving image details')
    }
  });

// // Got sources from https://developer.mozilla.org/en-US/docs/Web/API/FileReader
// function readBlob(blob){
//   return new Promise ((resolve) => {
//     var reader = new FileReader();
//     reader.onload = () => resolve(reader);
//     reader.readAsBinaryString(blob);
//   })
// }

// // Use jsPDF based on documentation here: http://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html
// function downloadPDF(reader) {
//   var doc = new jsPDF();
//   doc.addImage(img, 'JPEG', 20, 20);
//   doc.save('MAP.pdf')
// };

// FUNCTION TO ENCAPSULATE ALL HELPER FUNCTIONS ABOVE


function genPDF(){
  new DroneDeploy({version: 1}).then(function(dronedeployApi){
    return dronedeployApi.Plans.getCurrentlyViewed().then(function(plan){
      return getTiles(dronedeployApi, plan);
    });
  })
    .then(planId => getAnnotations(planId))
    .then(annotations => sendTileInfo(plan.geometry, tile, zoom, annotations))
    .then(response => handleResponse(response))
    .then(reader => downloadPDF)
}


button.on("click", function(event){
  console.log("clicked!", event);
  console.log(plan);
  console.log(tileData)
});

genPDF();




