import React, { Component } from 'react'
import '../../styles/App.css'
import './InputField.css'

class InputField extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <input type="text" placeholder={this.props.placeholder} className='inputField'></input>
         );
    }
}
 
export default InputField;