import React, { Component } from 'react'
import '../styles/App.css' // contains reset and font
import './Hero.css'
class Hero extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
        <div className='Hero'>
            <h1>Free and Easy to Use Simple CV Creator</h1>
            <p>Create an aesthetic, professional CV in minutes, free.</p>
            <button onClick={this.props.onClick}>Create your CV now</button>
        </div> 
        );
    }
}
 
export default Hero;