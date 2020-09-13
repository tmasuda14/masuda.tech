import React from "react";

function Footer() {

    let year = new Date().getFullYear();

    return (
    <footer className="footer">Copyright {year} <br/><span className="light-text">Tai Masuda</span></footer>
    )
}

export default Footer;