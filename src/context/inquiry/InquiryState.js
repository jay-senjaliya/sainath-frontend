import InquiryContext from "./InquiryContext";
import React, { useState } from 'react'

const InquiryState = (props) => {
    const [open, setOpen] = useState(false);

    const closeInquiry = () => {
        setOpen(false);
    }

    const openInquiry = () => {
        setOpen(true);

    }

    const submitInquiry = async (inquiryData) => {
        const response = await fetch('http://localhost:5000/submit-inquiry', {
            method: "POST",
            headers: {
                "Content-Type": " application/json",
            },
            body: JSON.stringify(inquiryData)
        });

        const json = await response.json();

        if (json.success) {
            console.log(json.message);
        } else {
            console.log(json.error);
        }
    }

    return (
        <InquiryContext.Provider value={{ open, openInquiry, closeInquiry, submitInquiry }}>
            {props.children}
        </InquiryContext.Provider>
    )
}

export default InquiryState;
