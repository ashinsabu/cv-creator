import React from 'react';
import '../../styles/App.css'
import './ExperienceItem.css'

function ExperienceItem (props) {
    return ( 
        <div className="experience">
            <div className="experience-heading">
                <h4>{props.expData.position}</h4>
                <div className="experience-details">
                    {props.expData.company} | <span className='bold'>{props.expData.startDate} - {props.expData.endDate}</span>
                </div>
                
            </div>
            {props.expData.description}
        </div> 
    );
}
 
export default ExperienceItem;