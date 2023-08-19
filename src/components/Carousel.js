import React from 'react'
import img1 from "./../img/carousel-1.jpg"
import img2 from "./../img/carousel-2.jpg"
import img3 from "./../img/carousel-3.jpg"
// import './../App.css'
import "./../styles/Carousel.css"
import { Link } from 'react-router-dom'

export default function Carousel() {
    return (
        <>
            <div>
                <div id="carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="img-fluid" src={img1} alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src={img2} className="d-block w-100" alt="Carousel 2" />
                        </div>
                        <div className="carousel-item">
                            <img src={img3} className="d-block w-100" alt="Carousel3" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="carousel-content">
                    <h1>What are you waiting for</h1>
                    <p>Book your tour fast.</p>
                    < Link className='btn btn-danger' to='/tours' > Book Tour</ Link>

                </div >
            </div>
        </>
    )
}







