
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

function getDinoData(){
    fetch("http://localhost:3000/Dinos")
        .then(
            function(response){
                if(response.status !== 200){
                    console.log("Looks like there was a problem. Try again later.");
                    //insert into the dom a sorry
                    return;
                }

                //do something
                response.json().then(function(data){
                    console.log(data);
                    //also here, construct grid objects
                });
            }
        )
        .catch(function(err){
            console.log("error", err);
            //also insert into a dom a sorry
        });
}