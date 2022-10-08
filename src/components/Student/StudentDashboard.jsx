import React from "react";
import "./s_dashboard.css";
import Boxes from "../Boxes/Boxes";
import Profile from "../Profile/Profile";
import Navbar from "../navbar/Navbar";

function StudentDashboard() {
  const student_box_contents = [
    { title: "Personal Details", url: "" },
    { title: "Academic Details", url: "/student/Academics" },
    { title: "Amcat Details", url: "" },
    { title: "Extra Curricular", url: "" },
    { title: "Internship data", url: "" },
    { title: "Competitive Exams", url: "" },
    { title: "Technical Activities", url: "" },
    { title: "LOR Application", url: "" },
    { title: "Notices", url: "" },
  ];

  return (
    <div className="sdashboard">
      <Navbar />

      <div className="student_dashboard">
        <div className="profile_div">
          <Profile />
        </div>
        <div className="student_dashboard_contents">
          <div className="years">
            {/* <p>SE</p>
            <p>|</p>
            <p>TE</p>
            <p>|</p>
            <p>BE</p> */}
          </div>
          <div className="boxes_div">
            {student_box_contents.map((s) => (
              <Boxes title={s.title} url = {s.url}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
