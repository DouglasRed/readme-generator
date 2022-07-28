// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is the name of your Project? (Required)",
    validate: (projectTitle) => {
      if (projectTitle) {
        return true;
      } else {
        console.log("Please enter your Project's title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "motivation",
    message: "What was your motivation to build this project? (Required)",
    validate: (projectMotivation) => {
      if (projectMotivation) {
        return true;
      } else {
        console.log("Please enter your motivation for this project");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "projectWhy",
    message: "Why did you build this project? (Required)",
    validate: (projectWhy) => {
      if (projectWhy) {
        return true;
      } else {
        console.log("Please enter why you built this project");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "projectProblem",
    message: "What problem does this project solve? (Required)",
    validate: (projectProblem) => {
      if (projectProblem) {
        return true;
      } else {
        console.log("Please enter what problem this project solves");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message:
      "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running? (Required)",
    validate: (projectInstallation) => {
      if (projectInstallation) {
        return true;
      } else {
        console.log("Please enter how to install this project");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use. (Required)",
    validate: (projectUsage) => {
      if (projectUsage) {
        return true;
      } else {
        console.log("Please provide instructions and examples for use.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "photoPath",
    message: "Enter a photo of the project. (Required)",
    validate: (photo) => {
      if (photo) {
        return true;
      } else {
        console.log("You need to enter a pathway to the photo!");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmAddPhoto",
    message: "Would you like to add another photo?",
    default: false,
  },
  {
    type: "input",
    name: "collaborator",
    message:
      "Would you like to mention a collaborator? Mention their name and role if applicable (one at a time).",
  },
  {
    type: "list",
    name: "license",
    message: "choose a license.",
    choices: ["MIT", "MOZILLA", "APACHE"],
    filter(val) {
      return val.toLowerCase();
    },
    //https://choosealicense.com/ - licenses
    //https://shields.io/category/build - badges
  },
  {
    type: "input",
    name: "github",
    message: "Enter the link to your GitHub's repo. (Required)",
    validate: (github) => {
      if (github) {
        return true;
      } else {
        console.log("Please enter the link to your GitHub's repo");
        return false;
      }
    },
  },
];

// TODO: Create a function to initialize app
async function promptUser() {
  return inquirer
    .prompt(questions)
    .then((answers) => {
      const mark = generateMarkdown(answers);
      fs.writeFile("README.md", mark, function (err) {
        if (err) {
          console.log("Error! File not saved!", err);
        } else {
          console.log("Success! Saved the README.md file");
        }
      });
      console.log(mark);
      return answers;
    })
    .catch((error) => {
      console.log(error);
    });
}

promptUser();
