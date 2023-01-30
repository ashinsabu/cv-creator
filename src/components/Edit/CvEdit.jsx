import React, { Component } from 'react'
import '../../styles/App.css';
import './CvEdit.css';
import InputField from './InputField';

class CvEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() { 
        return ( 
            <div className='CvEdit'>
                <form>
                    <section>
                        <h4 className='section-title'>Personal Details</h4>
                        <InputField placeholder = "Full Name"/>
                        <InputField placeholder = "Title"/>
                        <InputField placeholder = "Mobile No."/>
                        <InputField placeholder = "Email"/>
                        <InputField placeholder = "Location"/>
                    </section>
                    <section>
                        <h4 className='section-title'>Work Experience</h4>
                        <InputField placeholder = "Company"/>
                        <InputField placeholder = "Position"/>
                        <InputField placeholder = "Start Date"/>
                        <InputField placeholder = "End Date"/>
                        <InputField placeholder = "Position"/>
                    </section>
                    <section>
                        <h4 className='section-title'>Education</h4>
                        <InputField placeholder = "Course/Program"/>
                        <InputField placeholder = "University"/>
                        <InputField placeholder = "Start Year"/>
                        <InputField placeholder = "End Year"/>
                        <InputField placeholder = "Description(Add CGPA here if necessary)"/>
                    </section>
                </form>
            </div>
         );
    }
}
 
export default CvEdit;