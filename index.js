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
      message: 'What do you want the description to be?',
      name: 'description',
    },
    {
        type: 'input',
        message: 'What do you want the additional section to be named?',
        name: 'section2',
      },
      {
        type: 'input',
        message: 'What do you want the content of the additional section to be?',
        name: 'section2content',
      },
      {
        type: 'input',
        message: 'What is the link to the deployed application? ',
        name: 'link',
      },
    {
        type: 'input',
        message: 'What is the name of the screenshot?',
        name: 'screenshotname',
      },
      {
        type: 'input',
        message: 'Link to the screenshot',
        name: 'screenshotlink',
      },
  ])

  .then((response) =>
  {
    fs.writeFile('README.md', `# ${response.title}

    ## Description
    
    ${response.description}
    
    ## ${response.section2}
    
        ${response.section2content}
    
    
    ## Deployed Application
    
    ${response.link}
    
    
    ## Screenshot
    
    ![${response.screenshotname}](${response.screenshotlink})
    
    
    ## License
    
    ()`, (error) => 
{
 if (error)
    console.error(error)
})
  });