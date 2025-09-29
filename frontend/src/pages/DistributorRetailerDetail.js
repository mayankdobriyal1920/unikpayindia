import React from 'react';
import {IonContent, IonHeader, IonPage} from "@ionic/react";
import usericon from '../theme/images/user-icon.jpg';
import LeftSideBarComponent from "../components/LeftSideBarComponent";
import HeaderAfterLoginComponent from "../components/HeaderAfterLoginComponent";
export default function DistributorRetailerDetail(){
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
                                <h3 className="content-title  mt-2">Agent Details </h3>
                                <div className="d-flex p-0">
                                    <i className="fa-solid fa-house"></i>
                                    <p className="text-muted mb-0 hover-cursor">&nbsp;/&nbsp;Agent Details</p>
                                </div>
                            </div>
                        </div>
                        <div className="row main-retailer-report ShowTrans">
                            <div className="col-12 float-right">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-4">
                                            <input type="text" placeholder="Global Search" className="form-control form-control-md"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-xl-12">
                                <div className="card retailer-home-balance">
                                    <div className="card-body card-tabs-new">
                                        <div className="row m-auto">
                                            <div className="col-12 mt-3">
                                                <div
                                                    className="Recent-Trans retailer-addfund align-items-center">
                                                    <div className="table-responsive">
                                                        <table
                                                            className="table border-dashed table-responsive-sm">
                                                            <thead>
                                                            <tr className="LightBlue-BgColor">
                                                                <th scope="col">#</th>
                                                                <th scope="col" className="text-end"> Retailer Id </th>
                                                                <th scope="col" className="text-end"> Retailer Type
                                                                </th>
                                                                <th scope="col" className="text-end">Name
                                                                </th>
                                                                <th scope="col" className="text-end">Outlet Name</th>
                                                                <th scope="col" className="text-end">Login Id</th>
                                                                <th scope="col" className="text-end">Address</th>
                                                                <th scope="col" className="text-end">Active</th>
                                                                <th scope="col" className="text-end">Created Date
                                                                </th>
                                                                <th scope="col" className="text-end">Balance</th>
                                                                <th scope="col" className="text-end">#</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr className="table-bordered ">
                                                                <th scope="row">1</th>
                                                                <td className="text-end">Varun Gupta</td>
                                                                <td className="text-end">Varun Store</td>
                                                                <td className="text-end">99999 99999</td>
                                                                <td className="text-end">Retailer</td>
                                                                <td className="text-end">DD254Z78</td>
                                                                <td className="text-end">Dr124567892</td>
                                                                <td className="text-end">Active</td>
                                                                <td className="text-end">24/02/2025 06:39 PM
                                                                </td>
                                                                <td className="text-end">24/02/2025 06:47 PM
                                                                </td>
                                                                <td className="text-end">24/02/2025 06:47 PM
                                                                </td>


                                                            </tr>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

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