# cy-k6-automation

## Requirement
- Google Chrome
- NPM 9.3.1+
- K6

## How to Run Cypress
- clone this project
- open project to editor (Ex: VS Code)
- open terminal and `cd automation`
- run command `npm install`
- execute command `chmod +x ./cypress/cucumber-json/cucumber-json-formatter`. This is for generate cucumber.json that needed to generate cucumber HTML report. If using another OS, please refer to this [link](https://github.com/cucumber/json-formatter)
- run command `npm run cypress-web` to running the automation.

## How to Run Performance K6
- open terminal and `cd performance`
- run command `k6 run k6_script.js`