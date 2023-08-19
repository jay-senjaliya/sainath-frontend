import React, { useContext, useRef, useState } from "react";
import "./../styles/InquiryForm.css"
import InquiryContext from "../context/inquiry/InquiryContext";

export default function InquiryForm(props) {
    const context = useContext(InquiryContext);
    const { open,  closeInquiry /*, openInquiry,submitInquiry*/ } = context;
    const ref = useRef(null);
    const closeForm = useRef(null);
    if (open) {
        ref.current.click();
    }

    const [inquiryData, setInquiryData] = useState({
        uname: '',
        email: '',
        mno: '',
        tname: '',
        message: ''
    });

    const handleOnchange = (e) => {
        setInquiryData({
            ...inquiryData,
            [e.target.name]: e.target.value
        });
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('Submitted data:', inquiryData);
    //     // submitInquiry(inquiryData);

    //     // Here you can perform further actions with the form data
    //     setInquiryData({
    //         uname: '',
    //         email: '',
    //         mno: '',
    //         tname: '',
    //         message: ''
    //     });
    //     closeForm.current.click();
    // };

    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button type="button" ref={ref} onClick={closeInquiry} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch</button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Inquiry Form</h5>
                            <button type="button" ref={closeForm} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="https://formspree.io/f/xnqykeda" method="POST">
                                <div className="user-box">
                                    <input type="text" id="uname" name="uname" value={inquiryData.uname} onChange={handleOnchange} required />
                                    <label htmlFor="uname">Your Name<sup>*</sup></label>
                                </div>
                                <div className="user-box">
                                    <input type="email" id="email" name="email" onChange={handleOnchange} value={inquiryData.email} required />
                                    <label htmlFor="email">Email<sup>*</sup></label>
                                </div>
                                <div className="user-box">
                                    <input type="number" id="mno" name="mno" onChange={handleOnchange} value={inquiryData.mno} minLength={10} maxLength={10} required />
                                    <label htmlFor="mno">Mobile No.<sup>*</sup></label>
                                </div>
                                <div className="user-box">
                                    <input type="text" id="tname" name="tname" onChange={handleOnchange} value={inquiryData.tname} required />
                                    <label htmlFor="tname">Tour Name<sup>*</sup></label>
                                </div>
                                <div className="user-box">
                                    <input type="text" id="message" name="message" onChange={handleOnchange} value={inquiryData.message} required />
                                    <label htmlFor="message">Message</label>
                                </div>
                                <div className="modal-footer">
                                    {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                                    <button type="submit" className="btn btn-primary"  >Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

