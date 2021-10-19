import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin, Github, ArrowDownCircle } from 'react-bootstrap-icons';
export default class MainBanner extends React.Component {
    constructor() {
        super();
        this.state = {
            height: window.innerHeight,
            width: window.innerWidth
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }
    componentDidMount() {
        console.log(this.state.height);
        window.addEventListener("resize", this.updateDimensions);
    }
    updateDimensions() {
        this.setState({
            height: window.innerHeight,
            width: window.innerWidth
        });
    }
    render() {
        return (
            //This is Main Banner Div
            <div id="main-bg" style={{ height: this.state.height }}>
                <div className="banner-content">
                    <h1 className="sentence"><span>i'm</span> syed saim.</h1>
                    <p>I'm a (Your City) based (Your Occupation Here). Here will be your description. Use this to describe what you do or whatever you feel best describes yourself to a potential employer.</p>
                    <ul className="social-icons unstyled">
                        <li><a href="https://www.facebook.com/syedsaim40" target='_blank' rel="noopener" aria-label='Facebook'><Facebook /></a></li>
                        <li><a href="https://twitter.com/jackwillson40" target='_blank' rel="noopener" aria-label='Twitter'><Twitter /></a></li>
                        <li><a href="https://www.linkedin.com/in/syed-saim-06b37615b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMbeOM4RpTRa0yRzsaA50QQ%3D%3D" target='_blank' rel="noopener" aria-label='Linkdin'><Linkedin /></a></li>                
                        <li><a href="https://instagram.com/syedsaim40?utm_medium=copy_link" target='_blank' rel="noopener" aria-label='Instagram'><Instagram /></a></li>  
                        <li><a href="https://github.com/syedsaim40" target='_blank' rel="noopener" aria-label='Github'><Github /></a></li>      
                    </ul>
                </div>
                    <a href="/"className="scrollBtn"><ArrowDownCircle /></a>
            </div>
        );
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
}

