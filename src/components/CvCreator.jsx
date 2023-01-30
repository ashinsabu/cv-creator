import React, { Component } from 'react'
import '../styles/App.css';
import './CvCreator.css'
import CvEdit from './Edit/CvEdit';
import CvPreview from './Preview/CvPreview';
class CvCreator extends Component {
    constructor(props) {
        super(props);
        this.state = 
        {  }
    }
    render() { 
        return ( 
        <div className='CvCreator'>
            <div className='edit-cv-area'>
                <p>Edit your CV here</p>
                <CvEdit/>
            </div>

            <div className='preview-cv-area'>
                <div className='preview-title'>
                    <p>Preview</p>
                    <div>
                        <button id='download-pdf-button'>Download as PDF<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1667px-PDF_file_icon.svg.png' alt='pdf'/></button>
                        <button id='download-doc-button'>Download as DOC <img src='https://cdn-icons-png.flaticon.com/512/5968/5968517.png' alt='doc'/></button>
                    </div>
                </div>
                <CvPreview/>
            </div>

        </div> );
    }
}
 
export default CvCreator;