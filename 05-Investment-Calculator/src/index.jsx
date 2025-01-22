import { StrictMode } from 'react'; // StrictMode is a tool for highlighting potential problems in an application.

import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// StrictMode is a react component used to identify the potential issues and bug in the react code
// Example how to use React.StrictMode

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
