
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else if (license === "Apache 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === "Boost 1.0") {
    return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (license === "Eclipse 1.0") {
    return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  } 
};

// TODO: Create a function that returns the license link in table of contents
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  return `* [License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `
  ## License

  This project is covered under the ${license} license. For more information, click the badge at the top of the document.
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.desc}

  ## Table of Contents

  ${renderLicenseLink(data.license)}
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Questions](#questions)

  ${renderLicenseSection(data.license)}

  ## Installation

  The command to install dependencies for this project is ${data.install}.

  ## Usage

  ${data.usage}

  ## Contribution 

  ${data.contribute}

  ## Test

  The command to run tests for this project is ${data.test}.

  ## Questions

  If you have any questions about this project, you can email me at ${data.email}. You can also find me on github at www.github.com/${data.name}.
`;
}

module.exports = generateMarkdown;
