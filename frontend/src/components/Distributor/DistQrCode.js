import React from 'react';
import {useHistory} from "react-router";

export default function MdQrCode() {
    const history = useHistory();
    const goBack = ()=>{
        history.goBack();
    }
    return (
        <div className="ShowTrans moneytramsferservice mt-3">
            <div className={"header_with_back_button"}>
                <p onClick={goBack} className={"money-closebt"}><i className="fa-solid fa-xmark"></i></p>
                <div className={"row justify-content-center"}>
                    <div className={"col-12"}>
                        <div className="row">
                            <div className="col-xl-12">
                                <h3 className="text-center"> Scan QR Code </h3>
                            </div>
                        </div>
                        <div className="row main-retailer-report ShowTrans">
                            <div className="col-4 mx-auto">
                                <div className="dmt-trasno btn-group d-flex" role="group">
                                    <button type="button" className="btn btn-width btn-success mr-2">Download </button>
                                    <button type="button" onClick={goBack} className="btn btn-width btn-danger"> Download Image</button>

                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}