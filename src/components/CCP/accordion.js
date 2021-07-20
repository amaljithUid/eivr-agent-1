import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export class Example extends Component {
    render() {
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

                                <div className="fetch-data">

                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>


                                </div>

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
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
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
                                <div className="fetch-data">

                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>


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
                            <Card.Body><div className="fetch-data">

                                <div className="data-details">
                                    <label for="">Data label</label>
                                    <h3>Data fetch here</h3>
                                </div>
                                <div className="data-details">
                                    <label for="">Data label</label>
                                    <h3>Data fetch here</h3>
                                </div>
                                <div className="data-details">
                                    <label for="">Data label</label>
                                    <h3>Data fetch here</h3>
                                </div>
                                <div className="data-details">
                                    <label for="">Data label</label>
                                    <h3>Data fetch here</h3>
                                </div>
                                <div className="data-details">
                                    <label for="">Data label</label>
                                    <h3>Data fetch here</h3>
                                </div>
                                <div className="data-details">
                                    <label for="">Data label</label>
                                    <h3>Data fetch here</h3>
                                </div>
                                <div className="data-details">
                                    <label for="">Data label</label>
                                    <h3>Data fetch here</h3>
                                </div>
                                <div className="data-details">
                                    <label for="">Data label</label>
                                    <h3>Data fetch here</h3>
                                </div>


                            </div>
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
                                <div className="fetch-data">

                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>
                                    <div className="data-details">
                                        <label for="">Data label</label>
                                        <h3>Data fetch here</h3>
                                    </div>


                                </div>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>



                </Accordion>
            </div>

        );
    }
}

export default Example;