import React, { useState } from "react";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";

import "./yeardetails.css";

function YearDetails({ year }) {
  const [selectedFile, setSelectedFile] = useState();
  // let url;
  function changeHandler(event) {
    setSelectedFile(event.target.files[0]);
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
              Upload Marksheet
              <input
                hidden
                accept=".pdf"
                multiple
                type="file"
                onChange={changeHandler}
              />
            </Button>
            {selectedFile?.name}
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
