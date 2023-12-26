const fs = require('fs');
const inquirer = require('inquirer');

const prompt = inquirer.createPromptModule();
prompt([
{
    type: 'input',
    name: 'characters',
    message: 'Please choose up to three characters',
},
{
    type: 'input',
    name: 'text-color',
    message: 'Please choose a text color',
},
{
    type: 'checkbox',
    name: 'shape',
    message: 'Please choose a shape',
    choices: ['Circle', 'Triangle', 'Square'],
},
{
    type: 'input',
    name: 'shape-color',
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

