const fs = require('fs');
const inquirer = require('inquirer');
const createShape = require('./lib/shapes')
const prompt = inquirer.createPromptModule();

let logo = null;

prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter text for logo. (Must not be more than 3 characters)',
        validate: (value) => value.length <= 3 ? true : 'Must not be more than 3 characters',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please choose a text color for the logo',
    },
    {
        type: 'rawlist',
        name: 'shape',
        message: 'Please select a shape for the logo',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'color',
        message: 'Please choose a shape color',

    }

])
    // created a function to create the logo.svg file
    .then((data) => {
        console.log(data);

        // create logo directory if it doesn't exist
        if (!fs.existsSync('./logos')) {
            fs.mkdirSync('./logos');
        }

        // create shape object
        logo = createShape(data.shape, data.text, data.color, data.textColor);

        console.log(logo)

        if (logo !== null) {
            fs.writeFile(`./logos/${data.text}.svg`, logo.render(), function (err) {
                if (err) throw err;
                console.log('Generated logo.svg');
            })
        }

    })

