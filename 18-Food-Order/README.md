# Food Order

This project is part of the React Essentials course. It’s a full-stack food ordering app with a React frontend and a small Express backend. It demonstrates state management with Context + Reducer, custom hooks for HTTP, portals/modals, and form actions for submitting orders.

## Features

- Browse meals loaded from the backend (GET /meals)
- Add/remove items to/from the cart with quantity aggregation
- Cart and Checkout as modal dialogs rendered via React portals
- Checkout form posting an order to the backend (POST /orders)
- Loading and error states for all network requests

## What I Learned (Main Things)

- React Context for app-wide state
  - `CartContext` to manage items in the cart
  - `UserProgressContext` to control UI flow: none → cart → checkout
- `useReducer` for complex state updates in the cart (immutable updates, add/remove/clear)
- Custom Hook `useHttp`
  - Generic wrapper around `fetch` with loading and error handling
  - Supports initial data for immediate, safe rendering
  - Auto-executes GET requests on mount; exposes `sendRequest` for POST
- Portals and the native `<dialog>` element
  - `Modal` uses `createPortal` to render outside the main DOM tree
  - `useEffect` + `ref` to open/close the dialog correctly
- Form Actions (`useActionState`)
  - Submit checkout data without manual `onSubmit` boilerplate
  - Simple pending state and success handling
- Utilities
  - Currency formatting via `Intl.NumberFormat`

## API Endpoints (Backend)

- `GET /meals` → Returns available meals
- `POST /orders` → Accepts `{ order: { items: [...], customer: { name, email, street, postal-code, city } } }`
  - Validates required fields; simulates delay; persists to `data/orders.json`

## Project Structure (High Level)

- `src/components` → UI pieces like `Header`, `Meals`, `Cart`, `Checkout`
- `src/store` → `CartContext.jsx`, `UserProgressContext.jsx`
- `src/hooks` → `useHttp.js`
- `src/UI` → `Modal.jsx`, `Input.jsx`, `Button.jsx`
- `src/util` → `formatting.js` (currency)
- `backend` → Express server (`app.js`) serving meals, orders, and static assets

## Launching the Project

To launch the project, follow these steps:

1. Clone the repository

   git clone <https://github.com/DanielMashid/React-Projects.git>

2. Start the backend (required for meals, images, and order submission)

- cd 18-Food-Order/backend
- npm install
- npm start

3. Start the frontend in a new terminal

- cd 18-Food-Order
- npm install
- npm run dev

Notes:

- The frontend expects the backend on http://localhost:3000
- Meal images are served from the backend’s `public` folder
