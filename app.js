
    // Create Dino Constructor


    // Create Dino Objects


    // Create Human Object

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen
    document.getElementById("btn").addEventListener("click", function(){
        let formEl = document.getElementById("dino-compare");
        formEl.remove();
        getDinoData();
    });


// On button click, prepare and display infographic

const constructDinosaurs = (data) => {
    console.log(data);
    //also here, construct grid objects
}

const getDinoData = () => {
    fetch("http://localhost:5000/dino.json").then((response) => {
        if(!response.ok) {
            const msg = "Looks like there was a problem. Try again later.";
            throw new Error(msg);
        }
        return response.json();
    }).then((data) => {
        constructDinosaurs(data);
    }).catch((err) => {
        console.log("error", err);

    });
}