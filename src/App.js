import React from 'react'
import Footer from './pages/Footer';
import PortfolioContainer from './pages/Container';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Works from './pages/Works';
import Nav from './pages/Nav';
import Resume from './images/Nathan Stein Resume.pdf'
import Contact from './pages/Contact';

function App() {
  return (
<Router basename={process.env.PUBLIC_URL}>
  <Nav/>
  <Routes>
    <Route path='/about' element={<Home />} />
    <Route path='/works' element={<Works />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/resume' element={<Resume/>}/>
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
