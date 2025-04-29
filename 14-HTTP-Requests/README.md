# HTTP Requests in React

## Description

This project demonstrates how to handle HTTP requests in a React application. It includes examples of fetching data from a backend, managing loading and error states, and sorting data based on user location using the Geolocation API.

## Project Structure

## Project Structure

- **Frontend**:
  The React application handles fetching and displaying data, managing user interactions, and rendering reusable components like lists, error messages, and progress indicators.

- **Backend**:
  A Node.js and Express server provides APIs for fetching and updating data, serving static assets, and handling user-specific operations.

## Key Features

- **Fetching Data**: Demonstrates fetching data using `fetch` with `async/await` and error handling.
- **Geolocation API**: Sorts places by distance from the user's current location.
- **Error Handling**: Implements error boundaries and displays user-friendly error messages.
- **Reusable Components**: Includes modular components like `Places`, `Error`, and `ProgressBar`.
- **Backend Integration**: A Node.js backend serves data and handles updates.

## API Endpoints

- `GET /places`: Fetches a list of available places.
- `GET /user-places`: Fetches user-specific places.
- `PUT /user-places`: Updates the list of user-specific places.

## Launching the Project

To launch the project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/DanielMashid/React-Projects.git

   ```

2. **Navigate to the project directory**:

- cd 14-HTTP-Requests
- npm install
- npm start

3. **Navigate to the backend directory:**

- cd backend
- node app.js
