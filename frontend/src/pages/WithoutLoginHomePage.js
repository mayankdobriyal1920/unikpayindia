import React from 'react';
import {IonPage, IonContent} from '@ionic/react';
import HeaderWithoutLogin from "../components/HeaderWithoutLogin";

const WithoutLoginHomePage = () => {

    return (
        <React.Fragment>
            <IonPage>
               <HeaderWithoutLogin/>
                <IonContent fullscreen>
                    Without login
                </IonContent>
            </IonPage>
        </React.Fragment>
    );
};
export default WithoutLoginHomePage;