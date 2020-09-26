import React from "react";
import Contact from "./Contact";

function NavBar() {
    return (
        <nav className="navbar sticky-top navbar-expand-sm navbar-light bg-light nav-custom" id="navBar">
            <a className="navbar-brand" href="https://masuda.tech">M.t</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#root">Home<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projectCarousel">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contacts" type="button" data-toggle="collapse" data-target="#collapseTarget" aria-expanded="false" aria-controls="collapseExample">Contact</a>
                        <div className="collapse" id="collapseTarget">
                            <div className="card card-body">
                                <Contact />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;