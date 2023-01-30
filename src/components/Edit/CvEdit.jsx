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
                        <InputField placeholder = "Full Name" name="name" onChange ={this.props.handlePersonalDetailChange}/>
                        <InputField placeholder = "Title" name="title" onChange ={this.props.handlePersonalDetailChange}/>
                        <InputField placeholder = "Mobile No." name="mobno" onChange ={this.props.handlePersonalDetailChange}/>
                        <InputField placeholder = "Email" name="email" onChange ={this.props.handlePersonalDetailChange}/>
                        <InputField placeholder = "Location" name="location" onChange ={this.props.handlePersonalDetailChange}/>
                        <InputField placeholder = "Description" name="description" onChange ={this.props.handleDescriptionChange}/>
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
                                    
                                    <button className='delete-work-exp-item' onClick={(e) => {
                                        e.preventDefault();
                                        this.props.handleDeleteArrayItem('experience',expItem.id);
                                    }}>Delete</button>
                                </div>
                            );
                        })}
                        
                        <button className='add-work-exp-item' onClick = {this.props.handleExperienceItemAdd}>Add</button>
                    </section>
                    <section>
                        <h4 className='section-title'>Education</h4>
                        <InputField placeholder = "Course/Program"/>
                        <InputField placeholder = "University"/>
                        <InputField placeholder = "Start Year"/>
                        <InputField placeholder = "End Year"/>
                        <InputField placeholder = "Description(Add CGPA here if necessary)"/>
                        <button className='add-edu-item'>Add</button>
                    </section>
                </form>
            </div>
         );
    }
}
 
export default CvEdit;