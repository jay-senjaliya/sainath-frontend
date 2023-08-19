import React from 'react'
import "./../styles/SubscribeMail.css"

export default function SubscribeMail() {
    return (
        <div className='subscribe-box'>
            <h2>Subscribe to our mailing list</h2>
            <form className='subscribe'>
                <input type='email' id="subscribe" placeholder='abc@gmail.com' autoComplete='off' required></input>
                <button type='submit'><span>Subscribe</span></button>
            </form>
        </div>
    )
}
