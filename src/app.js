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

//Human constructor
const Human = () => {

    let species = "";
    let name = "";
    let height = {
        feet: 0,
        inches: 0
    };
    let weight = 0;
    let diet = "";
    let image = "";

    return {
        getSpecies: function () {
            return species;
        },
        getName: function () {
            return name;
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
        getImage: function () {
            return image;
        },
        setSpecies: function (newValue) {
            species = newValue;
        },
        setName: function (newValue) {
            name = newValue;
        },
        setWeight: function (newValue) {
            weight = newValue;
        },
        setHeight: function (newFeet,newInches) {
            height.feet = newFeet;
            height.inches = newInches;
        },
        setDiet: function (newValue) {
            diet = newValue;
        },
        setImage: function (newValue) {
            image = newValue;
        },
    }

}

// Create Human Object
var humanObject = Human();

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
const compareHeight = (dinoObject, humanObject) => {

    const humanHeight = humanObject.getHeight();
    const humanInches = (humanHeight.feet * 12) + (humanHeight.inches)

    if (dinoObject.getHeight() > humanInches) {
        console.log(`Dino is taller than Human`)
    }
    if (dinoObject.getHeight() < humanInches) {
        console.log(`Dino is less tall than Human`)
    }
    if (dinoObject.getHeight() === humanInches) {
        console.log(`Dino is as tall as Human`)
    }

}


// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.


// On button click, prepare and display infographic
const submitBtn = document.getElementById("btn");

const submit = () => {

// Use IIFE to get human data from form
    (function getFormValues() {

        humanObject.setSpecies("Human");
        humanObject.setName(document.getElementById("name").value);
        humanObject.setWeight(parseInt(document.getElementById("weight").value));
        humanObject.setHeight(parseInt(document.getElementById("feet").value), parseInt(document.getElementById("inches").value));
        humanObject.setDiet(document.getElementById("diet").value);
        humanObject.setImage("human.png");

    })();

//Add human object to the fifth place
    shuffleDinosObjects.splice(4, 0, humanObject)

    var grid = document.getElementById("grid");

    compareHeight(shuffleDinosObjects[0], humanObject)
 
    for (let i = 0; i <= shuffleDinosObjects.length - 1; i++) {

 // Generate Tiles for each Dino in Array
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let img = document.createElement('img');

// Add tiles to DOM
        grid.appendChild(div);
        div.appendChild(h3);
        div.appendChild(img);
        div.appendChild(p);

        if (shuffleDinosObjects[i].getSpecies() !== "Human") {
            h3.textContent = shuffleDinosObjects[i].getSpecies()
            p.textContent = shuffleDinosObjects[i].getFact()
        }
        else {
            h3.textContent = shuffleDinosObjects[i].getName()
        }

        img.src = `./images/${shuffleDinosObjects[i].getImage()}`

        div.classList.add("grid-item");
    }

 // Remove form from screen
    var x = document.getElementById("dino-compare");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

submitBtn.onclick = submit;

