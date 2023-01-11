// inquirer required
const inquirer = require('inquirer');

const fs=require("fs")

const path=require("path")

const Engineer = require("./lib/Engineer")

const Manager = require("./lib/Manager")

const Intern = require("./lib/Intern")

const renderHTML = require("./source/page-template")

const DIST_DIR = path.resolve(__dirname, "dist")

const distPath = path.join(DIST_DIR, "index.html")

const blankArray = [];
// prompted questions below
const myTeam = [
    {
        type:"list",
        name:"nextEmployee",
        message:"Would you like to add another employee?",
        choices:["Yes", "No"]
    
    },
    {
        type:"list",
        name:"role",
        message:"Which role are you adding?",
        choices:["Engineer", "Intern", "Manager"]
    },

]
const internQuestions = [
    {
        type:"input",
        name:"name",
        message:"What is their name?"
    
    },
    {
        type:"input",
        name:"email",
        message:"What is their email?"
    
    },
    {
        type:"input",
        name:"id",
        message:"What is their id?"
    
    },
    {
        type:"input",
        name:"school",
        message:"What is their school name?"
    
    }

];
const engineerQuestions = [
    {
        type:"input",
        name:"name",
        message:"What is their name?"
    
    },
    {
        type:"input",
        name:"email",
        message:"What is their email?"
    
    },
    {
        type:"input",
        name:"id",
        message:"What is their id?"
    
    },
     {
        type:"input",
        name:"github",
        message:"What is their github username?"
    
    }


];
const managerQuestions = [
    {
        type:"input",
        name:"name",
        message:"What is their name?"
    
    },
    {
        type:"input",
        name:"email",
        message:"What is their email?"
    
    },
    {
        type:"input",
        name:"id",
        message:"What is their id?"
    
    },
    {
        type:"input",
        name:"office",
        message:"What is their office number?"
    
    }
    

];

//  generates html based on page-template.js
function teamBuild (){

    if (!fs.existsSync(DIST_DIR)){
        fs.mkdirSync(DIST_DIR)

    }
    fs.writeFileSync(distPath, renderHTML(blankArray), "utf-8")
}

// prompts different roles based on role selection
function init(){
    inquirer.prompt(myTeam).then((userData)=> {
        console.log(userData);
        if (userData.nextEmployee === 'No'){
            teamBuild()
        }
        if (userData.role == 'Intern') {
            inquirer.prompt(internQuestions)
        }
        if (userData.role == 'Manager') {
            inquirer.prompt(managerQuestions)
        }
        if (userData.role == 'Engineer') {
            inquirer.prompt(engineerQuestions)
        }
        
    })};

// this is supposed to push data to blank array to be appended in html cards

function pushManager(){
    inquirer.prompt(managerQuestions).then(answers)
    const newManager = Manager(answers.name,answers.email,answers.id,answers.office)
    blankArray.push(newManager)
};

function pushEngineer(){
    inquirer.prompt(engineerQuestions).then(answers)
    const newEngineer = Engineer(answers.name,answers.email,answers.id,answers.github)
    blankArray.push(newEngineer)
};

function pushIntern(){
    inquirer.prompt(internQuestions).then(answers)
    const newIntern = Intern(answers.name,answers.email,answers.id,answers.school)
    blankArray.push(newIntern)
};
init();