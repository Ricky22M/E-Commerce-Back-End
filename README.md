# E-Commerce-Back-End

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Walkthrough Video
  [Walkthrough Video Here](https://drive.google.com/file/d/1OoKe3GnYvh9zCluxHWnrkXrvZr8v_jIR/view)

  ## Description
  An application that allows the user to handle the backend of an e-commerce app.

  ## Table of Contents
  * [User Story](#user-story)
  * [Acceptance Criteria](#acceptance-criteria)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)

  [//]: <> (Add the user story and acceptance criteria here)
  ## User Story

  ```md
  AS A manager at an internet retail company
  I WANT a back end for my e-commerce website that uses the latest technologies
  SO THAT my company can compete with other e-commerce companies
  ```

  ## Acceptance Criteria

  ```md
  GIVEN a functional Express.js API
  WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
  THEN I am able to connect to a database using Sequelize
  WHEN I enter schema and seed commands
  THEN a development database is created and is seeded with test data
  WHEN I enter the command to invoke the application
  THEN my server is started and the Sequelize models are synced to the MySQL database
  WHEN I open API GET routes in Insomnia for categories, products, or tags
  THEN the data for each of these routes is displayed in a formatted JSON
  WHEN I test API POST, PUT, and DELETE routes in Insomnia
  THEN I am able to successfully create, update, and delete data in my database
  ```
  
  ## Installation
  Run the command inside the terminal ```npm i``` , then inside the terminal the command ```mysql -u root -p```. Put in your password for your MySQL account. Afterwards run in MySQL ```source db/schema.sql```, then quit out of MySQL. Next, run in the terminal ```npm run seed```. Finally, run the command in the terminal ```npm start```.
  
  ## Usage
  Managing the back end of an e-commerce application possible with ease.

  ## License
  This project is under the the MIT license.

  ## Questions
  * [Github](https://github.com/Ricky22M)
  * I am reachable at rmedina@outlook.com for any additonal questions you may have.