import React, { useState } from 'react';
import './Login.css';
import Form from './Form';
import login_screen from '../../components/assets/Images/login-screen.svg';
import RegisterForVaccination from './RegisterForVaccination';
function Login(props) {
    const [registerVacinationForm, setregisterVacinationForm] = useState(false)
    return (
        <div>
            {!registerVacinationForm ?
                <div id="loginform">
                    <div id="otpIcon">
                        <img src={login_screen} alt="otp-icon" height={120} width={120} style={{ marginTop: '-60px', backgroundColor: '#fff' }} />
                    </div>
                    <Form setregisterVacinationForm={setregisterVacinationForm}/>

                </div> :
                <div id="RegisterForm"><RegisterForVaccination setregisterVacinationForm={setregisterVacinationForm} /></div>}
                
        </div>
    )
}

export default Login







