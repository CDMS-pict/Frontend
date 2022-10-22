import { Button } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import FormInput from "../Student_Internships/FormInput";
import DateInput from "../Student_Internships/DateInput";
import Address_Details from "./Address_Details";
import defaultimg from "./default_userimg.png";
import Parents_Details from "./Parents_Details";
import "./personal_details.css";
import Tenth_Twelth from "./Tenth_Twelth";
import moment from "moment-timezone";


function Personal_Details() {
  const [edit_pesonal, setEdit_personal] = useState(true);
  const [edit_pesonal_value, setEdit_personal_value] = useState("EDIT");

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

  const [user, setUser] = useState("");

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
  console.log(user);

  const [fullname, setFullName] = useState("");
  const [mail, setMail] = useState("");
  const [branch, setBranch] = useState("");
  const [div, setDiv] = useState("");
  const [rollno, setRollno] = useState("");
  const [mobileno, setMobileno] = useState(0);
  const [DOB, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [pan, setPan] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [pwd, setPwd] = useState("");
  const [bloodgrp, setBloodGrp] = useState("");

  const handleUpdate = async () => {
    try {
      const data = {
        fullname:
          fullname !== "" ? fullname : (user.fullname ? user.fullname : ""),
        mail: mail !== "" ? mail : (user.mail ? user.mail : ""),
        branch: branch !== "" ? branch :( user.branch ? user.branch : ""),
        div: div !== "" ? div : (user.div ? user.div : ""),
        rollno: rollno !== "" ? rollno : (user.rollno ? user.rollno : ""),
        mobile_no:
          mobileno !== 0 ? mobileno : (user.mobile_no ? user.mobile_no : 0),
        DOB: DOB !== "" ? DOB : (user.DOB ? user.DOB : ""),
        gender: gender !== "" ? gender : (user.gender ? user.gender : ""),
        category:
          category !== "" ? category : (user.category ? user.category : ""),
        pan: pan !== "" ? pan : (user.pan ? user.pan : ""),
        aadhar: aadhar !== "" ? aadhar : (user.aadhar ? user.aadhar : ""),
        PWD: pwd !== "" ? pwd : (user.PWD ? user.PWD : ""),
        blood_grp:
          bloodgrp !== "" ? bloodgrp : (user.blood_grp ? user.blood_grp : ""),
      };
      data.mobile_no = parseInt(data.mobile_no);
      // console.log(data);
      await axios.put(`/api/students/student/profile/update/${user._id}`,data);
      setEdit_personal_value("EDIT");
      setEdit_personal(true);
      window.alert("Profile Updated Successfully");
    } catch (err) {
      console.log("Something Wents Wrong");
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
                  : handleUpdate()
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
                name="fullname"
                placeholder="Full Name"
                defaultValue={user.fullname}
                onChange={(e) => setFullName(e.target.value)}
                disabled={edit_pesonal}
              />
              <FormInput
                label="College ID"
                name="college_id"
                placeholder="College ID"
                value={user && user.collegeId}
                disabled
              />
              <FormInput
                label="Mail ID"
                name="mail_id"
                placeholder="Mail ID"
                defaultValue={user.mail}
                onChange={(e) => setMail(e.target.value)}
                disabled={edit_pesonal}
              />
              <FormInput
                label="Mobile No"
                name="mobileno"
                placeholder="Mobile No"
                defaultValue={user.mobile_no}
                onChange={(e) => setMobileno(e.target.value)}
                disabled={edit_pesonal}
              />
              <FormInput
                label="Branch"
                name="branch"
                placeholder="Branch"
                defaultValue={user.branch}
                onChange={(e) => setBranch(e.target.value)}
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
                defaultValue={user.div}
                onChange={(e) => setDiv(e.target.value)}
                disabled={edit_pesonal}
              />
              <FormInput
                label="Roll no"
                name="roll_no"
                placeholder="Roll No"
                defaultValue={user.rollno}
                onChange={(e) => setRollno(e.target.value)}
                disabled={edit_pesonal}
              />
              <DateInput
                label="DOB"
                name="DOB"
                placeholder="DOB"
                value={DOB==="" ? moment(user.DOB).format("YYYY-MM-DD") : DOB}
                onChange={(e) => setDob(e.target.value)}
                disabled={edit_pesonal}
              />
              <FormInput
                label="Gender"
                name="gender"
                placeholder="Gender"
                defaultValue={user.gender}
                onChange={(e) => setGender(e.target.value)}
                disabled={edit_pesonal}
              />
              <FormInput
                label="Category"
                name="category"
                placeholder="Category"
                defaultValue={user.category}
                onChange={(e) => setCategory(e.target.value)}
                disabled={edit_pesonal}
              />
              <FormInput
                label="PAN No"
                name="pan"
                placeholder="PAN No"
                defaultValue={user.pan}
                onChange={(e) => setPan(e.target.value)}
                disabled={edit_pesonal}
              />
              <FormInput
                label="Aadhar No"
                name="Aadhar"
                placeholder="Aadhar No"
                defaultValue={user.aadhar}
                onChange={(e) => setAadhar(e.target.value)}
                disabled={edit_pesonal}
              />
              <FormInput
                label="PWD"
                name="pwd"
                placeholder="PWD"
                defaultValue={user.PWD}
                onChange={(e) => setPwd(e.target.value)}
                disabled={edit_pesonal}
              />
              <FormInput
                label="Blood Group"
                name="blood_grp"
                placeholder="Blood Group"
                defaultValue={user.blood_grp}
                onChange={(e) => setBloodGrp(e.target.value)}
                disabled={edit_pesonal}
              />
            </div>
          </div>
        </div>

        {/* parent details */}
        <Parents_Details user={user}/>
        <br />
        {/* address details  */}
        <Address_Details user={user}/>

        {/* 10th 12th details  */}

        <Tenth_Twelth user={user}/>

        <br />
        <br />
      </div>
    </div>
  );
}

export default Personal_Details;
