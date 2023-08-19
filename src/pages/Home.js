import React from 'react'
import Carousel from '../components/Carousel'
import TourSlider from '../components/TourSlider'
import SubscribeMail from '../components/SubscribeMail'
import Services from '../components/Services'

export default function Home() {
    return (
        <div>
            <Carousel />
            <div className='container'>
                <TourSlider name='Domestic Tour'/>
                <TourSlider name='International Tour'/>
            </div>
            <Services />
            <SubscribeMail />
        </div >
    )
}
