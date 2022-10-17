import { Button } from "@mui/material";
import React,{useState} from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import FormInput from "./FormInput";
import "./internship.css";
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


function Internship_Boxes() {
  const [selectedFile, setSelectedFile] = useState("");
  const [company_name, setCompany_name] = useState("");
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [duration, setDuration] = useState("");
  const [role, setRole] = useState("");
  const [desc, setDesc] = useState("");

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
 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleUpdateInternship = async (e) => {
    const data = {
      company_name,
      start_date,
      end_date,
      duration,
      role,
      desc,
      letter_of_complition: selectedFile,
      student_id: "6346d966fad4b62d2baccee4",
      student_name: "trial 3",
      student_div: "TE5",
    };
    // const formData = new FormData();
    // formData.append('file',selectedFile);
    // data.offer_letter = formData;

    if(!company_name || !start_date || !duration || !role || !desc || !selectedFile){
      window.alert("All the fields are required");
      return;
    }
    try {
      await axios.put("/api/internships/updateInternship/:id", data);
      window.alert("Internship Data Added Successfully");
    } catch (err) {
      console.log(err);
    }
    // console.log(selectedFile);
  };
  return (
    <div>
      <div className="box">
        <div className="boxtop">
          <p className="company_name">Company Name</p>
          <p className="duration_date">2022/10/14 - 2023/01/14</p>
        </div>
        <div className="box_desc">
          <p>
            <b>Role: </b> Frontend Developer
          </p>
          <p>
            <b>Description: </b>Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Fugiat sint nulla iure, tempora eligendi magnam
            aut delectus quasi sapiente aliquid Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Consequuntur praesentium dolorum
            itaque aliquid, autem accusamus omnis sunt natus magnam nostrum.
          </p>
        </div>
        <div className="editbtndiv">
        <Button variant="contained" className="editbtn" onClick={handleOpen}>
          Edit{" "}
        </Button>
        </div>
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
              <h2>Edit Internship details</h2>
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
                    Complition Letter
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
              </div>
              <div className="submitbtndiv">
                <Button className="internsubtn" onClick={handleUpdateInternship}>Update</Button>
              </div>
            </center>
          </Box>
        </Fade>
      </Modal>
      </div>
    </div>
  );
}

export default Internship_Boxes;
