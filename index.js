const inquirer = require('inquirer');
const fs = require('fs');

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
        message: 'What is the link to the test video?',
        name: 'link',
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
      console.log(response.license)
    fs.writeFile('README.md', `# ${response.title}

## Description
    
${response.description}
    
    
## Table Of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)


## Installation
To install dependencies please use the following command:
\`\`\`${response.instructions}\`\`\`


## Usage
${response.usage}


## License
${response.license}

## Contribution guidelines
${response.contributingInfo}


## Test
To run tests run the following command:

\`\`\`${response.testcommand}\`\`\`


## Questions
If you have any questions please reach out to me via email ${response.email} 
check out some of my other work - ${response.githubusername}`, (error) => 
{
 if (error)
    console.error(error)
})
  });