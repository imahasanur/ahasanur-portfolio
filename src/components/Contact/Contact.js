import React from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import{ init, send } from 'emailjs-com';

init("user_fGMi3h6LeQ5ujeY6grJlX");
const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) =>{
        e.preventDefault();
        data.from_name = data.name;
        data.to_name = "ahasanur rahman";
        data.reply_to = data.email;
        
        send(
            'service_bfte7dm',
            'template_6vc39pn',
            data,
            'user_fGMi3h6LeQ5ujeY6grJlX'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });


    }
    return (
        <div className="contact-container">
            <div className="text-center p-2">
                <h2 style={{color:'grey'}}>Contact me</h2>
            </div>

            <div className="d-flex justify-content-center contact-form align-items-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="p-2">
                        <input type="text" {...register("name")} placeholder="Your name"/>
                    </div>
                    <div className="p-2">
                        <input type="email" {...register("email")} placeholder="Your email"/>
                    </div>
                    <div className="p-2">
                        <textarea type="text" {...register("message")} placeholder="Your thoughts .."/>
                    </div>

                    <div>
                        <input type="submit" value="Send Message" className="m-2 btn btn-info"/>
                    </div>
                </form>
            </div>
            <div style={{fontSize:'1.3em'}} className="text-center social-icons">
                <a className="m-3" onClick={()=> window.open("https://www.linkedin.com/in/ahasanur-rahman-a10925202/", "_blank")} ><FontAwesomeIcon icon={faLinkedinIn} />linked</a>
                <a className="m-3" href="mailto:imahasanur@gmail.com"><FontAwesomeIcon icon={faEnvelope} />mail</a>
                <a className="m-3"  onClick={()=> window.open("https://github.com/imahasanur", "_blank")} ><FontAwesomeIcon icon={faGithub}/>git</a>
                
            </div>
            <div style={{fontSize:'1.3em'}} className="text-center social-icons">
                <a className="m-2" ><FontAwesomeIcon icon={faPhone} />+8801688790340</a>
            </div>
        </div>
    );
};

export default Contact;