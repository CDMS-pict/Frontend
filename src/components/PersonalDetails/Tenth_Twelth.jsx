import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import FormInput from "../Student_Internships/FormInput";

function Tenth_Twelth({ user }) {
  const [edit_pesonal, setEdit_personal] = useState(true);
  const [edit_pesonal_value, setEdit_personal_value] = useState("EDIT");

  const [selectedFile, setSelectedFile] = useState("");
  const [selectedFile1, setSelectedFile1] = useState("");
  const [tenth_p_c, setTenth_p_c] = useState("");
  const [twelth_p_c, setTwelth_p_c] = useState("");

  const [sfilename, setFilename] = useState("");
  const [sfilename1, setFilename1] = useState("");
  // const handleUpdate_Personal = () => {
  //   window.alert("Parents Details Updated Successfully");
  //   setEdit_personal_value("EDIT");
  //   setEdit_personal(true);
  // };

  const handleImage = (e, choice) => {
    const file = e.target.files[0];
    setFileToBase(file);
    setFilename(file.name);
    // console.log(file);x
  };
  const handleImage1 = (e) => {
    const file = e.target.files[0];
    setFileToBase1(file);
    setFilename1(file.name);
    // console.log(file);
  };
  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setSelectedFile(reader.result);
    };
  };
  const setFileToBase1 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setSelectedFile1(reader.result);
    };
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

  // const [selectedFile, setSelectedFile] = useState();
  // const [selectedFile2, setSelectedFile2] = useState();
  // let url;
  // function changeHandler(event) {
  //   setSelectedFile(event.target.files[0]);
  // }
  // function changeHandler2(event) {
  //   setSelectedFile2(event.target.files[0]);
  // }

  const handleUpdate_Personal = async (e) => {
    const data_t = {
      tenth_marksheet: selectedFile,
    };
    const data_tw = {
      twelth_marksheet: selectedFile1,
    };
    const data_t_tw = {
      tenth_p_c:
        tenth_p_c !== "" ? tenth_p_c : user.tenth_p_c ? user.tenth_p_c : "",
      twelth_p_c:
        twelth_p_c !== "" ? twelth_p_c : user.twelth_p_c ? user.twelth_p_c : "",
    };
    if (!selectedFile || !selectedFile1 || tenth_p_c==="" || twelth_p_c==="") {
      window.alert("All the fields are required");
      return;
    }
    try {
      await axios.put(
        `/api/students/student/profile/update/${user._id}`,
        data_t_tw
      );
      await axios.put(
        `/api/students/student/profile/update_t_marks/${user._id}`,
        data_t
      );
      await axios.put(
        `/api/students/student/profile/update_tw_marks/${user._id}`,
        data_tw
      );
      setEdit_personal_value("EDIT");
      setEdit_personal(true);
      window.alert("Profile Updated Successfully");
      // console.log(datas);
    } catch (err) {
      console.log(err);
      window.alert("Unable to Update The Data");
    }
  };
  return (
    <div>
      <div className="student_details">
        <div className="details_header">
          <h3>10th,12th Details</h3>
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
        <div className="parents_details details_section tenth_details">
          <FormInput
            label="10th Percentage/CGPA"
            name="tenth_p_c"
            placeholder="10th Percentage/CGPA"
            defaultValue={user.tenth_p_c}
            onChange={(e) => setTenth_p_c(e.target.value)}
            disabled={edit_pesonal}
          />
          <div className="tenth_twelth_marksheet">
            <Button
              id="outlined-btn"
              variant="contained"
              component="label"
              size="small"
            >
              <div className="uploadmarksheet">
                <i class="fa-solid fa-upload"></i>
                10th Marksheet
              </div>
              <input
                hidden
                accept=".pdf"
                multiple
                type="file"
                onChange={handleImage}
              />
              <br />
              <span style={{ fontSize: "10px", color: "orange" }}>
                {sfilename}
              </span>
            </Button>
          </div>
          <FormInput
            label="12th Percentage/CGPA"
            name="twelth_p_c"
            placeholder="12th Percentage/CGPA"
            defaultValue={user.twelth_p_c}
            onChange={(e) => setTwelth_p_c(e.target.value)}
            disabled={edit_pesonal}
          />
          <div className="tenth_twelth_marksheet">
            <Button
              id="outlined-btn"
              variant="contained"
              component="label"
              size="small"
            >
              <div className="uploadmarksheet">
                <i class="fa-solid fa-upload"></i>
                12th Marksheet
              </div>
              <input
                hidden
                accept=".pdf"
                multiple
                type="file"
                onChange={handleImage1}
              />
              <br />
              <span style={{ fontSize: "10px", color: "orange" }}>
                {sfilename1}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tenth_Twelth;
