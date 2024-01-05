const createShape = require("./shapes")

it("should accept a fill color param", () => {
    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="red" /> <text x="150" y="125" font-size="55" text-anchor="middle" fill="blue">LJK</text> </svg>`;
    const circle = createShape("circle", "LJK", "red", "blue");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
});

it("should accept a fill color param", () => {
    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="150,18 244, 182 56, 182" fill="blue"/> <text x="150" y="150" font-size="50" text-anchor="middle" fill="purple">KMN</text> </svg>`
    const triangle = createShape("triangle", "KMN", "blue", "purple");
    const actualSvg = triangle.render();
    expect(actualSvg).toEqual(expectedSvg);
});

it("should accept a fill color param", () => {
    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect x="90" y="40" width="120" height="120" fill="yellow" /> <text x="150" y="125" font-size="55" text-anchor="middle" fill="green">DMN</text> </svg>`
    const square = createShape("square", "DMN", "yellow", "green");
    const actualSvg = square.render();
    expect(actualSvg).toEqual(expectedSvg);
});

