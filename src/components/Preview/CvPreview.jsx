import React, { Component } from 'react'
import '../../styles/App.css';
import './CvPreview.css';
import phoneSvg from '../../phone-square-solid.svg'
import emailSvg from '../../envelope-square-solid.svg'
import mapMarkerSvg from '../../map-marker-alt-solid.svg'
import ExperienceItem from './ExperienceItem';
import EduItem from './EduItem';
class CvPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() { 
        // destructure
        const { personalDetails , description, experience, education } = this.props.cvData;

        const fullName = personalDetails['name'];
        const title = personalDetails['title'];
        const phone = personalDetails['phone'];
        const email = personalDetails['email'];
        const location = personalDetails['location'];

        return ( 
            <div className='CvPreview'>
                <div className="previewContent">
                    <header>
                        <div className="heading">
                            <h1><strong>{fullName}</strong></h1>
                            <h2>{title}</h2>
                        </div>
                        <div className="details-group">
                            <div className="contact-details">
                                <img src={phoneSvg}/>
                                <span className='details-text'>{phone}</span>
                            </div>
                            <div className="contact-details">
                                <img src={emailSvg}/>
                                <span className='details-text'>{email}</span>
                            </div>
                            <div className="contact-details">
                                <img src={mapMarkerSvg}/>
                                <span className='details-text'>{location}</span>
                            </div>
                        </div>
                    </header>
                    <div className='preview-desc'>
                        {description}
                    </div>
                    <div className="experience-list">
                        <h3>WORK EXPERIENCE</h3>
                        {experience.map((exp) => {
                            return (
                                <ExperienceItem expData = {exp} />
                            )
                        })}
                    </div>
                    <div className="edu-list">
                        <h3>EDUCATION</h3>

                        {education.map((edu) => {
                            return (
                                <EduItem eduData = {edu}/>
                            )
                        })}
                    </div>
                </div>
                
            </div>
         );
    }
}
 
export default CvPreview;