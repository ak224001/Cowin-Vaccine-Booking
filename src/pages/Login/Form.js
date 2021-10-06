import React, { useState } from 'react';
import { Link, Link as RouterLink, useLocation } from 'react-router-dom';
import './Login.css';
import { generateOTP, confirmOTP } from '../../components/apis/data';
import RegisterForVaccination from './RegisterForVaccination';

function Form(props) {

    const [mobileNo, setmobileNo] = useState('');
    const [error, seterror] = useState('');
    const [txnId, settxnId] = useState('');
    const [gotOtp, setgotOtp] = useState(false);
    const [OTP, setOTP] = useState('');
    const [OTPVerified, setOTPVerified] = useState(false);


    const handleClick = () => {
        let formData = {};
        if (mobileNo) {
            if (mobileNo.length == 10) {
                formData['mobile'] = mobileNo;
                formData['secret'] = "U2FsdGVkX1+ihNjHqkRi/pR2hJYMtEBaDKOYlb1mlnuoiObblGBYA7Y7aCAv+Gq+qzFijW7aPa4SIBcXfTcz1w=="
                seterror("");
                generateOTP(postGettingOTP, formData)
            } else {
                seterror("Mobile number is not valid");
            }

        } else {
            seterror("Please Enter mobile number");
        }

    }

    const postGettingOTP = (response) => {
        if (response.data.success) {
            alert('Notification has been sent to your mobile');
            settxnId(response.data.data.txnId);
            setgotOtp(true)
        }
    }

    const handleOTPClick = () => {
        let formData = {};
        if (OTP) {
            formData['otp'] = OTP;
            formData['txnId'] = txnId;
            confirmOTP(postConfirmOTP, formData);
        } else {
            seterror("Please Enter OTP");
        }
    }
    const postConfirmOTP = (response) => {
        console.log(response);
        if (response.data.success) {
            setOTPVerified(true);
            props.setregisterVacinationForm(true)
        } else {
            alert(response.data.message)
        }
    }




    return (

        <>
            {!OTPVerified ?
                <div>
                    {!gotOtp ?
                        <div>
                            <FormHeader title="Register or Sign In for Vaccination" />
                            <div class="row">
                                <label>{"Mobile Number"}</label>
                                <input type="number" id="txtMobId" placeholder="Enter your Mobile number" value={mobileNo} onChange={(event) => setmobileNo(event.target.value)} />
                            </div>
                            <span className="error">{error}</span>
                            <div id="button" class="row">
                                <button onClick={handleClick}>{"Get OTP"}</button>
                            </div>
                            
                        </div> :
                        <div>
                            <FormHeader title="OTP Verification" />

                            <div class="row">
                                <label>{"OTP"}</label>
                                <input type="number" id="txtMobId" placeholder="Enter OTP" value={OTP} onChange={(event) => setOTP(event.target.value)} />
                            </div>
                            {/* <span className="error">{error}</span> */}
                            <div id="button" class="row">
                                <button onClick={handleOTPClick}>{"Verify & Proceed"}</button>
                            </div>
                        </div>
                    
                    }
                </div> : <div><RegisterForVaccination /></div>}
                
                
        </>

    )
}

const FormHeader = props => (
    <h6 id="headerTitle">{props.title}</h6>
);

export default Form
