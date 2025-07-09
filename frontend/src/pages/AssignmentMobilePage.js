import React,{useState} from 'react';
import { IonContent, IonPage } from "@ionic/react";
import ApplyProposalModal from "../components/ApplyProposalModal";
import RaiseRFPModal from "../components/RaiseRFPModal";

export default function AssignmentMobilePage({ handleScroll }) {
    const [showRaiseRFP, setShowRaiseRFP] = useState(false);
    const [showApplyProposal, setShowApplyProposal] = useState(false);
    const rfpList = [
        {
            title: 'Statutory Audit',
            location: 'New Delhi',
            daysLeft: '7 days left',
            price: '₹50,000',
        },
        {
            title: 'Tax Compliance',
            location: 'Mumbai',
            daysLeft: '10 days left',
            price: '₹30,000',
        },
        {
            title: 'Internal Audit',
            location: 'Mumbai',
            daysLeft: '15 days left',
            price: '₹40,000',
        },
        {
            title: 'Due Diligence',
            location: 'Bengaluru',
            daysLeft: '22 days left',
            price: '₹60,000',
        },
    ];

    return (
        <IonPage>
            <IonContent fullscreen scrollEvents={true} onIonScroll={handleScroll} className="page-content assignment-page">
                <div className="assignment-container">
                    <div className="assignment-buttons">
                        <button className="btn-primary" onClick={() => setShowRaiseRFP(true)}>Raise RFP</button>
                        <button className="btn-primary" onClick={() => setShowApplyProposal(true)}>View RFPs</button>
                    </div>

                    <h3 className="recent-heading">Recent RFPs</h3>

                    <div className="rfp-list">
                        {rfpList.map((rfp, index) => (
                            <div key={index} className="rfp-card">
                                <div className="rfp-card-left">
                                    <h4>{rfp.title}</h4>
                                    <div className="rfp-details">
                                        <span className="rfp-location">📍 {rfp.location}</span>
                                        <span className="rfp-days">🗓 {rfp.daysLeft}</span>
                                    </div>
                                </div>
                                <div className="rfp-card-right">
                                    <div className="rfp-price">{rfp.price}</div>
                                    <div className="rfp-min">Min. price</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </IonContent>
            <RaiseRFPModal isOpen={showRaiseRFP} onDismiss={() => setShowRaiseRFP(false)} />
            <ApplyProposalModal isOpen={showApplyProposal} onDismiss={() => setShowApplyProposal(false)} />
        </IonPage>
    );
}
