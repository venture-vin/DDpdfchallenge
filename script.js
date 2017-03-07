dronedeploy.onload(function(){

  const zoom = document.querySelector('#zoomLevel');
  const layer = document.querySelector('#layerName');
  const tileList = document.querySelector('.tile-links');

  function dronedeployApiReady(){
    return new Promise((resolve) => {
      window.dronedeploy.onload(() => {
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

});
