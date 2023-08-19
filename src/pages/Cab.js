import React from 'react'
import "./../styles/Cab.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Cab() {
    return (
        <>
            <div className='cab'>
                <div className='cab-carousel'>
                    <OwlCarousel items={1} margin={10} center={true} autoplay={true} autoplayTimeout={4000} loop={true} mouseDrag={true} touchDrag={true} dots={false} className="owl-theme">
                        <img src={require('./../img/cab-1.jpg')} alt="Cab Image1" />
                        <img src={require('./../img/cab-2.jpg')} alt="Cab Image2" />
                        <img src={require('./../img/cab-3.jpg')} alt="Cab Image3" />
                        <img src={require('./../img/cab-4.jpg')} alt="Cab Image4" />
                        <img src={require('./../img/cab-5.jpg')} alt="Cab Image5" />
                    </OwlCarousel>
                </div>

                <div className='container'>
                    <div className="cab-card" style={{ marginTop: "50px" }}>
                        <div className="image-section">
                            <img src={require('./../img/cab-1.jpg')} alt="Card Image1" />
                        </div>
                        <div className="info-section">
                            <h2>Innova Crysta</h2>
                            <p>Best condition</p>
                            <h2>Innova Crysta</h2>
                            <p>Best condition</p>
                            <h2>Innova Crysta</h2>
                            <p>Best condition</p>
                            <h2>Innova Crysta</h2>
                            <p>Best condition</p>
                            <div className="buttons">
                                <button className='btn btn-danger cab-button'>INQUIRY</button>
                                <button className='btn btn-danger cab-button'>BOOK NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className="cab-card" style={{ marginTop: "50px" }}>
                        <div className="image-section">
                            <img src={require('./../img/cab-1.jpg')} alt="Card Image2" />
                        </div>
                        <div className="info-section">
                            <h2>Innova Crysta</h2>
                            <p>Best condition</p>
                            <h2>Innova Crysta</h2>
                            <p>Best condition</p>
                            <h2>Innova Crysta</h2>
                            <p>Best condition</p>
                            <h2>Innova Crysta</h2>
                            <p>Best condition</p>
                            <div className="buttons">
                                <button className='btn btn-danger cab-button'>INQUIRY</button>
                                <button className='btn btn-danger cab-button'>BOOK NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className="cab-card" style={{ marginTop: "50px" }}>
                        <div className="image-section">
                            <img src={require('./../img/cab-1.jpg')} alt="Card Image3" />
                        </div>
                        <div className="info-section">
                            <h2>Innova Crysta</h2>
                            <p>Best condition</p>
                            <h2>Innova Crysta</h2>
                            <p>Best condition</p>
                            <h2>Innova Crysta</h2>
                            <p>Best condition</p>
                            <h2>Innova Crysta</h2>
                            <p>Best condition</p>
                            <div className="buttons">
                                <button className='btn btn-danger cab-button'>INQUIRY</button>
                                <button className='btn btn-danger cab-button'>BOOK NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className="cab-card" style={{ marginTop: "50px" }}>
                        <div className="image-section">
                            <img src={require('./../img/cab-1.jpg')} alt="Card Image4" />
                        </div>
                        <div className="info-section">
                            <h2>Innova Crysta</h2>
                            <p>Best condition</p>
                            <h2>Innova Crysta</h2>
                            <p>Best condition</p>
                            <h2>Innova Crysta</h2>
                            <p>Best condition</p>
                            <h2>Innova Crysta</h2>
                            <p>Best condition</p>
                            <div className="buttons">
                                <button className='btn btn-danger cab-button'>INQUIRY</button>
                                <button className='btn btn-danger cab-button'>BOOK NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className="cab-card" style={{ marginTop: "50px" }}>
                        <div className="image-section">
                            <img src={require('./../img/cab-1.jpg')} alt="Card Image5" />
                        </div>
                        <div className="info-section">
                            <h2>Innova Crysta</h2>
                            <p>Best condition</p>
                            <h2>Innova Crysta</h2>
                            <p>Best condition</p>
                            <h2>Innova Crysta</h2>
                            <p>Best condition</p>
                            <h2>Innova Crysta</h2>
                            <p>Best condition</p>
                            <div className="buttons">
                                <button className='btn btn-danger cab-button'>INQUIRY</button>
                                <button className='btn btn-danger cab-button'>BOOK NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className="cab-card" style={{ marginTop: "50px" }}>
                        <div className="image-section">
                            <img src={require('./../img/cab-1.jpg')} alt="Card Image6" />
                        </div>
                        <div className="info-section">
                            <h2>Innova Crysta</h2>
                            <p>Best condition</p>
                            <h2>Innova Crysta</h2>
                            <p>Best condition</p>
                            <h2>Innova Crysta</h2>
                            <p>Best condition</p>
                            <h2>Innova Crysta</h2>
                            <p>Best condition</p>
                            <div className="buttons">
                                <button className='btn btn-danger cab-button'>INQUIRY</button>
                                <button className='btn btn-danger cab-button'>BOOK NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className="cab-card" style={{ marginTop: "50px" }}>
                        <div className="image-section">
                            <img src={require('./../img/cab-1.jpg')} alt="Card Image7" />
                        </div>
                        <div className="info-section">
                            <h2>Innova Crysta</h2>
                            <p>Best condition</p>
                            <h2>Innova Crysta</h2>
                            <p>Best condition</p>
                            <h2>Innova Crysta</h2>
                            <p>Best condition</p>
                            <h2>Innova Crysta</h2>
                            <p>Best condition</p>
                            <div className="buttons">
                                <button className='btn btn-danger cab-button'>INQUIRY</button>
                                <button className='btn btn-danger cab-button'>BOOK NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
