import React from 'react'
import "./../styles/Services.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { /* faChevronLeft, faChevronRight,*/ faPlane, faPersonHiking, faTaxi, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import LeftArrow from "../img/reshot-icon-arrow-left-UZDAC2LESG.svg";
// import RightArrow from "../img/reshot-icon-arrow-right-GKTFPJDL97.svg";

export default function Services() {
    const navText = [
        '&larr;',
        '&rarr;'
    ];

    const responsive = {
        0: {
            items: 1,
            nav: false
        },
        480: {
            items: 2
        },
        769: {
            items: 3
        },
        992: {
            items: 4
        }
    }

    return (
        <>
            <div className='services'>
                <div className='container' >
                    <div className="row title" style={{ marginBottom: "20px" }} >
                        <div className="col-sm-12 btn">
                            <h2 className='mx-2 pt-3'>Services</h2>
                        </div>
                    </div>
                </div>
                <div className='service'>
                    <div className='container'>
                        <div className='service-card'>
                            <FontAwesomeIcon className='service-icon' icon={faPersonHiking} />
                            <p className='service-card-heading'>Oraganize Group Tour</p>
                            <p className='service-card-desc'>We organize group tour at the chepest price and gave surity to make trip memorable.</p>
                        </div>
                        <div className='service-card'>
                            <FontAwesomeIcon className='service-icon' icon={faPlane} style={{ color: 'white' }} />
                            <p className='service-card-heading'>Booking Tickets</p>
                            <p className='service-card-desc'>We Book Air Tickets, Train Tickets and Bus Tickets.</p>
                        </div>
                        <div className='service-card'>
                            <FontAwesomeIcon className='service-icon' icon={faTaxi} />
                            <p className='service-card-heading'>Booking cab</p>
                            <p className='service-card-desc'>We are providing service of cab/taxi and self driving vehicle also.</p>
                        </div>
                        <div className='service-card'>
                            <FontAwesomeIcon className='service-icon' icon={faUmbrellaBeach} />
                            <p className='service-card-heading'>Customize Tour</p>
                            <p className='service-card-desc'>We organize group tour at the chepest price and gave surity to make trip memorable.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='testimonial'>
                <div className='container' >
                    <div className="row title" style={{ marginBottom: "20px" }} >
                        <div className="col-sm-12 btn">
                            <h2 className='mx-2 pt-3'>Testimonials</h2>
                        </div>
                    </div>
                </div>
                <div className='container slider' >
                    <OwlCarousel items={3} margin={10} center={true} autoplay={true} autoplayTimeout={4000} startPosition={2} loop={true} mouseDrag={true} touchDrag={true} dots={false} responsiveclassName={true} responsive={responsive} navText={navText} className="owl-theme">
                        <div className="testimonial-card slider-card">
                            <div className="testimonial-content">
                                <div className="testimonial-image">
                                    <img src={require("./../img/manali-1.jpg")} alt="Author Image1" />
                                </div>
                                <p className="testimonial-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies odio ut erat rutrum, sed efficitur massa aliquam."<span className="quote-icon">❞</span></p>
                                <h3 className="testimonial-author">John Doe</h3>
                                <p className="testimonial-position">CEO, Company Name</p>
                            </div>
                        </div>
                        <div className="testimonial-card slider-card">
                            <div className="testimonial-content">
                                <div className="testimonial-image">
                                    <img src={require("./../img/manali-1.jpg")} alt="Author Image2" />
                                </div>
                                <p className="testimonial-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies odio ut erat rutrum, sed efficitur massa aliquam."<span className="quote-icon">❞</span></p>
                                <h3 className="testimonial-author">John Doe</h3>
                                <p className="testimonial-position">CEO, Company Name</p>
                            </div>
                        </div>
                        <div className="testimonial-card slider-card">
                            <div className="testimonial-content">
                                <div className="testimonial-image">
                                    <img src={require("./../img/manali-1.jpg")} alt="Author Image3" />
                                </div>
                                <p className="testimonial-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies odio ut erat rutrum, sed efficitur massa aliquam."<span className="quote-icon">❞</span></p>
                                <h3 className="testimonial-author">John Doe</h3>
                                <p className="testimonial-position">CEO, Company Name</p>
                            </div>
                        </div>
                        <div className="testimonial-card slider-card">
                            <div className="testimonial-content">
                                <div className="testimonial-image">
                                    <img src={require("./../img/manali-1.jpg")} alt="Author Image4" />
                                </div>
                                <p className="testimonial-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies odio ut erat rutrum, sed efficitur massa aliquam."<span className="quote-icon">❞</span></p>
                                <h3 className="testimonial-author">John Doe</h3>
                                <p className="testimonial-position">CEO, Company Name</p>
                            </div>
                        </div>
                        <div className="testimonial-card slider-card">
                            <div className="testimonial-content">
                                <div className="testimonial-image">
                                    <img src={require("./../img/manali-1.jpg")} alt="Author Image5" />
                                </div>
                                <p className="testimonial-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies odio ut erat rutrum, sed efficitur massa aliquam."<span className="quote-icon">❞</span></p>
                                <h3 className="testimonial-author">John Doe</h3>
                                <p className="testimonial-position">CEO, Company Name</p>
                            </div>
                        </div>
                        <div className="testimonial-card slider-card">
                            <div className="testimonial-content">
                                <div className="testimonial-image">
                                    <img src={require("./../img/manali-1.jpg")} alt="Author Image6" />
                                </div>
                                <p className="testimonial-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies odio ut erat rutrum, sed efficitur massa aliquam."<span className="quote-icon">❞</span></p>
                                <h3 className="testimonial-author">John Doe</h3>
                                <p className="testimonial-position">CEO, Company Name</p>
                            </div>
                        </div>
                        <div className="testimonial-card slider-card">
                            <div className="testimonial-content">
                                <div className="testimonial-image">
                                    <img src={require("./../img/manali-1.jpg")} alt="Author Image7" />
                                </div>
                                <p className="testimonial-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies odio ut erat rutrum, sed efficitur massa aliquam."<span className="quote-icon">❞</span></p>
                                <h3 className="testimonial-author">John Doe</h3>
                                <p className="testimonial-position">CEO, Company Name</p>
                            </div>
                        </div>
                        <div className="testimonial-card slider-card">
                            <div className="testimonial-content">
                                <div className="testimonial-image">
                                    <img src={require("./../img/manali-1.jpg")} alt="Author Image8" />
                                </div>
                                <p className="testimonial-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies odio ut erat rutrum, sed efficitur massa aliquam."<span className="quote-icon">❞</span></p>
                                <h3 className="testimonial-author">John Doe</h3>
                                <p className="testimonial-position">CEO, Company Name</p>
                            </div>
                        </div>
                        <div className="testimonial-card slider-card">
                            <div className="testimonial-content">
                                <div className="testimonial-image">
                                    <img src={require("./../img/manali-1.jpg")} alt="Author Image9" />
                                </div>
                                <p className="testimonial-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies odio ut erat rutrum, sed efficitur massa aliquam."<span className="quote-icon">❞</span></p>
                                <h3 className="testimonial-author">John Doe</h3>
                                <p className="testimonial-position">CEO, Company Name</p>
                            </div>
                        </div>
                        <div className="testimonial-card slider-card">
                            <div className="testimonial-content">
                                <div className="testimonial-image">
                                    <img src={require("./../img/manali-1.jpg")} alt="Author Image10" />
                                </div>
                                <p className="testimonial-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies odio ut erat rutrum, sed efficitur massa aliquam."<span className="quote-icon">❞</span></p>
                                <h3 className="testimonial-author">John Doe</h3>
                                <p className="testimonial-position">CEO, Company Name</p>
                            </div>
                        </div>
                        <div className="testimonial-card slider-card">
                            <div className="testimonial-content">
                                <div className="testimonial-image">
                                    <img src={require("./../img/manali-1.jpg")} alt="Author Image11" />
                                </div>
                                <p className="testimonial-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies odio ut erat rutrum, sed efficitur massa aliquam."<span className="quote-icon">❞</span></p>
                                <h3 className="testimonial-author">John Doe</h3>
                                <p className="testimonial-position">CEO, Company Name</p>
                            </div>
                        </div>
                        <div className="testimonial-card slider-card">
                            <div className="testimonial-content">
                                <div className="testimonial-image">
                                    <img src={require("./../img/manali-1.jpg")} alt="Author Image12" />
                                </div>
                                <p className="testimonial-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies odio ut erat rutrum, sed efficitur massa aliquam."<span className="quote-icon">❞</span></p>
                                <h3 className="testimonial-author">John Doe</h3>
                                <p className="testimonial-position">CEO, Company Name</p>
                            </div>
                        </div>




                    </OwlCarousel>
                </div>
            </div>
        </>

    )
} 
