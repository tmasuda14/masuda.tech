import React from "react";

function ProjectCard() {
    return (
        <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselIndicators" data-slide-to="1"></li>
                <li data-target="#carouselIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="https://assets.skyfilabs.com/images/blog/good-computer-science-projects-for-beginners.webp" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://www.lemnisk.co/blog/wp-content/uploads/2019/05/cross-device-data.png" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://assets.skyfilabs.com/images/blog/best-final-year-projects-for-computer-science-students.webp" alt="Third slide" /> 
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default ProjectCard;