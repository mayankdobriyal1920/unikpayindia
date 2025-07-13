import React, { useState } from 'react';
import { IonButton, IonInput } from '@ionic/react';
import trustImg from '../theme/images/80g-trust.png';

export default function ContributeCard() {
    const [amount, setAmount] = useState('');

    const handleDonate = () => {
        console.log(`Donating: ₹${amount}`);
        // Integrate your payment flow here
    };

    return (
        <>
            <img
                src={trustImg}
                alt="80G Registered Trust"
                className="trust-badge"
            />
            <h1 className="contribute-title">Support Our Trust</h1>
            <p className="contribute-description">
                Your contribution helps us continue our work. Donations are eligible for tax
                exemption under Section 80G of the Income Tax Act.
            </p>

            <div className="amount-options">
                <IonButton onClick={() => setAmount('500')}>₹500</IonButton>
                <IonButton onClick={() => setAmount('1000')}>₹1,000</IonButton>
                <IonButton onClick={() => setAmount('5000')}>₹5,000</IonButton>
            </div>

            <IonInput
                type="number"
                value={amount}
                placeholder="Enter custom amount"
                onIonChange={e => setAmount(e.detail.value)}
                className="amount-input"
            />

            <IonButton expand="block" className="donate-button" onClick={handleDonate}>
                Donate Now
            </IonButton>
        </>
    );
}
