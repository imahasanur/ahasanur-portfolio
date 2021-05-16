import React from 'react';
import './Blogs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReadme } from '@fortawesome/free-brands-svg-icons';


const Blogs = () => {

    return (
        <div className="blog-container">
            <div className="p-5 mb-5">
                <h3 className="p-3 text-center text-decoration-underline" style={{color:'black'}}> Blogs</h3>
            </div>
            <div className="row container-fluid g-3 p-2">
                <div className="col-10 col-sm-8 col-md-6  d-flex justify-content-center align-items-center mb-5">
                    <div class="card sample-card bg-light shadow-lg p-3 mb-5  rounded" >
                        <div class="card-body sample-card-body">
                            <h5 class="card-title">Javascript map, filter, find, reduce mehtod <span class="badge bg-dark">2 min </span> </h5>
                            <h6 class="card-subtitle mb-2 ">This article is about some popular method used in javascript</h6>
                            <p class="card-text">There was a boy name J script. He was very much fond of eating various foods.</p>
                            <button
                                type="button" class="btn btn-light" 
                                onClick={()=> window.open("https://imahasanur.medium.com/javascript-map-filter-find-reduce-mehtod-751cab51a3aa", "_blank")} >
                                <FontAwesomeIcon icon={faReadme} /> Read More</button>
                        </div>
                    </div>
                </div>
                <div className="col-10 col-sm-8 col-md-6 d-flex justify-content-center align-items-center mb-5">
                    <div class="card sample-card bg-light shadow-lg p-3 mb-5 rounded" >
                        <div class="card-body sample-card-body">
                            <h5 class="card-title">Loops in modern javascript <span class="badge bg-dark">3 min </span> </h5>
                            <h6 class="card-subtitle mb-2 ">this article is about different kinds of loops in javascript language.</h6>
                            <p class="card-text">Who doesn’t like biscuits because they are delicious. Mr javascript also likes to taste biscuits. He likes to eat biscuits one by one</p>
                            <button
                                type="button" class="btn btn-light" 
                                onClick={()=> window.open("https://imahasanur.medium.com/loops-in-modern-javascript-afd8db65ba9e", "_blank")} >
                                <FontAwesomeIcon  icon={faReadme}/> Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;