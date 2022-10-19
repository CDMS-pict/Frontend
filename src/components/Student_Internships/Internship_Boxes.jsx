import { Button } from "@mui/material";
import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import FormInput from "./FormInput";
import "./internship.css";
import axios from "axios";
import DateInput from "./DateInput";
import moment from "moment-timezone";

function Internship_Boxes({ data, user }) {
  const [selectedFile, setSelectedFile] = useState("");
  // const [company_name, setCompany_name] = useState("");
  // const [start_date, setStart_date] = useState("");
  // const [end_date, setEnd_date] = useState("");
  // const [duration, setDuration] = useState("");
  // const [role, setRole] = useState("");
  // const [desc, setDesc] = useState("");

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
    const datas = {
      letter_of_complition: selectedFile,
      student_id: user._id,
    };
    // const datas = {
    //   company_name:
    //     company_name !== ""
    //       ? company_name
    //       : data.company_name
    //       ? data.company_name
    //       : "",
    //   start_date:
    //     start_date !== "" ? start_date : data.start_date ? data.start_date : "",
    //   end_date: end_date !== "" ? end_date : data.end_date ? data.end_date : "",
    //   duration: duration !== "" ? duration : data.duration ? data.duration : "",
    //   role: role !== "" ? role : data.role ? data.role : "",
    //   desc: desc !== "" ? desc : data.desc ? data.desc : "",
    //   letter_of_complition: selectedFile
    // };

    if (!selectedFile) {
      // console.log(datas);
      window.alert("All the fields are required");
      return;
    }
    try {
      await axios.put(`/api/internships/updateInternship/${data._id}`, datas);
      window.alert("Internship Data Updated Successfully");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
    // console.log(selectedFile);
  };

  const handleDelete = async () => {
    const datas = {
      student_id: user._id,
    };
    try {
      await axios.delete(
        `/api/internships/deleteInternship/${data._id}`,
        datas
      );
      window.alert("Internship Detail Deleted Successfully");
      window.location.reload();
    } catch (err) {
      console.log(err);
      window.alert("Currently Not able to delete the internship data");
    }
  };
  return (
    <div>
      <div className="box">
        <div className="boxtop">
          <p className="company_name">{data.company_name}</p>
          <p className="duration_date">
            {moment(data.start_date).format("YYYY-MM-DD")} -{" "}
            {moment(data.end_date).format("YYYY-MM-DD")}
            {/* {starting_date.getFullYear()+'-' + (starting_date.getMonth()+1) + '-'+starting_date.getDate()} */}
          </p>
        </div>
        <br />
        <div className="box_desc">
          <p>
            <b>Role: </b> {data.role}
          </p>
          <b>Duration: </b> {data.duration}
          <p>
            <b>Description: </b>
            {data.desc}
          </p>
        </div>
        <div className="editbtndiv">
          {data.offer_letter && (
            <Button variant="outlined" className="editbtn e1">
              Offer Letter
            </Button>
          )}
          {data.letter_of_complition && (
            <Button variant="outlined" className="editbtn e1">
              Complition Letter{" "}
            </Button>
          )}
          <Button variant="outlined" className="editbtn" onClick={handleOpen}>
            Edit{" "}
          </Button>
          <Button variant="outlined" className="editbtn" onClick={handleDelete}>
            Delete{" "}
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
            <Box className="boxmodal">
              <center>
                <h2>Edit Internship details</h2>
                <FormInput
                  name="Company Name"
                  placeholder="Enter Company name"
                  defaultValue={data.company_name}
                  disabled
                  // onChange={(e) => setCompany_name(e.target.value)}
                />

                <FormInput
                  name="Duration"
                  placeholder="Duration"
                  defaultValue={data.duration}
                  disabled
                  // onChange={(e) => setDuration(e.target.value)}
                />
                <FormInput
                  name="Role"
                  placeholder="Role"
                  defaultValue={data.role}
                  disabled
                  // onChange={(e) => setRole(e.target.value)}
                />
                <FormInput
                  name="Description"
                  placeholder="Description"
                  defaultValue={data.desc}
                  disabled
                  // onChange={(e) => setDesc(e.target.value)}
                />
                {/* <center>
                  <DateInput
                    name="Start Date"
                    placeholder="Start Date"
                    label="Start Date"
                    disabled
                    // defaultValue={data.start_date}
                    onChange={(e) => setStart_date(e.target.value)}
                  />
                  <DateInput
                    name="Start Date"
                    placeholder="End Date"
                    label="End Date"
                    // defaultValue={data.end_date}

                    disabled
                    onChange={(e) => setEnd_date(e.target.value)}
                  />
                </center> */}
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
                  </Button>
                </div>
                <span
                  style={{
                    fontSize: "12px",
                    color: "black",
                    fontWeight: "600",
                  }}
                >
                  {sfilename}
                </span>
                <div className="submitbtndiv">
                  <Button
                    className="internsubtn"
                    onClick={handleUpdateInternship}
                  >
                    Update
                  </Button>
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
