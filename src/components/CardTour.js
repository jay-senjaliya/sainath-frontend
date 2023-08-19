import React, { useContext /*, useState */ } from 'react'
import './../App.css';
// import img from './../img/image-tour2.jpg';
import { Link } from 'react-router-dom';
import InquiryForm from './InquiryForm';
import InquiryContext from '../context/inquiry/InquiryContext';

export default function CardTour(props) {
    const { tour } = props;
    const context = useContext(InquiryContext);
    const { open, openInquiry /*, closeInquiry */ } = context;
    return (
        <div>
            <div className='row card-tour m-4 '>
                <div className='col-sm-12 col-md-5 col-lg-4 p-0'>
                    <img src={require(`./../img/${tour.images[0]}`)} className='' alt="..." />
                </div>
                <div className='col-sm-12 col-md-7 col-lg-5 p-3'>
                    <h3>{tour.name}</h3>
                    <p style={{ fontSize: '1.2rem', color: 'black' }}>{`${tour.day}Days / ${tour.night}Nights`}</p><hr></hr>
                    <p>{`${tour.description.slice(0, 150)}...`}</p>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-3 actionbtn p-3'>
                    {/* <div className='actionbtn' > */}
                    <Link className='btn btn-danger btn-1 ' style={{ width: '180px' }} to={`/tour-detail/${tour.name}`}>View Detail</Link>
                    <Link className='btn btn-danger btn-2' onClick={openInquiry} style={{ width: '180px' }}>Send Inquiry</Link>
                    <InquiryForm open={open} tour={tour} />
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}
