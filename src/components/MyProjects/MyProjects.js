import React from 'react';
import './MyProjects.css';
import bicycleAdmin from '../../images/bicycleAdmin.png';
import bicycleHome from '../../images/bicycleHome.png';
import bicycleUser from '../../images/bicycleUser.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import bookStoreHome from '../../images/bookStoreHome.png';
import bookStoreAdmin from '../../images/bookStoreAdmin.png';
import eticketHome from '../../images/eticketHome.png';
import eticketBooking from '../../images/eticketBooking.png';
import soccerHome from '../../images/soccerHome.png';
import soccerClub from '../../images/soccerClub.png';
import sliderHome from '../../images/sliderHome.png';
import sliderSlide from '../../images/sliderSlide.png';

const MyProjects = () => {
    return (
        <div className="projects-container">
            <div>
                <h2 className="text-center p-5 text-white">My Projects</h2>
            </div>
            <div className="p-3">
                <div className="row container-fluid g-3">
                    <div className="col-11 col-sm-6">
                        <div className="card project-card">
                        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="2000">
                                    <div className="slide-image ">
                                        <img src={bicycleHome} class="d-block w-100  " alt="..." />
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <div className="slide-image d-flex align-items-center">
                                        <img src={bicycleUser} class="d-block w-100 project-image" alt="..." />
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <div className="slide-image d-flex align-items-center">
                                        <img src={bicycleAdmin} class="d-block w-100 project-image" alt="..." />
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div> 
                        <div className="card-body">
                            <h5 class="card-title">bicycle service web app </h5>
                            <h6 className="card-subtitle mb-2">based on different bicycle services</h6>
                            <p className="card-text">
                                <ul>
                                    <li>After login customer can book a service, see bookings list & status etc</li>
                                    <li>After login an admin can make new admin, update every order status</li>
                                    <li>An admin can delete and add a service.</li>
                                </ul>
                            </p>
                            <p className="card-text">Tools : React js, React Router DOM, React spring, React Stripe, React hook form, Bootstrap, Node js, Express js, Mongo Db</p>
                            <button className="btn btn-light m-2" 
                            onClick={()=> window.open("https://bicycle-service-6512c.firebaseapp.com/", "_blank")}
                            ><FontAwesomeIcon icon={faExternalLinkAlt} />live site</button>
                            <button className="btn btn-light m-2"
                            onClick={()=> window.open("https://github.com/imahasanur/bicycle-service", "_blank")}
                            ><FontAwesomeIcon icon={faCode} />code</button>

                        </div>
                        </div>
                    </div>
                    <div className="col-11 col-sm-6">
                    <div className="card project-card">
                        <div id="carouselExampleInterval2" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="10000">
                                    <div className="slide-image ">
                                        <img src={bookStoreHome} class="d-block w-100  " alt="..." />
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <div className="slide-image d-flex align-items-center">
                                        <img src={bookStoreAdmin} class="d-block w-100 project-image" alt="..." />
                                    </div>
                                </div>

                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval2" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval2" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div> 
                        <div className="card-body">
                            <h5 class="card-title">ebook store web app </h5>
                            <h6 className="card-subtitle mb-2">based on different books order</h6>
                            <p className="card-text">
                                <ul>
                                    <li>After login customer can order books , see bookings list</li>
                                    <li>A customer can view orders total price and place order</li>
                                    <li>After login an admin can add books or delete books</li>
                                </ul>
                            </p>
                            <p className="card-text">Tools : React js, React Router DOM, React hook form, Bootstrap, Node js, Express js, Mongo Db</p>

                            <button className="btn btn-light m-2" 
                            onClick={()=> window.open("https://book-store-1b689.firebaseapp.com/", "_blank")}
                            ><FontAwesomeIcon icon={faExternalLinkAlt} />live site</button>
                            <button className="btn btn-light m-2"
                            onClick={()=> window.open("https://github.com/imahasanur/ebook-store", "_blank")}
                            ><FontAwesomeIcon icon={faCode} />code</button>

                        </div>
                        </div>

                    </div>
                    <div className="col-11 col-sm-6">
                        <div className="card project-card">
                        <div id="carouselExampleInterval3" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="10000">
                                    <div className="slide-image2 d-flex align-items-center">
                                        <img src={eticketHome} class="d-block w-100  " alt="..." />
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <div className="slide-image2 d-flex align-items-center">
                                        <img src={eticketBooking} class="d-block w-100 project-image" alt="..." />
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval3" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval3" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div> 
                        <div className="card-body">
                            <h5 class="card-title">eticket booking web app </h5>
                            <h6 className="card-subtitle mb-2">based on get bookings of different transport</h6>
                            <p className="card-text">
                                <ul>
                                    <li>user can sign up and sign in to give bookings of any transport</li>
                                    <li>after login user can select destination </li>
                                    <li>after choosing destination user can see available prices ticket </li>
                                </ul>
                            </p>
                            <p className="card-text">Tools : Html5, css3 React js, React Router DOM, React hook form, Bootstrap</p>

                            <button className="btn btn-light m-2" 
                            onClick={()=> window.open("https://ticket-booking-simple-4ee8a.web.app/ticketCounter", "_blank")}
                            ><FontAwesomeIcon icon={faExternalLinkAlt} />live site</button>
                            <button className="btn btn-light m-2"
                            onClick={()=> window.open("https://github.com/imahasanur/eticket-booking", "_blank")}
                            ><FontAwesomeIcon icon={faCode} />code</button>

                        </div>
                        </div>
                    </div>
                    <div className="col-11 col-sm-6">
                        <div className="card project-card">
                        <div id="carouselExampleInterval4" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">

                                <div class="carousel-item active" data-bs-interval="2000">
                                    <div className="slide-image2 d-flex align-items-center">
                                        <img src={soccerHome} class="d-block w-100 project-image" alt="..." />
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <div className="slide-image2 d-flex align-items-center">
                                        <img src={soccerClub} class="d-block w-100 project-image" alt="..." />
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval4" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval4" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div> 
                        <div className="card-body">
                            <h5 class="card-title">soccer league web app </h5>
                            <h6 className="card-subtitle mb-2">based on showing different soccer league details by an api call</h6>
                            <p className="card-text">
                                <ul>
                                    <li> user will show different soccer leagues in home page</li>
                                    <li>user can click any any soccer league card</li>
                                    <li>user can see some detail information of specific league</li>
                                </ul>
                            </p>
                            <p className="card-text">Tools : Html5, css3, React js, React Router DOM, Bootstrap, sportsdb api</p>

                            <button className="btn btn-light m-2" 
                            onClick={()=> window.open("https://604a4577bf3ebe20c4e71b28--romantic-curran-be6f18.netlify.app/", "_blank")}
                            ><FontAwesomeIcon icon={faExternalLinkAlt} />live site</button>
                            <button className="btn btn-light m-2"
                            onClick={()=> window.open("https://github.com/imahasanur/soccer-league-simple", "_blank")}
                            ><FontAwesomeIcon icon={faCode} />code</button>

                        </div>
                        </div>
                    </div>
                    <div className="col-11 col-sm-6">
                        <div className="card project-card">
                        <div id="carouselExampleInterval5" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">

                                <div class="carousel-item active" data-bs-interval="2000">
                                    <div className="slide-image2 d-flex align-items-center">
                                        <img src={sliderHome} class="d-block w-100 project-image" alt="..." />
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <div className="slide-image2 d-flex align-items-center">
                                        <img src={sliderSlide} class="d-block w-100 project-image" alt="..." />
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval5" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval5" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div> 
                        <div className="card-body">
                            <h5 class="card-title">fancy slider web app </h5>
                            <h6 className="card-subtitle mb-2">based on selected images sliding</h6>
                            <p className="card-text">
                                <ul>
                                    <li>an api is called based on search result</li>
                                    <li>user can select images</li>
                                    <li>user can set images sliding interval</li>
                                </ul>
                            </p>
                            <p className="card-text">Tools : Html5, css3, Bootstrap, javascript, ES6</p>
                            <button className="btn btn-light m-2" 
                            onClick={()=> window.open("https://imahasanur.github.io/fancy-slider/", "_blank")}
                            ><FontAwesomeIcon icon={faExternalLinkAlt} />live site</button>
                            <button className="btn btn-light m-2"
                            onClick={()=> window.open("https://github.com/imahasanur/fancy-slider", "_blank")}
                            ><FontAwesomeIcon icon={faCode} />code</button>

                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyProjects;