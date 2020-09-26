
    // Create Dino Constructor
    function Dinosaur(dinoObject){
        this.species = dinoObject.species;
        this.weight = dinoObject.weight;
        this.height = dinoObject.height;
        this.where = dinoObject.where;
        this.when = dinoObject.when;
        this.fact = dinoObject.fact;
    }


    // Create Dino Objects
    function constructDinosaurs(dinoArray){
        dinoArray.array.forEach(dino => {
            new Dinosaur(dino);
            console.log
        });
    }

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

        let fragment = document.createDocumentFragment();

        //create div
        let div = document.createElement("div")
        let divAtt = document.createAttribute("class");
        divAtt.value = "grid-item";
        div.setAttribute(divAtt);

        //create h3
        let h3 = document.createElement("h3");
        let h3Text = document.createTextNode(`${obj.species}`);
        h3.appendChild(h3Text);

        //create image
        let img = document.createElement("img");
        let imgAtt = document.createAttribute("src");
        imgAtt.value = `images/${obj.species}.png`;
        img.setAttribute = imgAtt;
        

        //create p
        let p = document.createElement("p");
        let pText = document.createTextNode(`${obj.fact}`);
        p.appendChild(pText);

        //add elements to the div
        div.appendChild(h3);
        div.appendChild(img);
        div.appendChild(p);

        //add div to the fragment
        fragment.appendChild(div);

        /*
        <div class="grid-item">
            <h3>Anklyosaurus</h3>
            <img src="images/anklyosaurus.png">
            
            <p>Anklyosaurus survived for approximately 135 million years.</p>

            <p>Chester is a foo!</p>
        </div>
        */



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
    //get the main tag id=grid
    //loop through the objects
    //create a div, inside the div should be
    //h3, img, p
    //the images are not in the json
    //so get the species val, make itlower case
    //construt an image tag 
    
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