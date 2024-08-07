# Project 2: Automated Testing with Cypress

## Description
This project involves automated testing of the e-commerce website [https://skleptest.pl/](https://skleptest.pl/). The tests focus on critical user functionalities such as registration, login, and shopping cart functionalities.

## Test Plan

### Description
The objective of this project is to verify the functionality of the e-commerce website [https://skleptest.pl/](https://skleptest.pl/). The tests focus on critical user functionalities such as registration, login, and shopping cart functionalities. The testing environment includes Ubuntu operating system with Google Chrome as the browser. The types of tests to be conducted include functional tests and usability tests. The criteria for test completion is 100% execution of all test cases.

### Scope of Testing

1. **Registration**: Ensuring that new users can register successfully with all required information.
2. **Login**: Verifying that registered users can log in and access their accounts.
3. **Shopping cart functionality**: Verify that users can add items, update quantities, view the cart from any page, and remove items.

### Testing Environment

- **Operating System**: Ubuntu
- **Browser**: Google Chrome

### Types of Tests

1. **Functional Tests**: To verify that each feature works according to the requirements.
2. **Usability Tests**: To ensure the website is user-friendly and navigation is intuitive.

## Test Cases

### Registration Test Cases
- **registration.cy.js**: Test cases for user registration.
  - Register a new user with valid data.
  - Show error for existing email.

### Login Test Cases
- **login.cy.js**: Test cases for user login.
  - Log in with valid credentials.
  - Show error for invalid password.
  - Show error for non-existent email.
  - Show error for empty email.
  - Show error for empty password.

### Shopping Cart Test Cases
- **cart.cy.js**: Test cases for shopping cart functionalities.
  - Add a product to the cart.
  - Remove a product from the cart.
  - Update the product quantity in the cart.

## CI/CD Pipeline

This project uses GitHub Actions for Continuous Integration and Continuous Deployment. The workflow is defined in `.github/workflows/cypress-tests.yml` and runs the Cypress tests manually via the `workflow_dispatch` event.

### GitHub Actions Workflow Configuration
```yaml
name: Cypress Tests

on: workflow_dispatch
  
jobs:
  test:
    runs-on: ubuntu-latest
    defaults:  
      run:
        working-directory: ./Project2-Cypress

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Run Cypress tests
        run: npm run run
        env:
          CI: true
```

## How to Run Tests in GitHub Actions

1. Navigate to the **Actions** tab in your GitHub repository.

2. In the left sidebar, you will see the **Cypress Tests** workflow. Click on it.

3. Click the **Run workflow** dropdown on the right side.

4. In the dropdown, select the branch on which you want to run the tests (e.g., `main`).

5. Click the **Run workflow** button.

![Run GitHub Actions](./screenshots//github_actions_run.png)

## How to Run Tests Locally

1. Clone the repository:

```bash
git clone git clone https://github.com/patryk-czarnecki/QA-Portfolio.git
```
2. Install dependencies:

```bash
cd QA-Portfolio/Project2-Cypress
npm install
```
3. Run Cypress tests:
```bash
npm run test
```