import React from 'react';
import './Home.css';
import firebase from "firebase/app";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import firebaseConfig from './firebase.config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }else {
    firebase.app(); 
  }

const Home = () => {
    const purpleColor = {
        color:'purple'
    }
    const greenColor = {
        color:'green'
    }
    return (
        <div className="home-container d-flex justify-content-center align-items-center ">
            <div className="home-content">
                <h2>Peace Be Upon To You</h2>
                <h4>I'm Ahasanur Rahman</h4>
                <h5 style={purpleColor}>Junior React Js Developer</h5>
                <button style={greenColor}
                    type="button" class="btn btn-light" 
                    onClick={()=> window.open("https://drive.google.com/uc?export=download&id=1I_l8lLp5bodaosqpOU9T8BeXRvSzA-iX", "_blank")} >
                <FontAwesomeIcon icon={faDownload} /> My Resume</button>
            </div>          
        </div>
    );
};

export default Home;