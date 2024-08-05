# Vox Test

# Saucedemo web tesing by Cypress

## Test Cases  

The test cases included in this project are:  

1. **Test Login with Valid Credentials**: Validates the login functionality using valid credentials.  
2. **Test Login with Invalid Credentials**: Validates the login functionality using invalid credentials.
3. **Test Product Viewing**: Tests the product list view after login.
4. **Test Product Overview Page**: Tests the overview page of the selected product after adding it to the cart.
5. **Test Add items to cart**: Tests the ability to add items to cart.  
6. **Test Remove items from cart**: Tests the process of remove items from cart.  
7. **Test Valid Checkout**: Tests the checkout process and filling all required data.  
  

## Environment  

- **Cypress Version**: ^13.13.2 (stable)  
- **System Platform**: Windows 11
- **Browser**: Chrome122    
- **Node Version**:   v18.16.1  

## How to run tests  

To run the tests, follow these steps:  

1. Clone this repository to your local machine: `https://github.com/tobiascorrea/vox-saucedemo`
2. Navigate to the project directory.
3. Install Dependencies using `npm install`. 
4. Start Cypress by running mode interactive `npm run test:open`.  
5. Start Cypress by running mode headless `npm run test`. 


## Design Pattern

-The tests are divided using the Page Objects pattern, aiming to minimize the amount of repeated code and maintain good readability, especially for future code maintenance!

## Observation

-The Cypress env file is being uploaded to the repo because, in this study project, I am not dealing with sensitive data. In a real-world scenario, this file should definitely be in the .gitignore and should not be uploaded.

-Make sure you have NODE.JS installed on your machine before running the NPM commands.


