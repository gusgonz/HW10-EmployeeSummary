const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const questions = require('./lib/questions');
const fs = require('fs');


const team = [];

const addManager = () => {
    inquirer
        .prompt(questions.managerQuestions)
        .then(answers => {
            let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            console.log(manager);
            team.push(manager);
            return teamPrompt();
        });
}

const teamPrompt = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                choices: ['engineer', 'intern', 'done'],
                message: 'Select the teammate type you would like to add to the team. If you are done adding to the team, select done',
                name: 'choice'
            }
        ])
        .then(answer => {
            if (answer.choice === 'done') {
                // here i will return the function that's going to build the html page for the team with the team object given as a parameter
                return generateHTMLstring(team);
            }
            return addTeammate(answer.choice);
        })
}

const addTeammate = role => {
    switch (role) {
        case 'engineer':
            inquirer
                .prompt(questions.engineerQuestions)
                .then(answers => {
                    let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                    console.log(engineer);
                    team.push(engineer);
                    return teamPrompt();
                });
            break
        case 'intern':
            inquirer
                .prompt(questions.internQuestions)
                .then(answers => {
                    let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                    console.log(intern);
                    team.push(intern);
                    return teamPrompt();
                });
            break
    }
}

let htmlString = '';

const generateHTMLstring = team => {
    console.log(team);

    for (let i = 0; i < team.length; i++) {

        let teammate = team[i];
        let html = `
                    <div class="card col-3">
                    <div class="card-body">
                        <h2 class="card-title text-center">${teammate.name}</h2>
                        <h3 class="card-text"><img src="../lib/${teammate.getRole()}-icon.svg"> ${teammate.getRole()}</h3>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${teammate.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${teammate.email}">${teammate.email}</a></li>
                        `

        switch (teammate.getRole()) {

            case 'Manager':
                html += `<li class="list-group-item">Office Number: ${teammate.officeNumber}</li>
                    </ul>
                    </div>
                    `
                // console.log(html);
                break

            case 'Engineer':
                html += `<li class="list-group-item">GitHub: <a href="https://www.github.com/${teammate.github}">${teammate.github}</a></li>
                    </ul>
                    </div>
                    `
                // console.log(html);
                break

            case 'Intern':
                html += `<li class="list-group-item">School: ${teammate.school}</li>
                    </ul>
                    </div>
                    `
                // console.log(html);
                break
        }
        htmlString += html;
    }
    // console.log(htmlString)

    let htmlMain = `<!DOCTYPE html>
<html>
<head>
	<title>Team Summary</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <style>
    .card {
        margin: 6px;
    }
    .jumbotron {
        background-color: cornflowerblue;
    }

    h1 {
        color: cornsilk;
    }

    img {
        height: 36px;
        width: auto;
    }
    </style>
</head>
<body>
    <div class="jumbotron">
		<h1 class="text-center">My Team Report</h1>
	</div>
	<div class="container">
		<div class="row justify-content-center">
			${htmlString}
		</div>
    </div>
</body>
</html>`;

    writeHtml(htmlMain);
}

const writeHtml = (htmlString) => {
    fs.writeFile('./output/summary.html', htmlString, function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");

    });
}






// every team starts with a manager, so this app also begins with adding the team manager. then the user will be prompted to select however many engineers and/or interns they want to have on the team
addManager();


