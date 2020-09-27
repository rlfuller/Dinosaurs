
(function() {
    //****************** variables ************************************** */
    let currentHuman;

    //****************  constructer functions *****************************/
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

    /**
     * 
     */
    Dinosaur.prototype.compareDiet = function(human){
        //fix case so we can compare
        let dinoDiet = this.diet.charAt(0).toUpperCase() + this.diet.slice(1);
    
        let dietComparison = `You are a ${human.diet}. ${this.species} is a ${dinoDiet}.`

        if (human.diet === dinoDiet){
            dietComparison += `You eat the same sorts of things.`;
        } else {
            dietComparison += `You and ${this.species} eat different things.`;
        }
        
        return dietComparison;
    }

    /**
     * 
     */
    Dinosaur.prototype.compareHeight = function(human) {
        let heightComparison = "";

        let comparisonAddon = `by approximately ${Math.abs(this.height - human.height)} inches`;

        if (this.height - human.height > 0){
            heightComparison = `${this.species} is taller than you ${comparisonAddon}.`;
        } else {
            heightComparison = `You are taller than ${this.species} ${comparisonAddon}.`;
        }

        return heightComparison;
    }

    /**
     * 
     */
    Dinosaur.prototype.compareWeight = function(human) {
        let weightComparison = "";

        let comparisonAddOn = `You are ${human.weight}lbs and ${this.species}
            is ${this.weight}lbs.`

        if (this.weight - human.weight > 0){
            weightComparison = `${this.species} weights more than you. ` + comparisonAddOn;
        } else {
            weightComparison = `You weight more than ${this.species}.` + comparisonAddOn;
        }

        return weightComparison;
    }

    function Human(obj) {
        Animal.call(this, obj);
        this.species = "Human";
        this.name = obj.name;
    }

    Human.prototype = Object.create(Animal.prototype);
    Human.prototype.constructor = Human;

//*********************** helper functions *******************************//

   
    /**
     * 
     * @param {object} obj  Dinosaur object
     */
    const createComparison = (obj) => {

        let humanP = document.querySelector("#human > p");

        let diet = obj.compareDiet(currentHuman);
        let weight = obj.compareWeight(currentHuman);
        let height = obj.compareHeight(currentHuman);

        let text = `${diet} ${weight} ${height}`;

        //replace the text with the comparison
        humanP.innerHTML = text;

    }

    /**
     * @param {array of objects} dinoArray 
     */
    const generateHtmlDinosaurs = (dinoArray) => {
        let fragment = document.createDocumentFragment();

        dinoArray.forEach(dino => {

            //create div add a class and an id
            let div = document.createElement("div");
            div.classList.add("grid-item", "dinosaur");
            div.id = dino.species.toLowerCase().replace(/\s+/g, "-");

            div.innerHTML = `
                <h3>${dino.species}</h3>
                <img src="images/${dino.species.toLowerCase()}.png">
                <p>${dino.fact}</p>
            `;

            //assign a dinosaur property with value of the dino object
            div.dinosaur = dino;

            //add div to the fragment
            fragment.appendChild(div);
        });
        
        //add dinos to page
        document.getElementById("grid").appendChild(fragment);
    }
    
    /**
     * 
     * @param {obj} human 
     */
    const generateHtmlHuman = (human) => {
        let beforeSibling = document.querySelector("div.grid-item:nth-child(4)");
        let siblingDiv = document.createElement("div");
        siblingDiv.id = "human";
        siblingDiv.classList.add("grid-item");
        siblingDiv.innerHTML = `
                <h3>${human.name}</h3>
                <img src="images/human.png">
                <p>Click on a Dinosaur to see how you compare!</p>
            `;
        beforeSibling.insertAdjacentElement("afterend", siblingDiv);
    }

    /**
     * 
     */
    const getHumanFromForm = () => {

        let human = {};

        //name, height, weight, diet
        const ids = ["name", "feet", "inches", "weight", "diet"];
        ids.forEach(id => {
            human[id] = document.getElementById(id).value;
        });
        
        human.height = parseFloat(human.feet) * 12 + parseFloat(human.inches);
        human.weight = parseFloat(human.weight);

        return new Human(human);
    }

    /**
     * 
     */
    const getDinoData = () => {
        return fetch("http://localhost:5000/dino.json").then((response) => {
            if(!response.ok) {
                const msg = "Looks like there was a problem. Try again later.";
                throw new Error(msg);
            }
            return response.json();
        }).then((data) => {
            return data.Dinos.map(dino => new Dinosaur(dino));
        }).catch((err) => {
            console.log("error", err);
        });
    }

    //*********************** Event Listeners  ************************ */

    /**
     * This function will add a click event listener to each dinosaur grid. 
     * If the grid is clicked, then a comparison will occur between the human and the 
     * dinosaur that was clicked.
     */
    document.getElementById("grid").addEventListener("click", (e) => {
        
        let gridItem = e.target;
        while(!gridItem.classList.contains("grid-item")){
            gridItem = gridItem.parentNode;
        }
        if (gridItem.id === "human")
            return;

        createComparison(gridItem.dinosaur);
    })

    /**
     * This function adds a click event listener to the compare button. The
     * callback of the event listener will then read the dinosaurs from a file, create
     * objects from them and then call a method that creates html elements for them. 
     * 
     * The click for this element is the starting point for the infographic. 
     */
    document.getElementById("btn").addEventListener("click", () => {
        let formEl = document.getElementById("dino-compare");
        
        // -> get data from file
        getDinoData().then((dinoArray) => {
            // -> create dinosaur objects
            generateHtmlDinosaurs(dinoArray)
            // -> get human from form
            let human = getHumanFromForm();
            
            //assign the currentHuman so we can use the the object in 
            //our comparisons
            currentHuman = human;

            // -> create html elements for human
            generateHtmlHuman(human);
            // -> remove form
            formEl.remove();

        });
    });

})();