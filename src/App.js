import "./App.css";
import "./index.css";
import StudentDashboard from "./components/Student/StudentDashboard";
import LoginForm from "./components/Auth/LoginForm";
// import PersonalInfo from './components/Auth/PersonalInfo';

import Form from "./components/Auth/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AcademicDetails from "./components/AcademicDetails/AcademicDetails";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
