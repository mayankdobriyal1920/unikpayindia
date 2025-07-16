import React, {useEffect, useRef, useState} from 'react';
import {IonHeader} from "@ionic/react";
import unikPayLogo from "../theme/images/UnikPayIndia-Logo.png";
import {useHistory} from "react-router";

export default function HeaderWithoutLogin(){
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const goToPage = (page)=>{
        history.replace(page);
    }

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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
                    <nav ref={menuRef} className="primary-menu ml-auto">
                        <a id="mobile-menu-toggler"
                           onClick={(e) => {
                               e.preventDefault();
                               setIsOpen((prev) => !prev)
                           }}><i className="fas fa-bars"></i></a>
                        <ul className={`${isOpen ? 'left_side_bar_open' : ''}`}>
                            <li><a onClick={() => goToPage('/home')}>Home</a></li>
                            <li><a onClick={() => goToPage('/about')}>About</a></li>
                            <li><a onClick={() => goToPage('/services')}>Services</a></li>
                            <li><a onClick={() => goToPage('/clients')}>Clients</a></li>
                            <li><a onClick={() => goToPage('/contact')}>Contact</a></li>
                            <li><a onClick={() => goToPage('/login')}>Login</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </IonHeader>
    )
}