/* eslint-disable react/no-unknown-property */
import { useState } from "react";

/* eslint-disable react/prop-types */
export default function FormInput (props){
    const {label, onChange,errorMessage,  ...inputProps} = props;

    const [focus, setFocus]= useState(false);
    return (

        <div className="formInput">
            <label htmlFor="">{label}</label>
            {/* <label htmlFor="">Username</label> */}
            <input {...inputProps} onChange={onChange} onBlur= {()=>{setFocus(true)}} focus={focus.toString()} onFocus={()=> inputProps.name === "confirmPassword" && setFocus(true)}/>
            <span>{errorMessage}</span>
        </div>
    );

}