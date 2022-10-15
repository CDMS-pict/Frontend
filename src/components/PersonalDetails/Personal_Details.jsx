import { Button } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import FormInput from "../Student_Internships/FormInput";
import Address_Details from "./Address_Details";
import defaultimg from "./default_userimg.png";
import Parents_Details from "./Parents_Details";
import "./personal_details.css";
import Tenth_Twelth from "./Tenth_Twelth";

function Personal_Details() {
  const [edit_pesonal, setEdit_personal] = useState(true);
  const [edit_pesonal_value, setEdit_personal_value] = useState("EDIT");

  const handleUpdate_Personal = () => {
    window.alert("Personal Details Updated Successfully");
    setEdit_personal_value("EDIT");
    setEdit_personal(true);
  };

  const handleEditAccess = (choice) => {
    switch (choice) {
      case 1: {
        setEdit_personal(false);
        setEdit_personal_value("SAVE");
        break;
      }
      default:
        break;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="personal_details_dashboard">
        <div className="student_details">
          <div className="details_header">
            <h3>Personal Details</h3>
            <Button
              onClick={() =>
                edit_pesonal_value === "EDIT"
                  ? handleEditAccess(1)
                  : handleUpdate_Personal()
              }
            >
              {edit_pesonal_value}
            </Button>
          </div>
          <div className="details_body">
            <div className="imgsection">
              <center>
                <div className="img">
                  <img src={defaultimg} alt="Default Img" />
                </div>
                <div className="addimgbtn">
                  <Button>Add Img</Button>
                </div>
              </center>
            </div>
            <div className="details_section">
              <FormInput
                label="Full Name"
                name="full_name"
                placeholder="Full Name"
                value={"Chaitanya Bhagwan Lokhande"}
                disabled={edit_pesonal}
              />
              <FormInput
                label="College ID"
                name="college_id"
                placeholder="College ID"
                value={"E2K20104080@ms.pict.edu"}
                disabled
              />
              <FormInput
                label="Mail ID"
                name="mail_id"
                placeholder="Mail ID"
                value={"chaitanyalokhande@gmail.com"}
                disabled
              />
              <FormInput
                label="Branch"
                name="branch"
                placeholder="Branch"
                value={"Electronics and Telecommunication"}
                disabled={edit_pesonal}
              />
              {/* <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Division</em>
                </MenuItem>
                {}
                {divs.map((d) => (
                  <MenuItem value={d}>{d}</MenuItem>
                ))}
              </Select> */}
              <FormInput
                label="Division"
                name="div"
                placeholder="Division"
                value={"TE7"}
                disabled={edit_pesonal}
              />
              <FormInput
                label="Roll no"
                name="roll_no"
                placeholder="Roll No"
                value={"32331"}
                disabled={edit_pesonal}
              />
              <FormInput
                label="DOB"
                name="DOB"
                placeholder="DOB"
                value={"19/07/2003"}
                disabled={edit_pesonal}
              />
              <FormInput
                label="Gender"
                name="gender"
                placeholder="Gender"
                value={"Male"}
                disabled={edit_pesonal}
              />
              <FormInput
                label="PAN No"
                name="pan"
                placeholder="PAN No"
                value={"BHxxxxx08"}
                disabled={edit_pesonal}
              />
              <FormInput
                label="Aadhar No"
                name="Aadhar"
                placeholder="Aadhar No"
                value={"879xxxxxx9"}
                disabled={edit_pesonal}
              />
              <FormInput
                label="PWD"
                name="pwd"
                placeholder="PWD"
                value={"No"}
                disabled={edit_pesonal}
              />
              <FormInput
                label="Blood Group"
                name="blood_grp"
                placeholder="Blood Group"
                value={"O-"}
                disabled={edit_pesonal}
              />
            </div>
          </div>
        </div>

        {/* parent details */}
        <Parents_Details />
        <br />
        {/* address details  */}
        <Address_Details />

        {/* 10th 12th details  */}

        <Tenth_Twelth/>

        <br />
        <br />
      </div>
    </div>
  );
}

export default Personal_Details;
