import Dinos from './dino.json' assert {type: 'json'};

const dinos = [...Dinos.Dinos]

// Create Dino Constructor
const Dino = () => {

    let species = "";
    let weight = 0;
    let height = 0;
    let diet = "";
    let where = "";
    let when = "";
    let fact = "";
    let image = "";

    return {
        getSpecies: function () {
            return species;
        },
        getWeight: function () {
            return weight;
        },
        getHeight: function () {
            return height;
        },
        getDiet: function () {
            return diet;
        },
        getWhere: function () {
            return where;
        },
        getWhen: function () {
            return when;
        },
        getFact: function () {
            return fact;
        },
        getImage: function () {
            return image;
        },
        setSpecies: function (newValue) {
            species = newValue;
        },
        setWeight: function (newValue) {
            weight = newValue;
        },
        setHeight: function (newValue) {
            height = newValue;
        },
        setDiet: function (newValue) {
            diet = newValue;
        },
        setWhere: function (newValue) {
            where = newValue;
        },
        setWhen: function (newValue) {
            when = newValue;
        },
        setFact: function (newValue) {
            fact = newValue;
        },
        setImage: function (newValue) {
            image = newValue;
        },
    }

}

var dinosObjects = []

// Create Dino Objects
dinos.forEach((element) => {

    let dino = Dino();
    dino.setSpecies(element.species);
    dino.setWeight(element.weight);
    dino.setHeight(element.height);
    dino.setDiet(element.diet);
    dino.setWhere(element.where);
    dino.setWhen(element.when);
    dino.setFact(element.fact);
    dino.setImage(element.image);
    dinosObjects.push(dino)

})



//Method for shuffling array of objects
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];

        // Swap
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

let shuffleDinosObjects = shuffle(dinosObjects)

let humanObject = Dino();

humanObject.setSpecies("Human")

shuffleDinosObjects.splice(4, 0, humanObject)

/*console.log(shuffleDinosObjects)*/


//shuffleDinosObjects.foreach((dino) => {
//    console.log(dino.getImage())
//    //console.log(dino.getdiet())
//    //console.log(dino.getheight())

//})



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


// On button click, prepare and display infographic

//Hide form
const submitBtn = document.getElementById("btn");

const submit = () => {

    var grid = document.getElementById("grid");

    for (let i = 0; i <= shuffleDinosObjects.length - 1; i++) {

        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let img = document.createElement('img');

        grid.appendChild(div);
        div.appendChild(h3);
        div.appendChild(img);
        div.appendChild(p);
        
        h3.textContent = shuffleDinosObjects[i].getSpecies()
        console.log(shuffleDinosObjects[i].getImage())
        img.src = `./images/${shuffleDinosObjects[i].getImage()}`
        p.textContent = shuffleDinosObjects[i].getFact()

        div.classList.add("grid-item");
        //h3.classList.add("grid-item");
        //p.classList.add("grid-item");
        /*div.classList.add("grid-item");*/
    }
    var x = document.getElementById("dino-compare");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

submitBtn.onclick = submit;

