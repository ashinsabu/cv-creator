import React, { Component } from 'react'
import '../styles/App.css';
import './CvCreator.css'
import CvEdit from './Edit/CvEdit';
import CvPreview from './Preview/CvPreview';
import uniqid from "uniqid";
class CvCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personalDetails: {
              name: '',
              title: '',
              phone: '',
              email: '',
              location: ''
            },
            description: '',
            experience: [
                {
                    id: 0,
                    company:'ms',
                    position: 'senior',
                    startDate: 'Jan 2022',
                    endDate: 'Jan 2023',
                    description: 'Finished crazy apps'
                }
            ],
            education: []
          };
          this.handlePersonalDetailChange = this.handlePersonalDetailChange.bind(this);
          this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
          this.handleArrayChange = this.handleArrayChange.bind(this);

          this.handleExperienceItemAdd = this.handleExperienceItemAdd.bind(this);
          this.handleEducationItemAdd = this.handleEducationItemAdd.bind(this);

          this.handleDeleteArrayItem = this.handleDeleteArrayItem.bind(this);
    }
    handlePersonalDetailChange(e){
        let {name, value} = e.target;
        this.setState((prevState) => ({
            ...prevState,
            personalDetails: {
                ...prevState.personalDetails,
                [name]: value
            }
        })
        // , () => {console.log(this.state);}
        );
    }

    handleDescriptionChange(e){
        let {value} = e.target;
        this.setState((prevState) => ({
            ...prevState,
            description: value
        }))
    }
        
    handleExperienceItemAdd(e){
        e.preventDefault();
        let newExpItem = {
            id: uniqid(),
            company:'',
            position: '',
            startDate: '',
            endDate: '',
            description: ''
        }
        this.setState((prevState) => ({
            ...prevState,
            experience: [...prevState.experience,newExpItem]
        }));
    }

    handleEducationItemAdd(e){
        e.preventDefault();
        let newEduItem = {
            id: uniqid(),
            course: '',
            university: '',
            startYear: '',
            endYear: '',
            description: ''
        }
        this.setState((prevState) => ({
            ...prevState,
            education: [...prevState.education,newEduItem]
        }))
    }

    handleArrayChange(property,id,field,value){
        let toBeChanged = this.state[property];
        let modIndex = toBeChanged.findIndex((obj => obj.id === id));
        toBeChanged[modIndex][field] = value;
        this.setState((prevState)=>({
            ...prevState,
            [property]: toBeChanged
        }),()=>{
            console.log(this.state[property])
        })
    }
    handleDeleteArrayItem(property, id){
        this.setState((prevState) => ({
            ...prevState,
            [property]: prevState[property].filter((obj)=>{
                return obj.id !== id;
              }),
        }))
    }
    render() { 
        return ( 
        <div className='CvCreator'>
            <div className='edit-cv-area'>
                <p>Edit your CV here</p>

                <CvEdit 
                handlePersonalDetailChange = {this.handlePersonalDetailChange} 
                handleDescriptionChange = {this.handleDescriptionChange} 
                handleArrayChange ={this.handleArrayChange}

                handleExperienceItemAdd = {this.handleExperienceItemAdd}
                handleEducationItemAdd = {this.handleEducationItemAdd}

                handleDeleteArrayItem = {this.handleDeleteArrayItem}

                expItems = {this.state.experience} 
                eduItems = {this.state.education}
                />
            </div>

            <div className='preview-cv-area'>
                <div className='preview-title'>
                    <p>Preview</p>
                    <div>
                        <button id='download-pdf-button'>Download as PDF<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1667px-PDF_file_icon.svg.png' alt='pdf'/></button>
                        <button id='download-doc-button'>Download as DOC <img src='https://cdn-icons-png.flaticon.com/512/5968/5968517.png' alt='doc'/></button>
                    </div>
                </div>

                <CvPreview details={this.state}/>
            </div>

        </div> );
    }
}
 
export default CvCreator;