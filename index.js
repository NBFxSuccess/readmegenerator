const inquirer = require('inquirer');
const fs = require('fs');
let badge;

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What do you want the title to be?',
      name: 'title',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'githubusername',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
      type: 'input',
      message: 'What do you want the description to be?',
      name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'instructions',
    },
    {
        type: 'input',
        message: 'What are the usage instructions?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contributingInfo',
    },
      {
        type: 'input',
        message: 'What command should be used to run tests?',
        name: 'testcommand',
      },
      {
        type: 'list',
        message: 'What license do you want to put on this project?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3'],
        name: 'license',
      },
      
  ])
  .then((response) =>
  {
      const {title, githubusername, email, description, instructions, usage, contributingInfo, testcommand, license} = response;
      if (license === 'MIT') {
          badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      }
    if (license === 'APACHE 2.0')
      {
          badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      }
      if (license === 'GPL 3.0')
      {
          badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      }
      if (license === 'BSD 3')
      {
          badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
      }
      console.log(license)
    fs.writeFile('README.md', `# ${response.title}

${badge}


## Description
    
${response.description}
    
## Table Of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contribution Guidelines](#contribution)

* [Tests](#tests)

* [Questions](#questions)


## Installation
To install neccessary dependencies please use the following command:

\`\`\`
${instructions}
\`\`\`


## Usage
${response.usage}


## License
${license}

## Contribution
${contributingInfo}


## Tests
To run tests run the following command:

\`\`\`
${testcommand}
\`\`\`


## Questions
If you have any questions please reach out to me via email ${response.email} 
check out some of my other work - https://github.com/${response.githubusername}/`, (error) => 
{
 if (error)
    console.error(error)
})
  });