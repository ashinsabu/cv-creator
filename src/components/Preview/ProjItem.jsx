import React, { Component } from 'react';
import '../../styles/App.css'
import './ProjItem.css'

class ProjItem extends Component {
    render() { 
        return ( 
        <div className="experience">
            <div className="experience-heading">
                <h4>{this.props.projData.projName} <span className='proj-tech'>| {this.props.projData.projTech}</span></h4> 
                
            </div>
            {this.props.projData.projDesc}
        </div> 
        );
    }
}
 
export default ProjItem;