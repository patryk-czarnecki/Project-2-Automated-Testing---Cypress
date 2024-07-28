# Test Cases for User Login

## Test Case 1: User Login with Valid Data
- **Title**: User Login with Valid Data
- **Summary**: Verify that a registered user can log in successfully with valid credentials.
- **Steps**:
  1. **Step**: Open the [login page](https://skleptest.pl/my-account/).
     - **Expected Result**: The login page is displayed.
  2. **Step**: Enter a valid email address.
     - **Expected Result**: The email address is entered correctly.
  3. **Step**: Enter a valid password.
     - **Expected Result**: The password is entered correctly.
  4. **Step**: Click the "Login" button.
     - **Expected Result**: The user is successfully logged in and redirected to the homepage.

## Test Case 2: User Login with Invalid Password
- **Title**: User Login with Invalid Password
- **Summary**: Verify that a registered user cannot log in with an invalid password.
- **Steps**:
  1. **Step**: Open the [login page](https://skleptest.pl/my-account/).
     - **Expected Result**: The login page is displayed.
  2. **Step**: Enter a valid email address.
     - **Expected Result**: The email address is entered correctly.
  3. **Step**: Enter an invalid password.
     - **Expected Result**: The password is entered correctly.
  4. **Step**: Click the "Login" button.
     - **Expected Result**: The user receives an error message indicating that the password is incorrect.

## Test Case 3: User Login with Invalid Email
- **Title**: User Login with Invalid Email
- **Summary**: Verify that a user cannot log in with an invalid email address.
- **Steps**:
  1. **Step**: Open the [login page](https://skleptest.pl/my-account/).
     - **Expected Result**: The login page is displayed.
  2. **Step**: Enter an invalid email address.
     - **Expected Result**: The email address is entered correctly.
  3. **Step**: Enter a valid password.
     - **Expected Result**: The password is entered correctly.
  4. **Step**: Click the "Login" button.
     - **Expected Result**: The user receives an error message indicating that the email address is not registered.

## Test Case 4: User Login without Password
- **Title**: User Login without Password
- **Summary**: Verify that a user cannot log in without entering a password.
- **Steps**:
  1. **Step**: Open the [login page](https://skleptest.pl/my-account/).
     - **Expected Result**: The login page is displayed.
  2. **Step**: Enter a valid email address.
     - **Expected Result**: The email address is entered correctly.
  3. **Step**: Leave the password field empty.
     - **Expected Result**: The password field is empty.
  4. **Step**: Click the "Login" button.
     - **Expected Result**: The user receives an error message indicating that the password field is required.

## Test Case 5: User Login without Email
- **Title**: User Login without Email
- **Summary**: Verify that a user cannot log in without entering an email address.
- **Steps**:
  1. **Step**: Open the [login page](https://skleptest.pl/my-account/).
     - **Expected Result**: The login page is displayed.
  2. **Step**: Leave the email field empty.
     - **Expected Result**: The email field is empty.
  3. **Step**: Enter a valid password.
     - **Expected Result**: The password is entered correctly.
  4. **Step**: Click the "Login" button.
     - **Expected Result**: The user receives an error message indicating that the email field is required.
