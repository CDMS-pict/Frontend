import React from "react";
import Navbar from "../navbar/Navbar";
import "./academicDetails.css";
import YearDetails from "./YearDetails";

function AcademicDetails() {
  return (
    <div>
      <Navbar />
      <div className="years">
        <a href="#first">
          <p className="year">FE</p>
        </a>
        <p>|</p>
        <a href="#second">
          <p className="year">SE</p>
        </a>
        <p>|</p>
        <a href="#third">
          <p className="year">TE</p>
        </a>
        <p>|</p>
        <a href="#last">
          <p className="year">BE</p>
        </a>
      </div>
      <div className="first" id="first">
        <YearDetails year="First Year" />
      </div>
      <div className="second" id="second">
        <YearDetails year="Second Year" />
      </div>
      <div className="third" id="third">
        <YearDetails year="Third Year" />
      </div>
      <div className="final" id="last">
        <YearDetails year="Fourth Year" />
      </div>
    </div>
  );
}

export default AcademicDetails;
