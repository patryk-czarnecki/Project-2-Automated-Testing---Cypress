# Test Report for E-Commerce App Testing

## Introduction
The purpose of this test report is to document the results of the testing conducted for the E-Commerce application. The testing focused on verifying the functionality of key features such as user registration, login, product browsing, and the shopping cart.

## Scope
The tests were conducted to ensure that all critical functionalities work as expected and to identify any defects that need to be addressed.

## Test Plan Overview
- **Total Test Cases Planned:** 18
- **Total Test Cases Executed:** 18
- **Test Cases Passed:** 10
- **Test Cases Failed:** 6
- **Test Cases Blocked:** 2

## Test Execution Details

### Test Plan Report Summary
Based on the [Test Plan Report](./reports/TestLink-raport.pdf):

1. **Registration**
   - EC-1: User Registration with Valid Data - Passed
   - EC-2: User Registration without Email - Passed
   - EC-3: User Registration without Password - Passed
   - EC-4: User Registration with Existing Email - Failed

2. **Login**
   - EC-5: User Login with Valid Data - Passed
   - EC-6: User Login with Invalid Password - Passed
   - EC-7: User Login with Invalid Email - Passed
   - EC-8: User Login without Password - Passed
   - EC-9: User Login without Email - Passed

3. **Browse products**
   - EC-10: Browse Product List - Failed
   - EC-11: View Product Details - Failed
   - EC-12: Browse Products by Category - Failed
   - EC-13: Search for Products - Passed

4. **Cart**
   - EC-14: Add Single Product to Cart - Failed
   - EC-15: Add Multiple Products to Cart - Blocked
   - EC-16: Verify Cart Contents - Passed
   - EC-17: Remove Product from Cart - Failed
   - EC-18: Update Product Quantity in Cart - Blocked

### Test Result Matrix Summary
Based on the [Test Result Matrix](./reports/TestLink-Matrix.pdf):

- **Registration**
  - All test cases in this suite have been executed, with one failure.

- **Login**
  - All test cases in this suite have been executed and passed.

- **Browse products**
  - Test cases in this suite have mixed results with several failures.

- **Cart**
  - Several test cases in this suite have failed or are blocked.

## List of Reported Bugs

1. **Bug ID:** EAT-1
   - **Summary:** Error in User Registration with Existing Email
   - **Description:** The system adds the digit '1' before the '@' symbol in the email address and creates a new account instead of displaying an error message.
   - **Steps to Reproduce:**
     1. Go to the registration page [https://skleptest.pl/register](https://skleptest.pl/my-account/).
     2. Enter an email address that is already registered (testowyemail@gmail.com).
     3. Fill in the other required fields.
     4. Click the "Register" button.
   - **Expected Result:** The system should display an error message indicating that the email address is already registered.
   - **Actual Result:** The system adds the digit '1' before the '@' symbol and creates a new account.
   - **Priority:** High
   - **Severity:** Critical
   - **Status:** Open

2. **Bug ID:** EAT-2
   - **Summary:** Missing Product Images in Browse Product List
   - **Description:** Some products do not display any image, showing a placeholder or broken image icon instead.
   - **Steps to Reproduce:**
     1. Go to the product listing page [https://skleptest.pl/products](https://skleptest.pl/).
     2. Browse through the list of products.
   - **Expected Result:** Each product should display a corresponding image.
   - **Actual Result:** Some products do not display any image.
   - **Priority:** Medium
   - **Severity:** Major
   - **Status:** Open

3. **Bug ID:** EAT-3, EAT-4, EAT-5
   - **Summary:** Multiple Issues in View Product Details
   - **Description:**
     - Lorem Ipsum Placeholder Text in Product Description
     - Negative Quantity Value in Add to Cart Field
     - Quantity Field Limited to Two Digits in Add to Cart
   - **Steps to Reproduce:**
     1. Go to the product listing page [https://skleptest.pl/products](https://skleptest.pl/).
     2. Choose any product.
     3. Check the product description section.
     4. Check the quantity input field for adding the product to the cart.
   - **Expected Result:** Detailed product description, positive integer quantity input.
   - **Actual Result:** Placeholder text, negative values allowed, and two-digit limit.
   - **Priority:** High
   - **Severity:** Critical
   - **Status:** Open

4. **Bug ID:** EAT-6
   - **Summary:** Incorrect Products Displayed in Shoes Category
   - **Description:** The list displays products that do not belong to the "Shoes" category.
   - **Steps to Reproduce:**
     1. Go to the category page [https://skleptest.pl/category/shoes](https://skleptest.pl/product-category/shoes/).
     2. Browse the list of products displayed under the "Shoes" category.
   - **Expected Result:** The list should display only products that belong to the "Shoes" category.
   - **Actual Result:** The list displays products that do not belong to the "Shoes" category.
   - **Priority:** High
   - **Severity:** Major
   - **Status:** Open

5. **Bug ID:** EAT-7
   - **Summary:** Unable to Add Single Product to Cart
   - **Description:** The product is not added to the cart after clicking the "Add to Cart" button.
   - **Steps to Reproduce:**
     1. Go to the product listing page [https://skleptest.pl/products](https://skleptest.pl/).
     2. Choose any product.
     3. Click the "Add to Cart" button.
   - **Expected Result:** The product should be added to the cart.
   - **Actual Result:** The product is not added to the cart.
   - **Priority:** Critical
   - **Severity:** High
   - **Status:** Open

6. **Bug ID:** EAT-8
   - **Summary:** Remove Product Button in Cart Not Functioning
   - **Description:** Clicking the "Remove" button does not remove the product from the cart.
   - **Steps to Reproduce:**
     1. Go to the product listing page [https://skleptest.pl/products](https://skleptest.pl/).
     2. Add a product to the cart.
     3. Go to the cart page [https://skleptest.pl/cart](https://skleptest.pl/cart/).
     4. Click the "Remove" button next to the product.
   - **Expected Result:** The product should be removed from the cart.
   - **Actual Result:** Clicking the "Remove" button does not remove the product from the cart.
   - **Priority:** High
   - **Severity:** Major
   - **Status:** Open

## Summary and Recommendations

Based on the results of the testing, the following observations and recommendations are made:

- A total of 18 test cases were executed, with 10 passing, 6 failing, and 2 blocked.
- Critical and major bugs were identified, particularly affecting the user registration, product browsing, and shopping cart functionalities.
- It is recommended to address the high-priority and critical issues identified during testing before proceeding to production.
- After fixes are implemented, a round of regression testing should be conducted to ensure no new issues have been introduced.

We recommend close collaboration between the testing and development teams to address the identified issues promptly and efficiently.

