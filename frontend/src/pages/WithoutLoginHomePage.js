import React from 'react';
import {IonPage, IonContent, IonHeader} from '@ionic/react';
import unikPayLogo from '../theme/images/UnikPayIndia-Logo.png';
import anima1 from '../theme/images/an1/1.png';
import anima2 from '../theme/images/an1/2.png';
import anima3 from '../theme/images/an1/3.png';
import anima4 from '../theme/images/an1/4.png';
import anima5 from '../theme/images/an1/5.png';
import anima21 from '../theme/images/an2/1.png';
import anima22 from '../theme/images/an2/1.png';
import anima32 from '../theme/images/an3/2.png';
import anima33 from '../theme/images/an3/3.png';
import anima34 from '../theme/images/an3/4.png';
import anima35 from '../theme/images/an3/5.png';
import anima36 from '../theme/images/an3/6.png';
import anima37 from '../theme/images/online-payment.png';
import scrn1 from '../theme/images/scrn-1.png';
import scrn2 from '../theme/images/scrn-2.png';
import scrn3 from '../theme/images/scrn-3.png';
import {useHistory} from "react-router";
import HeaderWithoutLogin from "../components/HeaderWithoutLogin";

const WithoutLoginHomePage = () => {
    const history = useHistory();

    const goToPage = (page)=>{
        history.replace(page);
    }


    return (
        <React.Fragment>
            <IonPage>
               <HeaderWithoutLogin/>
                <IonContent fullscreen>
                    <section className="banner v3">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 m-auto">
                                    <div className="ban-content text-center">
                                        <h1>Transfer Money Across World in Real Time <br/>With No Charge</h1>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore <br/>
                                            magna aliqua. Quis ipsum suspe ultrices gravida. Risus commodo viverra
                                            maecenas .
                                        </p>
                                        <a className="btn btn-default"><span
                                            className="bh"></span> <span>Send Money</span> </a>
                                        <a className="btn btn-outline btn-round"><span
                                            className="bh"></span> <span>Receive Money</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="overview">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-5">
                                    <div className="content-box">
                                        <h2>Simple and Easy Solution for Transfer Money Safe and Faster Way</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                            ultrices gravida.
                                        </p>
                                        <a href="#" className="btn btn-default"><span className="bh"></span> <span>Learn More</span></a>
                                    </div>
                                </div>
                                <div className="col-md-6 offset-md-1">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="iconBox mb100">
                                                    <span className="roysha-icon roysha-bank">
                                            <span className="path1"></span><span className="path2"></span><span
                                                        className="path3"></span><span className="path4"></span><span
                                                        className="path5"></span
                                                    ><span className="path6"></span>
                                        </span>

                                                <h5><a href="#">24/7 Services</a></h5>
                                                <p>Lorem ipsum dolor sitame coctetur adipiscing elised do eiusmte</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="iconBox mb100">
                                                    <span className="roysha-icon roysha-cash">
                                            <span className="path1"></span><span className="path2"></span><span
                                                        className="path3"></span><span className="path4"></span><span
                                                        className="path5"></span
                                                    ><span className="path6"></span><span className="path7"></span><span
                                                        className="path8"></span><span className="path9"></span><span
                                                        className="path10"></span>
                                        </span>

                                                <h5><a href="#">Instant Cashout</a></h5>
                                                <p>Lorem ipsum dolor sitame coctetur adipiscing elised do eiusmte</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="iconBox">
                                                    <span className="roysha-icon roysha-encrypted"
                                                    ><span className="path1"></span><span className="path2"></span><span
                                                        className="path3"></span><span className="path4"></span><span
                                                        className="path5"></span
                                                    ><span className="path6"></span><span className="path7"></span><span
                                                        className="path8"></span><span className="path9"></span><span
                                                        className="path10"></span
                                                    ><span className="path11"></span><span className="path12"></span><span
                                                        className="path13"></span
                                                    ></span>

                                                <h5><a href="#">Fully Encrypted </a></h5>
                                                <p>Lorem ipsum dolor sitame coctetur adipiscing elised do eiusmte</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="iconBox">
                                                    <span className="roysha-icon roysha-safe"><span
                                                        className="path1"></span><span className="path2"></span><span
                                                        className="path3"></span></span>
                                                <h5><a href="#">Safe and Secure</a></h5>
                                                <p>Lorem ipsum dolor sitame coctetur adipiscing elised do eiusmte</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="home-send-money bg-offwhite">
                        <div className="container">
                            <div className="row align-items-md-center">
                                <div className="col-md-5">
                                    <div className="mbl-screen">
                                        <img src={anima1} alt="" className="an1 animg1 leaf"/>
                                        <img src={anima2} alt="" className="an1 animg2"/>
                                        <img src={anima3} alt="" className="an1 animg3"/>
                                        <img src={anima5} alt="" className="an1 animg5"/>
                                        <img src={anima4} alt="" className="an1 animg4"/>
                                    </div>
                                </div>
                                <div className="col-md-6 offset-md-1">
                                    <div className="content-box">
                                        <span className="tagline bar">FAst Transfer</span>
                                        <h2>Send Money Anytime, Anywhere In a Minute</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                            ultrices gravida. Risus commodo viverra maecenas
                                        </p>
                                        <p>
                                            ccumsanamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                            gravida.
                                        </p>
                                        <a href="#" className="btn btn-default"><span className="bh"></span> <span>Send Money</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="home-recv-money">
                        <div className="container-fluid">
                            <div className="row align-items-md-center">
                                <div className="col-md-6">
                                    <div className="content-box-fluid right">
                                        <span className="tagline bar">Charge Free</span>
                                        <h2>Receive Your Money With No Charge</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                            ultrices gravida. Risus commodo viverra maecenas
                                        </p>
                                        <p>
                                            ccumsanamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                            gravida.
                                        </p>
                                        <a href="#" className="btn btn-default"><span className="bh"></span> <span>Find a Location</span></a>
                                    </div>
                                </div>
                                <div className="col-md-6 nopadd-rth">
                                    <figure className="recv-img">
                                        <img src={anima21} alt=""/>
                                        <img src={anima22} alt="" className="rcvMobile"/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="payment bg-offwhite">
                        <div className="container">
                            <div className="row align-items-md-center">
                                <div className="col-md-6">
                                    <figure className="pay-img">
                                        <img src={anima32} alt="" className="an3"/>
                                        <img src={anima33} alt="" className="an3"/>
                                        <img src={anima34} alt="" className="an3"/>
                                        <img src={anima35} alt="" className="an3"/>
                                        <img src={anima36} alt="" className="an3"/>
                                        <img src={anima37} alt=""/>
                                    </figure>
                                </div>
                                <div className="col-md-6">
                                    <div className="content-box">
                                        <span className="tagline bar">Online Payment</span>
                                        <h2>Make Your Online Payment Almost Every Site</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                            ultrices gravida. Risus commodo viverra maecenas
                                        </p>
                                        <p>
                                            ccumsanamet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                            gravida.
                                        </p>
                                        <a href="#" className="btn btn-default"><span className="bh"></span> <span>Make a Payment</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="features">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-8 col-md-9 m-auto">
                                    <div className="sec-heading text-center">
                                        <h2 className="sec-title">We Bring Everything In One Place</h2>
                                        <p className="sec-subtitle">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                            ultrices gravida.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="features-scrns">
                                <figure className="scrn-1"><img src={scrn1} alt=""/></figure>
                                <figure className="scrn-2"><img src={scrn2} alt=""/></figure>
                                <figure className="scrn-3"><img src={scrn3} alt=""/></figure>
                            </div>
                        </div>
                    </section>
                    <section className="speciality bg-offwhite">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-10 m-auto">
                                    <div className="sec-heading">
                                        <span className="tagline">Our Speciality</span>
                                        <h2 className="sec-title">We Bring Everything In One Place</h2>
                                        <p className="sec-subtitle">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                            ultrices gravida.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="iconBox boxed-shadow text-center">
                                            <span className="roysha-icon roysha-encrypted"
                                            ><span className="path1"></span><span className="path2"></span><span
                                                className="path3"></span><span className="path4"></span><span
                                                className="path5"></span
                                            ><span className="path6"></span><span className="path7"></span><span
                                                className="path8"></span><span className="path9"></span><span
                                                className="path10"></span
                                            ><span className="path11"></span><span className="path12"></span><span
                                                className="path13"></span
                                            ></span>

                                        <h5><a href="#">Fully Secure Payment</a></h5>
                                        <p>Lorem ipsum dolor sitame coctetur adipiscing elised do eiusmte</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="iconBox boxed-shadow text-center">
                                            <span className="roysha-icon roysha-money-tracking"
                                            ><span className="path1"></span><span className="path2"></span><span
                                                className="path3"></span><span className="path4"></span><span
                                                className="path5"></span
                                            ><span className="path6"></span><span className="path7"></span><span
                                                className="path8"></span><span className="path9"></span><span
                                                className="path10"></span
                                            ><span className="path11"></span><span className="path12"></span><span
                                                className="path13"></span><span className="path14"></span><span
                                                className="path15"></span
                                            ></span>

                                        <h5><a href="#">No Transition Charge</a></h5>
                                        <p>Lorem ipsum dolor sitame coctetur adipiscing elised do eiusmte</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="iconBox boxed-shadow text-center">
                                            <span className="roysha-icon roysha-hand-cash"
                                            ><span className="path1"></span><span className="path2"></span><span
                                                className="path3"></span><span className="path4"></span><span
                                                className="path5"></span
                                            ><span className="path6"></span><span className="path7"></span><span
                                                className="path8"></span><span className="path9"></span><span
                                                className="path10"></span
                                            ></span>

                                        <h5><a href="#">Cashout In a Minute</a></h5>
                                        <p>Lorem ipsum dolor sitame coctetur adipiscing elised do eiusmte</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="testimonial">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-10 m-auto">
                                    <div className="sec-heading">
                                        <span className="tagline">Clients Opinion</span>
                                        <h2 className="sec-title">What Users Say About US</h2>
                                        <p className="sec-subtitle">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                            ultrices gravida.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="test-caro owl-carousel">
                                <div className="single-testimonial">
                                    <div className="tst-body">
                                        The template is just awesome for any kind of online money currency tool. And the
                                        most important thing is the Customer support is very helpful. I
                                        appreciate this to anyone.
                                    </div>
                                    <div className="tst-head">
                                        <img src={anima1} className="avatar" alt=""/>
                                        <h6>themes4ever</h6>
                                        <span>Themeforest Author</span>
                                    </div>
                                </div>
                                <div className="single-testimonial">
                                    <div className="tst-body">It has almost all the features that are mandatory for a
                                        transactional website. color variants are cool. good job!
                                    </div>
                                    <div className="tst-head">
                                        <img src={anima2} className="avatar" alt=""/>
                                        <h6>ThemeJhuri</h6>
                                        <span>Themeforest Author</span>
                                    </div>
                                </div>
                                <div className="single-testimonial">
                                    <div className="tst-body">It has almost all the features that are mandatory for a
                                        transactional website. color variants are cool. good job!
                                    </div>
                                    <div className="tst-head">
                                        <img src={anima3} className="avatar" alt=""/>
                                        <h6>Revol Themes</h6>
                                        <span>Themeforest Author</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <footer className="footer">
                        <div className="foo-top">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                        <div className="widget foo-nav">
                                            <h5>Access Us</h5>
                                            <ul>
                                                <li><a href="#">About Us</a></li>
                                                <li><a href="#">Payment</a></li>
                                                <li><a href="#">Send Money</a></li>
                                                <li><a href="#">Receive Money</a></li>
                                                <li><a href="#">Fees</a></li>
                                                <li><a href="#">Services</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                        <div className="widget foo-nav">
                                            <h5>Help Center</h5>
                                            <ul>
                                                <li><a href="#">Customer Care</a></li>
                                                <li><a href="#">Contact Us</a></li>
                                                <li><a href="#">Live Chat</a></li>
                                                <li><a href="#">Payment</a></li>
                                                <li><a href="#">Custom API</a></li>
                                                <li><a href="#">Affiliate</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                        <div className="widget foo-nav">
                                            <h5>Follow Us</h5>
                                            <ul>
                                                <li><a href="#">Blog</a></li>
                                                <li><a href="#">Facebook</a></li>
                                                <li><a href="#">Twitter</a></li>
                                                <li><a href="#">Linkedin</a></li>
                                                <li><a href="#">Youtube</a></li>
                                                <li><a href="#">Forum</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                        <div className="widget foo-nav">
                                            <h5>Partners</h5>
                                            <ul>
                                                <li><a href="#">Refer A Frient</a></li>
                                                <li><a href="#">Affiliate Programs</a></li>
                                                <li><a href="#">Payment API</a></li>
                                                <li><a href="#">Partner Directory</a></li>
                                                <li><a href="#">Become A Partner</a></li>
                                                <li><a href="#">Find Locations</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                        <div className="widget foo-nav">
                                            <h5>Services</h5>
                                            <ul>
                                                <li><a href="#">Transfer Money</a></li>
                                                <li><a href="#">Saving Account</a></li>
                                                <li><a href="#">Online Shopping</a></li>
                                                <li><a href="#">Pay Bills</a></li>
                                                <li><a href="#">Credit Service</a></li>
                                                <li><a href="#">Ecommerce</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                        <div className="widget foo-address">
                                            <h5>Stay In Touch</h5>
                                            <address>
                                                <a href="malto:ervice@email.com">ervice@email.com</a>
                                                <a href="tel:+12345678921">+123 4567 8921</a>
                                            </address>
                                            <address>Rokaz, Chok Bazar 123 Newyork City United State</address>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="foo-btm">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="foo-navigation">
                                            <ul>
                                                <li><a href="#">Terms and Conditions</a></li>
                                                <li><a href="#">Privacy & Policy</a></li>
                                                <li><a href="#">Legal</a></li>
                                                <li><a href="#">Notice</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="copyright">Copyright &copy; <a href="#">AjaySharma</a> - 2025
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>

                </IonContent>
            </IonPage>
        </React.Fragment>
    );
};
export default WithoutLoginHomePage;