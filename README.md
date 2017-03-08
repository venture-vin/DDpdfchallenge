#Instructions
Create an app for the DroneDeploy platform. The app should provide a button on the data page that will create a PDF of the map shown. For example:

https://www.dropbox.com/s/af50irnf2mrzhua/Screenshot%202016-12-09%2014.44.51.png?dl=0

When the button is clicked it should download a PDF that contains an image of the map being viewed. See http://developer.dronedeploy.com. 

#Challenges
* Ran into challenges with using some of the Tiles requests on the plans that are in the examples. Figured out that I needed to upload my own. 
* I then tried to use the following example from [Tiles](https://danielrasmuson.gitbooks.io/dronedeploy-apps/content/get_tiles.html) but kept getting issues with the Drone Deploy version.
* When setting up the backend server I couldn't debug the reason for it not working, I just kept getting 404 error and when I would try to run it locally it would time out
* I was having issues with the jsPDF library, so I ultimately decided to put in a solution that wouldn't need to use it. 
* If the server was working, I would be able to debug my solution further, as I would be able to know exactly what kind of response I am getting

#Solution 
* The backend server is located [here](https://github.com/venture-vin/DDbackend)
* I followed the Tiles example from [here](https://dronedeploy.gitbooks.io/dronedeploy-apps/content/tiles/example-tiles.get.html)
* I would refactor my code in order to follow the design guidelines for CSS, in the interest of time I tried to make it look as closely as the native layout without the guidelines

