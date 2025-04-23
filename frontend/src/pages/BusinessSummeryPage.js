import React from 'react';
import {IonContent, IonHeader, IonPage} from "@ionic/react";
import usericon from '../theme/images/user-icon.jpg';
import LeftSideBarComponent from "../components/LeftSideBarComponent";
import HeaderAfterLoginComponent from "../components/HeaderAfterLoginComponent";
export default function BusinessSummeryPage(){
    return(
        <IonPage className="UnikPayIndia">
            <HeaderAfterLoginComponent/>

            <IonContent fullscreen>
                <LeftSideBarComponent/>

                <div className="upi-content-body">
                    <div className="container-fluid">
                        <div className="col-xl-12 col-md-12 col-lg-12 update-news d-flex mt-2 pl-0 align-items-center">
                            <h6 className="crypto mt-0">Live Updates</h6>
                            <p className="retailer_p pl-2 mb-0">join whatever blow destructive elephant less evening lump spoil stamp headdress misery</p>
                        </div>
                        <div className="d-md-flex d-block align-items-center justify-content-between my-3 page-header-breadcrumb">
                            <div className="left-content">
                                <h3 className="content-title  mt-2">Business Summary</h3>
                                <div className="d-flex p-0">
                                    <i className="fa-solid fa-house"></i>
                                    <p className="text-muted mb-0 hover-cursor">&nbsp;/&nbsp;Business Summary </p>
                                </div>
                            </div>
                        </div>
                        <div className="ShowTrans">
                            <div className="row">
                                <div className="col-12">
                                    <div className="business-summary d-flex">
                                        <div className="bss-select mr-3">
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>Type of transaction</option>
                                                <option value="1">Money Transfer</option>
                                                <option value="2">Utility/Recharge</option>
                                                <option value="3">AEPS/MATM</option>
                                                <option value="3">Credit Card</option>
                                            </select>
                                        </div>

                                        <div className="bss-select mr-3">
                                            <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                        </div>

                                        <div className="bss-select mr-3">
                                            <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                        </div>
                                        <button type="button" className="btn btn-success btn-purple">Success</button>





                                    </div>
                                </div>
                            </div>
                            {/*Show Transaction*/}
                            <div className="row mt-4 ">
                                <div className=" col-12 mb-4 overflow-x-auto lg:mb-6">
                                    <table className="table ">
                                        <thead className="bus-summary-tablehead">
                                        <tr className="">
                                            <th scope="col">
                                                <div className="flex items-center gap-1 text-center">No Of Transaction</div>
                                            </th>
                                            <th scope="col">
                                                <div className="flex items-center gap-1 text-center">Total Amount </div>
                                            </th>
                                            <th scope="col">
                                                <div className="flex items-center gap-1 text-center">Type of Transaction</div>
                                            </th>
                                            <th scope="col">
                                                <div className="flex items-center gap-1 text-center"> Total Charge</div>
                                            </th>
                                            <th scope="col">
                                                <div className="flex items-center gap-1 text-center">Total Commission</div>
                                            </th>
                                            <th scope="col">
                                                <div className="flex items-center gap-1 text-center">Refund Pending</div>
                                            </th>
                                            <th scope="col">Refunded</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr className="buss-result-border">
                                            <td scope="row" className="py-2">
                                                <div className="flex items-center ">
                                                    <p className="mb-1 font-medium text-center">0</p>
                                                </div>
                                            </td>
                                            <td className="py-2 align-middle text-center">548.00</td>
                                            <td className="py-2 align-middle text-center text-success">Success</td>
                                            <td className="py-2 align-middle text-center">
                                                <span className="flex items-center gap-2">
                                                    0
                                                </span>
                                            </td>
                                            <td className="py-2 align-middle text-center">
                                                <span className="text-primary">0.26</span>
                                            </td>
                                            <td className="py-2 align-middle text-center">
                                                <span className=""> 0 </span>
                                            </td>
                                            <td className="py-2 align-middle text-center">
                                                <div className="flex justify-center">
                                                    0
                                                </div>
                                            </td>
                                        </tr>



                                        </tbody>

                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}