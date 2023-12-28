const fs = require('fs');
const inquirer = require('inquirer');



const prompt = inquirer.createPromptModule();

prompt([
{
    type: 'input',
    name: 'text',
    message: 'Enter text for logo. (Must not be more than 3 characters)',
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
if (!fs.existsSync('./logo.svg')) {
    fs.mkdirSync('./logo.svg');
}
});

