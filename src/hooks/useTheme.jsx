import { useState, useEffect } from 'react';

function useTheme() {
  const savedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(savedTheme || 'dark');  // الوضع الافتراضي هو 'dark'

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);  // إضافة/تغيير السمة على <html>
    localStorage.setItem('theme', theme);  // حفظ السمة في localStorage
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));  // التبديل بين الوضعين
  };

  return [theme, toggleTheme];
}

export default useTheme;
