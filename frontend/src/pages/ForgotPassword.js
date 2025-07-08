import React, { useState } from 'react';
import {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton
} from '@ionic/react';
import appLogo from '../theme/images/logo-big.png';
import { useHistory } from 'react-router';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = () => {
        if (!email.trim()) {
            setError('Email is required');
            return;
        }

        if (!validateEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }

        setError('');
        // Send OTP logic here (server side)
        console.log('OTP sent to:', email);
        history.push('/verify-otp');
    };

    const goToPage = (page)=>{
        history.replace(page);
    }
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
                                <label className="login-label">Enter your Email Address</label>
                                <input
                                    type="email"
                                    className="login-input"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {error && <p className="error-message">{error}</p>}
                            </div>
                        </IonCol>

                        <IonCol size="12">
                            <IonButton expand="block" className="login-button" onClick={handleSubmit}>
                                Send OTP
                            </IonButton>
                        </IonCol>

                        <IonCol size="12" className="ion-text-center login-links">
                            <p className="login-link-text" onClick={() => history.replace('/login')}>
                                Remembered your password? <a onClick={() => goToPage('/login')}
                                                             className="login-link">Login</a>
                            </p>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default ForgotPassword;
