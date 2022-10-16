import "./App.css";
import "./index.css";
import StudentDashboard from "./components/Student/StudentDashboard";
import LoginForm from "./components/Auth/LoginForm";
// import PersonalInfo from './components/Auth/PersonalInfo';


import Form from "./components/Auth/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AcademicDetails from "./components/AcademicDetails/AcademicDetails";

import Internship from "./components/Student_Internships/Internship";
import ExtraCurricular from "./components/ExtraCurricular/ExtraCurricular";
import Student_Internships from "./components/Teachers/DashBoard_Components/Student_Internships";

function App() {
  return (
    <div className="App">
    //   <Router>
    //     <Routes>
    //       <Route exact path="/login" element={<LoginForm />} />
    //       <Route exact path="/" element={<LoginForm />} />
    //       <Route exact path="/dashboard" element={<StudentDashboard />} />
    //       <Route exact path="/signup" element={<Form />} />
    //       <Route exact path="/student/Academics" element={<AcademicDetails />} />
    //       <Route exact path="/teachers_dashboard/internship" element={<Student_Internships />} />
    //       

          

    //     </Routes>
    //   </Router>     
    

    </div>
  );
}

export default App;
