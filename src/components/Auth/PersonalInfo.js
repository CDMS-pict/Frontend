import React, { Component } from "react";

export class PersonalInfo extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, inputChange } = this.props;

    return (
      <div className="app ">
          <div className="form-container ">
            <h1 className="mb-5">Sign Up</h1>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <br />
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={inputChange("name")}
                value={values.name}
                placeholder="Full Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">College Id</label>
              <br />
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={inputChange("email")}
                value={values.email}
                placeholder="E2k*****@ms.pict.edu"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={inputChange("password")}
                value={values.password}
                placeholder="Password"
              />
            </div>


            <div className="text-right">
              <center>
                <button className="btn loginbtn" onClick={this.continue}>
                  Next
                </button>
              <p>Already have an account ? <a href="/login">Login</a></p>
              </center>
            </div>
          </div>
      </div>
    );
  }
}

export default PersonalInfo;
