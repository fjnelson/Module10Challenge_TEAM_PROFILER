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
            return "Enter in a name.";
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
                return "Enter in an ID.";
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
                return "Enter in an email.";
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
                return "Enter in a office number.";
            }
          }
    ];

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