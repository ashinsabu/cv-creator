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
            <h1>Free and Easy</h1>
            <h1>to use minimalistic</h1>
            <h1>CV Creator</h1>
            <p>One sheet of paper decides whether you get the job. </p>
            <p>Isn’t that terrifying?</p>
            <p>Let us do the heavy lifting. Create an aesthetic, professional CV in minutes, free.</p>
            <button onClick={this.props.onClick} className='create-cv-button'>Create your CV now</button>
        </div> 
        );
    }
}
 
export default Hero;