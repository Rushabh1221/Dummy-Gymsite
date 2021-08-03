import React from 'react';
import About from './Components/About';
import Contact from './Components/Contact';
import Feature from './Components/Feature';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Offer from './Components/Offer';

//Function Component:
function App() {
  return (
    <div className="App">
     <Navbar />
     <Header />
     <Feature />
     { /* Here we render Offer Component */ } 
     <About /> 
     <Contact />  
    </div>
  );
}
export default App;
