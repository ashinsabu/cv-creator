import './styles/App.css';
import { Component } from 'react';

import React from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import CvCreator from './components/CvCreator';
import Footer from './components/Footer';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroHidden: 1,
    }
    this.hideHero = this.hideHero.bind(this);
  }
  hideHero(){
    this.setState({
      heroHidden: 1,
    })
  }
  render() { 
    return ( 
      <div>
        <Header/>
        {this.state.heroHidden?<CvCreator/>:<Hero onClick = {this.hideHero}/>}
        <Footer/>
      </div>
     )
  }
}
 
export default App;