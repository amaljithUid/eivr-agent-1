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
        var ccpURL = `https://nlu-musi.awsapps.com/connect/ccp-v2/`;
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
                fetch(`https://d3rkjm938i3x8s.cloudfront.net/connectkube/agent/callInfo/?contactId=${contactID}`, requestOptions)
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
        <div class="master-container">
            <div class="row-child main-layout">
                <div class="connect-widget-box">
                    <img src={logo} />
                    <div class="connect-widget">
                    <div className="containerDiv ccpcontainer" ref={containerDiv} ></div>
                    </div>
                </div>
                <div class="dashboard-box">
                    <h1><b>EIVR</b>Agent Dashboard</h1>
                    <div class="dashboard">
                        {
                            <div class="user-details">
                              <div class="details">
                                  <span class="icon icon-call-calling"></span>
                                  <label for="">Phone Number</label>
                                  <h3 class="phone-number">{contactDetails.phoneNumber?contactDetails.phoneNumber:"--"}</h3>
                              </div>
                              <div class="details">
                                  <span class="icon icon-personalcard"></span>
                                  <label for="">Contact ID </label>
                                  <h3 class="contact-id">{contactDetails.contactId?contactDetails.contactId:"--"}</h3>
                              </div>
                              <div class="details">
                                  <span class="icon icon-key"></span>
                                  <label for="">Authentication</label>
                                  <h3 class="auth-id">{contactDetails.authenticated?"Yes":"--"}</h3>
                              </div>
                              <div class="details">
                                  <span class="icon icon-home-hashtag"></span>
                                  <label for="">Account Number</label>
                                  <h3 class="account-number">{contactDetails.accountNumber?contactDetails.accountNumber:"--"}</h3>
                              </div>
                              <div class="system-helth">
                                  <span class="icon icon-system-happy"></span>
                                  <label for="">Sentiment Analysis</label>
                                  <div class="health-progress">
                                      <span class="active-happy"></span><span
                                          class="active-happy"></span><span></span><span></span><span></span>
                                      <h5 class="happy">Good</h5>
                                  </div>
                              </div>
                            </div>
                        }
                        <div class="accordian-box">
                            <Example/>
                            {/* <div class="accordian">
                                <div class="accordian-head">
                                    <span class="icon icon-briefcase"></span>

                                    <h5><span>Account Details</span></h5>
                                    <button class="accordian-trigger">
                                        <span class="icon icon-arrow-square-down"></span>
                                    </button>
                                </div>
                                <div class="accordian-content">
                                    This will be open
                                </div>
                            </div>
                            <div class="accordian">
                                <div class="accordian-head">
                                    <span class="icon icon-user-tag"></span>
                                    <h5><span>Customer Details</span></h5>
                                    <button class="accordian-trigger">
                                        <span class="icon icon-arrow-square-down"></span>
                                    </button>
                                </div>
                                <div class="accordian-content">
                                    This will be open
                                </div>
                            </div>
                            <div class="accordian">
                                <div class="accordian-head">
                                    <span class="icon icon-voice-cricle"></span>
                                    <h5><span>Call TraceRecord</span></h5>
                                    <button class="accordian-trigger">
                                        <span class="icon icon-arrow-square-down"></span>
                                    </button>
                                </div>
                                <div class="accordian-content">
                                    This will be open
                                </div>
                            </div>
                            <div class="accordian">
                                <div class="accordian-head">
                                    <span class="icon icon-receipt-2-1"></span>
                                    <h5><span>Caller History</span></h5>
                                    <button class="accordian-trigger">
                                        <span class="icon icon-arrow-square-down"></span>
                                    </button>
                                </div>
                                <div class="accordian-content">
                                    This will be open
                                </div>
                            </div>
                            <div class="accordian">
                                <div class="accordian-head">
                                    <span class="icon icon-receipt-edit"></span>
                                    <h5><span>Real Time Transcript</span></h5>
                                    <button class="accordian-trigger">
                                        <span class="icon icon-arrow-square-down"></span>
                                    </button>
                                </div>
                                <div class="accordian-content">
                                    This will be open
                                </div>
                            </div> */}

                        </div>



                    </div>

                    <div class="service-call-box">
                        <button>
                            <span class="icon icon-keyboard-open"></span>
                            <label for="">CCB CRM</label>
                        </button>
                        <button>
                            <span class="icon icon-bookmark"></span>
                            <label for="">Knowledge Center</label>
                        </button>
                        <button class="bind-data">
                            <span class="icon icon-bookmark"></span>
                            <label for="">Bind Data</label>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CCP;