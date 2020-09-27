
(function() {
    function Animal(obj) {
        this.species = obj.species;
        this.weight = obj.weight;
        this.height = obj.height;
        this.diet = obj.diet;
    }

    // Create Dino Constructor
    function Dinosaur(obj) {
        Animal.call(this, obj);
        this.where = obj.where;
        this.when = obj.when;
        this.fact = obj.fact;
    }
    Dinosaur.prototype = Object.create(Animal.prototype);
    Dinosaur.prototype.constructor = Dinosaur;


    // Create Human Object

    function Human(obj) {
        Animal.call(this, obj);
        this.species = "Human";
        this.name = obj.name;
    }

    Human.prototype = Object.create(Animal.prototype);
    Human.prototype.constructor = Human;
    // Use IIFE to get human data from form


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM
    const generateHtmlDinosaurs = (dinoArray) => {
        let fragment = document.createDocumentFragment();
        console.log("rachel: ", dinoArray);
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
        
    const generateHtmlHuman = (human) => {
        let beforeSibling = document.querySelector("div.grid-item:nth-child(4)");
        let siblingDiv = document.createElement("div");
        siblingDiv.classList.add("grid-item");
        siblingDiv.innerHTML = `
                <h3>${human.name}</h3>
                <img src="images/human.png">
            `;
        beforeSibling.insertAdjacentElement("afterend", siblingDiv);
    }


    // Remove form from screen
    document.getElementById("btn").addEventListener("click", function(){
        let formEl = document.getElementById("dino-compare");
        
        
        // -> get data from file
        getDinoData().then((dinoArray) => {
            // -> create dinosaur objects
            generateHtmlDinosaurs(dinoArray)
            // -> get human from form
            let human = getHumanFromForm();
        
            
            // -> create html elements for human
            generateHtmlHuman(human);
            // -> remove form
            formEl.remove();
            // -> append to html site
        });
    });


// On button click, prepare and display infographic

    const constructDinosaurs = (dinos) => {
        console.log(dinos);

        return dinos.map(dino => {
            return new Dinosaur(dino);
        });
    }

    const getDinoData = () => {
        return fetch("http://localhost:5000/dino.json").then((response) => {
            if(!response.ok) {
                const msg = "Looks like there was a problem. Try again later.";
                throw new Error(msg);
            }
            return response.json();
        }).then((data) => {
            return constructDinosaurs(data.Dinos);
        })/*.catch((err) => {
            console.log("error", err);

        })*/;
    }

    const getHumanFromForm = () => {

        let human = {};

        //name, height, weight, diet
        const ids = ["name", "feet", "inches", "weight", "diet"];
        ids.forEach(id => {
            human[id] = document.getElementById(id).value;
        });
        
        human.height = parseFloat(human.feet) / 12 + parseFloat(human.inches);
        human.weight = parseFloat(weight);

        return new Human(human);
    }

})();