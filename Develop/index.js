const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require('./utils/generateTeam')
const path = require('path');
const jest = require('jest');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const DIST_DIR = path.resolve(__dirname, 'dist')
const outputPath = path.join(DIST_DIR, 'index.html');
const render = require('../src/template');

const createTeamArr = [];
const createIdArr = [];

function initPageCreationApp() {

    function startManager() {
        console.log("Team Builder");
        inquirer.prompt([
            {
                type: "input",
                message: "What is the manager's name?",
                name: "managerName",
                validate: name => {
                  if (name !== "") {
                      return true;
                  }
                  return "Enter a name.";
                }
            },
            {
                type: "input",
                message: "What is the manager's employee ID?",
                name: "managerID",
                validate: name => {
                    if (name !== "") {
                        return true;
                    }
                    return "Enter an ID.";
                }
            },
            {
                type: "input",
                message: "What is the manager's email address?",
                name: "managerEmail",
                validate: name => {
                    if (name !== "") {
                        return true;
                    }
                    return "Enter an email.";
                }
            },
            {
                type: "input",
                message: "What is the manager's office number?",
                name: "managerOffice",
                validate: name => {
                    if (name !== "") {
                        return true;
                    }
                    return "Enter a office number.";
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOffice);
            createTeamArr.push(manager);
            createIdArr.push(answers.managerId);
            addTeamMember();
        });
    }

    function addTeamMember() {
        inquirer.prompt([
            {
                type: "list",
                message: "Add a team member.",
                name: "choice",
                choices: [
                    "Engineer",
                    "Intern",
                    "No other members"
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.choice) {
                case "Engineer":
                    engineerMember();
                    break;
                case "Intern":
                    internMember();
                    break;
                default:
                    generatePage();
            }
        });
    }

    function engineerMember() {
        inquirer.prompt([
            {
                type: "input",
                message: "What's the engineer's name?",
                name: "engineerName",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Enter a name.";
                }
            },
            {
                type: "input",
                message: "What's the engineer's id?",
                name: "engineerId",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Enter an ID.";
                }
            },
            {
                type: "input",
                message: "What's the engineer's email?",
                name: "engineerEmail",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Enter an email.";
                }
            },
            {
                type: "input",
                message: "What's the engineer's GitHub username?",
                name: "engineerUsername",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Enter a username.";
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerUsername);
            createTeamArr.push(engineer);
            createIdArr.push(answers.engineerId);
            addTeamMember();
        });
    }

    function internMember() {
        inquirer.prompt([
            {
                type: "input",
                message: "What's the intern's name?",
                name: "internName",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Enter a name.";
                }
            },
            {
                type: "input",
                message: "What's the intern's id?",
                name: "internId",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Enter an ID.";
                }
            },
            {
                type: "input",
                message: "What's the intern's email?",
                name: "internEmail",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Enter an email.";
                }
            },
            {
                type: "input",
                message: "What's the intern's school?",
                name: "internSchool",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Enter a school.";
                }
            }

        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            createTeamArr.push(intern);
            createIdArr.push(answers.internId);
            addTeamMember();
        });
    }
    
    function generatePage() {
        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR)
        }
        console.log("Generating Team Profile.... ");
        fs.writeFileSync(outputPath, render(createTeamArr), "utf-8");
    }

    startManager();
}

initPageCreationApp();
