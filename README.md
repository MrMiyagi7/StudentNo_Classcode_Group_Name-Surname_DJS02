# DJS02 Project Brief: Whole Number Divider

## Project Overview

This project, Whole Number Division, focuses on implementing error handling in JavaScript. The primary goal is to demonstrate how to manage errors gracefully without causing the application to crash. Instead of letting critical errors disrupt the user experience, the project simulates an application crash and logs the error using a try-catch block.

## Features

### Form Submission:

The form allows users to input a dividend and a divider to perform whole number division.

### Error Handling:

The script checks for various types of errors during form submission, including missing data, invalid numbers, and critical issues.

## Error Handling Mechanism

The JavaScript file implements different types of errors and handles them in the following manner:

### 1. No Data Error:

- Triggered when one or both inputs are empty.
- Displays the message: "Division not performed. Both values are required in inputs. Try again".

### 2. Invalid Number Error:

- Triggered when the dividend or divider is 0.
- Displays the message: "Division not performed. Invalid number provided. Try again".
- The error is logged to the console using console.error(err), and a stack trace is provided with console.trace().

### 3. Critical Error:

- Triggered when non-numeric data is provided in the inputs.
- Displays a critical error message and an associated image to simulate an app crash.
- The body content of the page is replaced with an error message to simulate the crash.

## Project Structure

- HTML: The index.html file sets up a simple form to input numbers for division and a div to display results or error messages.
- JavaScript: The scripts.js file contains the logic for handling form submission, performing division, and managing errors using try-catch blocks.
- CSS: The styles.css file is linked to style the HTML elements, error messages, and the critical error simulation.

## How It Works

1. Users enter the dividend and divider in the form.
2. Upon submission, the JavaScript script checks for errors:
   - If no errors are found, it calculates the result and displays it.
   - If an error is detected, it logs the error, displays the appropriate message, and simulates a crash if the error is critical.
3. The application demonstrates how to handle different errors without abruptly stopping the script, ensuring a smooth user experience.

## Conclusion

This project showcases effective error handling in JavaScript by simulating and managing different error scenarios. It provides a practical example of using try-catch blocks to ensure that applications can gracefully handle unexpected inputs or situations.
