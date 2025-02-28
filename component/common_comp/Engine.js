'use client';
import { FaUserFriends } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import { PiSeatLight } from "react-icons/pi";
import { GiAirplaneDeparture, GiCalendar, GiAirplaneArrival } from "react-icons/gi";
import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import CalendarRange from "../CalendarRange";
import CustomDropDown from '../EngineAtoms/CustomDropdown';

const Engine = () => {
    const inputRef = useRef(null);

    const [depDate, setDeptDate] = useState(false)
    const [ARRDate, setARRtDate] = useState(false)
    const [activeTab, setActiveTab] = useState("flights");
    const [showDropdown, setShowDropdown] = useState(true);
    const [dropdownPosition, setDropdownPosition] = useState({
        top: 0,
        left: 0,
        width: 0,
    });
    const [selectionRange, setSelectionRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
    });

    const handleCalendarSelectionDep = () => {
        setDeptDate(true)
        setARRtDate(false)
    }

    const handleCalendarSelectionArrival = () => {
        setDeptDate(false)
        setARRtDate(true)
    }
    useEffect(() => {
        if (inputRef.current) {
            const rect = inputRef.current.getBoundingClientRect();
            setDropdownPosition({
                top: rect.bottom + window.scrollY,
                left: rect.left + window.scrollX,
                width: rect.width,
            });
        }
    }, [showDropdown]);



    return (
        <Container className="mt-5">
            <Tab.Container activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
                {/* Tab Navigation */}
                <Nav variant="tabs" className="mb-3">
                    <Nav.Item>
                        <Nav.Link eventKey="flights" className={`fw-bold ${activeTab === "flights" ? "bg-primary text-white" : ""}`}>
                            Flights
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="hotels" className={`fw-bold ${activeTab === "hotels" ? "bg-primary text-white" : ""}`}>
                            Hotels
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

                {/* Tab Content */}
                <Tab.Content className="p-4 border rounded shadow bg-white">
                    {/* Flights Tab */}
                    <Tab.Pane eventKey="flights">
                        <Row className="g-3">
                            <Col md={2}>
                                <div className="input-group">
                                    <span class="input-group-text">
                                        <GiAirplaneDeparture />
                                    </span>
                                    <input
                                        className="form-control"
                                        placeholder={`Flying From`}
                                    />
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <GiAirplaneArrival />
                                    </span>
                                    <input
                                        className="form-control"
                                        placeholder={`Flying To`}
                                    />
                                </div>
                            </Col>
                            <Col md={2} className="position-relative">
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <GiCalendar />
                                    </span>
                                    <input
                                        readOnly
                                        onClick={() => handleCalendarSelectionDep()}
                                        className="form-control"
                                        placeholder={`Input`}
                                        value={selectionRange.startDate.toLocaleDateString()}
                                    />
                                </div>

                                {depDate &&
                                    <CalendarRange selectionRange={selectionRange} setSelectionRange={setSelectionRange} setSelectDate={setDeptDate}

                                    />
                                }


                            </Col>
                            <Col md={2}>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <GiCalendar />
                                    </span>
                                    <input
                                        readOnly
                                        onClick={() => handleCalendarSelectionArrival()}
                                        className="form-control"
                                        placeholder={`Input`}
                                        value={selectionRange.endDate.toLocaleDateString()}
                                    />
                                    {ARRDate &&
                                        <CalendarRange selectionRange={selectionRange} setSelectionRange={setSelectionRange}
                                            setSelectDate={setARRtDate} />
                                    }
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <FaUserFriends />
                                    </span>
                                    <select className="form-control" placeholder="Travellers">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>GROUP </option>
                                    </select>
                                </div>
                            </Col>
                            <Col md={2}>
                                <button className="btn btn-primary">SEARCH</button>
                            </Col>
                            <Col md={2}>
                                {/* <div className="input-group">
                                    <span className="input-group-text">
                                        <PiSeatLight />
                                    </span>
                                    <input
                                        readOnly
                                        onClick={() => setClassAndTravller(true)}
                                        className="form-control"
                                        placeholder={`Passenger`}
                                    />
                                </div> */}
                                {/* <input
                                    ref={inputRef}
                                    type="text"
                                    readOnly
                                    className="form-control"
                                    placeholder="Click to show dropdown"
                                    onFocus={() => setShowDropdown(true)}
                                    onBlur={() => setTimeout(() => setShowDropdown(false), 200)} // Delayed close for clicks
                                />
                                <CustomDropDown show={showDropdown} position={dropdownPosition} /> */}
                                {/* <CustomDropDown /> */}
                            </Col>
                        </Row>
                    </Tab.Pane>


                    <Tab.Pane eventKey="hotels">
                        <p className="text-muted">This is the Hotels tab content.</p>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </Container >
    );
};

export default Engine;



