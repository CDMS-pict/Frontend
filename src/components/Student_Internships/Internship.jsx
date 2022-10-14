import { Button } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./internship.css";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import FormInput from "./FormInput";
import Internship_Boxes from "./Internship_Boxes";

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
  const [selectedFile, setSelectedFile] = useState();
  const [selectedFile2, setSelectedFile2] = useState();
  function changeHandler(event) {
    setSelectedFile(event.target.files[0]);
  }
  function changeHandler2(event) {
    setSelectedFile2(event.target.files[0]);
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const datas = [{},{}];

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
        {datas.map((d)=>(
          <Internship_Boxes/>
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
              <FormInput name="Company Name" placeholder="Enter Company name" />
              <FormInput name="Start Date" placeholder="Start Date" />
              <FormInput name="End Date" placeholder="End date" />
              <FormInput name="Duration" placeholder="Duration" />
              <FormInput name="Description" placeholder="Description" />
             
              <div className="intern1">
                <Button id="outlined-btn" variant="contained" size="small">
                  <div className="uploadoffer">
                    <i class="fa-solid fa-upload"></i>
                    Offer letter
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
                <Button id="outlined-btn" variant="contained" size="small">
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
                </Button>
              </div>
              <div className="submitbtndiv">
                <Button className="internsubtn">Submit</Button>
              </div>
            </center>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default Internship;
