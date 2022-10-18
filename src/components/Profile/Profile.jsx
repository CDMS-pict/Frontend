import React, { useEffect, useState } from "react";
import "./profile.css";
import defaultimg from "./default_userimg.png";
import axios from "axios";
axios.defaults.withCredentials = true;

function Profile({student}) {
  
  // console.log(user);
  return (
    <div className="profile">
      <div className="img_div">
        <div className="profileimg">
          <img src={defaultimg} alt="" />
        </div>
      </div>
      <div className="short_details">
        <p>
          <div className="name_student">{student && student.fullname}</div>{" "}
          e2k20104080@ms.pict.edu <br />
          <b>Mobile no.</b> 7231955848
        </p>
        {/* <br /> */}
        <p>
          <b>DOB</b> : 19/07/2003 <br />
          <b>Gender</b>: Male <br />
          <b>Category</b>: OBC <br />
          <b>PAN</b> : ABXXXXX7
        </p>
        {/* <br /> */}
        <p>
          <b>College</b> <br /> SCTR's Pune Institute of Computer Technology ,
          Dhankawadi , Pune
        </p>
        {/* <br /> */}
        <p>
          <b>Current</b> <br /> Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nihil, enim!
        </p>
      </div>
      {/* <div className="view_more">
        <i class="fa-solid fa-chevron-down"></i>
      </div> */}
    </div>
  );
}

export default Profile;
