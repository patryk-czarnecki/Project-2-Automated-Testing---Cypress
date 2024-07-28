# Test Cases for User Registration

## Test Case 1: User Registration with Valid Data
- **Title**: User Registration with Valid Data
- **Summary**: Verify that a new user can register successfully with valid data.
- **Steps**:
  1. **Step**: Open the [registration page](https://skleptest.pl/my-account/).
     - **Expected Result**: The registration page is displayed.
  2. **Step**: Enter a valid email address.
     - **Expected Result**: The email address is entered correctly.
  3. **Step**: Enter a valid password.
     - **Expected Result**: The password is entered correctly.
  4. **Step**: Confirm the password.
     - **Expected Result**: The confirmation password matches the entered password.
  5. **Step**: Click the "Register" button.
     - **Expected Result**: The user is successfully registered and redirected to the homepage with a confirmation message.

## Test Case 2: User Registration without Email
- **Title**: User Registration without Email
- **Summary**: Verify that the user cannot register without entering an email address.
- **Steps**:
  1. **Step**: Open the [registration page](https://skleptest.pl/my-account/).
     - **Expected Result**: The registration page is displayed.
  2. **Step**: Leave the email field empty.
     - **Expected Result**: The email field is empty.
  3. **Step**: Enter a valid password.
     - **Expected Result**: The password is entered correctly.
  4. **Step**: Confirm the password.
     - **Expected Result**: The confirmation password matches the entered password.
  5. **Step**: Click the "Register" button.
     - **Expected Result**: The user receives an error message indicating that the email field is required.

## Test Case 3: User Registration without Password
- **Title**: User Registration without Password
- **Summary**: Verify that the user cannot register without entering a password.
- **Steps**:
  1. **Step**: Open the [registration page](https://skleptest.pl/my-account/).
     - **Expected Result**: The registration page is displayed.
  2. **Step**: Enter a valid email address.
     - **Expected Result**: The email address is entered correctly.
  3. **Step**: Leave the password field empty.
     - **Expected Result**: The password field is empty.
  4. **Step**: Click the "Register" button.
     - **Expected Result**: The user receives an error message indicating that the password field is required.

## Test Case 4: User Registration with Existing Email
- **Title**: User Registration with Existing Email
- **Summary**: Verify that the user cannot register with an email address that is already in use.
- **Steps**:
  1. **Step**: Open the [registration page](https://skleptest.pl/my-account/).
     - **Expected Result**: The registration page is displayed.
  2. **Step**: Enter an email address that is already registered.
     - **Expected Result**: The email address is entered correctly.
  3. **Step**: Enter a valid password.
     - **Expected Result**: The password is entered correctly.
  4. **Step**: Confirm the password.
     - **Expected Result**: The confirmation password matches the entered password.
  5. **Step**: Click the "Register" button.
     - **Expected Result**: The user receives an error message indicating that the email address is already in use.
