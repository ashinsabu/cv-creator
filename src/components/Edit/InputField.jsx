import React from 'react'
import '../../styles/App.css'
import './InputField.css'

function InputField (props) {
        return ( 
            <input 
            type="text" 
            placeholder={props.placeholder} 
            className='inputField' 
            name={props.name} 
            onChange={props.onChange} 
            defaultValue={props.value?props.value:""}
            />
         );
}
 
export default InputField;