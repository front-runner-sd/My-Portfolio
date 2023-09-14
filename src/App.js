import './App.css';
import About from './components/About/About';
import Landing from './components/landing/Landing';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className='flex justify-center scroll-smooth'>
    <div className="container flex flex-col justify-center items-center">
      <Landing/>
      <About/>
     <Projects/>
     <Contact/>
     <Footer/>
    </div>
    </div>
  );
}

export default App;
