import Dinos from './dino.json' assert {type: 'json'};
console.log(Dinos)

    // Create Dino Constructor
    const Dino = () => {

        let species = "";
        let weight = 0;
        let height = 0;
        let diet = "";
        let where = "";
        let when = "";
        let fact = "";

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

        }

    }

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


// On button click, prepare and display infographic

//Hide form
const submitBtn = document.getElementById("btn");

const submit = () => {
    var grid = document.getElementById("grid");
    for (let i = 1; i <= 9; i++) {
        let div = document.createElement('div')
        grid.appendChild(div)
        div.textContent = i
        div.classList.add("grid-item");
    }
    var x = document.getElementById("dino-compare");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

submitBtn.onclick = submit;

