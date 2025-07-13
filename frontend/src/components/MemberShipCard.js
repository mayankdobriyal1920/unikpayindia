import React from 'react';
import {IonButton,IonCol, IonRow} from '@ionic/react';

export default function MemberShipCard() {

    const handleJoin = (type) => {
        console.log(`Joining as: ${type}`);
        // Integrate payment flow here
    };

    return (
        <>
            <h1 className="membership-title">Become a Member</h1>
            <p className="membership-description">
                Join as a Life or Annual Member and enjoy exclusive benefits.
            </p>

            <IonRow className="membership-row">
                <IonCol size="12" sizeMd="6" className="membership-col">
                    <div className="membership-card-custom">
                        <h2 className="membership-type">Life Member</h2>
                        <p className="membership-price">₹25,000 + GST</p>
                        <p className="membership-benefits">
                            Includes 10% off on event purchases and more exclusive benefits!
                        </p>
                        <IonButton
                            expand="block"
                            className="join-now-button"
                            onClick={() => handleJoin('Life Member')}
                        >
                            Join Now
                        </IonButton>
                    </div>
                </IonCol>

                <IonCol size="12" sizeMd="6" className="membership-col">
                    <div className="membership-card-custom">
                        <h2 className="membership-type">Annual Member</h2>
                        <p className="membership-price">₹5,000 + GST</p>
                        <p className="membership-benefits">
                            Includes 20% off on event purchases and more exclusive benefits!
                        </p>
                        <IonButton
                            expand="block"
                            className="join-now-button"
                            onClick={() => handleJoin('Annual Member')}
                        >
                            Join Now
                        </IonButton>
                    </div>
                </IonCol>
            </IonRow>
        </>
    );
}
