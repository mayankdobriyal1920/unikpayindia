import React from 'react';
import {IonContent, IonHeader, IonPage} from "@ionic/react";
import usericon from '../theme/images/user-icon.jpg';
import LeftSideBarComponent from "../components/LeftSideBarComponent";
import HeaderAfterLoginComponent from "../components/HeaderAfterLoginComponent";
export default function DistributorDetails(){
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
                                <h3 className="content-title  mt-2">Distributor Details </h3>
                                <div className="d-flex p-0">
                                    <i className="fa-solid fa-house"></i>
                                    <p className="text-muted mb-0 hover-cursor">&nbsp;/&nbsp;Distributor Details</p>
                                </div>
                            </div>
                        </div>
                        <div className="row main-retailer-report ShowTrans">
                            <div className="col-2 float-right">
                                <div className="agent-add-user"><h6
                                    className="mt-0 ">Add User</h6>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="card retailer-home-balance">
                                    <div className="card-body card-tabs-new">
                                        <ul className="nav nav-pills light" role="tablist">
                                            <li className=" nav-item" role="presentation">
                                                <a href="#navpills-1" className="nav-link active" data-bs-toggle="tab"
                                                   aria-expanded="false" aria-selected="true" role="tab">User
                                                    Registration Details</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a href="#navpills-2" className="nav-link" data-bs-toggle="tab"
                                                   aria-expanded="false" aria-selected="false" role="tab" tabIndex="-1">User
                                                    Registration KYC</a>
                                            </li>


                                        </ul>
                                        <div className="tab-content white-bgcolor">
                                            <div id="navpills-1" className="tab-pane active show bsstdmt pl-2 pt-3"
                                                 role="tabpanel">
                                                <div className="row m-auto">
                                                    <div className="col-12 mt-3">
                                                        <div
                                                            className="Recent-Trans retailer-addfund align-items-center">
                                                            <div className="table-responsive">
                                                                <table
                                                                    className="table border-dashed table-responsive-sm">
                                                                    <thead>
                                                                    <tr className="LightBlue-BgColor">
                                                                        <th scope="col">User ID</th>
                                                                        <th scope="col" className="text-end">Name</th>
                                                                        <th scope="col" className="text-end">Firm Name
                                                                        </th>
                                                                        <th scope="col" className="text-end">Phone
                                                                            Number
                                                                        </th>
                                                                        <th scope="col" className="text-end">Role</th>
                                                                        <th scope="col" className="text-end">PAN</th>
                                                                        <th scope="col" className="text-end">GST</th>
                                                                        <th scope="col" className="text-end">Status</th>
                                                                        <th scope="col" className="text-end">Created
                                                                            On
                                                                        </th>
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


                                                                    </tr>

                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                            <div id="navpills-2" className="tab-pane" role="tabpanel">
                                                <form>
                                                    <div className="form-row mt-5 m-auto">

                                                        <div className="form-group col-md-3">
                                                            <input type="text" placeholder="Global Search"
                                                                   className="form-control form-control-md"/>
                                                        </div>

                                                        <div className="form-group col-md-3 float-right">
                                                            <div className="dmt-trasno btn-group" role="group">
                                                                <button type="button"
                                                                        className="btn btn-width-auto btn-success mr-2">Search
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>


                                                <div className="row m-auto">
                                                    <div className="col-12 mt-3">
                                                        <div
                                                            className="Recent-Trans retailer-addfund align-items-center">
                                                            <div className="table-responsive">
                                                                <table
                                                                    className="table border-dashed table-responsive-sm">
                                                                    <thead>
                                                                    <tr className="LightBlue-BgColor">
                                                                        <th scope="col">User ID</th>
                                                                        <th scope="col" className="text-end">Name</th>
                                                                        <th scope="col" className="text-end">Firm Name
                                                                        </th>
                                                                        <th scope="col" className="text-end">Outlet
                                                                            Name
                                                                        </th>
                                                                        <th scope="col" className="text-end">Phone
                                                                            Number
                                                                        </th>
                                                                        <th scope="col" className="text-end">Address
                                                                        </th>
                                                                        <th scope="col" className="text-end">Report To
                                                                        </th>
                                                                        <th scope="col" className="text-end">Status</th>
                                                                        <th scope="col" className="text-end">User
                                                                            Created Date
                                                                        </th>
                                                                        <th scope="col" className="text-end">KYC Updated
                                                                            Date
                                                                        </th>
                                                                        <th scope="col" className="text-end">KYC Updated
                                                                            By
                                                                        </th>
                                                                        <th scope="col" className="text-end">#</th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr className="table-bordered ">
                                                                        <th scope="row">1</th>
                                                                        <td className="text-end">24/02/2025 06:47 PM
                                                                        </td>
                                                                        <td className="text-end">Ajay Sharma</td>
                                                                        <td className="text-end">Sharma Mobile Store
                                                                        </td>
                                                                        <td className="text-end">99999 99999</td>
                                                                        <td className="text-end">Karol Bagh</td>
                                                                        <td className="text-end">Varun Gupta / Varun
                                                                            Telecom Center
                                                                        </td>
                                                                        <td className="text-end">KYC Pending</td>
                                                                        <td className="text-end">07/07/2016</td>
                                                                        <td className="text-end"></td>
                                                                        <td className="text-end">Varun Gupta</td>
                                                                        <td className="text-end">KYC</td>


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
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}