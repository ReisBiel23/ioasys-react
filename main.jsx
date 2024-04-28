import React from 'react';
import ReactDOM from 'react-dom/client'; // Importe createRoot corretamente
import App from "./components/App.jsx";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
