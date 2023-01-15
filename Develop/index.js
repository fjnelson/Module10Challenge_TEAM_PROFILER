const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require('./utils/generateTeam')
const path = require('path');
const jest = require('jest');
const employee = require('./lib/employee');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

const managerQuestions = [
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
        ].then(answers => {
            const newManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
            teamArr.push(newManager);
            idArr.push(answers.managerId);
            addTeamMember();
        });

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
                generateHTML();
        }
    });
}

function engineerMember() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What's the engineer's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Enter a name.";
            }
        },
        {
            type: "input",
            name: "engineerId",
            message: "What's the engineer's id?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Enter an ID.";
            }
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What's the engineer's email?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Enter an email.";
            }
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What's the engineer's GitHub username?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Enter a username.";
            }
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArr.push(engineer);
        idArr.push(answers.engineerId);
        addTeam();
    });
}

function internMember() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What's the intern's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Enter a name.";;
            }
        },
        {
            type: "input",
            name: "internId",
            message: "What's the intern's id?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Enter an ID.";
            }
        },
        {
            type: "input",
            name: "internEmail",
            message: "What's the intern's email?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Enter an email.";
            }
        },
        {
            type: "input",
            name: "internSchool",
            message: "What's the intern's school?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Enter a school.";
            }
        }

    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamArr.push(intern);
        idArr.push(answers.internId);
        addTeam();
    });
}
//     function writeToFile(teamData, data) {
//         fs.writeFile(teamData, data, function (err) {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log("created team data");
//           }
//         });
//       }

// function startFunction(){
//     inquirer.prompt(startQuestions).then(function (data) {
//         writeToFile("./lib/team_page", generateTeam(data));
//       });
// }

startFunction();