
// function to generate markdown for README
function generateMarkdown(data, image) {
  return `
  ***
  ## READMe Generator
  ***
  ${data.title}
  ${data.description}
  ${image}
  ***
  ## Table of Contents:
  1. [How to Install ${data.title}](#Installation)
  2. [Using ${data.title}](#How%20To%20Use%20This%20Application)
  3. [Testing ${data.title}](#Test%20Code)
  4. [View ${data.title} Demo ](#Demo)
  5. [Ask Us Questions](#Ask%20Questions)
  6. [Licenses](#License)
  ***
  ## Installation
  ${data.installation}
  ## How to Use This Application
  ${data.usage}
  ## Test Code
  ${data.tests}
  ## Demo
  Click here: https://drive.google.com/file/d/18PyJEHA1V9nov-993pq8Dkk1qeO-4HfD/view
  ## Ask Questions
  Visit my GitHub Page: [My GitHub Profile Page](https://github.com/${data.github})
 -OR-
 Drop me an e-mail at: ${data.email}
  ## License
  This applicaton is covered under the ${data.license}
`;
}

module.exports = generateMarkdown;