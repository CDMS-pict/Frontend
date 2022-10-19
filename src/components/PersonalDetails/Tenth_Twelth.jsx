import { Button } from "@mui/material";
import React, { useState } from "react";
import FormInput from "../Student_Internships/FormInput";

function Tenth_Twelth() {
  const [edit_pesonal, setEdit_personal] = useState(true);
  const [edit_pesonal_value, setEdit_personal_value] = useState("EDIT");

  const handleUpdate_Personal = () => {
    window.alert("Parents Details Updated Successfully");
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

  // const [selectedFile, setSelectedFile] = useState();
  // const [selectedFile2, setSelectedFile2] = useState();
  // let url;
  // function changeHandler(event) {
  //   setSelectedFile(event.target.files[0]);
  // }
  // function changeHandler2(event) {
  //   setSelectedFile2(event.target.files[0]);
  // }
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
            value={"90%"}
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
                // onChange={changeHandler2}
              />
              <br />
              <span style={{ fontSize: "10px", color: "orange" }}>
                {/* {selectedFile?.name} */}
              </span>
            </Button>
          </div>
          <FormInput
            label="12th Percentage/CGPA"
            name="twelth_p_c"
            placeholder="12th Percentage/CGPA"
            value={"78%"}
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
                // onChange={changeHandler2}
              />
              <br />
              <span style={{ fontSize: "10px", color: "orange" }}>
                {/* {selectedFile2?.name} */}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tenth_Twelth;
