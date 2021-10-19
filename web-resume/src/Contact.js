import React from 'react';
import { EnvelopeFill } from 'react-bootstrap-icons';
import ApiForm from './ApiForm';
import './style.css'
function Contact() {
    return (
        <div id="contact">
            <div className="container">
                <div className="row contact-holder">
                    <div className="col-xs-3 col-sm-1">
                        <strong><EnvelopeFill /></strong>
                    </div>
                    <div className="col-xs-9 col-sm-11 msg-txt">
                        <p>Here is where you should write your message to readers to have them get in contact with you.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row contact-holder">
                    <div className="col-sm-8">
                        <ApiForm />
                    </div>
                    <div className="col-sm-4">
                        <div className="about-content-holder col-xs-12">
                            <h2>Address and Phone</h2>
                            <span>Syed Muhammad Saim</span>
                            <span>House No 3</span>
                            <span>Street No 14-B</span>
                            <span>Street No 14-B</span>
                            <span>Lahore, Pakistan, 54000</span>
                            <a href="tel:03209455811">+92-320-9455811</a>
                            <a href="email:syedsaim40@gmail.com">syedsaim40@gmail.com</a>
                            <h2>Latest Tweets</h2>
                            <p>Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;