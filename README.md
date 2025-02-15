Running the Tests
Prerequisites
Before running the tests, ensure that you have the following installed on your system:
- **Node.js**: Ensure that Node.js is installed. You can check if Node.js is installed by running:

  node -v

    If Node.js is not installed, download it from  (https://nodejs.org/).

- **npm (Node Package Manager)**: npm should be installed alongside Node.js. Verify by running:
  
  npm -v

  If npm is not installed, you can install it by following the (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

- **Cypress**: Cypress is the testing framework used for running the tests. Install Cypress by running:
  
  npm install cypress --save-dev
  
- **TypeScript**: Ensure TypeScript is installed in the project for the test scripts to run correctly. Install it by running:

  npm install typescript --save-dev
  
Running the Tests
Headless Mode (Recommended for CI/CD)
To run the tests in **headless mode**, use the following command:

npx cypress run

This will run all the test cases in the terminal without opening the Cypress UI.

Debug Mode (Interactive Mode)
If you prefer to run the tests in **debug mode** with an interactive user interface, use the following command:

npx cypress open

This will launch the Cypress Test Runner, where you can manually select tests to run and watch them execute in real time.

Additional Setup
1. **Configuration Files**: Ensure your `cypress.json` or any relevant configuration files are correctly set up to match your environment (e.g., base URLs, API endpoints, etc.).
cypress.config.js:
const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
   baseUrl: "https://dummyjson.com",
  },
});

2. **Custom Commands and Plugins**: If your tests require custom commands or plugins, make sure they are properly configured in the `commands.js` or `plugins/index.js` files.

3. **TypeScript Setup**: If you're using TypeScript for the tests, ensure that the TypeScript configuration file (`tsconfig.json`) is correctly set up. Here’s an example configuration:

```json
{
    "compilerOptions": {
        "target": "es5",
        "module": "CommonJS",
        "lib": ["es5", "dom"],
        "types": ["cypress", "node"],
        "strict": true,
        "resolveJsonModule": true,
        "esModuleInterop": true
    },
    "include": ["**/*.ts"]
}```

Troubleshooting
- **Missing Cypress Folder**: If the `cypress` folder is missing or not recognized, you can regenerate it by running:
  
npx cypress open
  

- **Outdated Cypress Version**: If Cypress is not behaving as expected, try upgrading it to the latest version by running:

  npm install cypress@latest --save-dev

- **TypeScript Errors**: If you encounter TypeScript errors, make sure your `tsconfig.json` is correctly set up and that TypeScript is compiling without issues.

