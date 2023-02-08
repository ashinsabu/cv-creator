import React from 'react';
import '../../styles/App.css'
import './ProjItem.css'

function ProjItem (props) {
    return ( 
        <div className="experience">
            <div className="experience-heading">
                <h4>{props.projData.projName} <span className='proj-tech'>| {props.projData.projTech}</span></h4> 
                
            </div>
            {props.projData.projDesc}
        </div> 
    );
}
 
export default ProjItem;