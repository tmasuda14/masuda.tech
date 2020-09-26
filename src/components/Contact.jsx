import React from "react";

function Contact() {
    return (
        <ul className="contact-list">
            <li><a className="linkedin-link" href="http://linkedin.com/in/tai-masuda-ba72771b7">Linked<i className="fab fa-linkedin"></i></a></li>
            <li><a className="github-link" href="https://github.com/tmasuda14"><i className="fab fa-github"></i> GitHub</a></li>
            <li><i className="far fa-envelope"></i><a className="email-cell-link" href="mailto:tmasuda14@gmail.com"> tmasuda14@gmail.com</a></li>
            <li><i className="fas fa-mobile-alt"></i><a className="email-cell-link" href="tel:15305182745"> 530-518-2745</a></li>
        </ul>
    )    
}

export default Contact;