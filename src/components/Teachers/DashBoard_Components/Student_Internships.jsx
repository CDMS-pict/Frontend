import { TextField } from "@mui/material";
import React from "react";
import Navbar from "../../navbar/Navbar";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { DataGrid } from "@mui/x-data-grid";

import "./student_internship.css";

function Student_Internships() {
  const [age, setAge] = React.useState("");

  const divs = [
    "TE1",
    "TE2",
    "TE3",
    "TE4",
    "TE5",
    "TE6",
    "TE7",
    "TE8",
    "TE9",
    "TE10",
    "TE11",
  ];
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: "fullname", headerName: "Full name", width: 250 },
    { field: "company_name", headerName: "Company name", width: 130 },
    {
      field: "div",
      headerName: "Division",
      width: 90,
    },
    {
      field: "start_date",
      headerName: "Start Date",
      width: 120,
    },
    {
      field: "end_date",
      headerName: "End Date",
      width: 120,
    },
    {
      field: "duration",
      headerName: "Duration",
      width: 90,
    },
    {
      field: "offer_letter",
      headerName: "Offer Later",
      width: 130,
    },
    {
      field: "letter_of_completion",
      headerName: "Complition Letter",
      width: 130,
    },
  ];

  const rows = [
    {
      id: 1,
      fullname: "lorem xyz abcd",
      company_name: "Master Card",
      div: "TE7",
      start_date: "2022-10-12",
      end_date: "",
      duration: "2 months",
      offer_letter: "http://localhost:3000/",
      letter_of_completion: "http://localhost:3000/",
    },
    {
      id: 2,
      fullname: "lorem xyz abcd",
      company_name: "Master Card",
      div: "TE7",
      start_date: "2022-10-12",
      end_date: "",
      duration: "2 months",
      offer_letter: "http://localhost:3000/",
      letter_of_completion: "http://localhost:3000/",
    },
    {
      id: 3,
      fullname: "lorem xyz abcd",
      company_name: "Master Card",
      div: "TE7",
      start_date: "2022-10-12",
      end_date: "",
      duration: "2 months",
      offer_letter: "http://localhost:3000/",
      letter_of_completion: "http://localhost:3000/",
    },
    {
      id: 4,
      fullname: "lorem xyz abcd",
      company_name: "Master Card",
      div: "TE7",
      start_date: "2022-10-12",
      end_date: "",
      duration: "2 months",
      offer_letter: "http://localhost:3000/",
      letter_of_completion: "http://localhost:3000/",
    },
    {
      id: 5,
      fullname: "lorem xyz abcd",
      company_name: "Master Card",
      div: "TE7",
      start_date: "2022-10-12",
      end_date: "",
      duration: "2 months",
      offer_letter: "http://localhost:3000/",
      letter_of_completion: "http://localhost:3000/",
    },
    {
      id: 6,
      fullname: "lorem xyz abcd",
      company_name: "Master Card",
      div: "TE7",
      start_date: "2022-10-12",
      end_date: "",
      duration: "2 months",
      offer_letter: "http://localhost:3000/",
      letter_of_completion: "http://localhost:3000/",
    },
    {
      id: 7,
      fullname: "lorem xyz abcd",
      company_name: "Master Card",
      div: "TE7",
      start_date: "2022-10-12",
      end_date: "",
      duration: "2 months",
      offer_letter: "http://localhost:3000/",
      letter_of_completion: "http://localhost:3000/",
    },
    {
      id: 8,
      fullname: "lorem xyz abcd",
      company_name: "Master Card",
      div: "TE7",
      start_date: "2022-10-12",
      end_date: "",
      duration: "2 months",
      offer_letter: "http://localhost:3000/",
      letter_of_completion: "http://localhost:3000/",
    },
    {
      id: 9,
      fullname: "lorem xyz abcd",
      company_name: "Master Card",
      div: "TE7",
      start_date: "2022-10-12",
      end_date: "",
      duration: "2 months",
      offer_letter: "http://localhost:3000/",
      letter_of_completion: "http://localhost:3000/",
    },
  ];

  return (
    <div>
      <Navbar />
      <center>
        <h2 style={{marginTop: '3%'}}>Internship Data</h2>
      </center>
      <div className="t_dashboard">
        <p>
          Filter By<i class="fa-solid fa-filter"></i>
        </p>
        {/* <span>Search By</span> */}
        <div className="search_filters">
          <TextField
            id="outlined-basic"
            label="Student Name"
            variant="outlined"
          />
          {/* <div className="bydiv"> */}
          {/* <InputLabel id="demo-simple-select-helper-label">Age</InputLabel> */}

          <Select
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
          </Select>
          {/* </div> */}
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Branch</em>
            </MenuItem>
            <MenuItem value={10}>CS</MenuItem>
            <MenuItem value={20}>IT</MenuItem>
            <MenuItem value={30}>ENTC</MenuItem>
          </Select>
        </div>

        {/* // internship data table */}

        <div style={{ height: 500, width: "100%",marginTop: "20px" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={20}
            rowsPerPageOptions={[20]}
          />
        </div>
      </div>
    </div>
  );
}

export default Student_Internships;
