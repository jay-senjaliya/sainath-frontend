import React from 'react'
import './../styles/ContactUs.css'

export default function ContactUs() {
    return (
        <div className="contact-us-page">
            <div className="contact-us-container">
                <h1>Contact Us</h1>
                <p>Do you have any questions or inquiries? We're here to help! Get in touch with us using the form below:</p>

                <div className='container-fluid d-flex'>
                    <div className='contact-info' >
                        <p>Alternatively, you can reach us through the following contact information:</p>
                        <div className='map'>
                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4166.46492032386!2d72.66449218404985!3d23.04639705427925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e871daa53c647%3A0x8cf0b224cd2e35b3!2sSAINATH%20HOLIDAYS!5e0!3m2!1sen!2sin!4v1689934636007!5m2!1sen!2sin" width="600" height="450" style="border:0;" loading="lazy" ></iframe> */}
                        </div>
                        <div className="contact-info">
                            <div>
                                <strong>Phone:</strong>
                                <span>+123 456 7890</span>
                            </div>
                            <div>
                                <strong>Email:</strong>
                                <span>info@touragency.com</span>
                            </div>
                            <div>
                                <strong>Address:</strong>
                                <span>123 Tour Street, City, Country</span>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
