import React, { Component } from 'react'
import '../../styles/App.css';
import './CvEdit.css';
import InputField from './InputField';

function CvEdit(props) {
        return ( 
            <div className='CvEdit'>
                <form>
                    <section>
                        <h4 className='section-title'>Personal Details</h4>
                        <InputField placeholder = "Full Name" name="name" onChange ={props.handlePersonalDetailChange} value = {props.personalDetails['name']}/>
                        <InputField placeholder = "Title" name="title" onChange ={props.handlePersonalDetailChange} value = {props.personalDetails['title']}/>
                        <InputField placeholder = "Mobile No." name="phone" onChange ={props.handlePersonalDetailChange} value = {props.personalDetails['phone']}/>
                        <InputField placeholder = "Email" name="email" onChange ={props.handlePersonalDetailChange} value = {props.personalDetails['email']}/>
                        <InputField placeholder = "Location" name="location" onChange ={props.handlePersonalDetailChange} value = {props.personalDetails['location']}/>
                        <InputField placeholder = "Description" name="description" onChange ={props.handleDescriptionChange} value = {props.description}/>
                    </section>
                    
                    <section>
                        <h4 className='section-title'>Work Experience</h4>
                        {props.expItems.map((expItem)=>{
                            return (
                                <div className="work-exp-item" key={expItem.id}>
                                    <InputField placeholder = "Company" value={expItem.company} 
                                        onChange = {(e)=>{
                                            props.handleArrayChange('experience',expItem.id,'company',e.target.value)
                                        }} 
                                    />
                                    <InputField placeholder = "Position" value={expItem.position}
                                        onChange = {(e)=>{
                                            props.handleArrayChange('experience',expItem.id,'position',e.target.value)
                                        }} 
                                    />
                                    <InputField placeholder = "Start Date" value={expItem.startDate}
                                        onChange = {(e)=>{
                                            props.handleArrayChange('experience',expItem.id,'startDate',e.target.value)
                                        }} 
                                    />
                                    <InputField placeholder = "End Date" value={expItem.endDate}
                                        onChange = {(e)=>{
                                            props.handleArrayChange('experience',expItem.id,'endDate',e.target.value)
                                        }} 
                                    />
                                    <InputField placeholder = "Description" value={expItem.description}
                                        onChange = {(e)=>{
                                            props.handleArrayChange('experience',expItem.id,'description',e.target.value)
                                        }} 
                                    />
                                    
                                    <button type='button' className='delete-work-exp-item' onClick={(e) => {
                                        e.preventDefault();
                                        props.handleDeleteArrayItem('experience',expItem.id);
                                    }}>Delete</button>
                                </div>
                            );
                        })}
                        
                        <button type='button' className='add-work-exp-item' onClick = {props.handleExperienceItemAdd}>Add</button>
                    </section>
                    
                    <section>
                        <h4 className='section-title'>Education</h4>
                        {props.eduItems.map((eduItem)=>{
                            return (
                                <div className="edu-item" key={eduItem.id}>
                                    <InputField placeholder = "Course/Program" value={eduItem.course} 
                                        onChange = {(e)=>{
                                            props.handleArrayChange('education',eduItem.id,'course',e.target.value)
                                        }} 
                                    />
                                    <InputField placeholder = "University" value={eduItem.university}
                                        onChange = {(e)=>{
                                            props.handleArrayChange('education',eduItem.id,'university',e.target.value)
                                        }} 
                                    />
                                    <InputField placeholder = "Start Year" value={eduItem.startYear}
                                        onChange = {(e)=>{
                                            props.handleArrayChange('education',eduItem.id,'startYear',e.target.value)
                                        }} 
                                    />
                                    <InputField placeholder = "End Year" value={eduItem.endYear}
                                        onChange = {(e)=>{
                                            props.handleArrayChange('education',eduItem.id,'endYear',e.target.value)
                                        }} 
                                    />
                                    <InputField placeholder = "Description" value={eduItem.description}
                                        onChange = {(e)=>{
                                            props.handleArrayChange('education',eduItem.id,'description',e.target.value)
                                        }} 
                                    />
                                    
                                    <button type='button' className='delete-edu-item' onClick={(e) => {
                                        e.preventDefault();
                                        props.handleDeleteArrayItem('education',eduItem.id);
                                    }}>Delete</button>
                                </div>
                            );
                        })}
                        <button type='button' className='add-edu-item' onClick={props.handleEducationItemAdd}>Add</button>
                    </section>
                    <section>
                        <h4 className='section-title'>Personal Projects</h4>
                        {props.projItems.map((projItem)=>{
                            return (
                                <div className="proj-item" key={projItem.id}>
                                    <InputField placeholder = "Project Name" value={projItem.projName} 
                                        onChange = {(e)=>{
                                            props.handleArrayChange('projects',projItem.id,'projName',e.target.value)
                                        }} 
                                    />
                                     <InputField placeholder = "Technologies Used" value={projItem.projTech} 
                                        onChange = {(e)=>{
                                            props.handleArrayChange('projects',projItem.id,'projTech',e.target.value)
                                        }} 
                                    />
                                     <InputField placeholder = "Project Description" value={projItem.projDesc} 
                                        onChange = {(e)=>{
                                            props.handleArrayChange('projects',projItem.id,'projDesc',e.target.value)
                                        }} 
                                    />
                                    
                                    <button type='button' className='delete-proj-item' onClick={(e) => {
                                        e.preventDefault();
                                        props.handleDeleteArrayItem('projects',projItem.id);
                                    }}>Delete</button>
                                </div>
                            );
                        })}
                        <button type='button' className='add-proj-item' onClick={props.handleProjItemAdd}>Add</button>
                    </section>
                </form>
            </div>
         );
}
 
export default CvEdit;