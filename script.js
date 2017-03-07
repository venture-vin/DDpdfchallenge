// var $ = document.querySelector.bind(document);

var button = $("#button")
const zoom = 16;
const layerName = 'ortho';
const API = new DroneDeploy({version: 1});


function genPDF() {
  API
  .then(api => getCurrentPlanId(api)
  .then(plan => getTiles(api, plan)
  .then(tile => getAnnotations(api, plan)
  .then(annotations => sendTileInfo(plan.geometry, tile, annotations)
  .then(response => handleResponse(response)
  .then(responseBlob => handleBlob(responseBlob)
  .then(reader => downloadPDF(reader))))))));
}

function getCurrentPlanId(API){
  return window.dronedeploy.Plans.getCurrentlyViewed();
  console.log(plan);
}

function getTiles(plan){
  tileInformation = window.dronedeploy.Tiles.get({planId: plan.id, layerName: layerName, zoom: zoom}
  console.log(tileInformation);
  return tileInformation
}


button.on("click", function(event){
  console.log("clicked!", event)
// genPDF()
});

function sendTileInfo(){
  $.post("")
}

// Got sources from https://developer.mozilla.org/en-US/docs/Web/API/FileReader

function readBlob(blob){
  return new Promise ((resolve) => {
    var reader = new FileReader();
    reader.onload = () => resolve(reader);
    reader.readAsBinaryString(blob);
  })
}

function downloadPDF() {
  var doc = new jsPDF();
  doc.addImage(img, 'JPEG', 20, 20);
  doc.save('MAP.pdf')
};

