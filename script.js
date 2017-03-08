var button = $("#button");
var api = new DroneDeploy({version: 1});
const zoom = 16;
const layerName = 'ortho';

// HELPER FUNCTIONS TO HELP GET ALL OF THE DATA TO FEED TO EVENT LISTENER

function dronedeployApiReady(){
  return new Promise((resolve) => {
    dronedeploy.onload(() => {
      resolve();
    });
  });
}

function getCurrentPlanId(){
  return new Promise((resolve) => {
    window.dronedeploy.Plans.getCurrentlyViewed()
      .subscribe((plan) => resolve(plan.id));
  });
}

function getTiles(planId, layerName, zoom){
  return new Promise((resolve) => {
    window.dronedeploy.Tiles.get({planId, layerName, zoom})
      .subscribe((tilesRes) => resolve(tilesRes.tiles));
  });
}

function getAnnotations(planId){
  return new Promise((resolve) => {
    window.dronedeploy.Annotations.get({planId})
  });
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
  dronedeployApiReady()
    .then(getCurrentPlanId)
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




