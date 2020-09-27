# Dinosaurs
Small project that builds an infographic using object oriented javascript. Dinosaur data is read from a json file. This data is then presented to the user in a grid. A form will
ask the user to enter some information about themselves.  Once the form is submitted, an infographic will be created containing both the form data and the dinosaur data. 

## How to Install
1. Clone or download the repository on github here [https://github.com/rlfuller/dinosaurs](https://github.com/rlfuller/dinosaurs)
2. You will need a server running to fetch the json data. This repository uses serve. You can install this by running `npm init` once the repository is downloaded or use another file server that you choose. The application assumes that serve will be running on port 5000. If this is not the case, then you should adjust the fetch call in app.js with the correct port number. 
3. To start serve, use the command `npx serve`. This will serve the index.html so at this point, you should be able to go to localhost:<portnumber> (ex: http://localhost:5000 ) in the browser. 

### License

MIT License