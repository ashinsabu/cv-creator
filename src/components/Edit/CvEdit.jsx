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
                        <InputField placeholder = "Full Name" name="name" onChange ={this.props.handlePersonalDetailChange} value = {this.props.personalDetails['name']}/>
                        <InputField placeholder = "Title" name="title" onChange ={this.props.handlePersonalDetailChange} value = {this.props.personalDetails['title']}/>
                        <InputField placeholder = "Mobile No." name="mobno" onChange ={this.props.handlePersonalDetailChange} value = {this.props.personalDetails['mobno']}/>
                        <InputField placeholder = "Email" name="email" onChange ={this.props.handlePersonalDetailChange} value = {this.props.personalDetails['email']}/>
                        <InputField placeholder = "Location" name="location" onChange ={this.props.handlePersonalDetailChange} value = {this.props.personalDetails['location']}/>
                        <InputField placeholder = "Description" name="description" onChange ={this.props.handleDescriptionChange} value = {this.props.personalDetails['description']}/>
                    </section>
                    
                    <section>
                        <h4 className='section-title'>Work Experience</h4>
                        {this.props.expItems.map((expItem)=>{
                            return (
                                <div className="work-exp-item" key={expItem.id}>
                                    <InputField placeholder = "Company" value={expItem.company} 
                                        onChange = {(e)=>{
                                            this.props.handleArrayChange('experience',expItem.id,'company',e.target.value)
                                        }} 
                                    />
                                    <InputField placeholder = "Position" value={expItem.position}
                                        onChange = {(e)=>{
                                            this.props.handleArrayChange('experience',expItem.id,'position',e.target.value)
                                        }} 
                                    />
                                    <InputField placeholder = "Start Date" value={expItem.startDate}
                                        onChange = {(e)=>{
                                            this.props.handleArrayChange('experience',expItem.id,'startDate',e.target.value)
                                        }} 
                                    />
                                    <InputField placeholder = "End Date" value={expItem.endDate}
                                        onChange = {(e)=>{
                                            this.props.handleArrayChange('experience',expItem.id,'endDate',e.target.value)
                                        }} 
                                    />
                                    <InputField placeholder = "Description" value={expItem.description}
                                        onChange = {(e)=>{
                                            this.props.handleArrayChange('experience',expItem.id,'description',e.target.value)
                                        }} 
                                    />
                                    
                                    <button type='button' className='delete-work-exp-item' onClick={(e) => {
                                        e.preventDefault();
                                        this.props.handleDeleteArrayItem('experience',expItem.id);
                                    }}>Delete</button>
                                </div>
                            );
                        })}
                        
                        <button type='button' className='add-work-exp-item' onClick = {this.props.handleExperienceItemAdd}>Add</button>
                    </section>
                    
                    <section>
                        <h4 className='section-title'>Education</h4>
                        {this.props.eduItems.map((eduItem)=>{
                            return (
                                <div className="edu-item" key={eduItem.id}>
                                    <InputField placeholder = "Course/Program" value={eduItem.course} 
                                        onChange = {(e)=>{
                                            this.props.handleArrayChange('education',eduItem.id,'course',e.target.value)
                                        }} 
                                    />
                                    <InputField placeholder = "University" value={eduItem.university}
                                        onChange = {(e)=>{
                                            this.props.handleArrayChange('education',eduItem.id,'university',e.target.value)
                                        }} 
                                    />
                                    <InputField placeholder = "Start Year" value={eduItem.startYear}
                                        onChange = {(e)=>{
                                            this.props.handleArrayChange('education',eduItem.id,'startYear',e.target.value)
                                        }} 
                                    />
                                    <InputField placeholder = "End Year" value={eduItem.endYear}
                                        onChange = {(e)=>{
                                            this.props.handleArrayChange('education',eduItem.id,'endYear',e.target.value)
                                        }} 
                                    />
                                    <InputField placeholder = "Description" value={eduItem.description}
                                        onChange = {(e)=>{
                                            this.props.handleArrayChange('education',eduItem.id,'description',e.target.value)
                                        }} 
                                    />
                                    
                                    <button type='button' className='delete-edu-item' onClick={(e) => {
                                        e.preventDefault();
                                        this.props.handleDeleteArrayItem('education',eduItem.id);
                                    }}>Delete</button>
                                </div>
                            );
                        })}
                        <button type='button' className='add-edu-item' onClick={this.props.handleEducationItemAdd}>Add</button>
                    </section>
                </form>
            </div>
         );
    }
}
 
export default CvEdit;