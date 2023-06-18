const  inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./lib/questions.js");
const shapeRender = require("./lib/shapeRender.js")


function createLogo(data) {
    fs.writeFile("./examples/logo.svg", shapeRender, ()=> console.log("logo.svg has been generated"));
}


function init(){
    inquirer
    .prompt(questions)
    .then((data)=>{
        createLogo(data);
    });
}


init();