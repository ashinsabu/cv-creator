import './styles/App.css';
import { useState, useEffect } from 'react';
import React from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import CvCreator from './components/CvCreator';
import Footer from './components/Footer';

function App () {
  const [heroHidden,setHeroHidden] = useState(0);

  function handleHeroHide (e){
    if(heroHidden === 0)
      setHeroHidden(1);
    else
      setHeroHidden(0);
  }
  
  return ( 
    <div>
      <Header/>
      {heroHidden?<CvCreator/>:<Hero onClick = {handleHeroHide}/>}
      <Footer/>
    </div>
    )
  
}
 
export default App;