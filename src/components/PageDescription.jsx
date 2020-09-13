import React from "react";

function PageDescription() {
    return (
        <div className="page-description">
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Computer Science Graduate</h5>
                            <p className="card-text">Combining extensive customer service knowledge <br/> with logical, thoughful programming.</p>
                            <a href="#" className="btn btn-dark">Resume</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Continued Learning As A Passion</h5>
                            <p className="card-text">Writing clean, efficient code daily. <br/> Always striving for improvement.  </p>
                            <a href="#" className="btn btn-dark">Projects</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageDescription;