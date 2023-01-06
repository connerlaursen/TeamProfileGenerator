
const inquirer = require('inquirer');

const fs=require("fs")

const path=require("path")

const Engineer = require("./lib/Engineer")

// const Manager = require("./lib/Manager")

// const Intern = require("./lib/Intern")

const renderHTML = require("./source/page-template")

const DIST_DIR = path.resolve(__dirname, "dist")

const distPath = path.join(DIST_DIR, "index.html")

const myTeam = []
















function teamBuild (){

    if (!fs.existsSync(DIST_DIR)){
        fs.mkdirSync(DIST_DIR)

    }
    fs.writeFileSync(distPath, render(myTeam), "utf-8")
}