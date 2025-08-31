## Form Actions and `useActionState`

This project demonstrates advanced form handling in React using **form actions** and the `useActionState` hook.

Form actions are functions that handle form submissions. Instead of managing form state and validation manually, you can pass an action function to your form. This function receives the form data and can perform validation, update state, or trigger side effects.

## Features

1. **Action Function**: A function that receives the previous state and a `FormData` object when the form is submitted. You can use this to validate input, return errors, or update state.
2. **Initial State**: The initial state object for your form.
3. The `useActionState` hook from React lets you manage form state and handle submissions in a declarative way. It takes two arguments:

- `formState` holds the current state, including any validation errors or entered values.
- `formAction` is passed to the form's `action` prop, so it runs when the form is submitted.

## Launching the Project

To launch the project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/DanielMashid/React-Projects.git

   ```

2. **Navigate to the project directory**:

- cd 16-Forms-User-Input
- npm install
- npm run dev
