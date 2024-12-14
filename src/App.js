import logo from './logo.svg';
import Navbar from './components/Navbar'; // استيراد مكون شريط التنقل
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services'; // استيراد مكون الخدمات
import Skills from './components/Skills'; // استيراد مكون المهارات
import Projects from './components/Projects'; 
import Contact from './components/Contact';
import Footer from './components/Footer';
import './global.css';
import './App.css';

function App() {
  return (
    <body>
    <div className="App">
    <Navbar />
    <main>

    <Header />
    <About />
    <Services />
    <Skills />
    <Projects />
    <Contact />
    <footer>
    <Footer />
    </footer>
        </main>
    </div>
    </body>

  );
}

export default App;
