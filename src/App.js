import {React, useState} from 'react'
import Footer from './pages/Footer';
import PortfolioContainer from './pages/Container';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Works from './pages/Works';
import Nav from './pages/Nav';
import Resume from './images/Nathan Stein Resume.pdf'
import Contact from './pages/Contact';

function App() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function toggleModal() {
    setIsOpen(!modalIsOpen);
  }

  return (
<Router>
  <Nav
  toggleModal={toggleModal}/>
  <Routes>
    <Route path='/about' element={<Home />} />
    <Route path='/works' element={<Works />} />
    <Route path='/resume' element={<Resume/>}/>
    {/* <Route path='/contact' element={<Contact
    isOpen={modalIsOpen} toggleModal={toggleModal}/>}/> */}
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
