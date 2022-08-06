import Dinos from './dino.json' assert {type: 'json'};

const dinos = [...Dinos.Dinos]

class Dino {

    constructor() {
        this.species = "";
        this.weight = 0;
        this.height = 0;
        this.diet = "";
        this.where = "";
        this.when = "";
        this.fact = "";
        this.image = "";
    }

    getSpecies=()=> {
        return this.species;
    }

    getWeight=()=> {
        return this.weight;
    }

    getHeight=()=> {
        return this.height;
    }

    getDiet=()=> {
        return this.diet;
    }

    getWhere=()=> {
        return this.where;
    }

    getWhen=()=> {
        return this.when;
    }

    getFact=()=> {
        return this.fact;
    }

    getImage=()=> {
        return this.image;
    }

    setSpecies=(newValue)=> {
        this.species = newValue;
    }

    setWeight=(newValue)=> {
        this.weight = newValue;
    }

    setHeight=(newValue)=> {
        this.height = newValue;
    }

    setDiet=(newValue)=> {
        this.diet = newValue;
    }

    setWhere=(newValue)=> {
        this.where = newValue;
    }

    setWhen=(newValue)=> {
        this.when = newValue;
    }

    setFact=(newValue)=> {
        this.fact = newValue;
    }

    setImage=(newValue)=> {
        this.image = newValue;
    }

}

let dinosObjects = []


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

// Create Dino Objects
dinos.forEach((element) => {

    const dino = new Dino();
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

let shuffleDinosObjects = shuffle(dinosObjects)

//Human constructor
class Human {

    constructor() {        
        this.species = "";
        this.name = "";
        this.height = {
            feet: 0,
            inches: 0
        };
        this.weight = 0;
        this.diet = "";
        this.image = "";
    }

    getSpecies=()=> {
        return this.species;
    }

    getName=()=> {
        return this.name;
    }

    getWeight=()=> {
        return this.weight;
    }

    getHeight=()=> {
        return this.height;
    }

    getDiet=()=> {
        return this.diet;
    }

    getImage=()=> {
        return this.image;
    }

    setSpecies=(newValue)=> {
        this.species = newValue;
    }

    setName=(newValue)=> {
        this.name = newValue;
    }

    setWeight=(newValue)=> {
        this.weight = newValue;
    }

    setHeight=(newFeet,newInches)=> {
        this.height.feet = newFeet;
        this.height.inches = newInches;
    }

    setDiet=(newValue)=> {
        this.diet = newValue;
    }

    setImage=(newValue)=> {
        this.image = newValue;
    }

}

// Create Human Object
const humanObject = new Human();

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareHeight (dinoObject, humanObject) {

    const humanHeight = humanObject.getHeight();
    const humanInches = (humanHeight.feet * 12) + (humanHeight.inches)

    if (dinoObject.getHeight() > humanInches) {
        return `Dino is taller than Human`;
    }

    if (dinoObject.getHeight() < humanInches) {
        return `Dino is less tall than Human`;
    }

    if (dinoObject.getHeight() === humanInches) {
        return `Dino is as tall as Human`;
    }

}

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareWeight(dinoObject, humanObject) {

    if (dinoObject.getWeight() > humanObject.getWeight()) {
        return `Dino is more heavy than Human`;
    }

    if (dinoObject.getWeight() < humanObject.getWeight()) {
        return `Dino is less heavy than Human`;
    }

    if (dinoObject.getWeight() === humanObject.getWeight()) {
        return `Dino is as heavy as Human`;
    }

}

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareDiet(dinoObject, humanObject) {

    if ((dinoObject.getDiet()==='herbavor') && (dinoObject.getDiet()).toUpperCase() === (humanObject.getDiet()).toUpperCase()) {
        return `Dino and Human likes only vegetables`;
    }

    if ((dinoObject.getDiet() === 'carnivor') && (dinoObject.getDiet()).toUpperCase() === (humanObject.getDiet()).toUpperCase()) {
        return `Dino and Human likes only meat`;
    }

    if ((dinoObject.getDiet() === 'omnivor') && (dinoObject.getDiet()).toUpperCase() === (humanObject.getDiet()).toUpperCase()) {
        return `Dino and Human likes hamburgers`;
    }

}

// On button click, prepare and display infographic
const submitBtn = document.getElementById("btn");

document.getElementById('name').validity.valid

const submit = () => {

    //Validation form
    if ((document.getElementById("name").value).trim() === "")
    {
        alert("Please enter your name.");
        return;
    }

    if (parseInt(document.getElementById("weight").value) <= 0 || (isNaN(parseInt(document.getElementById("weight").value)))) {
        alert("Please enter your weight.");
        return;
    }

    if (parseInt((document.getElementById("feet").value)) <= 0 || (isNaN(parseInt((document.getElementById("feet").value))))) {
        alert("Please enter the feet of your height.");
        return;
    }

    if (parseInt((document.getElementById("inches").value)) <= 0 || (isNaN(parseInt((document.getElementById("inches").value))))) {
        alert("Please enter the inches of your height.");
        return;
    }

    if ((document.getElementById("diet").value).trim() === "") {
        alert("Please enter your diet.");
        return;
    }


// Use IIFE to get human data from form
    (function getFormValues() {

        humanObject.setSpecies("Human");
        humanObject.setName(document.getElementById("name").value);
        humanObject.setWeight(parseInt(document.getElementById("weight").value));
        humanObject.setHeight(parseInt(document.getElementById("feet").value), parseInt(document.getElementById("inches").value));
        humanObject.setDiet(document.getElementById("diet").value);
        humanObject.setImage("human.png");

    })();

    //Add compareHeight result to dino's fact
    shuffleDinosObjects.forEach((element) => {

        let compareResult = "";
        if (element.getSpecies() != "Pigeon") {
            compareResult = compareHeight(element, humanObject)
            element.fact.push(compareResult)
            //Setting a shuffle fact to dino
            element.setFact(shuffle(element.fact)[0]);
        }

    })

//Add human object to the fifth place
    shuffleDinosObjects.splice(4, 0, humanObject)

    let grid = document.getElementById("grid");

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
    let x = document.getElementById("dino-compare");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

submitBtn.onclick = submit;

