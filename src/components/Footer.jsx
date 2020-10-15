import React from "react";

function Footer(props) {

    let year = new Date().getFullYear();

    return (
    <footer className={props.styleTypeProfessional ? "footer-professional" : "footer"}>Copyright {year} <br/><span className="light-text">Tai Masuda</span></footer>
    )
}

export default Footer;