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

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/" element={<LoginForm />} />
          <Route exact path="/dashboard" element={<StudentDashboard />} />
          <Route exact path="/signup" element={<Form />} />
          <Route exact path="/student/Academics" element={<AcademicDetails />} />
          <Route exact path="/teachers_dashboard" element={<Teachers_Dashboard />} />
          <Route exact path="/teachers_dashboard/internship" element={<Student_Internships />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
