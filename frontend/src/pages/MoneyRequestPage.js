import React from 'react';
import {IonContent, IonHeader, IonPage} from "@ionic/react";
import usericon from "../theme/images/user-icon.jpg";
import LeftSideBarComponent from "../components/LeftSideBarComponent";
import HeaderAfterLoginComponent from "../components/HeaderAfterLoginComponent";

export default function MoneyRequestPage(){
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
                        <div className="col-12">
                            <div className="row">
                                <div className="col-6">
                                    <div className="d-md-flex d-block align-items-center justify-content-between my-3 page-header-breadcrumb">
                                        <div className="left-content">
                                            <h3 className="content-title  mt-2">Add Fund</h3>
                                            <div className="d-flex p-0">
                                                <i className="fa-solid fa-house"></i>
                                                <p className="text-muted mb-0 hover-cursor">&nbsp;/&nbsp;Add Fund</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 text-end mt-4">
                                    <a  className=" btn bggreen-color">Add New Request</a>
                                    <a className="btn bg-primary">Export</a>
                                </div>
                            </div>
                        </div>

                        <div className="row main-retailer-report ShowTrans">
                            <div className="col-xl-12">
                                <div className="card retailer-home-balance">

                                    <div className="card-body card-tabs-new">
                                        <ul className="nav nav-pills light" role="tablist">
                                            <li className=" nav-item" role="presentation">
                                                <a href="#navpills-1" className="nav-link active" data-bs-toggle="tab"
                                                   aria-expanded="false" aria-selected="true" role="tab">All Money Requests</a>
                                            </li>
                                           {/* <li className="nav-item" role="presentation">
                                                <a href="#navpills-2" className="nav-link" data-bs-toggle="tab"
                                                   aria-expanded="false" aria-selected="false" role="tab" tabIndex="-1">Pending Money Requests</a>
                                            </li>*/}



                                        </ul>
                                        <div className="tab-content white-bgcolor">
                                            <div id="navpills-1" className="tab-pane active show bsstdmt" role="tabpanel">
                                                <div className="">
                                                    {/*<h6 className="green-color bsst-dmt mb-2">DMT Transactions</h6>*/}
                                                    <div className="col-xl-12 mt-2">
                                                        <div className="d-flex ">

                                                            <div className="flex-fill mr-2">
                                                                <div className="dmt-trasno">
                                                                    <div className="dropdown">
                                                                        <button className="btn btn-secondary businessSum-Cat dropdown-toggle"
                                                                                type="button"
                                                                                id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            Status
                                                                        </button>
                                                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                                                            <li>
                                                                                <button className="dropdown-item" type="button">Money Transfer</button>
                                                                            </li>
                                                                            <li>
                                                                                <button className="dropdown-item" type="button">Utility/Recharge
                                                                                </button>
                                                                            </li>
                                                                            <li>
                                                                                <button className="dropdown-item" type="button">AEPS/MATM
                                                                                </button>
                                                                            </li>
                                                                            <li>
                                                                                <button className="dropdown-item" type="button">Credit Card
                                                                                </button>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="flex-fill mr-2">
                                                                <div className="dmt-trasno">
                                                                    <form>
                                                                        <div className="form-row">
                                                                            <div className="col">
                                                                                <input type="text" className="form-control"
                                                                                       placeholder="Search Request No"/>
                                                                            </div>

                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>

                                                            <div className="flex-fill mr-2">
                                                                <div className="dmt-trasno">
                                                                    <form>
                                                                        <div className="form-row">
                                                                            <div className="col">
                                                                                <input type="text" className="form-control"
                                                                                       placeholder="Transaction No"/>
                                                                            </div>

                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>

                                                            <div className="flex-fill mr-2">
                                                                <div className="dmt-trasno">
                                                                    <button type="button" className="btn btn-success btn-width-auto">Search</button>
                                                                </div>
                                                            </div>

                                                            <div className="flex-fill ">
                                                                <div className="dmt-trasno">
                                                                    <button type="button" className="btn btn-primary btn-width-auto">Export</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mt-3">
                                                            <div className="flex-fill mr-2">
                                                                <div className="dmt-trasno">
                                                                    <form>
                                                                        <div className="form-row">
                                                                            <div className="col">
                                                                                <p className="mb-0 total-request">Total Request</p>
                                                                                <input type="text" className="form-control"  placeholder="Transaction No"/>
                                                                            </div>

                                                                            <div className="col">
                                                                                <p className="mb-0 total-request">Total Amount</p>
                                                                                <input type="text" className="form-control" placeholder="Transaction No"/>
                                                                            </div>

                                                                            <div className="col bss-select">
                                                                                <p className="mb-0 total-request">Charges Paid</p>
                                                                                <input type="text" className="form-control" placeholder="Transaction No"/>
                                                                            </div>

                                                                            <div className="col bss-select">
                                                                                <p className="mb-0 total-request">Commission Received</p>
                                                                                <input type="text" className="form-control" placeholder="Transaction No"/>
                                                                            </div>

                                                                            <div className="col bss-select">
                                                                                <p className="mb-0 total-request">Refund Pending</p>
                                                                                <input type="text" className="form-control" placeholder="Transaction No"/>
                                                                            </div>

                                                                            <div className="col bss-select">
                                                                                <p className="mb-0 total-request">Refunded Transactions</p>
                                                                                <input type="text" className="form-control" placeholder="Transaction No"/>
                                                                            </div>



                                                                        </div>
                                                                    </form>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        {/*Pagination*/}
                                                        <div className="row pagination_retailer mt-3">
                                                            <div className="col-6 d-flex pt-2">
                                                                <p className="mr-2 pb-0">Show result:</p>
                                                                <select className="form-select"
                                                                        aria-label="Default select example">
                                                                    <option selected>1
                                                                    </option>
                                                                    <option value="1">2</option>
                                                                    <option value="2">3</option>
                                                                    <option value="3">4</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-6 text-end retailer-pagination">
                                                                <nav aria-label="Page navigation example">
                                                                    <ul className="pagination float-right">
                                                                        <li className="page-item">
                                                                            <a className="page-link" href="#" aria-label="Previous">
                                                                                <span aria-hidden="true">&laquo;</span>
                                                                                <span className="sr-only">Previous</span>
                                                                            </a>
                                                                        </li>
                                                                        <li className="page-item">
                                                                            <a className="page-link" href="#">1</a>
                                                                        </li>
                                                                        <li className="page-item"><a
                                                                            className="page-link" href="#">2</a>
                                                                        </li>
                                                                        <li className="page-item"><a
                                                                            className="page-link" href="#">3</a>
                                                                        </li>
                                                                        <li className="page-item">
                                                                            <a className="page-link" href="#"
                                                                               aria-label="Next">
                                                                                    <span
                                                                                        aria-hidden="true">&raquo;</span>
                                                                                <span
                                                                                    className="sr-only">Next</span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </nav>
                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                            {/*<div id="navpills-2" className="tab-pane" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-md-3 text-center">
                                                        <h6 className="green-color">Fund Request</h6>
                                                        <p>$24.00</p>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <h6 className="green-color">Money Credit</h6>
                                                        <p>$24.00</p>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <h6 className="green-color">Money Debit</h6>
                                                        <p>$24.00</p>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <h6 className="green-color">Quick Collect</h6>
                                                        <p>$24.00</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <h6 className="green-color">Quick Paid</h6>
                                                        <p>$24.00</p>
                                                    </div>
                                                </div>
                                            </div>*/}

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="Recent-Trans retailer-addfund align-items-center">
                                    <div className="table-responsive">
                                        <table className="table border-dashed table-responsive-sm">
                                            <thead>
                                            <tr className="LightBlue-BgColor">
                                                <th scope="col">S#</th>
                                                <th scope="col" className="text-end">Request#</th>
                                                <th scope="col" className="text-end">Deposit Date</th>
                                                <th scope="col" className="text-end">Total Charge</th>
                                                <th scope="col" className="text-end">Account</th>
                                                <th scope="col" className="text-end">Ref No</th>
                                                <th scope="col" className="text-end">Amount</th>
                                                <th scope="col" className="text-end">Remark</th>
                                                <th scope="col" className="text-end">Create Date</th>
                                                <th scope="col" className="text-end">Updated</th>
                                                <th scope="col" className="text-end">Slip</th>
                                                <th scope="col" className="text-end">Status</th>
                                                <th scope="col" className="text-end">Bond</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="table-bordered ">
                                                <th scope="row">1</th>
                                                <td className="text-end">24022025123842</td>
                                                <td className="text-end">24/02/2025</td>
                                                <td className="text-end">Cash</td>
                                                <td className="text-end">AXIS CASH:- 923020064179135</td>
                                                <td className="text-end">Rs. 18564</td>
                                                <td className="text-end">1000</td>
                                                <td className="text-end">2224</td>
                                                <td className="text-end">24/02/2025 06:39 PM </td>
                                                <td className="text-end">24/02/2025 06:47 PM</td>
                                                <td className="text-end">
                                                    <i className="fa-solid fa-download"></i>
                                                </td>
                                                <td className="text-end text-success">Success</td>
                                                <td className="text-end">
                                                    <i className="fa-solid fa-lock"></i>
                                                </td>

                                            </tr>
                                            <tr className="table-bordered ">
                                                <th scope="row">1</th>
                                                <td className="text-end">24022025123842</td>
                                                <td className="text-end">24/02/2025</td>
                                                <td className="text-end">Cash</td>
                                                <td className="text-end">AXIS CASH:- 923020064179135</td>
                                                <td className="text-end">Rs. 18564</td>
                                                <td className="text-end">1000</td>
                                                <td className="text-end">2224</td>
                                                <td className="text-end">24/02/2025 06:39 PM </td>
                                                <td className="text-end">24/02/2025 06:47 PM</td>
                                                <td className="text-end">
                                                    <i className="fa-solid fa-download"></i>
                                                </td>
                                                <td className="text-end text-success">Success</td>
                                                <td className="text-end">
                                                    <i className="fa-solid fa-lock"></i>
                                                </td>

                                            </tr>
                                            <tr className="table-bordered ">
                                                <th scope="row">1</th>
                                                <td className="text-end">24022025123842</td>
                                                <td className="text-end">24/02/2025</td>
                                                <td className="text-end">Cash</td>
                                                <td className="text-end">AXIS CASH:- 923020064179135</td>
                                                <td className="text-end">Rs. 18564</td>
                                                <td className="text-end">1000</td>
                                                <td className="text-end">2224</td>
                                                <td className="text-end">24/02/2025 06:39 PM </td>
                                                <td className="text-end">24/02/2025 06:47 PM</td>
                                                <td className="text-end">
                                                    <i className="fa-solid fa-download"></i>
                                                </td>
                                                <td className="text-end text-danger">Failed</td>
                                                <td className="text-end">
                                                    <i className="fa-solid fa-lock"></i>
                                                </td>

                                            </tr>
                                            <tr className="table-bordered LightBlue-BgColor ">
                                                <th scope="row">1</th>
                                                <td className="text-end"></td>
                                                <td className="text-end">Total</td>
                                                <td className="text-end"></td>
                                                <td className="text-end"></td>
                                                <td className="text-end"></td>
                                                <td className="text-end"></td>
                                                <td className="text-end">Total</td>
                                                <td className="text-end"> </td>
                                                <td className="text-end"></td>
                                                <td className="text-end"></td>
                                                <td className="text-end "></td>
                                                <td className="text-end"></td>

                                            </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>


                        </div>

                    {/*   Add New Request Page */}
                           <div className="container">
                               <div className="row">
                                   <div className="col-12">
                                       <h3 className="bgred-color white-color pl-2 pt-2 pb-2">New Request</h3>
                                       <form className="mt-3">
                                           <div className="form-row">
                                               <div className="form-group col-md-6">
                                                   <label htmlFor="inputEmail4">Amount</label>
                                                   <input type="text" className="form-control" id="inputEmail4"/>
                                               </div>
                                               <div className="form-group col-md-6">
                                                   <label htmlFor="inputPassword4">Payment Mode</label>
                                                   <select id="inputState" className="form-control">
                                                       <option selected>Cash/Stuck Amount</option>
                                                       <option>CDM</option>
                                                       <option>IMPS/UPI</option>
                                                       <option>NEFT/RTGS</option>
                                                       <option>Fund Transfer</option>
                                                       <option>Cheque</option>
                                                   </select>
                                               </div>
                                           </div>
                                           <div className="form-row">
                                               <div className="form-group col-md-6">
                                                   <label htmlFor="inputEmail4">Bank Account</label>
                                                   <select id="inputState" className="form-control">
                                                       <option selected>Cash/Stuck Amount</option>
                                                       <option>CDM</option>
                                                       <option>IMPS/UPI</option>
                                                       <option>NEFT/RTGS</option>
                                                       <option>Fund Transfer</option>
                                                       <option>Cheque</option>
                                                   </select>
                                               </div>
                                               <div className="form-group col-md-6">
                                                   <label htmlFor="inputPassword4">Upload Deposit Slip Photo</label>
                                                   <input type="file" className="form-control" id="inputGroupFile01"/>
                                               </div>
                                           </div>
                                           <div className="form-row">
                                               <div className="form-group col-md-6">
                                                   <label htmlFor="inputEmail4">Deposit Date</label>
                                                   <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                               </div>
                                               <div className="form-group col-md-6">
                                                   <label htmlFor="inputPassword4">Remarks</label>
                                                   <input type="text" className="form-control" id="inputGroupFile01"/>
                                               </div>
                                           </div>
                                       </form>
                                   </div>
                               </div>
                           </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}