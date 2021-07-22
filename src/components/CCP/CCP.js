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
    const [contactDetails, setContactDetails] = useState({});
    const [accountDetails, setAccountDetails] = useState({});
    const [customerDetails, setCustomerDetails] = useState({});
    const [callTraceRecord, setCallTraceRecord] = useState([]);
    const [callerHistory, setCallerHistory] = useState([]);
    const [realtimeTranscript, setRealtimeTranscript] = useState(true);
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
    const [contactId, setcontactId] = useState('');
    function handleAccountLookup(event,account,zip){
        event.preventDefault();
        console.log(account,zip);
        const requestOptions = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
        };
        fetch(`https://d3rkjm938i3x8s.cloudfront.net/connectkube/agent/accountLookup/?account=${account}&contactId=${contactId}&zipcode=${zip}`, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setAccountDetails(data.accountDetailResponse);
            setCustomerDetails(data.customerDetailResponse);
         });
    }
    const fetchItems = () => {
        var ccpURL = `https://nlu-musi.awsapps.com/connect/ccp-v2/`;
        ccpURL = `${ccpURL}softphone`;
        const accountDetailResponse ={
            "accountNumber": "1463062238",
            "amountDue": "-$50.40",
            "pastAmountDue": "$0.00",
            "currentAmountDue": "$0.00"
        }
        //setAccountDetails(accountDetailResponse);

        const callerHistoryData = [
            {
                "phoneNumber": "8607598008",
                "timestamp": "2021-07-18T15:16:56.000Z",
                "callDuration": "0",
                "contactId": "6f745959-5f58-4228-a0ec-5a2a4f8f753a",
                "accountNo": "6921991334",
                "authenticated": true
            },
            {
                "phoneNumber": "8607598008",
                "timestamp": "2021-07-18T15:16:56.000Z",
                "callDuration": "0",
                "contactId": "6f745959-5f58-4228-a0ec-5a2a4f8f753a",
                "accountNo": "6921991334",
                "authenticated": true
            },
            {
                "phoneNumber": "8607598008",
                "timestamp": "2021-07-18T15:16:56.000Z",
                "callDuration": "0",
                "contactId": "6f745959-5f58-4228-a0ec-5a2a4f8f753a",
                "accountNo": "6921991334",
                "authenticated": true
            },
            {
                "phoneNumber": "8607598008",
                "timestamp": "2021-07-18T15:16:56.000Z",
                "callDuration": "0",
                "contactId": "6f745959-5f58-4228-a0ec-5a2a4f8f753a",
                "accountNo": "6921991334",
                "authenticated": true
            },
            {
                "phoneNumber": "8607598008",
                "timestamp": "2021-07-18T15:16:56.000Z",
                "callDuration": "0",
                "contactId": "6f745959-5f58-4228-a0ec-5a2a4f8f753a",
                "accountNo": "6921991334",
                "authenticated": true
            },
            {
                "phoneNumber": "8607598008",
                "timestamp": "2021-07-18T15:16:56.000Z",
                "callDuration": "0",
                "contactId": "6f745959-5f58-4228-a0ec-5a2a4f8f753a",
                "accountNo": "6921991334",
                "authenticated": true
            },
            {
                "phoneNumber": "8607598008",
                "timestamp": "2021-07-18T15:16:56.000Z",
                "callDuration": "0",
                "contactId": "6f745959-5f58-4228-a0ec-5a2a4f8f753a",
                "accountNo": "6921991334",
                "authenticated": true
            },
            {
                "phoneNumber": "8607598008",
                "timestamp": "2021-07-18T15:16:56.000Z",
                "callDuration": "0",
                "contactId": "6f745959-5f58-4228-a0ec-5a2a4f8f753a",
                "accountNo": "6921991334",
                "authenticated": true
            },
            {
                "phoneNumber": "8607598008",
                "timestamp": "2021-07-18T15:16:56.000Z",
                "callDuration": "0",
                "contactId": "6f745959-5f58-4228-a0ec-5a2a4f8f753a",
                "accountNo": "6921991334",
                "authenticated": true
            },
            {
                "phoneNumber": "8607598008",
                "timestamp": "2021-07-18T15:16:56.000Z",
                "callDuration": "0",
                "contactId": "6f745959-5f58-4228-a0ec-5a2a4f8f753a",
                "accountNo": "6921991334",
                "authenticated": true
            },
            {
                "phoneNumber": "8607598008",
                "timestamp": "2021-07-18T15:16:56.000Z",
                "callDuration": "0",
                "contactId": "6f745959-5f58-4228-a0ec-5a2a4f8f753a",
                "accountNo": "6921991334",
                "authenticated": true
            },
            {
                "phoneNumber": "8607598008",
                "timestamp": "2021-07-18T15:16:56.000Z",
                "callDuration": "0",
                "contactId": "6f745959-5f58-4228-a0ec-5a2a4f8f753a",
                "accountNo": "6921991334",
                "authenticated": true
            },
            {
                "phoneNumber": "8607598008",
                "timestamp": "2021-07-18T15:16:56.000Z",
                "callDuration": "0",
                "contactId": "6f745959-5f58-4228-a0ec-5a2a4f8f753a",
                "accountNo": "6921991334",
                "authenticated": true
            },
            {
                "phoneNumber": "8607598008",
                "timestamp": "2021-07-18T15:16:56.000Z",
                "callDuration": "0",
                "contactId": "6f745959-5f58-4228-a0ec-5a2a4f8f753a",
                "accountNo": "6921991334",
                "authenticated": true
            },
            {
                "phoneNumber": "8607598008",
                "timestamp": "2021-07-18T15:16:56.000Z",
                "callDuration": "0",
                "contactId": "6f745959-5f58-4228-a0ec-5a2a4f8f753a",
                "accountNo": "6921991334",
                "authenticated": true
            },
            {
                "phoneNumber": "8607598008",
                "timestamp": "2021-07-18T15:16:56.000Z",
                "callDuration": "0",
                "contactId": "6f745959-5f58-4228-a0ec-5a2a4f8f753a",
                "accountNo": "6921991334",
                "authenticated": true
            },
            {
                "phoneNumber": "8607598008",
                "timestamp": "2021-07-18T15:16:56.000Z",
                "callDuration": "0",
                "contactId": "6f745959-5f58-4228-a0ec-5a2a4f8f753a",
                "accountNo": "6921991334",
                "authenticated": true
            },
            {
                "phoneNumber": "8607598008",
                "timestamp": "2021-07-18T15:16:56.000Z",
                "callDuration": "0",
                "contactId": "6f745959-5f58-4228-a0ec-5a2a4f8f753a",
                "accountNo": "6921991334",
                "authenticated": true
            },
            {
                "phoneNumber": "8607598008",
                "timestamp": "2021-07-18T15:16:56.000Z",
                "callDuration": "0",
                "contactId": "6f745959-5f58-4228-a0ec-5a2a4f8f753a",
                "accountNo": "6921991334",
                "authenticated": true
            },
            {
                "phoneNumber": "8607598008",
                "timestamp": "2021-07-18T15:16:56.000Z",
                "callDuration": "0",
                "contactId": "6f745959-5f58-4228-a0ec-5a2a4f8f753a",
                "accountNo": "6921991334",
                "authenticated": true
            },
            {
                "phoneNumber": "8607598008",
                "timestamp": "2021-07-18T15:16:56.000Z",
                "callDuration": "0",
                "contactId": "6f745959-5f58-4228-a0ec-5a2a4f8f753a",
                "accountNo": "6921991334",
                "authenticated": true
            },
            {
                "phoneNumber": "8607598008",
                "timestamp": "2021-07-18T15:16:56.000Z",
                "callDuration": "0",
                "contactId": "6f745959-5f58-4228-a0ec-5a2a4f8f753a",
                "accountNo": "6921991334",
                "authenticated": true
            },
            {
                "phoneNumber": "8607598008",
                "timestamp": "2021-07-18T15:16:56.000Z",
                "callDuration": "0",
                "contactId": "6f745959-5f58-4228-a0ec-5a2a4f8f753a",
                "accountNo": "6921991334",
                "authenticated": true
            },
            {
                "phoneNumber": "8607598008",
                "timestamp": "2021-07-18T15:16:56.000Z",
                "callDuration": "0",
                "contactId": "6f745959-5f58-4228-a0ec-5a2a4f8f753a",
                "accountNo": "6921991334",
                "authenticated": true
            },
            {
                "phoneNumber": "8607598008",
                "timestamp": "2021-07-18T15:16:56.000Z",
                "callDuration": "0",
                "contactId": "6f745959-5f58-4228-a0ec-5a2a4f8f753a",
                "accountNo": "6921991334",
                "authenticated": true
            },
            {
                "phoneNumber": "8607598008",
                "timestamp": "2021-07-18T15:16:56.000Z",
                "callDuration": "0",
                "contactId": "6f745959-5f58-4228-a0ec-5a2a4f8f753a",
                "accountNo": "6921991334",
                "authenticated": true
            }
        ]
        //setCallerHistory(callerHistoryData);
        const calltraceRecordArray = [
            "START - PHONE CALL STARTED , scenario - regular, country code : +1 , Phone Event Time : 2021-07-16T11:19:06.000Z",
            "PHONEPROCESSING - phone processing complete , Phone Event Time : 2021-07-16T11:19:08.000Z",
            "ACCOUNTPROCESSING - account processing complete , Phone Event Time : 2021-07-16T11:19:10.000Z",
            "PHONELOOKUP - accountCount - 1 , Phone Event Time : 2021-07-16T11:19:21.000Z",
            "ACCOUNTLOOKUP - enteredAccount - 6921991334 , result output success , Phone Event Time : 2021-07-16T11:19:38.000Z",
            "ACCOUNTPROCESSING - account processing complete , Phone Event Time : 2021-07-16T11:19:40.000Z",
            "ACCOUNTCONFIRM - enteredAccount - 6921991334 , result output success , Phone Event Time : 2021-07-16T11:19:49.000Z",
            "ZIPCODESAVE - selectedZip - 94121 ,enteredZip - 94121 ,result output success , Phone Event Time : 2021-07-16T11:20:08.000Z",
            "MENUSELECTION - selectedAccount - 6921991334 ,selectedZip - 94121 ,result output - mainMenuFlow , Phone Event Time : 2021-07-16T11:20:09.000Z",
            "MAINMENUSTART - main menu start , Phone Event Time : 2021-07-16T11:20:10.000Z",
            "MAINMENUSTART - main menu start , Phone Event Time : 2021-07-16T11:20:44.000Z"
        ]
        //setCallTraceRecord(calltraceRecordArray);


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
                    setContactDetails(data);
                    if(!data.authenticated){
                        setcontactId(data.contactId);
                        setIsUserAuthenticated(false);
                    }else{
                        setIsUserAuthenticated(true);
                        fetch(`https://d3rkjm938i3x8s.cloudfront.net/connectkube/agent/accountDetails/?contactId=${data.contactId}`, requestOptions)
                        .then(response => response.json())
                        .then(data => {
                          console.log(data);
                          setAccountDetails(data);
                       });
                       fetch(`https://d3rkjm938i3x8s.cloudfront.net/connectkube/agent/customerDetails/?contactId=${data.contactId}`, requestOptions)
                        .then(response => response.json())
                        .then(data => {
                          console.log(data);
                          setCustomerDetails(data);
                       });
                    }
                    fetch(`https://d3rkjm938i3x8s.cloudfront.net/connectkube/agent/callTraceRecord/?contactId=${data.contactId}`, requestOptions)
                     .then(response => response.json())
                     .then(data => {
                       console.log(data);
                       setCallTraceRecord(data);
                    });
                    fetch(`https://d3rkjm938i3x8s.cloudfront.net/connectkube/agent/callerHistory/?contactId=${data.contactId}&phoneNumber=${data.phoneNumber}`, requestOptions)
                    .then(response => response.json())
                    .then(data => {
                      console.log(data);
                      setCallerHistory(data);
                    });
                     
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
                            <Example accountLookUp={handleAccountLookup} isUserAuth={isUserAuthenticated} callerhistory={callerHistory} accountdetails={accountDetails} customerdetails={customerDetails} calltracerecord={callTraceRecord} realtimetranscript={realtimeTranscript}/>
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
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CCP;