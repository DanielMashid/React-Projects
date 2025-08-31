# HTTP Requests in React

## Description

This project demonstrates how to handle HTTP requests in React applications with a focus on advanced form handling, backend communication, and error management. It features a React frontend that interacts with a Node.js/Express backend to process and validate form submissions.

### Form Actions

The upvote and downvote buttons use form actions to handle voting. When clicked, each button triggers its respective async action (`upvoteAction` or `downvoteAction`) using `formAction`, which allows for handling form submissions without a page reload.

### useActionState

`useActionState` is a React hook that manages the state and pending status of an async action. It returns the current state, a function to trigger the action, and a boolean indicating if the action is pending. This helps disable buttons while a vote is being processed.

### useOptimistic

`useOptimistic` is used to update the vote count immediately in the UI before the server confirms the change. It provides a smoother user experience by showing the expected result optimistically, even if the network is slow.

## Launching the Project

To launch the project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/DanielMashid/React-Projects.git

   ```

2. **Navigate to the project directory**:

- cd 17-Forms-Adv-Backend
- npm install
- npm run dev

3. **Navigate to the backend directory:**

- npm install
- npm start
