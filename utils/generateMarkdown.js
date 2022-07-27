// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  const badges = {
    mit: `[![License: MIT](https://img.shields.io/static/v1?label=license&message=MIT&color=blue.svg](https://opensource.org/licenses/MIT)`,
    isc: `[![License: ISC](https://img.shields.io/static/v1?label=license&message=ISC&color=blueviolet.svg](https://opensource.org/licenses/ISC)`,
    gnuplv3: `[![License: LGPL v3](https://img.shields.io/static/v1?label=license&message=GPL&color=green.svg](https://www.gnu.org/licenses/lgpl-3.0)`,
  };
  return badges[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    mit: `[MIT](https://choosealicense.com/license/mit)`,
    isc: `[ISC](https://choosealicense.com/license/isc)`,
    GNUGPLv3: `[gnuplv3](https://choosealicense.com/license/gpl-3.0/)`,
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

## Collaborators
  ${data.collaborator}


## License
  ${renderLicenseSection(data.license)}


## GitHub
  ${data.github}

`;
}
module.exports = generateMarkdown;
