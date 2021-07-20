import { Component } from 'react';
import React, { useState, useEffect,useRef } from 'react';
import 'amazon-connect-streams';
import Example from './accordion'
import logo from '../../assets/image-sources/logo.png';


function CCP() {
    const containerDiv = useRef(null);
    useEffect(() => {
        fetchItems();
    }, []);
    const [users, setUsers] = useState([]);
    const [contactDetails, secontactDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const fetchItems = () => {
        var ccpURL = `https://schoolguard360.awsapps.com/connect/ccp-v2/`;
        ccpURL = `${ccpURL}softphone`;
        // eslint-disable-next-line no-undef
        connect.core.initCCP(containerDiv.current, {
            ccpUrl: ccpURL,
            loginPopup: true,
            softphone: {
                allowFramedSoftphone: true,
                disableRingtone: false
            }
        });
        // eslint-disable-next-line no-undef
        connect.contact(function (contact) {
            contact.onConnecting(function (c) {
                var contactID = contact.contactId;
            });
            contact.onConnected(function (c) {
                var contactID = contact.contactId;
                const requestOptions = {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                };
                fetch('https://d3l65qxge7dap6.cloudfront.net/connectkube/agent/callInfo/?contactId=09462ab4-3a8b-4df6-9fdc-152a636ae97b', requestOptions)
                  .then(response => response.json())
                  .then(data => {
                    console.log(data);
                    secontactDetails(data);
                });
                // const details ={
                //   "contactId": "90ead137-083d-4349-8703-a58f4864c5ff",
                //   "phoneNumber": "86075980081234",
                //   "accountNumber": "6921991334",
                //   "authenticated": true
                // }
                // secontactDetails(details);
                // setLoading(false);
            });
        });
    }
    return (
        <div className="master-container">
            <div className="row-child main-layout">
                <div className="connect-widget-box">
                    <img src={logo} />
                    <div className="connect-widget">
                    <div className="containerDiv ccpcontainer" ref={containerDiv} ></div>
                    </div>
                </div>
                <div className="dashboard-box">
                    <h1><b>EIVR</b>Agent Dashboard</h1>
                    <div className="dashboard">
                        {
                            <div className="user-details">
                              <div className="details">
                                  <span className="icon icon-call-calling"></span>
                                  <label for="">Phone Number</label>
                                  <h3 className="phone-number">{contactDetails.phoneNumber?contactDetails.phoneNumber:"--"}</h3>
                              </div>
                              <div className="details">
                                  <span className="icon icon-personalcard"></span>
                                  <label for="">Contact ID </label>
                                  <h3 className="contact-id">{contactDetails.contactId?contactDetails.contactId:"--"}</h3>
                              </div>
                              <div className="details">
                                  <span className="icon icon-key"></span>
                                  <label for="">Authentication</label>
                                  <h3 className="auth-id">{contactDetails.authenticated?"Yes":"--"}</h3>
                              </div>
                              <div className="details">
                                  <span className="icon icon-home-hashtag"></span>
                                  <label for="">Account Number</label>
                                  <h3 className="account-number">{contactDetails.accountNumber?contactDetails.accountNumber:"--"}</h3>
                              </div>
                              <div className="system-helth">
                                  <span className="icon icon-system-happy"></span>
                                  <label for="">Sentiment Analysis</label>
                                  <div className="health-progress">
                                      <span className="active-happy"></span><span
                                          className="active-happy"></span><span></span><span></span><span></span>
                                      <h5 className="happy">Good</h5>
                                  </div>
                              </div>
                            </div>
                        }
                        <div className="accordian-box">
                            <Example/>
                            {/* <div className="accordian">
                                <div className="accordian-head">
                                    <span className="icon icon-briefcase"></span>

                                    <h5><span>Account Details</span></h5>
                                    <button className="accordian-trigger">
                                        <span className="icon icon-arrow-square-down"></span>
                                    </button>
                                </div>
                                <div className="accordian-content">
                                    This will be open
                                </div>
                            </div>
                            <div className="accordian">
                                <div className="accordian-head">
                                    <span className="icon icon-user-tag"></span>
                                    <h5><span>Customer Details</span></h5>
                                    <button className="accordian-trigger">
                                        <span className="icon icon-arrow-square-down"></span>
                                    </button>
                                </div>
                                <div className="accordian-content">
                                    This will be open
                                </div>
                            </div>
                            <div className="accordian">
                                <div className="accordian-head">
                                    <span className="icon icon-voice-cricle"></span>
                                    <h5><span>Call TraceRecord</span></h5>
                                    <button className="accordian-trigger">
                                        <span className="icon icon-arrow-square-down"></span>
                                    </button>
                                </div>
                                <div className="accordian-content">
                                    This will be open
                                </div>
                            </div>
                            <div className="accordian">
                                <div className="accordian-head">
                                    <span className="icon icon-receipt-2-1"></span>
                                    <h5><span>Caller History</span></h5>
                                    <button className="accordian-trigger">
                                        <span className="icon icon-arrow-square-down"></span>
                                    </button>
                                </div>
                                <div className="accordian-content">
                                    This will be open
                                </div>
                            </div>
                            <div className="accordian">
                                <div className="accordian-head">
                                    <span className="icon icon-receipt-edit"></span>
                                    <h5><span>Real Time Transcript</span></h5>
                                    <button className="accordian-trigger">
                                        <span className="icon icon-arrow-square-down"></span>
                                    </button>
                                </div>
                                <div className="accordian-content">
                                    This will be open
                                </div>
                            </div> */}

                        </div>



                    </div>

                    <div className="service-call-box">
                        <button>
                            <span className="icon icon-keyboard-open"></span>
                            <label for="">CCB CRM</label>
                        </button>
                        <button>
                            <span className="icon icon-bookmark"></span>
                            <label for="">Knowledge Center</label>
                        </button>
                        {/* <button className="bind-data">
                            <span className="icon icon-bookmark"></span>
                            <label for="">Bind Data</label>
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CCP;