import React, {useEffect, useRef, useState} from 'react';
import {IonCol, IonContent, IonLoading, IonPage, IonRow} from "@ionic/react";
import HeaderWithoutLogin from "../components/HeaderWithoutLogin";
import scrn4 from "../theme/images/scrn-3.png";
import {useDispatch,useSelector} from "react-redux";
import {actionToSendOtpForLogin, actionToVerifyLoginUserOtp} from "../redux/CommonAction";
import {USER_GET_OTP_REQUEST_FAIL} from "../redux/CommonConstants";
import {countries as countriesList} from 'countries-list';

export default function LoginPage(){
    const [otp,setOtp] = useState('');
    const userAuthDetail = useSelector((state) => state.userAuthDetail);
    const loginFormError = useSelector((state) => state.signupSigninFormError);
    const userOtpDetails = useSelector((state) => state.userOtpDetails);
    const [phone,setPhone] = useState('');
    const [countries, setCountries] = useState([]);
    const [timer, setTimer] = useState(60);
    const [isOtpExpired, setIsOtpExpired] = useState(true);
    const [phoneError,setPhoneError] = useState(false);
    const [phoneErrorMessage,setPhoneErrorMessage] = useState('');
    const [otpError,setOtpError] = useState(false);
    const [otpErrorMessage,setOtpErrorMessage] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(
        {
            code: "IN",
            mobileCode: 91,
            name: "India"
        }
    );
    const dispatch = useDispatch();
    const otpInterval = useRef(null);


    const onChangePhoneNumber = (value) => {
        if(value?.length <= 10 && !isNaN(value)) {
            setPhone(value);
        }
    }

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const callFunctionToSendOtpTimeInterval = ()=>{
        setIsOtpExpired(false);
        otpInterval.current = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer <= 1) {
                    clearInterval(otpInterval.current);
                    setIsOtpExpired(true); // OTP expired
                    dispatch({ type: USER_GET_OTP_REQUEST_FAIL, payload: {}});
                    return 0;
                }
                return prevTimer - 1;
            });
        }, 1000);
    }

    const callFunctionToSendOtp = ()=>{
        const isValidate = validateFields('get otp');
        if (isValidate){
            dispatch(actionToSendOtpForLogin(phone,callFunctionToSendOtpTimeInterval))
        }
    }
    const validateFields = (action) =>{
        let isFormValid = true;
        setPhoneError(false);
        setOtpError(false);
        setPhoneErrorMessage('');
        setOtpErrorMessage('');
        if (phone.trim() === '') {
            isFormValid = false;
            setPhoneErrorMessage('Phone number is required');
            setPhoneError(true);
        } else if (!/^\d{10}$/.test(phone)) {
            isFormValid = false;
            setPhoneErrorMessage('Phone number must be 10 digits');
            setPhoneError(true);
        }
        if (action === 'login'){
            if (otp.trim() === ''){
                isFormValid = false;
                setOtpErrorMessage('OTP is required');
                setOtpError(true);
            }
        }
        return isFormValid;
    }

    useEffect(()=>{
        setPhoneError(false);
        setOtpErrorMessage('');
        setOtpError(false);
        // Convert the countries object into an array
        const countriesArray = Object.entries(countriesList).map(([code, details]) => ({
            code,
            name: details.name,
            mobileCode: details.phone[0],
        }));

        setCountries(countriesArray);
    },[])

    const callFunctionToValidateOtpAndLoginUser = ()=>{
        const isValidate = validateFields('login');
        if(isValidate) {
            dispatch(actionToVerifyLoginUserOtp(phone, otp))
        }
    }

    useEffect(()=>{
        if (loginFormError?.error && loginFormError?.message){
            if (loginFormError?.error === 'phone'){
                setPhoneError(true);
                setPhoneErrorMessage(loginFormError?.message);
            }
            if (loginFormError?.error === 'otp'){
                setOtpError(true);
                setOtpErrorMessage(loginFormError?.message);
            }
        }else{
            setPhoneError(false);
            setPhoneErrorMessage('');
        }
    },[loginFormError])

    return(
        <IonPage>
            <HeaderWithoutLogin/>
            <IonContent>
                <section className="login-page">
                    <div className="signup-login">
                        <div className="sl-slider-caro">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0"
                                        className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item single-sl-slide active">
                                        <img className="d-block w-100" src={scrn4} alt="First slide"/>
                                    </div>
                                    <div className="carousel-item single-sl-slide">
                                        <img className="d-block w-100" src={scrn4} alt="Second slide"/>
                                    </div>
                                    <div className="carousel-item single-sl-slide">
                                        <img className="d-block w-100" src={scrn4} alt="Third slide"/>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                                   data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                                   data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        <div className="sl-form-wrap">
                            <div className="content-box">
                                <h2>Login Account</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sedo<br/>
                                    eiusmod tempor incididunt dolore.
                                </p>
                            </div>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Phone Number</label>
                                    <div className={"row"}>
                                        <div className={"col-3"}>
                                            <select className="form-control"
                                                    value={selectedCountry.mobileCode}
                                                    onChange={handleCountryChange}>
                                                {countries.map(country => (
                                                    <option key={country.code} value={country.mobileCode}>
                                                        +{country.mobileCode}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className={"col-9"}>
                                            <input className="form-control"
                                                   onChange={(e) => onChangePhoneNumber(e.target.value)}
                                                   value={phone}
                                                   placeholder={"Enter Phone Number"}
                                                   type={"text"}
                                            />
                                        </div>
                                    </div>
                                    {phoneError && <div className={"row"}>
                                        <div className={"col"}>
                                            {phoneError && <p className="error">{phoneErrorMessage}</p>}
                                        </div>
                                    </div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">OTP</label>
                                    <div className={"row"}>
                                        <div className={"col-9"}>
                                            <input className={"form-control"}
                                                   value={otp}
                                                   onChange={(e)=>setOtp(e.target.value)}
                                                   placeholder={"Enter OTP"} type={"text"} required={true}/>
                                        </div>
                                        <div className={"col-3"}>
                                            {isOtpExpired && !userOtpDetails.loading ?
                                                <a onClick={callFunctionToSendOtp}>
                                                    GET
                                                </a>
                                                :
                                                <a>
                                                    WAIT
                                                </a>
                                            }
                                        </div>
                                    </div>
                                    {otpError && <div className={"row"}>
                                        <div className={"col"}>
                                            <p className="error fontsize2">{otpErrorMessage}</p>
                                        </div>
                                    </div>}
                                    {!isOtpExpired
                                        ? <>
                                            <div className={"row"}>
                                                <div className={"col"}>
                                                    <p className={"otp_message_p"}>Get new OTP in: {timer} seconds</p>
                                                </div>
                                            </div>
                                        </>
                                        :
                                        ''
                                    }
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="button" onClick={callFunctionToValidateOtpAndLoginUser} className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </section>
            </IonContent>
            <IonLoading isOpen={userAuthDetail?.loading} className={"loading_loader_spinner_container"} message={"Please Wait..."}/>
        </IonPage>
    )
}