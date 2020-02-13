const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const questions = require('./lib/questions');


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
                return console.log(team);
            }
            return addTeammate(answer.choice);
        })
}




// every team starts with a manager, so this app also begins with adding the team manager. then the user will be prompted to select however many engineers and/or interns they want to have on the team
addManager();



