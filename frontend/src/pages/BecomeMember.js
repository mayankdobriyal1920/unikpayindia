import React, { useState } from 'react';
import {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle
} from '@ionic/react';
import { useHistory } from 'react-router';

const BecomeMember = () => {
    const [selectedMembership, setSelectedMembership] = useState('');
    const history = useHistory();

    const handleContinue = () => {
        if (selectedMembership) {
            console.log('Selected Membership:', selectedMembership);
            // Handle post-payment logic
        }
        history.replace('/home');
    };

    const handleSkip = () => {
        history.replace('/home');
    };

    return (
        <IonPage>
            <IonContent fullscreen className="login-content">
                <IonGrid className="login-grid" style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem' }}>
                    <IonRow>
                        <IonCol size="12" className="ion-text-center">
                            <h2 className="login-title">Become a Member</h2>
                            <p className="login-subtext">(Optional – You can skip and use the app without membership)</p>
                        </IonCol>

                        <IonCol size="12" sizeMd="6">
                            <IonCard
                                className={`membership-card ${selectedMembership === 'life' ? 'selected' : ''}`}
                                onClick={() => setSelectedMembership('life')}
                            >
                                <IonCardHeader className="ion-text-center">
                                    <IonCardTitle>Life Member</IonCardTitle>
                                    <p className="membership-price">₹25,000 + GST</p>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>

                        <IonCol size="12" sizeMd="6">
                            <IonCard
                                className={`membership-card ${selectedMembership === 'annual' ? 'selected' : ''}`}
                                onClick={() => setSelectedMembership('annual')}
                            >
                                <IonCardHeader className="ion-text-center">
                                    <IonCardTitle>Annual Member</IonCardTitle>
                                    <p className="membership-price">₹5,000 + GST</p>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>

                        <IonCol size="12" className="ion-text-center" style={{ marginTop: '1.5rem' }}>
                            <IonButton expand="block" className="login-button" onClick={handleContinue}>
                                Continue
                            </IonButton>
                            <IonButton expand="block" fill="clear" color="primary" onClick={handleSkip}>
                                Skip for Now
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default BecomeMember;
