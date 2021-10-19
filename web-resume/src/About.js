import React from 'react';
import { Link } from 'react-router-dom';
import { Download } from 'react-bootstrap-icons';
import './style.css'
function About() {

    return (
        <div id="about">
            <div className="about-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="about-content-holder col-xs-12">
                            <h2>About Me</h2>
                            <p>Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.</p>
                        </div>
                        <div className="about-content-holder col-xs-12 col-sm-6">
                            <h2>Contact Details</h2>
                            <span>Syed Muhammad Saim</span>
                            <span>House No 3</span>
                            <span>Street No 14-B</span>
                            <span>Street No 14-B</span>
                            <span>Lahore, Pakistan, 54000</span>
                            <a href="tel:03209455811">+92-320-9455811</a>
                            <a href="email:syedsaim40@gmail.com">syedsaim40@gmail.com</a>
                        </div>
                        <div className="col-xs-12 col-sm-6 resume-btn">
                            <Link className="dBtn" to="./resume.pdf" target="_blank" download>
                                <strong><Download /></strong>
                                <span>Download Resume</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row about-me-holder">
                    <div className="about-me col-xs-12 col-sm-3">
                        <span>Education</span>
                    </div>
                    <div className="col-xs-12 col-sm-9">
                        <div className="edu-holder">
                            <h2>University</h2>
                            <span>Bachelors in Computer Science</span>
                            <strong className="dot"></strong>
                            <span>2018 September</span>
                            <p>I started my BS in 2018 and it will be end in 2022, currrently working on my final year project</p>
                        </div>
                        <div className="edu-holder">
                            <h2>College</h2>
                            <span>Bachelors in Computer Science</span>
                            <strong className="dot"></strong>
                            <span>2018 September</span>
                            <p>I started my BS in 2018 and it will be end in 2022, currrently working on my final year project</p>
                        </div>
                        <div className="edu-holder">
                            <h2>School</h2>
                            <span>Bachelors in Computer Science</span>
                            <strong className="dot"></strong>
                            <span>2018 September</span>
                            <p>I started my BS in 2018 and it will be end in 2022, currrently working on my final year project</p>
                        </div>
                    </div>
                </div>
                <div className="row about-me-holder">
                    <div className="about-me col-xs-12 col-sm-3">
                        <span>Work</span>
                    </div>
                    <div className="col-xs-12 col-sm-9">
                        <div className="edu-holder">
                            <h2>Awesome Design Studio</h2>
                            <span>Senior UX God</span>
                            <strong className="dot"></strong>
                            <span>March 2010 - Present</span>
                            <p>Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.</p>
                        </div>
                        <div className="edu-holder">
                            <h2>Super Cool Studio</h2>
                            <span>Junior bug fixer</span>
                            <strong className="dot"></strong>
                            <span>March 2007 - February 2010</span>
                            <p>Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.</p>
                        </div>
                    </div>
                </div>
                <div className="row about-me-holder">
                    <div className="about-me col-xs-12 col-sm-3">
                        <span>Skills</span>
                    </div>
                    <div className="col-xs-12 col-sm-9">
                        <div className="skills-holder">
                            <h2>Illustrator</h2>
                            <div className="skill-bar"></div>
                            <h2>React js</h2>
                            <div className="skill-bar bar1"></div>
                            <h2>css</h2>
                            <div className="skill-bar bar2"></div>
                            <h2>html5</h2>
                            <div className="skill-bar bar3"></div>
                            <h2>VueJs</h2>
                            <div className="skill-bar bar4"></div>
                            <h2>MongoDB</h2>
                            <div className="skill-bar bar5"></div>
                            <h2>Javascript</h2>
                            <div className="skill-bar bar6"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;