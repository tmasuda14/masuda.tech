import React from "react";

function Contact() {
    return (
        <ul className="contact-list">
            <li><a className="linkedin-link" href="http://linkedin.com/in/tai-masuda-ba72771b7"><i className="fab fa-linkedin"></i> Linkedin</a></li>
            <li><a className="github-link" href="http://github.com"><i className="fab fa-github"></i> Github</a></li>
            <li><i class="far fa-envelope"></i><a className="email-link" href="mailto:tmasuda14@gmail.com"> tmasuda14@gmail.com</a></li>
            <li><i class="fas fa-mobile-alt"></i> 530-518-2745</li>
        </ul>
    )    
}

export default Contact;