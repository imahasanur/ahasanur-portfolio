import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Home.css';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

const Home = () => {
  let { width, height } = useWindowSize();
  const gravity = 0.05;
  const numberOfPieces = 90;
  

  return (
      <div>
      <div className="home-container d-flex justify-content-center align-items-center" >
        <div className="home-content">
            <h2>Peace Be Upon To You</h2>
            <h4>I'm Ahasanur Rahman</h4>
            <h5 style={{}}>Junior React Js Developer</h5>
            <button style={{color:'black'}}
                type="button" class="btn btn-light" 
                onClick={()=> window.open("https://drive.google.com/uc?export=download&id=1xMqWLGnnVBe4nhjFhHg-pyUJ-BgOBfcT", "_blank")} >
            <FontAwesomeIcon icon={faDownload} /> My Resume</button>
        </div>
        <Confetti height={height} width={width} gravity= {gravity} numberOfPieces= {numberOfPieces}>
      </Confetti>
      </div>
      </div>

  );
}

export default Home;



