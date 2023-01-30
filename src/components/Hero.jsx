import React, { Component } from 'react'
import '../styles/App.css' // contains reset and font
import './Hero.css'
class Hero extends Component {
    render() { 
        return ( 
        <div className='Hero'>
            <div>
                <h1>Free and Easy</h1>
                <h1>to use minimalistic</h1>
                <h1>CV Creator</h1>
            </div>
            <div>
                <p>One sheet of paper decides whether you get the job. </p>
                <p>Isn’t that terrifying?</p>
                <p>Let us do the heavy lifting. Create an aesthetic, professional CV in minutes, free.</p>
            </div>
            <button onClick={this.props.onClick} className='create-cv-button'>Create your CV now</button>
        </div> 
        );
    }
}
 
export default Hero;