const {triangle, Circle, Square, Triangle} = require("./shapes");

function shapeRender(shapeForm, shapeColor) {
    switch (shapeForm) {
        case "triangle":
            const newTriangle = new Triangle (data.shapeColor, data.logoName, data.LogoNameColor)
            break;
        
        case "Square":
             const newSquare = new Square (data.shapeColor, data.logoName, data.LogoNameColor)
             break;    

        case "triangle":
             const newCircle = new Circle (data.shapeColor, data.logoName, data.LogoNameColor)
            break;     

    }

}
module.exports = shapeRender;