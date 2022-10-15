import { Button } from "@mui/material";
import React, { useState } from "react";
import FormInput from "../Student_Internships/FormInput";

function Address_Details() {
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
  return (
    <div>
      <div className="student_details">
        <div className="details_header">
          <h3>Address Details</h3>
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
        <div className="parents_details details_section address_details">
          <FormInput
            label="Permanant Address"
            name="permanant_address"
            placeholder="Permanant Address"
            value={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, expedita?"
            }
            disabled={edit_pesonal}
          />

          <FormInput
            label="Local Address"
            name="Local_address"
            placeholder="Local Address"
            value={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, expedita?"
            }
            disabled={edit_pesonal}
          />
        </div>
      </div>
    </div>
  );
}

export default Address_Details;
