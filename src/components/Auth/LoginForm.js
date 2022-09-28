import React from "react";
import { useState } from "react";
import Login from "./Login";
import "./login.css";

const LoginForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "College Mail Address",
      label: "CollegeId",
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Enter password",

      label: "Password",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {inputs.map((input) => (
          <Login
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button className="loginbtn">Submit</button>

        <center>
          <p>
            Don't have an account ? <a href="/SignUp">Sign Up</a>
          </p>
        </center>
      </form>
    </div>
  );
};

export default LoginForm;
