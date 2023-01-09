
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
        type:"input",
        name:"school",
        message:"What is their school name?"
    
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

]
















function teamBuild (){

    if (!fs.existsSync(DIST_DIR)){
        fs.mkdirSync(DIST_DIR)

    }
    fs.writeFileSync(distPath, render(myTeam), "utf-8")
}