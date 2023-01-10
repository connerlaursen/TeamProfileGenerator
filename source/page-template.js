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
  
  </div>
  
  </body> 
  </html>
      `
}