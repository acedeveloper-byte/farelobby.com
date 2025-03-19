'use client';

import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { FaRandom, FaMoneyBill, FaCalendarAlt, FaTimesCircle } from 'react-icons/fa';

export default function FlightSupport() {
    const [modal, setModal] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setModal(true)
        }, 2000);
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
        <>
            {modal && <div className="overlay d-flex justify-content-center align-items-center">
                <div className="support-container row w-100 p-3 bg-white rounded shadow">
                    <div className="col-md-5 col-12 call-section text-center bg-dark text-white p-4">
                        <img src="/img/agent/call-girl.jpg" alt="Agent" width={80} height={80} className="rounded-circle mb-3" />
                        <h6>Call us now for exclusive flight deals and continuous support.</h6>
                        <div className="call-number bg-danger text-white d-inline-block p-2 rounded mt-2">
                            <a href="tel:+1 (855) 497-3456" className="text-decoration-none text-white">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" alt="US Flag" width={20} height={15} className="me-2" /> +1 855 497-3456
                            </a>
                        </div>
                    </div>
                    <div className="col-md-7 col-12 offer-section text-center p-4">
                        <h5>Explore the World with Our Special Flight Offers!</h5>
                        <div className="row mt-3">
                            <div className="col-6 mb-2" >
                                <a href="tel:+1 (855) 497-3456" className="text-decoration-none text-white">

                                    <span className="btn w-100 p-3 btn-light" style={{ background: "#FFD8D8 ", border: "none" }}><FaRandom /> Changes</span>
                                </a>
                            </div>
                            <div className="col-6 mb-2" >
                                <a href="tel:+1 (855) 497-3456" className="text-decoration-none text-white">
                                    <span className="btn w-100 p-3 btn-light" style={{ background: "#D4E9F4", border: "none" }}><FaMoneyBill /> Refund / Cancellation</span>
                                </a>
                            </div>
                            <div className="col-6 mb-2">
                                <a href="tel:+1 (855) 497-3456" className="text-decoration-none text-white">
                                    <span className="btn w-100 p-3 btn-light" style={{ background: "#DCDCDC", border: "none" }}><FaCalendarAlt /> Reservation</span>
                                </a>
                            </div>
                            <div className="col-6 mb-2">
                                <a href="tel:+1 (855) 497-3456" className="text-decoration-none text-white">
                                    <button className="btn w-100 p-3 btn-light" style={{ background: "#FFCFC6", border: "none" }}><FaTimesCircle /> Cancellation</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </>

    );
}
