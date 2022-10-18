import axios from "axios";
import React from "react";
import { useState } from "react";
import Login from "./Login";
import "./login.css";
import logo from "../../pict_logo.jpg";
import { authActions } from "../../store/store";
import { useDispatch } from "react-redux";


const LoginForm = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    collegeId: "",
    password: "",
  });
  const inputs = [
    {
      id: 1,
      name: "collegeId",
      type: "collegeId",
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


  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const res = await axios.post("/api/students/login", values);
      console.log(res.data.user);
      dispatch(authActions.login())
      window.alert("HellO");
      window.location.replace("/dashboard");
    }
    catch(err){
      console.log(err);
    }
    // sendRequest().then(()=>);
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form className="form form-container" onSubmit={handleSubmit}>
        <div className="loginform">
          <center>
            <img className="logoimg" src={logo} alt="" />
            <h4>Digital Academic Passport</h4>
          </center>
          <br />
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
          <br />
          <br />
          <center>
            <p>
              Don't have an account ? <a href="/SignUp">Sign Up</a>
            </p>
            <br />
            <span className="forgotpass">
              <a href="/">Forgot Password</a>
            </span>
          </center>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
