import React, { Component } from 'react'

export class Education extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container">
                <h1 className="mb-5">Education</h1>
                <div className="form-group">
                    <label htmlFor="facebook">Branch</label>
                    <input type="text" className="form-control" name="branch" onChange={inputChange('branch')} value={values.branch} />
                </div>
                <div className="form-group">
                    <label htmlFor="twitter">CollegeId</label>
                    <input type="text" className="form-control" name="id" onChange={inputChange('id')} value={values.id} />
                </div>
                <div className="form-group">
                    <label htmlFor="github">Division</label>
                    <input type="text" className="form-control" name="div" onChange={inputChange('div')} value={values.div} />
                </div>
                <div className="form-group">
                    <label htmlFor="github">Roll No</label>
                    <input type="number" className="form-control" name="roll" onChange={inputChange('roll')} value={values.roll} />
                </div>
                

                <br />

                <div className="row">
                    <div className="col-6">
                        <button className="btn1" onClick={this.back}>Back</button>
                    </div>
                    <div className="col-6 text-right">
                        <button className="btn" onClick={this.continue}>Continue</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Education