import React from 'react';
import './Resume.css';

const Resume = () => {
    const str = "https://drive.google.com/file/d/1xMqWLGnnVBe4nhjFhHg-pyUJ-BgOBfcT/view?usp=sharing";
    return (
        <div calssName="resume-container ">
            <h2 className="text-center p-2 text-decoration-underline ">My Resume</h2>
            <iframe className="pdf-viewer" src="https://docs.google.com/viewer?srcid=1xMqWLGnnVBe4nhjFhHg-pyUJ-BgOBfcT&pid=explorer&efh=false&a=v&chrome=false&embedded=true" ></iframe>
        </div>
    );
};

export default Resume;