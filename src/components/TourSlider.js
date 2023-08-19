import React, { useContext, useEffect } from 'react';
// import './../App.css';
import './../styles/TourSlider.css';
import TourContext from '../context/tours/TourContext'
import { Link } from 'react-router-dom';
import CardItemHome from './CardItemHome';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function TourSlider({name}) {
    const context = useContext(TourContext);
    const { tours, getAllTours } = context;
    const Tour = [];

    // console.log(tours)

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

    const navText = [
        '&larr;',
        '&rarr;'
    ];

    const responsive = {
        0: {
            items: 1
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
        <div>
            <div className="container py-2 dtour">
                <h2 className='mx-2 pt-3'>{name}</h2>
                <OwlCarousel items={3} margin={10} nav={true} mouseDrag={true} touchDrag={true} dots={false} responsiveClass={true} responsive={responsive} navText={navText} className="owl-theme">
                    {Tour.map((tour) => {
                        return <CardItemHome key={tour._id} tour={tour} />
                    })}
                </OwlCarousel>

                <div className='buttonViewMore'>
                    <Link className='btn btn-danger mt-3' to={name.toLowerCase().split(' ').join('-')} >VIEW ALL</Link>
                </div>
            </div>
        </div>
    )
}



