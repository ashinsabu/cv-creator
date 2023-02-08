import React, {  useState, useRef } from 'react'
import '../styles/App.css';
import './CvCreator.css'
import CvEdit from './Edit/CvEdit';
import CvPreview from './Preview/CvPreview';
import uniqid from "uniqid";
import { useReactToPrint  } from 'react-to-print';


function CvCreator(props)  {

    const templateCvInfo = {
        personalDetails: {
            name: 'Ashin Sabu',
            title: 'Web Developer',
            phone: '1234567890',
            email: 'ashin.sabu3@gmail.com',
            location: 'India'
          },
          description: 'Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi.',
          experience: [
            {
                id: uniqid(),
                company:'A Company',
                position: 'SWE - II',
                startDate: 'Jan 2023',
                endDate: 'Present',
                description: 'Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud.'
            },
            {
                id: uniqid(),
                company:'My First Company',
                position: 'Graduate Engineer',
                startDate: 'Jan 2020',
                endDate: 'Dec 2022',
                description: 'Irure dolor incididunt sint et ullamco. Commodo laboris amet aliquip incididunt do ut est exercitation reprehenderit magna sit laboris est mollit.'
            },
            {
                id: uniqid(),
                company:'Tutor',
                position: 'University',
                startDate: 'Jan 2019',
                endDate: 'Nov 2019',
                description: 'Enim elit aliquip fugiat anim proident.'
            }],
            education: [
                {
                    id: uniqid(),
                    course: 'Bachelor of Technology (B. Tech.)',
                    university: 'Manipal University Jaipur',
                    startYear: '2020',
                    endYear: '2024',
                    description: 'CGPA: 9'
                },
                {
                    id: uniqid(),
                    course: 'Fullstack Javascript',
                    university: 'The Odin Project',
                    startYear: '2020',
                    endYear: 'Present',
                    description: ''
                }
            ],
            projects: [
                {
                    id: uniqid(),
                    projName: 'Portfolio website',
                    projTech: 'ReactJS, Redux, Tailwind CSS, Framer Motion',
                    projDesc: 'Personal Portfolio of projects and work experience with showcase for each. Highly responsive and minimalist UI for quick loading on slow internets.'
                }
            ]

    }
    const [cv,setCv] = useState(templateCvInfo);
    // console.log(cv);
    
    const handlePersonalDetailChange = (e) => {
        let {name, value} = e.target;
        setCv({...cv,
        personalDetails: {
            ...cv[`personalDetails`], [name] : value
        }})
    }

    const handleDescriptionChange = (e) => {
        let {value} = e.target;
        setCv({...cv,
        description: value,
        })
    }
        
    const handleExperienceItemAdd = (e) => {
        e.preventDefault();
        let newExpItem = {
            id: uniqid(),
            company:'',
            position: '',
            startDate: '',
            endDate: '',
            description: ''
        }
        setCv({
            ...cv,
            experience: [...cv[`experience`], newExpItem]
        })
       
    }

    const handleEducationItemAdd = (e) => {
        e.preventDefault();
        let newEduItem = {
            id: uniqid(),
            course: '',
            university: '',
            startYear: '',
            endYear: '',
            description: ''
        }
        setCv({
            ...cv,
            education: [...cv[`education`], newEduItem]
        })
    }
    const handleProjItemAdd = (e) => {
        e.preventDefault();
        let newProjItem = {
            id: uniqid(),
            projName: '',
            projTech: '',
            projDesc: ''
        }
        setCv({
            ...cv,
            projects: [...cv[`projects`], newProjItem]
        })
    }

    const handleArrayChange = (property,id,field,value) => {
        let modIndex = cv[property].findIndex((obj => obj.id === id));
        let newArray = cv[property];
        newArray[modIndex][field] = value;
        setCv({
            ...cv,
            [property]: newArray,
        })
    }
    const handleDeleteArrayItem = (property, id) => {
        let newArray = cv[property];
        newArray = newArray.filter((obj) => {
            return obj.id !== id;
        });
        setCv({
            ...cv,
            [property]: newArray,
        })
    }
    
    
    const componentRef = useRef(null);
    
    const handlePrint = useReactToPrint({ content: () => componentRef.current})
        
    return ( 
    <div className='CvCreator'>
        <div className='edit-cv-area'>
            <p>Edit your CV here</p>

            {<CvEdit 
            handlePersonalDetailChange = {handlePersonalDetailChange} 
            handleDescriptionChange = {handleDescriptionChange} 
            handleArrayChange ={handleArrayChange}

            handleExperienceItemAdd = {handleExperienceItemAdd}
            handleEducationItemAdd = {handleEducationItemAdd}
            handleProjItemAdd = {handleProjItemAdd}
            handleDeleteArrayItem = {handleDeleteArrayItem}

            expItems = {cv[`experience`]} 
            eduItems = {cv[`education`]}
            projItems = {cv[`projects`]}
            description = {cv[`description`]}
            personalDetails = {cv[`personalDetails`]}
            />}
        </div>

        <div className='preview-cv-area'>
            <div className='preview-title'>
                <p>Preview (Preview is viewed better on Desktop)</p>
                <div>
                    <button id='download-pdf-button' onClick={handlePrint}>Download as PDF<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1667px-PDF_file_icon.svg.png' alt='pdf'/></button>
                    <button id='download-doc-button'>Download as DOC <img src='https://cdn-icons-png.flaticon.com/512/5968/5968517.png' alt='doc'/></button>
                </div>
            </div>

            <CvPreview cvData={cv} innerRef = {componentRef}/>

        </div>

    </div> );
}
 
export default CvCreator;