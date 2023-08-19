import React from 'react'
import { Link } from 'react-router-dom';

export default function CardItemHome(props) {
    const { tour } = props;
    return (
        <>
            <div className="card card-body m-2 p-0" /*style={{ width: '250px' }}*/>
                <div className='card-img-container'>
                    <img src={require(`./../img/${tour.images[0]}`)} className="card-img" style={{ borderRadius: '5px 5px 0px 0px', width: "100%", height: "170px" }} alt="The Sp. Manali" />
                </div>
                <div className="card-img p-1">
                    <h5 className="card-title ps-2 pt-2">{tour.name}</h5>
                    <p className="card-text text-dark ps-2">{`${tour.description.slice(0, 55)}`}<Link style={{ color: 'black' }} to={`tour-detail/${tour.name}`} >...</Link></p>
                    <p className="card-text text-dark ps-2 pb-1 float-start">{`${tour.day} Days `}</p>
                    <p className="card-text text-dark pe-2 pb-1 float-end">{`${tour.night} Nights `}</p>
                </div>
            </div>
        </>
    )
}

