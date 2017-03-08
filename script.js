var button = $("#button");
const API = new DroneDeploy({version: 1});
const zoomVal = 16;
const layer = 'ortho';

// HELPER FUNCTIONS TO HELP GET ALL OF THE DATA TO FEED TO EVENT LISTENER

// function dronedeployApiReady(){
//   return new Promise((resolve) => {
//     dronedeploy.onload(() => {
//       resolve();
//     });
//   });
// }

// function getCurrentPlanId(){
//   return new Promise((resolve) => {
//     window.dronedeploy.Plans.getCurrentlyViewed()
//       .subscribe((plan) => resolve(plan.id));
//   });
// }

function getTiles(planId, api){
  return api.Tiles.get({planId: planId.id, layerName: layer, zoom: zoomVal});
}

function getAnnotations(planId){

    window.dronedeploy.Annotations.get({planId})

}

function sendTileInfo(geo, tileData, zoom, annotations){
  var body = {
    tiles: tileData.tiles,
    planGeometry: geo,
    zoomLvl: zoom,
    annotations: annotations
  };

  return $.get('https://powerful-escarpment-84106.herokuapp.com/', function(data){
    console.log("Data: " + data);
    body: JSON.stringify(body);
  });

}

function handleResponse(res){
  return res.blob();
  console.log(res.blob);
}


// Got sources from https://developer.mozilla.org/en-US/docs/Web/API/FileReader
function readBlob(blob){
  return new Promise ((resolve) => {
    var reader = new FileReader();
    reader.onload = () => resolve(reader);
    reader.readAsBinaryString(blob);
  })
}

// Use jsPDF based on documentation here: http://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html
function downloadPDF(reader) {
  var doc = new jsPDF();
  doc.addImage(img, 'JPEG', 20, 20);
  doc.save('MAP.pdf')
};

// FUNCTION TO ENCAPSULATE ALL HELPER FUNCTIONS ABOVE

function genPDF(){

  API.then(function(dronedeployApi){
        return dronedeployApi.Plans.getCurrentlyViewed()
        .then(function(plan){
          return fetchTileDataFromPlan(dronedeployApi, plan);
       });
    })
    .then(planId => getTiles(planId, layerName, zoom))
    .then(planId => getAnnotations(planId))
    .then(annotations => sendTileInfo(plan.geometry, tile, zoom, annotations))
    .then(response => handleResponse(response))
    .then(reader => downloadPDF)
}

button.on("click", function(event){
  console.log("clicked!", event);
  genPDF()
});

genPDF();




