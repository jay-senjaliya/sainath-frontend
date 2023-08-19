import React, { useContext, useEffect /*, useRef, useState*/ } from 'react'
import './../styles/TourDetail.css';
import { useParams } from 'react-router-dom';
import TourContext from '../context/tours/TourContext';
import TourDetailPage from './TourDetailPage';

export default function TourDetail(props) {
    const context = useContext(TourContext);
    const { tours, getAllTours, tour, getTourByName } = context;
    const tourName = useParams();

    useEffect(() => {
        getAllTours();
        getTourByName(tourName.tourName);
        // eslint-disable-next-line
    }, [tours.length != 0]);



    return (
        <>
            {tour && <TourDetailPage key={tour._id} tour={tour} />}
        </>
    )
}

