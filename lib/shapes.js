class Shapes {
    constructor(text, color, textColor) {
        this.text = text;
        this.color = color;
        this.textColor = textColor;
    }
}

class Circle extends Shapes {
    constructor(text, color, textColor) {
        super(text, color, textColor)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${this.color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">"${this.text}"</text>

</svg>`
    }
}

  
class Square extends Shapes {
    constructor(text, color, textColor) {
        super(text, color, textColor)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect x="90" y="40" width="120" height="120" fill="${this.color}" />
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">"${this.text}"/text>
        
        </svg>`
    }
}

class Triangle extends Shapes {
    constructor(text, color, textColor) {
        super(text, color, textColor)
    }
    render() {
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150,18 244, 182 56, 182" fill="${this.color}" />
        
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">"${this.text}"</text>
        
        </svg>`
    }
}


const createShape = (shape = "square", text, color, textColor) => {

    let shape;

    if (shape === "square") {
        shape = new Square(text, color, textColor);
    }

    if (shape === "circle") {
        shape = new Circle(text, color, textColor);
    }

    if (shape === "triangle") {
        shape = new Triangle(text, color, textColor);
    }
    
    return shape;
};

module.exports = createShape;















