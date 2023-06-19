const {Circle, Square, Triangle} = require("./shapes");

function shapeRender(data) {
    switch (data.shapeForm) {
        case "triangle":
            const newTriangle = new Triangle (data.shapeColor, data.logoName, data.LogoNameColor);
            return newTriangle.render()
            break;
    
        case "square":
             const newSquare = new Square (data.shapeColor, data.logoName, data.LogoNameColor);
             return newSquare.render()
             break;    

        case "circle":
             const newCircle = new Circle (data.shapeColor, data.logoName, data.LogoNameColor);
             return newCircle.render()
            break;     

    }

    
}
module.exports = shapeRender;