import React, { Component } from 'react'
import '../../styles/App.css'
import './InputField.css'

class InputField extends Component {
    render() { 
        return ( 
            <input 
            type="text" 
            placeholder={this.props.placeholder} 
            className='inputField' 
            name={this.props.name} 
            onChange={this.props.onChange} 
            defaultValue={this.props.value?this.props.value:""}
            
            />
         );
    }
}
 
export default InputField;