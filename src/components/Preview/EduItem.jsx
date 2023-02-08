import React, { Component } from 'react'
import '../../styles/App.css'
import './EduItem.css'
import './ExperienceItem.css'

function EduItem (props) {
        return ( 
            <div className='experience'>
                <div className="experience-heading">
                    <h4>{props.eduData.course}</h4>
                    <div className="experience-details">
                        {props.eduData.university} | <span className='bold'>{props.eduData.startYear} - {props.eduData.endYear}</span>
                    </div>
                    
                </div>
                {props.eduData.description}
            </div>
         );
}
 
export default EduItem;