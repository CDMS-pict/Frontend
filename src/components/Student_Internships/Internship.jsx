import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./internship.css";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import FormInput from "./FormInput";
import Internship_Boxes from "./Internship_Boxes";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "whitesmoke",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Internship() {
  const [selectedFile, setSelectedFile] = useState("");
  const [company_name, setCompany_name] = useState("");
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [duration, setDuration] = useState("");
  const [role, setRole] = useState("");
  const [desc, setDesc] = useState("");

  const [selectedFile2, setSelectedFile2] = useState();
  function changeHandler(event) {
    // setSelectedFile(event.target.files[0]);
    setFileToBase(event.target.files[0]);
  }
  const [sfilename, setFilename] = useState("");
  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
    // filename = file.name;
    setFilename(file.name);
    console.log(file);
  };
  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setSelectedFile(reader.result);
    };
  };
  function changeHandler2(event) {
    setSelectedFile2(event.target.files[0]);
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const datas = [{}, {}];

  const handleAddInternship = async (e) => {
    const data = {
      company_name,
      start_date,
      end_date,
      duration,
      role,
      desc,
      offer_letter: selectedFile,
      student_id: "6346d966fad4b62d2baccee4",
      student_name: "trial 3",
      student_div: "TE5",
    };
    // const formData = new FormData();
    // formData.append('file',selectedFile);
    // data.offer_letter = formData;

    try {
      await axios.post("/api/internships/newInternship", data);
      window.alert("Internship Data Added Successfully");
    } catch (err) {
      console.log(err);
    }
    // console.log(selectedFile);
  };

  return (
    <>
      <Navbar />
      <div className="studentInternshipDashboard">
        <div className="dataheader">
          <p className="internship_data_header">Internship Data</p>
          <Button variant="contained" onClick={handleOpen}>
            Add{" "}
          </Button>
        </div>
      </div>
      <center>
        <div className="internship_boxes">
          {datas.map((d) => (
            <Internship_Boxes />
          ))}
        </div>
      </center>
      <Modal
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <center>
              <h2>Enter Your Internship details</h2>

              <FormInput
                name="Company Name"
                placeholder="Enter Company name"
                onChange={(e) => setCompany_name(e.target.value)}
              />
              <FormInput
                name="Start Date"
                placeholder="Start Date"
                onChange={(e) => setStart_date(e.target.value)}
              />
              <FormInput
                name="End Date"
                placeholder="End date"
                onChange={(e) => setEnd_date(e.target.value)}
              />
              <FormInput
                name="Duration"
                placeholder="Duration"
                onChange={(e) => setDuration(e.target.value)}
              />
              <FormInput
                name="Role"
                placeholder="Role"
                onChange={(e) => setRole(e.target.value)}
              />
              <FormInput
                name="Description"
                placeholder="Description"
                onChange={(e) => setDesc(e.target.value)}
              />

              <div className="intern1">
                <Button
                  id="outlined-btn"
                  variant="contained"
                  component="label"
                  size="small"
                >
                  <div className="uploadmarksheet">
                    <i class="fa-solid fa-upload"></i>
                    Offer Letter
                  </div>
                  <input
                    hidden
                    accept=".pdf"
                    multiple
                    type="file"
                    onChange={handleImage}
                  />
                  <span style={{ fontSize: "10px", color: "orange" }}>
                    {sfilename}
                  </span>
                </Button>
                {/* <Button id="outlined-btn" variant="contained" size="small">
                  <div className="uploadoffer">
                    <i class="fa-solid fa-upload"></i>
                    Complition Letter
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
                </Button> */}
              </div>
              <div className="submitbtndiv">
                <Button className="internsubtn" onClick={handleAddInternship}>
                  Submit
                </Button>
              </div>
            </center>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default Internship;
