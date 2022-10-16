// import React from 'react'
import React, { useState } from "react";
import "./internship.css";
import FormInput from "./FormInput";
import Button from "@mui/material/Button";

function Internship() {
  const [selectedFile, setSelectedFile] = useState();
  const [selectedFile2, setSelectedFile2] = useState();
  function changeHandler(event) {
    setSelectedFile(event.target.files[0]);
  }
  function changeHandler2(event) {
    setSelectedFile2(event.target.files[0]);
  }
  return (
    <div className="intern">
      <form>
      <h2>Enter Your Internship details</h2>
        <FormInput
          label="Company Name"
          name="Company Name"
          placeholder="Enter Company name"
        />
        <FormInput
          label="Start Date"
          name="Start Date"
          placeholder="Start Date"
        />
        <FormInput label="End Date" name="End Date" placeholder="End date" />
        <FormInput label="Duration" name="Duration" placeholder="Duration" />
        <FormInput label="Role" name="Role" placeholder="role" />
        <FormInput label="Stipend" name="Stipend" type="number" placeholder="Enter the desired Stipend" />

        <FormInput
          label="Description"
          name="Description"
          placeholder="Description"
        />

      </form>
        <div className="intern1">
    
        <Button
          id="outlined-btn"
          variant="contained"
          component="label"
          size="small"
        >
          <div className="uploadoffer">
            <i class="fa-solid fa-upload"></i>
            Offer_letter
          </div>
          <input
            hidden
            accept=".pdf"
            multiple
            type="file"
            onChange={changeHandler}
          />
          <span style={{ fontSize: "10px", color: "orange" }}>
            {selectedFile?.name}
          </span>
        </Button>
        <Button
          id="outlined-btn"
          variant="contained"
          component="label"
          size="small"
        >
          <div className="uploadoffer">
            <i class="fa-solid fa-upload"></i>
            Letter_Of_Completion
          </div>
          <input
            hidden
            accept=".pdf"
            multiple
            type="file"
            onChange={changeHandler2}
          />
          <br />
          <span style={{ fontSize: "10px", color: "orange" }}>
            {selectedFile2?.name}
          </span>
        </Button>
      </div>
      </div>

  );
}

export default Internship;
