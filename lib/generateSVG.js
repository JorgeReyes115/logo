const {Circle, Square, Triangle} = require("./shapes");
const shapeRender = require("./shapeRender.js");
const questions = require("./questions")



class SVG {
    constructor() {
      this.logoName = "";
      this.shapeForm = "";
    }
  
    render() {
      return `<svg version=“1.1” width=“300" height=“200” xmlns=“http://www.w3.org/2000/svg”>${this.shapeForm}${this.logoName}</svg>`;
    }
  
    setText(logoName, logoNameColor) {
        this.logoName = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${logoNameColor}">${logoName}</text>`

     
    }
  
    setShape(shape) {
      this.shapeForm = shape.render();
    }
  }
  

  module.exports = SVG;



