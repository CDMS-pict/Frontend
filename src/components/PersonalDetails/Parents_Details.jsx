import { Button } from "@mui/material";
import React, { useState } from "react";
import FormInput from "../Student_Internships/FormInput";

function Parents_Details() {
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
          <h3>Parent Details</h3>
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
        <div className="parents_details details_section">
          <FormInput
            label="Father's Name"
            name="father_name"
            placeholder="Father's Name"
            value={"Bhagwan Lokhande"}
            disabled={edit_pesonal}
          />
          <FormInput
            label="Father's Occupation"
            name="father_occupation"
            placeholder="Father's Occupation"
            value={"Employee"}
            disabled={edit_pesonal}
          />
          <FormInput
            label="Father's Contact No"
            name="father_contact"
            placeholder="Father's Contact No"
            value={"+91-8192891211"}
            disabled={edit_pesonal}
          />
          <FormInput
            label="Father's Mail"
            name="father_mail"
            placeholder="Father's Mail"
            value={"abcded@gmail.com"}
            disabled={edit_pesonal}
          />
          <FormInput
            label="Mother's Name"
            name="Mother_name"
            placeholder="Mother's Name"
            value={"Bhagwan Lokhande"}
            disabled={edit_pesonal}
          />
          <FormInput
            label="Mother's Occupation"
            name="Mother_occupation"
            placeholder="Mother's Occupation"
            value={"Employee"}
            disabled={edit_pesonal}
          />
          <FormInput
            label="Mother's Contact No"
            name="Mother_contact"
            placeholder="Mother's Contact No"
            value={"+91-8192891211"}
            disabled={edit_pesonal}
          />
          <FormInput
            label="Mother's Mail"
            name="Mother_mail"
            placeholder="Mother's Mail"
            value={"abcded@gmail.com"}
            disabled={edit_pesonal}
          />
        </div>
      </div>
    </div>
  );
}

export default Parents_Details;
