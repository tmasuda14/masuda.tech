import React from "react";

function DescriptionCard() {
    return (
        <div className="page-description">
            <div className="row">
                <div className="col-sm-6 card-custom">
                    <div className="card card-primary">
                        <div className="card-body">
                            <h3 className="card-title"><u>Tai Masuda</u></h3>
                            <hr></hr>
                            <p className="card-text">A Computer Science graduate with extensive customer service knowledge, teamwork ability, and self-motivation.</p>
                            <a href="http://linkedin.com/in/tai-masuda-ba72771b7" className="btn btn-dark">Linked<i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card card-primary card-custom">
                        <div className="card-body">
                            <h5 className="card-title">Programming Knowledge</h5>
                            <hr></hr>
                            <p className="card-text">Frontend Web Developer with a love for learning. Experienced with HTML, CSS, Javascript, React, and C++. Writing thoughtful, efficient code daily. Always striving for improvement.  </p>
                            <a href="#projectCarousel" className="btn btn-dark">Projects (WIP)</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card card-primary card-custom">
                        <div className="card-body">
                            <h5 className="card-title">Professional Experience</h5>
                            <hr></hr>
                            <p className="card-text">Interacting daily with a wide array of people and circumstances has instilled solid understanding of true customer service and appreciation of the hardships people endure daily. Striving to meet the high expectations of patients and managers has allowed me to thrive in a fast paced, high-stress job environment and consistently meet their needs.</p>
                            <a href="mailto:tmasuda14@gmail.com" className="btn btn-dark">Request Letters Recommendation (email)</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card card-primary card-custom">
                        <div className="card-body">
                            <h5 className="card-title">Continued Learning As A Goal</h5>
                            <hr></hr>
                            <p className="card-text">My passion for programming keeps me searching for cleaner, more efficient strategies to write code. Currently learning backend and iOS app development for further self-growth.     </p>
                            <a href="https://github.com/tmasuda14" className="btn btn-dark"><i className="fab fa-github"></i> GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DescriptionCard;