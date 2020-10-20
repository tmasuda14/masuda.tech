import React from "react";
import firstImg from "../assets/images/temp-converter-app.png";

function DisplayCarousel(props) {

    return (
        <div className={props.styleTypeProfessional ? "hidden-container" : "container  carousel-custom"}>
            <div id="projectCarousel" className="carousel" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#projectCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#projectCarousel" data-slide-to="1"></li>
                    <li data-target="#projectCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active"> 
                    <a href="https://main.d10geqmvjay394.amplifyapp.com/">
                        <img className="d-block w-100" src={firstImg} alt="First slide" />
                    </a>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://www.lemnisk.co/blog/wp-content/uploads/2019/05/cross-device-data.png" alt="Second slide" />
                </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="https://assets.skyfilabs.com/images/blog/best-final-year-projects-for-computer-science-students.webp" alt="Third slide" /> 
                    </div>
                </div>
                <a className="carousel-control-prev" href="#projectCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#projectCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default DisplayCarousel;