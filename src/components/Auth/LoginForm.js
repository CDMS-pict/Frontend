import React from "react";
import { useState } from "react";
import Login from "./Login";


const LoginForm=() =>{
  const [values,setValues]=useState({
    college:"",
    email:"",
    password:""
  });
  const inputs=[
    {
      id:1,
      name:"college",
      type:"text",
      placeholder:"Enter your College Reg.Id",
    
      label:"CollegeId"

    },
    
    {
      id:2,
      name:"email",
      type:"text",
      placeholder:"Enter your email",
      

      label:"Email"

    },
    {
      id:3,
      name:"password",
      type:"password",
      placeholder:"Enter password",
  
      label:"Password"

    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {inputs.map(input=> (
          <Login key={input.id} {...input} value={values[input.name]} onChange={onChange}/>

        ))}
        
      <button>Submit</button>

      </form>
    </div>
  );
}

export default LoginForm;