import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './global.css';
import './App.css';
import useTheme from './hooks/useTheme'; // استيراد الخطاف المخصص

function App() {
  const [theme, toggleTheme] = useTheme(); // استخدام الخطاف المخصص لإدارة الوضع

  return (
    <div className="App">
        {/* <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button> */}
      <Navbar />
      
      <main>
        {/* إضافة زر لتبديل الوضع */}
     
        <Header />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>

     
    </div>
  );
}

export default App;
