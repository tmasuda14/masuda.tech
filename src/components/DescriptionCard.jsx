import React from "react";
import cardList from "../assets/cardList";

function DescriptionCard(props) {

    return (
        <div className={props.styleTypeProfessional ? "page-description-professional" : "page-description"}>
            <div className="row">
                <div className="col-sm-6 card-custom">
                    <div className={props.styleTypeProfessional ? "card card-primary-professional" : "card card-primary"}>
                        <div className="card-body">
                            <h3 className="card-title"><u>{cardList[0].title}</u></h3>
                            <hr></hr>
                            <p className="card-text">{cardList[0].textField}</p>
                            <a href={cardList[0].buttonLink} className="btn btn-dark">{cardList[0].buttonText}<i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className={props.styleTypeProfessional ? "card card-primary-professional card-custom" : "card card-primary card-custom"}>
                        <div className="card-body">
                            <h5 className="card-title">{cardList[1].title}</h5>
                            <hr></hr>
                            <p className="card-text">{cardList[1].textField}</p>
                            <a href={cardList[1].buttonLink} className="btn btn-dark">{cardList[1].buttonText}</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className={props.styleTypeProfessional ? "card card-primary-professional card-custom" : "card card-primary card-custom"}>
                        <div className="card-body">
                            <h5 className="card-title">{cardList[2].title}</h5>
                            <hr></hr>
                            <p className="card-text">{cardList[2].textField}</p>
                            <a href={cardList[2].buttonLink} className="btn btn-dark">{cardList[2].buttonText}</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className={props.styleTypeProfessional ? "card card-primary-professional card-custom" : "card card-primary card-custom"}>
                        <div className="card-body">
                            <h5 className="card-title">{cardList[3].title}</h5>
                            <hr></hr>
                            <p className="card-text">{cardList[3].textField}</p>
                            <a href={cardList[3].buttonLink} className="btn btn-dark"><i className="fab fa-github"></i>{cardList[3].buttonText}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DescriptionCard;