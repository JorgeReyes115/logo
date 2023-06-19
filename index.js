const  inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./lib/questions.js");
const shapeRender = require("./lib/shapeRender.js")


inquirer
.prompt([
    {
        type: "input",
        name: "logoName",
        message: "please name your logo,(3) characters max"
    },
    {
        type: "input",
        name: "logoNameColor",
        message: "please choose your logo name color,(keyword or hexadecimal number}",
    },
    {
        type: "list",
        name: "shapeForm",
        message: "please choose the shape that you like the most",
        choices: ["circle", "triangle", "square"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "please choose your shape color,(keyword or hexadecimal number",
    },
])

.then((data)=>{
fs.writeFile("./examples/logo.svg",shapeRender(data),(err)=>{if(err){
    console.log(err);}});})


