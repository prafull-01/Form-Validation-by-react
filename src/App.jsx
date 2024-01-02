
import { useState } from 'react'
import './App.css'

// import Form from "./Form"
import FormInput from './FormInput'

function App() {
  let [values, SetValues]= useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  
  let inputs =[
    {
      id:1,
      name :"username",
      placeholder: "Username",
      type: "text",
      errorMessage : "Username should contain 3-16 characters and shouldn't contain any special character!",
      label: "Username",
      required: true,
      pattern:"^[A-Za-z0-9]{3,16}$"
    },

    {
      id:2,
      name :"email",
      placeholder: "Email",
      type: "email",
      errorMessage :"It should be a valid email address!",
      label: "Email",
      required: true,
    },

    {
      id:3,
      name :"birthday",
      placeholder: "Birthday",
      type: "date",
      label: "Birthday",
      required: true,
    },

    {
      id:4,
      name :"password",
      placeholder: "Password",
      type: "password",
      errorMessage :"Password should be 8-20 character and include at least 1 letter, 1 number, and 1 special character!",
      label: "Password",
      pattern: "(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,20}).*$",
      required: true,
    },

    {
      id:5,
      name :"confirmPassword",
      placeholder: "Confirm Password",
      type: "password",
      errorMessage :"Password should be same",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    }
  ];


  let onChange =(e)=>{
    SetValues({...values, [e.target.name]: e.target.value});
  }

  let onSubmit =(e)=>{
    e.preventDefault();
    console.log(values);
    SetValues({
      username: "",
      email: "",
      birthday: "",
      password: "",
      confirmPassword: "",
    })

  }

  return (
    <div className="app">
      
      <form onSubmit={onSubmit}>
      <h1>Register</h1>
        {
          inputs.map((input)=>(
            <FormInput key={input.id} {...input} value={values[inputs.name]} onChange={onChange} />
          )
        )}
        <button>Submit</button>
        

      </form>
    </div>
  )
}

export default App
