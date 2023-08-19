import React, { useState } from 'react'
// import './../App.css'
import './../styles/Footer.css';
import facebook from "./../img/facebook.png"
import instagram from "./../img/instagram.png"
import linkedin from "./../img/linkedin.png"
import Twitter from "./../img/Twitter.png"
import Whatsapp from './Whatsapp'

const addFeedback = async (formData) => {
    const action_url = "https://script.google.com/macros/s/AKfycbwunS6e2NvMv0WpymJDd2sOtjX2fvqoSeufIlib2ZiXq0dGUuUbQPUg2jP4SuoaUu5S_Q/exec";
    try {
        const response = await fetch(action_url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (data.success) {
            // Handle successful form submission
            console.log('Form submitted successfully!');
        } else {
            // Handle error
            console.error('Error submitting form:', data.error);
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }


}

export default function Footer() {
    const [feedback, setFeedback] = useState({ name: '', email: '', message: '' });
    const [formData, setFormData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(feedback);
        setFormData(feedback);
        setFeedback({ name: '', email: '', message: '' });
        addFeedback(formData);
    }




    return (
        <div className='mb-0'>
            {/* <!-- footer --> */}
            <footer>
                <div id="contact" className="footer mt-0">
                    <div className="container ">
                        <div className="row pdn-top-30">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <ul className="location_icon">
                                    <li> <a href="/" ><img src={facebook} alt="facebook logo" /></a></li>
                                    <li> <a href="/" ><img src={instagram} alt="instagram logo" /></a></li>
                                    <li> <a href="/" ><img src={linkedin} alt="linkedin logo" /></a></li>
                                    <li> <a href="/" ><img src={Twitter} alt="twitter logo" /></a></li>
                                </ul>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div className="Follow">
                                    <h3>CONTACT US</h3>
                                    <span>123 Second Street Fifth <br />Avenue,<br />
                                        Manhattan, New York<br />
                                        +987 654 3210</span>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div className="Follow">
                                    <h3>ADDITIONAL LINKS</h3>
                                    <ul className="link">
                                        <li> <a href="/">About us</a></li>
                                        <li> <a href="/">Terms and conditions</a></li>
                                        <li> <a href="/"> Privacy policy</a></li>
                                        <li> <a href="/">News</a></li>
                                        <li> <a href="/"> Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="Follow">
                                    <h3> Contact</h3>
                                    <form>
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                <input className="Newsletter" name="name" value={feedback.name} onChange={(e) => setFeedback({ ...feedback, name: e.target.value })} placeholder="Name" type="text" />
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                                <input className="Newsletter" name="email" value={feedback.email} onChange={(e) => setFeedback({ ...feedback, email: e.target.value })} placeholder="Email" type="text" />
                                            </div>
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                <textarea className="textarea" name='message' value={feedback.message} onChange={(e) => setFeedback({ ...feedback, message: e.target.value })} placeholder="message" type="text"></textarea>
                                            </div>
                                            {/* <input type='submit' className="Subscribe">Submit</input> */}
                                        </div>
                                    </form>
                                    <button type='submit' className="Subscribe" onClick={handleSubmit}>Submit</button>
                                </div>
                            </div>
                        </div>
                        <div className="copyright">
                            <div className="container">
                                <p>Copyright 2019 All Right Reserved By <a href="https://html.design/">Sainath Holidays</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <Whatsapp />
            {/* <!-- end footer --> */}
        </div>
    )
}
