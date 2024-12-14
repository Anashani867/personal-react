import React from 'react';
import useTheme from '../hooks/useTheme';  // استيراد الخطاف من مجلد hooks

function ThemeSwitcher() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div>
      <h2>Current theme: {theme}</h2>
      <button onClick={toggleTheme}>
        Switch to {theme === 'dark' ? 'light' : 'dark'} mode
      </button>
    </div>
  );
}

export default ThemeSwitcher;
