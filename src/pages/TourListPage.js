import React, { useContext, useEffect } from 'react';
import TourContext from '../context/tours/TourContext'
import CardTour from '../components/CardTour';

const TourListPage = ({name}) => {
    const context = useContext(TourContext);
    const { tours, getAllTours } = context;

    const Tour = [];

    const tempTour = tours.map(el => {
        return el.category.filter(el1 => { return el1 === name.toLowerCase() })
    });

    for (let i = 0; i < tours.length; i++) {
        if (tempTour[i].length > 0) {
            Tour.push(tours[i]);
        }
    }

    useEffect(() => {
        getAllTours();
        // eslint-disable-next-line
    }, []);
  return (
    <div>
            <div className='page-header'>
                <h2 className='p-5 ps-1'>{`${name}s`}</h2>
            </div>
            <div className='container domestic-tour-page'>
                <div className='alldtour'>
                    {Tour.map((tour) => {
                        return <CardTour key={tour._id} tour={tour} />
                    })}
                </div>
            </div>
        </div>
  )
}

export default TourListPage
