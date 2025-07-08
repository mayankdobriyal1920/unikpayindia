import React, { useState } from 'react';
import {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonText, IonSelect, IonSelectOption
} from '@ionic/react';
import appLogo from "../theme/images/logo-big.png";
import {useHistory} from "react-router";

const RegisterPage = () => {
    const history = useHistory();
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        mobile: '',
        refNo: '',
        designation: 'ca_member',
        dynamicField: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (field, value) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    const validate = () => {
        const err = {};

        if (!form.name.trim()) err.name = 'Name is required';
        if (!form.email.match(/^\S+@\S+\.\S+$/)) err.email = 'Valid email required';
        if (form.password.length < 8) err.password = 'Password must be at least 8 characters';
        if (form.password !== form.confirmPassword) err.confirmPassword = 'Passwords do not match';
        if (!form.mobile.match(/^\d{10}$/)) err.mobile = 'Enter 10 digit mobile number';
        if (!form.dynamicField.trim()) err.dynamicField = 'This field is required';

        setErrors(err);
        return Object.keys(err).length === 0;
    };

    const handleSubmit = () => {
        if (validate()) {
            console.log('Form submitted', form);
            // API call here
        }
    };

    const getDynamicLabel = () => {
        switch (form.designation) {
            case 'ca_member':
                return 'ICAI Membership No';
            case 'ca_student':
                return 'ICAI Student Regn. No';
            case 'other_professional':
                return 'ICSI / ICMA / Bar Council Membership No';
            case 'accountant_other':
                return 'PAN No';
            default:
                return '';
        }
    };

    const goToPage = (page)=>{
        history.replace(page);
    }

    return (
        <IonPage>
            <IonContent fullscreen className="register-content">
                <IonGrid className="register-grid">
                    <IonRow>
                        <IonCol size="12" className="ion-text-center">
                            <img src={appLogo} alt="CA World" className="register-logo" />
                        </IonCol>

                        {/* Name & Email */}
                        <IonCol size="12" sizeMd="12">
                            <div className="form-group">
                                <label className="form-label">Name</label>
                                <input
                                    className="form-input"
                                    value={form.name}
                                    onChange={(e) => handleChange('name', e.target.value)}
                                    placeholder="Full Name"
                                />
                                {errors.name && <IonText color="danger">{errors.name}</IonText>}
                            </div>
                        </IonCol>

                        <IonCol size="12" sizeMd="12">
                            <div className="form-group">
                                <label className="form-label">Email Address</label>
                                <input
                                    className="form-input"
                                    value={form.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    placeholder="Email"
                                />
                                {errors.email && <IonText color="danger">{errors.email}</IonText>}
                            </div>
                        </IonCol>

                        {/* Password & Confirm */}
                        <IonCol size="12" sizeMd="6">
                            <div className="form-group">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-input"
                                    value={form.password}
                                    onChange={(e) => handleChange('password', e.target.value)}
                                    placeholder="Password (min 8 characters)"
                                />
                                {errors.password && <IonText color="danger">{errors.password}</IonText>}
                            </div>
                        </IonCol>

                        <IonCol size="12" sizeMd="6">
                            <div className="form-group">
                                <label className="form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-input"
                                    value={form.confirmPassword}
                                    onChange={(e) => handleChange('confirmPassword', e.target.value)}
                                    placeholder="Confirm Password"
                                />
                                {errors.confirmPassword && <IonText color="danger">{errors.confirmPassword}</IonText>}
                            </div>
                        </IonCol>

                        {/* Mobile & Ref No */}
                        <IonCol size="12" sizeMd="12">
                            <div className="form-group">
                                <label className="form-label">Mobile</label>
                                <input
                                    type="tel"
                                    className="form-input"
                                    value={form.mobile}
                                    onChange={(e) => handleChange('mobile', e.target.value)}
                                    placeholder="10-digit Mobile Number"
                                />
                                {errors.mobile && <IonText color="danger">{errors.mobile}</IonText>}
                            </div>
                        </IonCol>

                        <IonCol size="12" sizeMd="12">
                            <div className="form-group">
                                <label className="form-label">Ref No. (optional)</label>
                                <input
                                    className="form-input"
                                    value={form.refNo}
                                    onChange={(e) => handleChange('refNo', e.target.value)}
                                    placeholder="Reference Number"
                                />
                            </div>
                        </IonCol>

                        {/* Designation */}
                        <IonCol size="12" sizeMd={6}>
                            <div className="form-group">
                                <label className="form-label">Designation</label>
                                <IonSelect
                                    className="form-input ion-slide-select"
                                    value={form.designation}
                                    onIonChange={(e) => handleChange('designation', e.detail.value)}
                                    interface="action-sheet"
                                    placeholder="Select your designation"
                                >
                                    <IonSelectOption value="ca_member">CA Member</IonSelectOption>
                                    <IonSelectOption value="ca_student">CA Student / CA Finalist</IonSelectOption>
                                    <IonSelectOption value="other_professional">Other Professional</IonSelectOption>
                                    <IonSelectOption value="accountant_other">Accountants / Others</IonSelectOption>
                                </IonSelect>
                            </div>
                        </IonCol>

                        {/* Dynamic Field */}
                        <IonCol size="12" sizeMd="6">
                            <div className="form-group">
                                <label className="form-label">{getDynamicLabel()}</label>
                                <input
                                    className="form-input"
                                    value={form.dynamicField}
                                    onChange={(e) => handleChange('dynamicField', e.target.value)}
                                    placeholder={getDynamicLabel()}
                                />
                                {errors.dynamicField && <IonText color="danger">{errors.dynamicField}</IonText>}
                            </div>
                        </IonCol>

                        {/* Submit */}
                        <IonCol size="12" className="ion-text-center">
                            <IonButton expand="block" className="register-button" onClick={handleSubmit}>
                                Register
                            </IonButton>

                            <div className="divider-or">or</div>

                            <p className="login-text">
                                Already have an account? <a onClick={()=>goToPage('/login')} className="login-link">Login</a>
                            </p>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default RegisterPage;
