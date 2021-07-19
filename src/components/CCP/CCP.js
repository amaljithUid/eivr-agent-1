import { Component } from 'react';
import React,{ useState, useEffect,createRef,useRef } from 'react';
import 'amazon-connect-streams';
import AWS from 'aws-sdk';

// class CCP extends Component {
//   constructor(props) {
//     super(props);
//     this.containerDiv = React.createRef();
//   }
//   componentDidMount() {
//     var ccpURL = `https://schoolguard360.awsapps.com/connect/ccp-v2/`;
//     ccpURL = `${ccpURL}softphone`;
//     // eslint-disable-next-line no-undef
//     connect.core.initCCP(this.containerDiv.current, {
//       ccpUrl: ccpURL,
//       loginPopup: false,
//       softphone: {
//         allowFramedSoftphone: true
//       }
//     });
//     // eslint-disable-next-line no-undef
//     connect.contact(function (contact) {
//       contact.onConnecting(function (c) {
//           var contactID = contact.contactId;
//           const requestOptions = {
//             method: 'GET',
//             headers: {
//               'Content-Type': 'application/json'
//             }
//           };
//           fetch('https://d3l65qxge7dap6.cloudfront.net/connectkube/agent/realTimeTranscript/?contactId=90ead137-083d-4349-8703-a58f4864c5ff', requestOptions)
//             .then(response => response.json())
//             .then(data => {
//               console.log(data);
//           });
          
//           alert(contactID);
//       });
//       contact.onConnected(function (c) {
//           var contactID = contact.contactId;
//       });
//     });
//   }

//   render() {
//     return (
//       <div className="ccp">
//         <div className="containerDiv" ref={this.containerDiv} />
//         <div>
//           right side bar
//         </div>
//       </div>
//     )
//   }
// }

// export default CCP;


function CCP() {
  //const containerDiv = React.createRef();
  const containerDiv = useRef(null);
  useEffect(() => {
    fetchItems();
  }, []);
  const [users, setUsers] = useState([]);
  //const [loading, setLoading] = useState(true);
  const fetchItems = () => {
    var ccpURL = `https://schoolguard360.awsapps.com/connect/ccp-v2/`;
    ccpURL = `${ccpURL}softphone`;
    // eslint-disable-next-line no-undef
    connect.core.initCCP(containerDiv.current, {
      ccpUrl: ccpURL,
      loginPopup: false,
      softphone: {
        allowFramedSoftphone: true
      }
    });
    // eslint-disable-next-line no-undef
    connect.contact(function (contact) {
      contact.onConnecting(function (c) {
          var contactID = contact.contactId;
          alert(contactID);
      });
      contact.onConnected(function (c) {
          var contactID = contact.contactId;
          // const requestOptions = {
          //   method: 'GET',
          //   headers: {
          //     'Content-Type': 'application/json'
          //   }
          // };
          // fetch('http://54.159.204.234:8091/connectkube/agent/?contactId=09462ab4-3a8b-4df6-9fdc-152a636ae97b', requestOptions)
          //   .then(response => response.json())
          //   .then(data => {
          //     console.log(data);
          //   });
          const users = [
            {
              "contactId": "90ead137-083d-4349-8703-a58f4864c5ff",
              "phoneNumber": "8607598008",
              "accountNumber": "6921991334",
              "authenticated": true
            }
          ];
          setUsers(users);
          console.log(users);
          alert(contactID);
      });
    });
  }
  return (
    <div class="master-container">
      <div class="row-child main-layout">
        <div class="connect-widget-box">
                <img src="assests/image-sources/logo.png" alt="" class="logo"></img>
                <div class="connect-widget">
                    <div className="containerDiv" ref={containerDiv} /></div>
                </div>

        </div>
        <div class="dashboard-box">
                <h1><b>EIVR</b>Agent Dashboard</h1>
                <div class="dashboard">
                    <div class="user-details">
                        <div class="details">
                            <span class="icon icon-call-calling"></span>
                            <label for="">Phone Number</label>
                            <h3 class="phone-number">+1 409 234 986</h3>
                        </div>
                        <div class="details">
                            <span class="icon icon-personalcard"></span>
                            <label for="">Contact ID </label>
                            <h3 class="contact-id">000246583</h3>
                        </div>
                        <div class="details">
                            <span class="icon icon-key"></span>
                            <label for="">Authentication</label>
                            <h3 class="auth-id">K456923458GHAN1245</h3>
                        </div>
                        <div class="details">
                            <span class="icon icon-home-hashtag"></span>
                            <label for="">Account Number</label>
                            <h3 class="account-number">2364657892</h3>
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

                    <div class="accordian-box">
                        <div class="accordian">
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
                        </div>

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
  );
}
export default CCP;