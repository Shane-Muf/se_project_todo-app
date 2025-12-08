# Simple Todo App

A lightweight and intuitive Todo application built using Object-Oriented Programming (OOP) principles. The app allows users to manage daily tasks by adding, completing, and removing todos through a clean and responsive interface.

## Functionality

This project provides a simple yet effective task-management workflow:
    - Add New Todos:
        Users can submit tasks through a popup form that includes a title and an optional due date.

    - Task Completion Toggle:
        Each task includes a checkbox that marks it as complete or incomplete. Completion status updates instantly.

    - Delete Tasks:
        Each todo entry includes a delete button that removes it from the list.

    - Form Validation:
        The form prevents submission of invalid input and provides clear error messages.

    - Form data remains intact when users close the popup manually. After successful submission, the form is cleared and validation is reset automatically.

    - Responsive Layout


## Technology

This project uses:

HTML5 for structure

CSS3 / Flexbox for layout and styling

JavaScript (ES6 Classes) for dynamic UI behavior

Custom Form Validation

Reusable FormValidator class

Reusable Todo class for rendering items

Template Element Rendering
DOM templates are cloned to generate todo items dynamically.

The application is built using Object-Oriented Programming, making the code modular, reusable, and scalable.

Main Classes:
    Todo Class:
    - Responsible for creating and rendering todo items
    - Handles checkbox logic, deletion, and dynamic DOM updates

    FormValidator Class:
    - Encapsulates all form validation logic
    - Enables and disables buttons
    - Handles input errors
    - Provides a resetValidation() method to restore form state after submission

## Deployment

This project is deployed on GitHub Pages:

- Link to deployed website: (https://shane-muf.github.io/se_project_todo-app/)
