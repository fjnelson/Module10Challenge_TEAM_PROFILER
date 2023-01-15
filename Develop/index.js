const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require('./utils/generateTeam')
const path = require('path');
const jest = require('jest');
const employee = require('./lib/employee');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

const startQuestions = [
        {
          type: "input",
          message: "What is the manager's name?",
          name: "managerName",
        },
        {
            type: "input",
            message: "What is the manager's employee ID?",
            name: "managerID",
          },
          {
            type: "input",
            message: "What is the manager's email address?",
            name: "managerEmail",
          },
          {
            type: "input",
            message: "What is the manager's office number?",
            name: "managerOffice",
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