import React, { Component } from 'react'
import '../styles/App.css';
import './CvCreator.css'
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
                <>cvedit</>
            </div>

            <div className='preview-cv-area'>
                <div className='preview-title'>
                    <p>Preview</p>
                    <button id='download-pdf-button'>Download as PDF<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1667px-PDF_file_icon.svg.png'/></button>
                    <button id='download-doc-button'>Download as DOC <img src='https://cdn-icons-png.flaticon.com/512/5968/5968517.png'/></button>
                </div>
                <>cvpreview</>
            </div>

        </div> );
    }
}
 
export default CvCreator;