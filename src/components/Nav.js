import React, { useContext /*, useState */ } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from './../img/sainath-logo-removebg-preview.png'
// import './../App.css'
import './../styles/Nav.css'
import InquiryForm from './InquiryForm';
import InquiryContext from '../context/inquiry/InquiryContext';

export default function Nav() {
    const context = useContext(InquiryContext);
    const {  openInquiry /*, closeInquiry */} = context;
    // const [open, setOpen] = useState(false);
    const location = useLocation();
    // const handleInquiry = () => {
    //     setOpen(true);
    // }

    // const [dropdown, setDropdown] = useState(false);
    // const onMouseEnter = () => {
    //     // setDropdown(true);
    //     if (window.innerWidth < 960) {
    //         setDropdown(false);
    //     } else {
    //         setDropdown(true);
    //         // console.log("entered..", dropdown);
    //     }
    // }
    // const onMouseLeave = () => {
    //     if (window.innerWidth < 960) {
    //         setDropdown(false);
    //     } else {
    //         setDropdown(false);
    //         // console.log("Leaved..", dropdown);
    //     }
    // }
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top d-block  " style={{ backgroundColor: '#343333' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        {/* SAINATH <span style={{ color: " orange" }}>HOLIDAYS</span> */}
                        <img className='logo-img' src={logo} style={{ height: '10vh' }} alt='SAINATH HOLIDAYS'></img>
                    </Link>

                    {/* <a href="ticket.html" className="btn custom-btn d-lg-none ms-auto me-4">Buy Ticket</a> */}

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav align-items-lg-center ms-auto me-lg-5">
                            {/* <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
                            </li> */}

                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/group-tour" ? "active" : ""}`} to="/group-tour">Group Tour</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/gujarat-tour" ? "active" : ""}`} to="/gujarat-tour">Gujarat Tour</Link>
                            </li>

                            <li className="nav-item mega-drop-li" /*onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}*/>
                                <Link className={`nav-link ${location.pathname === "/domestic-tour" ? "active" : ""}`} to="/domestic-tour">Domestic Tour</Link>
                                {/* {dropdown && <Dropdown />} */}
                                {/* {dropdown &&
                                    <div className='mega-dropdown'>
                                        <div className='content'>
                                            <div className='row'>
                                                <header>Gujarat</header>
                                                <ul className='mega-links'>
                                                    <li><Link onClick={() => setDropdown(false)} to="/domestic-tour">Item1</Link></li>
                                                    <li><Link onClick={() => setDropdown(false)} to="/domestic-tour">Item2</Link></li>
                                                    <li><Link onClick={() => setDropdown(false)} to="/domestic-tour">Item3</Link></li>
                                                    <li><Link onClick={() => setDropdown(false)} to="/domestic-tour">Item4</Link></li>
                                                    <li><Link onClick={() => setDropdown(false)} to="/domestic-tour">Item5</Link></li>
                                                </ul>
                                            </div>
                                            <div className='row'>
                                                <header>Gujarat</header>
                                                <ul className='mega-links'>
                                                    <li><Link onClick={() => setDropdown(false)} to="/domestic-tour">Item1</Link></li>
                                                    <li><Link onClick={() => setDropdown(false)} to="/domestic-tour">Item2</Link></li>
                                                    <li><Link onClick={() => setDropdown(false)} to="/domestic-tour">Item3</Link></li>
                                                    <li><Link onClick={() => setDropdown(false)} to="/domestic-tour">Item4</Link></li>
                                                    <li><Link onClick={() => setDropdown(false)} to="/domestic-tour">Item5</Link></li>
                                                </ul>
                                            </div>
                                            <div className='row'>
                                                <header>Gujarat</header>
                                                <ul className='mega-links'>
                                                    <li><Link onClick={() => setDropdown(false)} to="/domestic-tour">Item1</Link></li>
                                                    <li><Link onClick={() => setDropdown(false)} to="/domestic-tour">Item2</Link></li>
                                                    <li><Link onClick={() => setDropdown(false)} to="/domestic-tour">Item3</Link></li>
                                                    <li><Link onClick={() => setDropdown(false)} to="/domestic-tour">Item4</Link></li>
                                                    <li><Link onClick={() => setDropdown(false)} to="/domestic-tour">Item5</Link></li>
                                                </ul>
                                            </div>
                                            <div className='row'>
                                                <header>Gujarat</header>
                                                <ul className='mega-links'>
                                                    <li><Link onClick={() => setDropdown(false)} to="/domestic-tour">Item1</Link></li>
                                                    <li><Link onClick={() => setDropdown(false)} to="/domestic-tour">Item2</Link></li>
                                                    <li><Link onClick={() => setDropdown(false)} to="/domestic-tour">Item3</Link></li>
                                                    <li><Link onClick={() => setDropdown(false)} to="/domestic-tour">Item4</Link></li>
                                                    <li><Link onClick={() => setDropdown(false)} to="/domestic-tour">Item5</Link></li>
                                                </ul>
                                            </div>
                                            <div className='row'>
                                                <header>Gujarat</header>
                                                <ul className='mega-links'>
                                                    <li><Link onClick={() => setDropdown(false)} to="/domestic-tour">Item1</Link></li>
                                                    <li><Link onClick={() => setDropdown(false)} to="/domestic-tour">Item2</Link></li>
                                                    <li><Link onClick={() => setDropdown(false)} to="/domestic-tour">Item3</Link></li>
                                                    <li><Link onClick={() => setDropdown(false)} to="/domestic-tour">Item4</Link></li>
                                                    <li><Link onClick={() => setDropdown(false)} to="/domestic-tour">Item5</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>} */}
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/pilgrimage-tour" ? "active" : ""}`} to="/pilgrimage-tour">Pilgrimage Tour</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/international-tour" ? "active" : ""}`} to="/international-tour">International Tour</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/cab" ? "active" : ""}`} to="/cab">Cab</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/contactUs" ? "active" : ""}`} to="/contactUs">Contact</Link>
                            </li>
                        </ul>

                        <button className="btn custom-btn d-lg-block d-none" onClick={openInquiry}>Inquiry</button>
                        {/* <InquiryForm open={open} /> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}
