import React, { Component } from 'react'
import '../../styles/App.css'
import './EduItem.css'
import './ExperienceItem.css'

class EduItem extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div className='experience'>
                <div className="experience-heading">
                    <h4>{this.props.eduData.course}</h4>
                    <div className="experience-details">
                        {this.props.eduData.university} | <span className='bold'>{this.props.eduData.startYear} - {this.props.eduData.endYear}</span>
                        
                    </div>
                </div>
            </div>
         );
    }
}
 
export default EduItem;