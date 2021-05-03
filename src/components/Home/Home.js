import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { spring, TransitionMotion } from 'react-motion';
import './Home.css';

const leavingSpringConfig = {stiffness: 60, damping: 15};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mouse: [], now: 't' + 0};
  };

  handleMouseMove = ({pageX, pageY}) => {
    // Make sure the state is queued and not batched.
    this.setState(() => {
      return {
        mouse: [pageX - 25, pageY - 25],
        now: 't' + Date.now(),
      };
    });
  };

  handleTouchMove = (e) => {
    e.preventDefault();
    this.handleMouseMove(e.touches[0]);
  };

  willLeave = (styleCell) => {
    return {
      ...styleCell.style,
      opacity: spring(0, leavingSpringConfig),
      scale: spring(2, leavingSpringConfig),
    };
  };

  render() {
    const {mouse: [mouseX, mouseY], now} = this.state;
    const styles = mouseX == null ? [] : [{
      key: now,
      style: {
        opacity: spring(1),
        scale: spring(0),
        x: spring(mouseX),
        y: spring(mouseY),
      }
    }];
    return (
        <div className="home-container d-flex justify-content-center align-items-center ">
            <TransitionMotion willLeave={this.willLeave} styles={styles}>
        {circles =>
          <div style={{height:'200px', width:"100%", background:'lightsteelblue'}}
            onMouseMove={this.handleMouseMove}
            onTouchMove={this.handleTouchMove}
            className="demo7">
            {circles.map(({key, style: {opacity, scale, x, y}}) =>
              <div
                key={key}
                className="demo7-ball"
                style={{
                  opacity: opacity,
                  scale: scale,
                  transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                  WebkitTransform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                }} />
            )}
            <div className="d-flex justify-content-center align-items-center">
            <div className="home-content">
                <h2>Peace Be Upon To You</h2>
                <h4>I'm Ahasanur Rahman</h4>
                <h5 style={{color:'purple'}}>Junior React Js Developer</h5>
                <button style={{color:'green'}}
                    type="button" class="btn btn-light" 
                    onClick={()=> window.open("https://drive.google.com/uc?export=download&id=1I_l8lLp5bodaosqpOU9T8BeXRvSzA-iX", "_blank")} >
                <FontAwesomeIcon icon={faDownload} /> My Resume</button>
            </div>
            </div>
             
        
          </div>
        }
      </TransitionMotion>
      </div>
    );
  };
}