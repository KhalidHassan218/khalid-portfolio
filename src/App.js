import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';




function App() {



  return (
    <BrowserRouter>
    <div  >

   

<Navbar />
<Home  />
<About />
  <Projects/>
  <Contact/>
  <Footer/>
     </div>
     </BrowserRouter>
  );
}

export default App;
