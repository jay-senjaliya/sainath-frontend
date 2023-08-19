import React /*, { useContext , useRef, useState } */from 'react'
import './../styles/TourDetail.css';
// import InquiryForm from './InquiryForm';
// import InquiryContext from '../context/inquiry/InquiryContext';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function TourDetailPage(props) {
    const { tour } = props;
    // const context = useContext(InquiryContext);
    // const { open, openInquiry } = context;
    // const next = useRef(null);
    // setTimeout(() => {
    //     next.current.click();
    // }, 3000);

    // const [open, setOpen] = useState(false);
    // const handleInquiry = () => {
    //     setOpen(true);
    // }
    return (
        <>
            <div>
                <div className="container tour-detail-header p-2 pt-4">
                    <h1>{tour.name}</h1>
                    <p>{`${tour.day} Days / ${tour.night} Nights`}<span className='mx-2' style={{ fontSize: '15px' }}>{`Ex. ${tour.ex}`}  </span></p>
                    <div className='mt-3' style={{ border: '1px solid black' }}>
                        {/* <ul className='list-group list-group-horizontal'>
                            <li className='list-group-item'><Link to='#overview'>Overview</Link></li>
                            <li className='list-group-item'><Link to='#itinerary'>Itinerary</Link></li>
                            <li className='list-group-item'><Link to='#pricing'>Pricing</Link></li>
                            <li className='list-group-item'><Link to='#hotels'>Hotels</Link></li>
                            <li className='list-group-item'><Link to='#otherinfo'>Other Info</Link></li>
                            <li className='list-group-item'><Link to='#review'>Post Review</Link></li>
                        </ul> */}
                    </div>
                </div >
            </div>
            <div className='container'>
                <div className='row'>

                    {/* <div className='col-sm-12 col-md-9 col-lg-7 tour-detail-page-carousel p-2 '> */}
                    <div className='col-sm-12 col-md-12 col-lg-12 tour-detail-page-carousel p-2 '>
                        <OwlCarousel items={1} margin={10} center={true} autoplay={true} autoplayTimeout={4000} loop={true} mouseDrag={true} touchDrag={true} dots={false} className="owl-theme">

                            <img src={require(`./../img/${tour.images[0]}`)} className="d-block w-100 " style={{ height: '80vh' }} alt="Carousel 1" />

                            <img src={require(`./../img/${tour.images[1]}`)} className="d-block w-100" style={{ height: '80vh' }} alt="Carousel 2" />

                            <img src={require(`./../img/${tour.images[2]}`)} className="d-block w-100" style={{ height: '80vh' }} alt="Carousel3" />

                        </OwlCarousel>
                        {/* <div id="carousel1" className="carousel slide carousel-fade " data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={require(`./../img/${tour.images[0]}`)} className="d-block w-100 " style={{ height: '50vh' }} alt="Carousel 1" />
                                </div>
                                <div className="carousel-item">
                                    <img src={require(`./../img/${tour.images[1]}`)} className="d-block w-100" style={{ height: '50vh' }} alt="Carousel 2" />
                                </div>
                                <div className="carousel-item">
                                    <img src={require(`./../img/${tour.images[2]}`)} className="d-block w-100" style={{ height: '50vh' }} alt="Carousel3" />
                                </div>
                            </div>
                            <button className="carousel-control-prev d-none" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next d-none" ref={next} type="button" data-bs-target="#carousel1" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div> */}
                    </div >
                    {/* <div className="col-sm-12 col-md-3 col-lg-5 tour-detail-header p-3 pt-1">
                        
                        <p>{tour.description}</p>
                        <div className='d-flex'>
                            <button className='btn btn-danger p-3 m-1' onClick={openInquiry}>Inquiry</button>
                            <InquiryForm open={open} tour={tour} />
                        
                            <button className='btn btn-danger p-3 m-1'>Book Now</button>
                        </div>
                    </div> */}
                </div>
            </div >
            <div className='container'>
                <div className="tour-detail-header pt-3">
                    {/* <h1>The Sp. Manali</h1>
                    <p>3Days / 2Nights</p> */}
                    <div className='mt-3'>
                        {/* <ul className='list-group list-group-horizontal'>
                            <li className=''><Link className='list-item btn btn-success' to='#overview'>Overview</Link></li>
                            <li className=''><Link className='list-item btn btn-success' to='#itinerary'>Itinerary</Link></li>
                            <li className=''><Link className='list-item btn btn-success' to='#pricing'>Pricing</Link></li>
                            <li className=''><Link className='list-item btn btn-success' to='#hotels'>Hotels</Link></li>
                            <li className=''><Link className='list-item btn btn-success' to='#otherinfo'>Other Info</Link></li>
                            <li className=''><Link className='list-item btn btn-success' to='#review'>Post Review</Link></li>
                        </ul> */}
                    </div>
                </div >
                <div id='overview' className='p-3'>
                    <h2>Overview</h2>
                    <p>{tour.description}</p>
                </div>
                <div id='itinerary' className='p-3'>
                    <h2>Itinerary</h2>
                    <div className="accordion" id="accordionExample">
                        {tour.itinerary.map((el) => {

                            return <div className="accordion-item">
                                <h2 className="accordion-header" id={`heading${el.day}`}>
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${el.day}`} aria-expanded="true" aria-controls="collapseOne">
                                        {`Day - ${el.day} (${el.locations.map((loc) => { return loc })})`}
                                    </button>
                                </h2>
                                <div id={`collapse${el.day}`} className={`accordion-collapse collapse ${el.day === 1 ? "show" : ""}`} aria-labelledby={`heading${el.day}`} data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        {el.desc}
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                {/* <div id='hotel' className='p-3'>
                    <h2>Hotels</h2>
                    <table>
                        <tr>
                            <td>City</td>
                            <td>Standards</td>
                            <td colSpan="2">Price</td>
                            <td>Delux</td>
                            <td colSpan="2">Price</td>
                            <td>Super Delux</td>
                            <td colSpan="2">Price</td>
                        </tr>
                        <tr>
                            <td rowSpan='2'>Manali</td>
                            <td rowSpan='2'>DE VILLA</td>
                            <td>Double sharing</td>
                            <td>12342</td>
                            <td rowSpan='2'>DE VILLA</td>
                            <td>Double sharing</td>
                            <td>12342</td>
                            <td rowSpan='2'>DE VILLA</td>
                            <td>Double sharing</td>
                            <td>12342</td>

                        </tr>
                        <tr>
                            <td>Triple sharing</td>
                            <td>12342</td>
                            <td>Triple sharing</td>
                            <td>12342</td>
                            <td>Triple sharing</td>
                            <td>12342</td>
                        </tr>
                        <tr>
                            <td rowSpan='2'>Manali</td>
                            <td rowSpan='2'>DE VILLA</td>
                            <td>Double sharing</td>
                            <td>12342</td>
                            <td rowSpan='2'>DE VILLA</td>
                            <td>Double sharing</td>
                            <td>12342</td>
                            <td rowSpan='2'>DE VILLA</td>
                            <td>Double sharing</td>
                            <td>12342</td>

                        </tr>
                        <tr>
                            <td>Triple sharing</td>
                            <td>12342</td>
                            <td>Triple sharing</td>
                            <td>12342</td>
                            <td>Triple sharing</td>
                            <td>12342</td>
                        </tr>
                    </table>
                </div> */}
                <div id='otherinfo' className='p-3'>
                    <h2>Other Info</h2>
                    <div className='row'>
                        <div className='col-sm-12 col-md-6 col-lg-6'>
                            <div>
                                <h4>Inclusion</h4>
                                <ul className='p-3'>
                                    {tour.inclusion.map((el) => {
                                        return <li>{el}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6'>
                            <div>
                                <h4>Exclusion</h4>
                                <ul className='p-3'>
                                    {tour.exclusion.map(el => {
                                        return <li>{el}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-6'>
                            <div>
                                <h4>Cancellation Policy</h4>
                                <ul className='p-3'>
                                    {tour.cancellationPolicy.map(el => {
                                        return <li>{el}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
