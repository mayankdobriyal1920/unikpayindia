import React from 'react';
import {useHistory} from "react-router";

export default function DistUpiFunds() {
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
                                <h3 className="text-center"> UPI Funds </h3>
                            </div>
                        </div>
                        <div className="row main-retailer-report ShowTrans">
                            <div className="col-12">
                                <form>
                                    <div className="form-row m-auto">

                                        <div className="form-group col-6">
                                            <input type="text" placeholder="Mobile Number" className="form-control form-control-md"/>
                                        </div>


                                    </div>


                                    <div className="form-row mt-5 m-auto">
                                        <div className="form-group col-3 mx-auto+">
                                            <div className="dmt-trasno btn-group d-flex" role="group">
                                                <button type="button" className="btn btn-width btn-success mr-2">Search </button>

                                            </div>
                                        </div>

                                    </div>



                                </form>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}