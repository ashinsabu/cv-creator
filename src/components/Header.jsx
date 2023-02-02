import React, { Component } from 'react'
import '../styles/App.css'
import './Header.css';

class Header extends Component {
    render() { 
        return ( 
        <div className='Header'>
            <h1><a href='/cv-creator'>Minimalistic CV Creator</a></h1>
        </div> 
        );
    }
}
 
export default Header;