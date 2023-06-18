const questions = [
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
    


];

module.exports = questions;