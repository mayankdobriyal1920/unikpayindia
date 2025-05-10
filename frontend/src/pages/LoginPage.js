import React, { useState } from 'react';
import {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonIcon, IonText
} from '@ionic/react';
import { eye, eyeOff } from 'ionicons/icons';
import appLogo from '../theme/images/logo-big.png';
import { useHistory } from "react-router";

const LoginPage = () => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const goToPage = (page) => {
        history.replace(page);
    };

    const handleLogin = () => {
        const errs = {};

        if (!emailOrPhone.trim()) {
            errs.emailOrPhone = 'Email or Phone number is required';
        }

        setErrors(errs);

        if (Object.keys(errs).length === 0) {
            // Submit form
            console.log('Login:', { emailOrPhone, password });
        }
    };

    return (
        <IonPage>
            <IonContent fullscreen className="login-content">
                <IonGrid className="login-grid">
                    <IonRow>
                        <IonCol size="12" className="ion-text-center">
                            <img
                                src={appLogo}
                                alt="CA World"
                                className="login-logo"
                            />
                        </IonCol>

                        <IonCol size="12">
                            <div className="login-group">
                                <label className="login-label">Enter Email ID / Phone number</label>
                                <input
                                    type="text"
                                    className="login-input"
                                    placeholder="Email ID / Phone Number"
                                    value={emailOrPhone}
                                    onChange={(e) => setEmailOrPhone(e.target.value)}
                                />
                                {errors.emailOrPhone && <IonText color="danger">{errors.emailOrPhone}</IonText>}
                            </div>
                        </IonCol>

                        <IonCol size="12">
                            <div className="login-group">
                                <label className="login-label">Enter Password</label>
                                <div className="input-wrapper">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        className="login-input"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <IonIcon
                                        icon={showPassword ? eyeOff : eye}
                                        className="toggle-password"
                                        onClick={() => setShowPassword(!showPassword)}
                                    />
                                </div>
                            </div>
                        </IonCol>

                        <IonCol size="12">
                            <IonButton
                                expand="block"
                                className="login-button"
                                onClick={handleLogin}
                            >
                                Login
                            </IonButton>
                        </IonCol>

                        <IonCol size="12" className="ion-text-center login-links">
                            <p className="login-link-text" onClick={() => goToPage('/forgot-password')}>Forgot Password?</p>
                            <p className="login-link-text">or</p>
                            <p className="login-register" onClick={() => goToPage('/signup')}>Registration</p>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default LoginPage;
