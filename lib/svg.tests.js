const SVG = require("./svg")

describe("circle", () => {
    test("should render svg for blue circle element", () => {
        const expectedSvg =`circle cx="150" cy="100" r="80" fill="blue" />`;
        const circle = new Circle();
        circle.setColor("blue");
        const actualSvg = circle.render();
        expectedSvg(actualSvg).toEqual(expectedSvg);
    });

    test("should accept a fill color param", () => {
        const expectedSvg =`circle cx="150" cy="100" r="80" fill="red" />`;
        const circle = new Circle();
        circle.setColor("red");
        const actualSvg = circle.render();
        expectedSvg(actualSvg).toEqual(expectedSvg);
    });
});

describe("triangle", () => {
    test("should render svg for purple triangle element", () => {
        const expectedSvg =`<polygon points="150, 18 244, 182 56, 182" fill="purple />`;
        const triangle = new Triangle();
        triangle.setColor("blue");
        const actualSvg = triangle.render();
        expectedSvg(actualSvg).toEqual(expectedSvg);
    });

    test("should accept a fill color param", () => {
        const expectedSvg =`<polygon points="150, 18 244, 182 56, 182" fill="blue />`;
        const triangle = new Triangle();
        triangle.setColor("red");
        const actualSvg = triangle.render();
        expectedSvg(actualSvg).toEqual(expectedSvg);
    });
});

describe("square", () => {
    test("should render svg for green square element", () => {
        const expectedSvg =`<rect x="90 y="40" width="120" height="120" fill="green" />`;
        const square = new Square();
        square.setColor("blue");
        const actualSvg = square.render();
        expectedSvg(actualSvg).toEqual(expectedSvg);
    });

    test("should accept a fill color param", () => {
        const expectedSvg =`<rect x="90 y="40" width="120" height="120" fill="yellow" />`;
        const square = new Square();
        square.setColor("red");
        const actualSvg = square.render();
        expectedSvg(actualSvg).toEqual(expectedSvg);
    });
});
