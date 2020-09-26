
    function Animal(obj) {
        this.species = dinoObject.species;
        this.weight = dinoObject.weight;
        this.height = dinoObject.height;
        this.diet = dinoObject.diet;
    }

    // Create Dino Constructor
    function Dinosaur(dinoObject) {
        this.where = dinoObject.where;
        this.when = dinoObject.when;
        this.fact = dinoObject.fact;
    }
    Dinosaur.prototype = Object.create(Animal.prototype);

    // Create Dino Objects
    function constructDinosaurs(dinoArray){
        return dinoArray.map(dino => {
            return new Dinosaur(dino);
        });
    }

    // Create Human Object

    function Human(obj) {
        this.name = obj.name;
        this.height = obj.height;
        this.
    }

    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM
    const generateHtmlDinosaurs = (dinoArr) => {
        let fragment = document.createDocumentFragment();

        dinoArray.forEach(dino => {

            //create div add a class and an id
            let div = document.createElement("div");
            div.classList.add("grid-item");
            div.id = dino.species.toLowerCase().replace(/\s+/g, "-");

            div.innerHTML = `
                <h3>${dino.species}</h3>
                <img src="images/${dino.species.toLowerCase()}.png">
                <p>${dino.fact}</p>
            `;

            //add div to the fragment
            fragment.appendChild(div);
        });
        
        //add dinos to page
        document.getElementById("grid").appendChild(fragment);
    }
        



    // Remove form from screen
    document.getElementById("btn").addEventListener("click", function(){
        let formEl = document.getElementById("dino-compare");
        formEl.remove();
        getDinoData();
    });


// On button click, prepare and display infographic

const constructDinosaurs = (dinos) => {
    console.log(data);
    //also here, construct grid objects
    //get the main tag id=grid
    //loop through the objects
    //create a div, inside the div should be
    //h3, img, p
    //the images are not in the json
    //so get the species val, make itlower case
    //construt an image tag 
    return dinoArray.map(dino => {
        return new Dinosaur(dino);
    });
    
}

const getDinoData = () => {
    fetch("http://localhost:5000/dino.json").then((response) => {
        if(!response.ok) {
            const msg = "Looks like there was a problem. Try again later.";
            throw new Error(msg);
        }
        return response.json();
    }).then((data) => {
        constructDinosaurs(data.Dinos);
    }).catch((err) => {
        console.log("error", err);

    });
}