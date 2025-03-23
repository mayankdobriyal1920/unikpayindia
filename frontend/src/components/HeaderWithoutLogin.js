import React from 'react';
import {IonHeader} from "@ionic/react";
import unikPayLogo from "../theme/images/UnikPayIndia-Logo.png";
import {useHistory} from "react-router";

export default function HeaderWithoutLogin(){
    const history = useHistory();

    const goToPage = (page)=>{
        history.replace(page);
    }
    return(
        <IonHeader className="header03">
            <div className="header-top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-8">
                            <div className="d-inline-flex ml-auto">
                                <a href="#" className="top-text"><i
                                    className="fas fa-phone-alt"></i> info@roysha.com</a>
                                <a href="#" className="top-text"><i className="fas fa-envelope"></i> +21 (0) 332
                                    0000 12</a>
                            </div>
                        </div>
                        <div className="col-sm-4 text-sm-right">
                            <div className="social-icons">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-main">
                <div className="container d-flex align-items-center">
                    <a className="logo" onClick={()=>goToPage('/home')}>
                        <img src={unikPayLogo} alt=""/>
                    </a>
                    <nav className="primary-menu ml-auto">
                        <a id="mobile-menu-toggler" href="#"><i className="fas fa-bars"></i></a>
                        <ul>
                            <li>
                                <a onClick={()=>goToPage('/home')}>Home</a>
                            </li>
                            <li><a onClick={()=>goToPage('/home')}>About</a></li>
                            <li><a onClick={()=>goToPage('/home')}>Services</a></li>
                            <li><a onClick={()=>goToPage('/home')}>Clients</a></li>
                            <li><a onClick={()=>goToPage('/home')}>Contact</a></li>
                            <li><a onClick={()=>goToPage('/login')}>Login</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </IonHeader>
    )
}