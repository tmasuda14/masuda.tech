import React from "react";

function DescriptionCard() {
    return (
        <div className="page-description">
            <div className="row">
                <div className="col-sm-6 card-custom">
                    <div className="card card-primary">
                        <div className="card-body">
                            <h5 className="card-title"><u>Tai Masuda</u></h5>
                            <p className="card-text">A Computer Science graduate with extensive customer service knowledge, teamwork ability, and self-motivation.</p>
                            <a href="http://linkedin.com/in/tai-masuda-ba72771b7" className="btn btn-dark">LinkedIn</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card card-primary card-custom">
                        <div className="card-body">
                            <h5 className="card-title">Continued Learning As A Passion</h5>
                            <p className="card-text">Writing thoughtful, efficient code daily. Always striving for improvement.  </p>
                            <a href="#projectCarousel" className="btn btn-dark">Projects(WIP)</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DescriptionCard;