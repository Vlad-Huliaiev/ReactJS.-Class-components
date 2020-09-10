import React, {Component} from "react";

const Contact = (props) => (
    <div className="contact">
            <div className="contact-name">
                <span>
                    {props.firstName} {props.lastName}
                </span>
            </div>
        <div className="contact-phone">
            {props.phone}
        </div>
        <div className="contact-gender">
            {props.gender}
        </div>
    </div>
)

export default Contact;