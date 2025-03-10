import React from 'react';
import { IonPage, setupIonicReact,IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonText } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/additional.css';
import './theme/common-style.css';
setupIonicReact();

const App = () => {
    return (
        <IonApp>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>UnikPayIndia</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding" fullscreen>
                    <IonText color="primary">
                        <h1>Welcome to UnikPayIndia</h1>
                    </IonText>
                    <IonText color="medium">
                        <p>Our website is under development. Stay tuned for updates!</p>
                    </IonText>
                </IonContent>
            </IonPage>
        </IonApp>
    );
};
export default App;