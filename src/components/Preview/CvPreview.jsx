import React from 'react'
import '../../styles/App.css';
import './CvPreview.css';
import phoneSvg from '../../phone-square-solid.svg'
import emailSvg from '../../envelope-square-solid.svg'
import mapMarkerSvg from '../../map-marker-alt-solid.svg'
import ExperienceItem from './ExperienceItem';
import EduItem from './EduItem';
import ProjItem from './ProjItem';
function CvPreview (props) {
        // destructure
        const { personalDetails , description, experience, education, projects } = props.cvData;

        const fullName = personalDetails['name'];
        const title = personalDetails['title'];
        const phone = personalDetails['phone'];
        const email = personalDetails['email'];
        const location = personalDetails['location'];

        return ( 
            <div className='CvPreview' ref={props.innerRef}>
                <div className="previewContent">
                    <header>
                        <div className="heading">
                            <h1><strong>{fullName}</strong></h1>
                            <h2>{title}</h2>
                        </div>
                        <div className="details-group">
                            <div className="contact-details">
                                <img src={phoneSvg} alt='Phone: '/>
                                <span className='details-text'>{phone}</span>
                            </div>
                            <div className="contact-details">
                                <img src={emailSvg}  alt='Email: '/>
                                <span className='details-text'>{email}</span>
                            </div>
                            <div className="contact-details">
                                <img src={mapMarkerSvg}  alt='Location: '/>
                                <span className='details-text'>{location}</span>
                            </div>
                        </div>
                    </header>
                    <div className='preview-desc'>
                        {description}
                    </div>
                    {experience.length?<div className="experience-list">
                        <h3>WORK EXPERIENCE</h3>
                        {experience.map((exp,index) => {
                            return (
                                <ExperienceItem key={index} expData = {exp} />
                            )
                        })}
                    </div>:''}
                    
                    {education.length?<div className="edu-list">
                        <h3>EDUCATION</h3>

                        {education.map((edu,index) => {
                            return (
                                <EduItem key={index} eduData = {edu}/>
                            )
                        })}
                    </div>:''}
                    {projects.length?<div className="proj-list">
                        <h3>Projects</h3>

                        {projects.map((proj,index) => {
                            return (
                                <ProjItem key={index} projData = {proj}/>
                            )
                        })}
                    </div>:''}
                </div>
            </div>
         );
}
 
export default CvPreview;