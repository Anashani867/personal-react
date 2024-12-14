import React from 'react';
import ReactDOM from 'react-dom/client'; // استخدم `react-dom/client` بدلاً من `react-dom`
import './index.css';
import './global.css';
import App from './App';

// إنشاء الجذر باستخدام createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

