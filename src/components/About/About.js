import React from 'react';
import './About.css';
import profile from '../../images/profile.jpg';

const About = () => {
    return (
        <div className="about-container pb-5">
            <h2 style={{color:'black'}} className="text-center p-5 text-decoration-underline mb-5">About Me </h2>
            <div className=" info-section ">
                <div className=" row container-fluid introduction-section">
                    <div className="col-11 col-sm-6 d-flex justify-content-center align-items-center">
                        <div className="">
                            <img className="img-fluid profile-view" src={profile} alt="my profile view" />
                        </div>
                    </div>
                    <div className=" col-11 col-sm-5 d-flex  p-0 align-items-center">
                        <div className="m-2 ">
                            <h5 className="">I am a React Js Front End web developer.
                            Developing websites in react for more than one years. Have a good team work experience. <br /> Completed many projects using react js and express js. Currently studying at Computer Science in Premier University Chittagong
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{color:"black"}} className="text-decoration-underline p-5">
                <h3 className="text-center p-3">Technology Skill </h3>
            </div>
            <div className="text-center skill-section">
                <span className="m-2 beautiful-button">JS</span>
                <span className="m-2 beautiful-button">ES6</span>
                <span className="m-2 beautiful-button">React JS</span>
                <span className="m-2 beautiful-button">Bootstrap</span>
                <span className="m-2 beautiful-button">Material UI</span>

  
            </div>
            <div className="text-center skill-section ">
                <span className="m-2 beautiful-button">Node JS</span>
                <span className="m-2 beautiful-button">Express Js</span>
                <span className="m-2 beautiful-button">Python3</span>
 

            </div>
            <div className="text-center skill-section ">
                <span className="m-2 beautiful-button">React Router DOM</span>
                <span className="m-2 beautiful-button">React Redux</span>
                <span className="m-2 beautiful-button">React Spring</span>
            </div>
            <div className="text-center skill-section ">
            <span className="m-2 beautiful-button">C++</span>
                <span className="m-2 beautiful-button">MongoDb</span>
                <span className="m-2 beautiful-button">Html5</span>
                <span className="m-2 beautiful-button">Css3</span>
                
            </div>
        </div>
    );
};

export default About;