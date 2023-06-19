class Shape{
    constructor(logoName, logoNameColor, shapeColor){
        this.logoName = logoName;
        this.logoNameColor = logoNameColor;
        this.shapeColor = shapeColor;
   
    }
};

class Triangle extends Shape{
    render(){
        return `<polygon height="100%" width="100%" points="100, 50 150, 100 200, 150" fill="${this.shapeColor}"/>`
    }
}

class Circle extends Shape{
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width"100%" fill="${this.shapeColor}"/>`
            
    }
}

class Square extends Shape{
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.shapeColor}"/>`
    }
};

module.exports = {Triangle, Circle, Square};