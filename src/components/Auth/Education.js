import React, { Component } from "react";

export class Education extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, inputChange } = this.props;

    return (
      <div className="app ">
        <div className="form-container">
          <h1 className="mb-5">Sign Up</h1>
          <div className="form-group">
            <label htmlFor="facebook">Branch</label>
            <br />
            <input
              type="text"
              className="form-control"
              name="branch"
              onChange={inputChange("branch")}
              value={values.branch}
              placeholder="Branch"
            />
          </div>
          {/* <div className="form-group">
                    <label htmlFor="twitter">CollegeId</label>
                    <br />
                    <input type="text" className="form-control" name="id" onChange={inputChange('id')} value={values.id} />
                </div> */}
          <div className="form-group">
            <label htmlFor="github">Division</label>
            <br />
            <input
              type="text"
              className="form-control"
              name="div"
              onChange={inputChange("div")}
              value={values.div}
              placeholder="Division (eg.TE7)"
            />
          </div>
          <div className="form-group">
            <label htmlFor="github">Roll No</label>
            <br />
            <input
              type="number"
              className="form-control"
              name="roll"
              onChange={inputChange("roll")}
              value={values.roll}
              placeholder="Roll Number"
            />
          </div>


          <div className="row">
            <div className="col-12 back_continue">
              <button className="loginbtn btn1 btnback" onClick={this.back}>
                {"<"}
              </button>
              <button className="loginbtn btn1" onClick={this.continue}>
                Submit
              </button>
            </div>
            <p>Already have an account ? <a href="/login">Login</a></p>

          </div>
        </div>
      </div>
    );
  }
}

export default Education;
