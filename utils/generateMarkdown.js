// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  const badges = {
    mit: `![badmath](https://img.shields.io/badge/License-MIT-blue)`,
    mozilla: `![badmath](https://img.shields.io/badge/License-MOZILLA-blueviolet)`,
    apache: `![badmath](https://img.shields.io/badge/License-APACHE-green)`,
  };
  return badges[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    mit: `[MIT](https://choosealicense.com/licenses/mit/)`,
    mozilla: `[ISC](https://choosealicense.com/licenses/mpl-2.0/)`,
    apache: `[APACHE](https://choosealicense.com/licenses/apache-2.0/)`,
  };
  return licenseLink[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `Licensed under the ${renderLicenseLink(license)} license`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.projectTitle}

${renderLicenseBadge(data.license)}

## Table of Contents
  - [Project Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Collaborators](#Collaborators)
  - [License](#License)
  - [GitHub](#GitHub)

## Description

### Motivation for creating this project
  ${data.motivation}

### My "WHY" for creating this project
  ${data.projectWhy}

### What problem does this solve?
  ${data.projectProblem}


## Installation
  ${data.installation}

## Usage
  ${data.usage}

  ![Alt text](${data.photoPath})

## Collaborators
  ${data.collaborator}


## License
  ${renderLicenseSection(data.license)}


## GitHub
  ${data.github}

`;
}
module.exports = generateMarkdown;
