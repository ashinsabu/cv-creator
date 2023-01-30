import React, { Component } from 'react'
import '../../styles/App.css';
import './CvPreview.css';

class CvPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() { 
        // destructure
        return ( 
            <div className='CvPreview'>
                <div className="previewContent">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus veniam autem delectus provident numquam assumenda, voluptates ex in porro quod ratione nulla! Magnam totam alias, saepe laborum animi sed nisi.
                    {JSON.stringify(this.props.details["personalDetails"])}
                </div>
                
            </div>
         );
    }
}
 
export default CvPreview;