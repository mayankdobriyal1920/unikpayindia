import React from 'react';
import {IonContent, IonHeader, IonPage} from "@ionic/react";
import usericon from "../theme/images/user-icon.jpg";
import LeftSideBarComponent from "../components/LeftSideBarComponent";
import HeaderAfterLoginComponent from "../components/HeaderAfterLoginComponent";

export default function SettingPage(){
    return(
        <IonPage className="UnikPayIndia">
            <HeaderAfterLoginComponent/>

            <IonContent fullscreen>
                <LeftSideBarComponent/>

                <div className="upi-content-body password ">
                    <h1 className="fw-bold">Password Change</h1>

                    <div className="container-fluid pt-1 d-flex align-items-center justify-content-center">

                        <div className="container mt-5" style={{maxWidth: '700px'}}>
                            <div className="card">
                                <div className="card-header bg-primary py-2 text-white fw-bold">
                                    Password Change
                                </div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label text-primary ">Name</label>
                                        <input
                                            type="text"
                                            className="form-control py-4"
                                            id="name"
                                            value="DEEPAK KUMAR"
                                            readOnly
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="pan" className="form-label text-primary">PAN</label>
                                        <input
                                            type="text"
                                            className="form-control py-4"
                                            id="pan"
                                            placeholder="Enter PAN"
                                        />
                                    </div>
                                    <div className="text-right">
                                        <button className="btn btn-primary">Send OTP</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </IonContent>
        </IonPage>
    )
}