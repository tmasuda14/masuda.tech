import React from "react";
import img from "../assets/images/navicon.png";

const Footer = props => {

    let year = new Date().getFullYear();

    return (
    <footer className={props.styleTypeProfessional ? "footer-professional" : "footer"}>Copyright {year} <br/>
        <span className="light-text">Tai <img src={img} alt="mt"></img> Masuda</span> 
    </footer>
    )
}

export default Footer;