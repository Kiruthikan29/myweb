import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      
     
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <footer className="footer">
        <p>© {new Date().getFullYear()} My Personal Website</p>
      </footer>
    </div>
  );
}

export default App;