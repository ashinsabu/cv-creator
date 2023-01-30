import React, { Component } from 'react'
import '../styles/App.css'
import './Footer.css';

class Footer extends Component {
    render() { 
        return ( 
        <div className='Footer'>
            <p>Made with 🖤 by Ashin Sabu</p>
            <a href='https://github.com/ashinsabu/cv-creator'>View Source Code</a>
            <div className="social-links">
                <a href='https://github.com/ashinsabu/'><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png'/></a>
                <a href='https://www.linkedin.com/in/ashin-sabu-1059a6175/'><img src='https://cdn-icons-png.flaticon.com/512/174/174857.png'/></a>
                <a href='https://twitter.com/ashinsabu3'><img src='https://cdn-icons-png.flaticon.com/512/124/124021.png'/></a>
            </div>
        </div> 
        );
    }
}
 
export default Footer;