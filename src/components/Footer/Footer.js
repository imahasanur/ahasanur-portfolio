import { faFacebook, faFacebookMessenger, faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-section p-2">
            <h5 className="p-2 text-center">Connect with me</h5>
            <div className="footer-contact-section text-center">
                <span className="m-3" onClick={()=> window.open("https://www.linkedin.com/in/ahasanur-rahman-a10925202/", "_blank")} ><FontAwesomeIcon icon={faLinkedin} />linked</span>
                <a style={{color:'aliceblue'}} className="m-3" href="mailto:imahasanur@gmail.com"><FontAwesomeIcon icon={faEnvelope} />mail</a>
                <span className="m-3"  onClick={()=> window.open("https://github.com/imahasanur", "_blank")} ><FontAwesomeIcon icon={faGithub}/>git</span>
                <span className="m-3"  onClick={()=> window.open("https://www.facebook.com/rahman.hasan.5036/", "_blank")} ><FontAwesomeIcon icon={faFacebookMessenger}/>fb</span>
            </div>
            <p className="text-center"><small>copyright &copy; Ahasanur Rahman </small></p>
        </div>
    );
};

export default Footer;