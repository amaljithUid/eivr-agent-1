import React, { Component, useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Example = (props) => {
    const callerHistoryArray = props.callerhistory;
    const callTraceRecordArray = props.calltracerecord;
    const [accountNumber, setAccountNumber] = useState('');
    const [zipCode, setzipCode] = useState('');
    const updateAccountNumber = e => {
        setAccountNumber(e.target.value)
    }
    const updateZipCode = e => {
        setzipCode(e.target.value)
    }
    return (

        <div>
            <Accordion>
                <Card className="accordian" >
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="accordian-head">
                        <span className="icon icon-briefcase"></span>
                        <h5><span>Account Details</span></h5>
                        <button className="accordian-trigger">
                            <span className="icon icon-arrow-square-down"></span>
                        </button>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            {props.isUserAuth
                                ? <div className="fetch-data">
                                    <div className="data-details">
                                        <label for="">Account Number</label>
                                        <h3>{props.accountdetails.accountNumber ? props.accountdetails.accountNumber : '--'}</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Amount Due</label>
                                        <h3>{props.accountdetails.amountDue ? props.accountdetails.amountDue : '--'}</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Past Amount Due</label>
                                        <h3>{props.accountdetails.pastAmountDue ? props.accountdetails.pastAmountDue : '--'}</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Current Amount Due</label>
                                        <h3>{props.accountdetails.currentAmountDue ? props.accountdetails.currentAmountDue : '--'}</h3>
                                    </div>
                                </div>
                                : <div>
                                    <form onSubmit={(event) => props.accountLookUp(event, accountNumber, zipCode)}>
                                    <div className="fetch-data form">
                                        <div className="data-details">
                                            <label>Account Number</label>
                                            <input type="text" value={accountNumber} onChange={updateAccountNumber} name="accountno" className="input-text" ></input>
                                        </div>
                                        <div className="data-details">
                                            <label>Zip Code</label>
                                            <input type="text" value={zipCode} onChange={updateZipCode} name="accountno" className="input-text"></input>
                                        </div>

                                        <div className="data-details button-box">
                                            <button type="submit" value="submit" className="submit-button">Submit</button>
                                            <span>Get your Authentication</span>
                                        </div>
                                    </div>

                                    </form>
                                </div>
                            }

                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="accordian" >
                    <Accordion.Toggle as={Card.Header} eventKey="1" className="accordian-head">
                        <span className="icon icon-user-tag"></span>
                        <h5><span>Customer Details</span></h5>
                        <button className="accordian-trigger">
                            <span className="icon icon-arrow-square-down"></span>
                        </button>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <div className="fetch-data">
                                <div className="data-details">
                                    <label for="">Account Status</label>
                                    <h3>{props.customerdetails.accountStatus ? props.customerdetails.accountStatus : '--'}</h3>
                                </div>
                                <div className="data-details">
                                    <label for="">Premise Info</label>
                                    <h3>{props.customerdetails.premiseInfo ? props.customerdetails.premiseInfo : '--'}</h3>
                                </div>
                                <div className="data-details">
                                    <label for="">Full Name</label>
                                    <h3>{props.customerdetails.fullName ? props.customerdetails.fullName : '--'}</h3>
                                </div>
                                <div className="data-details">
                                    <label for="">Customer Class</label>
                                    <h3>{props.customerdetails.customerClass ? props.customerdetails.customerClass : '--'}</h3>
                                </div>
                            </div>

                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="accordian" >
                    <Accordion.Toggle as={Card.Header} eventKey="2" className="accordian-head">
                        <span className="icon icon-voice-cricle"></span>
                        <h5><span>Call TraceRecord</span></h5>
                        <button className="accordian-trigger">
                            <span className="icon icon-arrow-square-down"></span>
                        </button>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <div className="fetch-data trace-records">
                                {
                                    callTraceRecordArray.map(item => (
                                        <div className="data-details">
                                            <span className="icon icon-archive-book"></span>
                                            <p>{item}</p>
                                        </div>
                                    ))
                                }
                            </div>

                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="accordian" >
                    <Accordion.Toggle as={Card.Header} eventKey="3" className="accordian-head">
                        <span className="icon icon-receipt-2-1"></span>
                        <h5><span>Caller History</span></h5>
                        <button className="accordian-trigger">
                            <span className="icon icon-arrow-square-down"></span>
                        </button>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            {
                                callerHistoryArray.map(item => (
                                    <div className="fetch-data">
                                        <div className="data-details">
                                            <label for="">Phone Number</label>
                                            <h3>{item.phoneNumber ? item.phoneNumber : '--'}</h3>
                                        </div>
                                        <div className="data-details">
                                            <label for="">timestamp</label>
                                            <h3>{item.timestamp ? item.timestamp : '--'}</h3>
                                        </div>
                                        {/* <div className="data-details">
                                            <label for="">callDuration</label>
                                            <h3>{item.callDuration ? item.callDuration : '--'}</h3>
                                        </div> */}
                                        <div className="data-details">
                                            <label for="">contactId</label>
                                            <h3>{item.contactId ? item.contactId : '--'}</h3>
                                        </div>
                                        {/* <div className="data-details">
                                            <label for="">accountNo</label>
                                            <h3>{item.accountNo ? item.accountNo : '--'}</h3>
                                        </div> */}
                                        {/* <div className="data-details">
                                            <label for="">authenticated</label>
                                            <h3>{item.authenticated}</h3>
                                        </div> */}
                                    </div>
                                ))
                            }
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="accordian" >
                    <Accordion.Toggle as={Card.Header} eventKey="4" className="accordian-head">
                        <span className="icon icon-receipt-edit"></span>
                        <h5><span>Real Time Transcript</span></h5>
                        <button className="accordian-trigger">
                            <span className="icon icon-arrow-square-down"></span>
                        </button>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="4">
                        <Card.Body>
                            <div className="fetch-data chat-box">
                                {
                                    props.realtimetranscript.map(data => (
                                        <div className="data-details">
                                            {
                                                data.Transcript.ParticipantRole == 'AGENT' ? <div className="agent-chat-box"><span className='agent-role'>{data.Transcript.ParticipantRole} :</span><span>{data.Transcript.Content}</span></div> : <div className="user-chat-box"><span className='user-role'>{data.Transcript.ParticipantRole} :</span><span>{data.Transcript.Content}</span></div>
                                            }
                                        </div>
                                    ))
                                }
                            </div>

                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>

    );
}

export default Example;