import React, { useState } from "react";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";

import "./yeardetails.css";

function YearDetails({ year }) {
  const [selectedFile, setSelectedFile] = useState();
  const [selectedFile2, setSelectedFile2] = useState();
  // let url;
  function changeHandler(event) {
    setSelectedFile(event.target.files[0]);
    // url = URL.createObjectURL(event.target.files[0]);
  }
  function changeHandler2(event) {
    setSelectedFile2(event.target.files[0]);
    // url = URL.createObjectURL(event.target.files[0]);
  }
  // console.log(selectedFile?.name);

  // const handleSubmission = () => {};
  return (
    <div className="yeardetails">
      <div className="yeardetails_header">
        <h3>{year}</h3>
      </div>
      <div className="yeardetails_form">
        <div className="form_fields">
          <TextField
            id="outlined-basic"
            label="Sem 1 SGPA"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Sem 2 SGPA"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            disabled
            label="Total CGPA"
            variant="outlined"
          />
          <div className="btndiv">
            <Button
              id="outlined-btn"
              variant="contained"
              component="label"
              size="small"
            >
              <div className="uploadmarksheet">
                <i class="fa-solid fa-upload"></i>
                Sem 1
              </div>
              <input
                hidden
                accept=".pdf"
                multiple
                type="file"
                onChange={changeHandler}
              />
            <span style={{fontSize: "10px", color: "orange"}}>
            {selectedFile?.name}

              </span>
            </Button>
            <Button
              id="outlined-btn"
              variant="contained"
              component="label"
              size="small"
            >
              <div className="uploadmarksheet">
                <i class="fa-solid fa-upload"></i>
                Sem 2
              </div>
              <input
                hidden
                accept=".pdf"
                multiple
                type="file"
                onChange={changeHandler2}
              />
              <br />
              <span style={{fontSize: "10px", color: "orange"}}>
            {selectedFile2?.name}

              </span>
            </Button>

            <Button
              id="outlined-btn"
              variant="contained"
              component="label"
              size="small"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YearDetails;
