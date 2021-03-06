import React from "react";

const Header = props => {

    return (
        <div id="home" className={props.styleTypeProfessional ? "jumbotron-professional jumbotron-fluid" : "jumbotron jumbotron-fluid"}>
            <div className={props.styleTypeProfessional ? "header-title-professional container" : "header-title container"}>
                <h1 className="display-4">masuda.tech</h1>
                <p className="lead">Web and iOS Development</p>
            </div>
        </div>
    )
} 

export default Header;