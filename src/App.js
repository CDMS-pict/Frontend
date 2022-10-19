import "./App.css";
import "./index.css";
import StudentDashboard from "./components/Student/StudentDashboard";
import LoginForm from "./components/Auth/LoginForm";
// import PersonalInfo from './components/Auth/PersonalInfo';

import Form from "./components/Auth/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AcademicDetails from "./components/AcademicDetails/AcademicDetails";
import Student_Internships from "./components/Teachers/DashBoard_Components/Student_Internships";
import Teachers_Dashboard from "./components/Teachers/Teachers_Dashboard";
import Students_data from "./components/Teachers/DashBoard_Components/Students_data.jsx/Students_data";
import Internship from "./components/Student_Internships/Internship";
import Personal_Details from "./components/PersonalDetails/Personal_Details";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import { selectUser } from "./store/store";

// import Student_Internships from "./components/Teachers/DashBoard_Components/Student_Internships";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  // const [student, setStudent] = useState();

  console.log(isLoggedIn);

  // console.log(isLoggedIn);
  // console.log(student);
  const [user, setUser] = useState();

  // const refreshToken = async () => {
  //   const res = await axios
  //     .get("/api/students/refresh", {
  //       withCredentials: true,
  //     })
  //     .catch((err) => console.log(err));

  //   const data = await res.data;
  //   return data;
  // };
  const sednRequest = async () => {
    const res = await axios
      .get("/api/students/user", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sednRequest().then((data) => setUser(data.user));
  }, []);

  // const usertrue = localStorage.getItem("user");
  // console.log(usertrue)
  return (
    <div className="App">
      <Router>
        {user ? (
          <Routes>
            {/* <Route exact path="/" element={<LoginForm />} /> */}
            <Route exact path="/dashboard" element={<StudentDashboard />} />
            <Route exact path="/signup" element={<Form />} />
            <Route
              exact
              path="/student/Academics"
              element={<AcademicDetails />}
            />
            <Route
              exact
              path="/student/personal_details"
              element={<Personal_Details />}
            />
            <Route exact path="/student/internship" element={<Internship />} />
            <Route
              exact
              path="/teachers_dashboard"
              element={<Teachers_Dashboard />}
            />
            <Route
              exact
              path="/teachers_dashboard/internship"
              element={<Student_Internships />}
            />
            <Route
              exact
              path="/teachers_dashboard/students"
              element={<Students_data />}
            />
            {/* <Route path="*" element={<StudentDashboard />} /> */}
          </Routes>
        ) : (
          <Routes>
            <Route exact path="/login" element={<LoginForm />} />
            <Route exact path="/signup" element={<Form />} />
            {/* <Route exact path="*" element={<LoginForm />} /> */}
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
