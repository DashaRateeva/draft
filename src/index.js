import { createRoot } from "react-dom/client";
import "./styles.css";
import React from 'react';
import App from './App';

// Create the root only once
const root = createRoot(document.getElementById('root'));

// Render the app using the created root
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
