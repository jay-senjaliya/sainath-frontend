import React from 'react'
import whatsapp from "./../img/WhatsApp.png";
import "./../App.css"

export default function Whatsapp() {
    return (
        <a className='whatsapp' href="http://wa.me/7990610649" target='_blank' rel="noopener noreferrer" >
            <img src={whatsapp} className='' alt='whatsapp'></img>
        </a>
    )
}
