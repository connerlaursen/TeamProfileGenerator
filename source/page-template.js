    const generateTeam = team => {

    const generateManager = manager => {

        return `card template`
    }
    const generateIntern = intern => {

        return `card template`
    }
    const generateEngineer = engineer => {

        return `card template`
    }
    const teamArray = []
    teamArray.push(team
        .filter(employee => employee.getRole()==="Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
        )
    
}

module.exports = team => {

    // returns html file
return `
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
    <h1> Manager</h1>
</div>
<div class="cards">
    <h1> Engineer </h1>
</div>
<div class="cards">
    <h1> Intern </h1>
</div>

</body> 
</html>
`
}