var button = $('#button');
const zoomVal = 16;
const layer = 'ortho';

// HELPER FUNCTIONS TO HELP GET ALL OF THE DATA TO FEED TO EVENT LISTENER

function getTiles(api, plan){
    return api.Tiles.get({
        planId: plan.id,
        layerName: layer,
        zoom: zoomVal
    });
}

function getAnnotations(api, plan){
    return api.Annotations.get(plan.id, {comments: true})
}

function sendRecTileInfo(geo, tileData, zoom, annotations){
    var body = {
        tiles: tileData.tiles,
        planGeometry: geo,
        zoomLvl: zoom,
        annotations: annotations,
};

// solution for the Blob parsing taken from here: http://stackoverflow.com/questions/21729451/pdf-blob-pop-up-window-not-showing-content

$.ajax({
    type: 'POST',
    url: 'https://powerful-escarpment-84106.herokuapp.com/',
    data: JSON.stringify(body),
    success: function(response){
        var file = new Blob([response], {type: 'application/pdf'});
        var fileURL = URL.createObjectURL(file);
        window.open(fileURL, '_blank')
    },
    error: function(){
        alert('Error saving image details')
    }
});


// FUNCTION TO ENCAPSULATE ALL HELPER FUNCTIONS ABOVE

function genPDF(){
    new DroneDeploy({version: 1}).then(function(dronedeployApi){
        return dronedeployApi.Plans.getCurrentlyViewed()
            .then(plan => getTiles(dronedeployApi, plan)
            .then(plan => getAnnotations(plan))
            .then(annotations => sendRecTileInfo(plan.geometry, tile, zoom, annotations))
        })
}


button.on("click", function(event){
    genPDF();
});

genPDF();




