// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
  
  ## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Description 
${data.description}

## Installation
${data.install}

## Usage 
${data.knowledge}

## Github User Name
${data.githubname}

## Tests
${data.tests}
 
## Contributing
 ${data.contribute}

## Email Address
${data.email}

## Credits
${data.tech}

## License
${data.license}

`
}

module.exports = generateMarkdown;
