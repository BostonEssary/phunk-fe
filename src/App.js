import Navbar from './Components/Navbar/Navbar';
import NavbarAccordian from './Components/Accordian/Accordian';
import Header from './Components/Header/Header';
import Button from './Components/Header/Header';
import { useState, useEffect } from "react";
import PhotoShowcase from './Components/PhotoShowcase/PhotoShowcase';
import Cards from './Components/Cards/Cards';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import { motion } from "framer-motion"
import './App.css'

const App = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window.matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches(e.matches))},[])

  return (
    <div className='bg-purple-abyss h-fit'>

       {/* */}
      <div className='text-2xl'>
        {matches && (<Navbar/>)}
        {!matches && (<NavbarAccordian />)}
      </div>

      
        <Header title="Welcome to the Phunk!" />
      

      <div className='flex h-auto justify-center'>
        <div className='max-w-screen-2xl '>
          <PhotoShowcase />
          <Cards/>
          <ContactUs/>
          
        </div>
      </div>
      <Footer/>
      
    </div>
  );
}


export default App
