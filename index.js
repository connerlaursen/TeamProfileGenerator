
const inquirer = require('inquirer');

const fs=require("fs")

const path=require("path")

const Engineer = require("./lib/Engineer")

const Manager = require("./lib/Manager")

const Intern = require("./lib/Intern")

const renderHTML = require("./source/page-template")

const DIST_DIR = path.resolve(__dirname, "dist")

const distPath = path.join(DIST_DIR, "index.html")

const myTeam = [
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
    
    },
    {
        type:"list",
        name:"nextEmployee",
        message:"Would you like to add another employee?",
        choices:["Yes", "No"]
    
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
    
    },
    {
        type:"list",
        name:"nextEmployee",
        message:"Would you like to add another employee?",
        choices:["Yes", "No"]
    
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
    
    },
    {
        type:"list",
        name:"nextEmployee",
        message:"Would you like to add another employee?",
        choices:["Yes", "No"]
    
    }

];



const renderedHtml = `
<!DOCTYPE html>
<html lang="en">
 <head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Team Profile Generator</title>
<link rel="stylesheet" href="../style.css" />
</head>

<body>

<header>
<nav class="center">
<h1>My Team</h1>
</nav>
</header>

<div class="cards">

</div>

</body> 
</html>
  `

function teamBuild (){

    if (!fs.existsSync(DIST_DIR)){
        fs.mkdirSync(DIST_DIR)

    }
    fs.writeFileSync(distPath, renderHTML(), "utf-8")
}

teamBuild()

function init(){
    inquirer.prompt(myTeam).then((userData)=> {
        console.log("Generating team cards...")
        console.log(userData);
        if (userData.nextEmployee == 'Yes'){
            init()
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


init();