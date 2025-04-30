import React from 'react';
import {useHistory} from "react-router";

export default function AEPSPartPage() {
    const history = useHistory();
    const goBack = ()=>{
        history.goBack();
    }
    return (
        <div className="ShowTrans moneytramsferservice">
            <div className={"header_with_back_button"}>
                <p onClick={goBack} className={"money-closebt"}><i className="fa-solid fa-xmark"></i></p>
                <div className={"row justify-content-center"}>
                    <div className={"col-12"}>
                        <div className="row">
                            <div className="col-xl-12">
                                <h3 className="text-center"> Aeps Onboarding </h3>
                            </div>
                        </div>
                        <form>
                            <div className="row">

                                <div className="col-12 col-xl-12">

                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label  htmlFor="inputEmail4">First Name*</label>
                                            <input type="text" className="form-control" id="validationDefault01"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label  htmlFor="inputEmail4">Last Name*</label>
                                            <input type="text" className="form-control" id="validationDefault01"/>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label  htmlFor="inputEmail4">Mobile No.</label>
                                            <input type="text" className="form-control" id="validationDefault01" placeholder="XXXXX-XXXXX"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label  htmlFor="inputEmail4">Email Id*</label>
                                            <input type="email" className="form-control" id="validationDefault01" placeholder="Email Id"/>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label  htmlFor="inputEmail4">PAN.</label>
                                            <input type="text" className="form-control" id="validationDefault01" placeholder="PAN"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label  htmlFor="inputEmail4">PAN Image*</label>
                                            <input className="form-control" type="file" id="formFile"/>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label  htmlFor="inputEmail4">Aadhaar Number.</label>
                                            <input type="text" className="form-control" id="validationDefault01" placeholder="572664010696"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label  htmlFor="inputEmail4">Masked Aadhar Image*</label>
                                            <input className="form-control" type="file" id="formFile"/>
                                        </div>
                                    </div>


                                </div>


                                <div className="col-xl-12">
                                    <h3>Address Information</h3>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label  htmlFor="inputEmail4">Address1*</label>
                                            <input type="text" className="form-control" id="validationDefault01"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">State*</label>
                                            <select className="custom-select" id="validationDefault04" required>
                                                <option selected disabled value="">Choose...</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label  htmlFor="inputEmail4">City Name*</label>
                                            <input type="text" className="form-control" id="validationDefault01"/>
                                        </div>

                                        <div className="form-group col-md-6">
                                            <label  htmlFor="inputEmail4">District Name *</label>
                                            <input type="text" className="form-control" id="validationDefault01" placeholder="District Name "/>
                                        </div>

                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label  htmlFor="inputEmail4">Aadhaar Number.</label>
                                            <input type="text" className="form-control" id="validationDefault01" placeholder="572664010696"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label  htmlFor="inputEmail4">Image Of Shop*</label>
                                            <input className="form-control" type="file" id="formFile"/>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-xl-12">
                                    <h3>Bank Information</h3>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label  htmlFor="inputEmail4">Bank Account Number*</label>
                                            <input type="text" className="form-control" id="validationDefault01"/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label  htmlFor="inputEmail4">Bank Ifsc Code *</label>
                                            <input type="text" className="form-control" id="validationDefault01"/>
                                        </div>

                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label  htmlFor="inputEmail4">City Name*</label>
                                            <input type="text" className="form-control" id="validationDefault01"/>
                                        </div>

                                        <div className="form-group col-md-6">
                                            <label  htmlFor="inputEmail4">District Name *</label>
                                            <input type="text" className="form-control" id="validationDefault01" placeholder="District Name "/>
                                        </div>

                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">Bank Name*</label>
                                            <select className="custom-select" id="validationDefault04" required>
                                                <option selected disabled value="">Choose...</option>
                                                <option>...</option>
                                            </select>
                                        </div>

                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputEmail4">Account Type*</label>
                                            <select className="custom-select" id="validationDefault04" required>
                                                <option selected disabled value="">Choose...</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>

                                <button type="submit" className="btn btn-primary">Onboarding</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}