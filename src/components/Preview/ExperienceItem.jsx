import React, { Component } from 'react';
import '../../styles/App.css'
import './ExperienceItem.css'

class ExperienceItem extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
        <div className="experience">
            <div className="experience-heading">
                <h4>{this.props.expData.position}</h4>
                <div className="experience-details">
                    {this.props.expData.company} | <span className='bold'>{this.props.expData.startDate} - {this.props.expData.endDate}</span>
                </div>
                
            </div>
            {this.props.expData.description}
        </div> 
        );
    }
}
 
export default ExperienceItem;