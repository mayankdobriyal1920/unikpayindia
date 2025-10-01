import React from 'react';
import {IonContent, IonHeader, IonPage} from "@ionic/react";
import usericon from "../theme/images/user-icon.jpg";
import LeftSideBarComponent from "../components/LeftSideBarComponent";
import HeaderAfterLoginComponent from "../components/HeaderAfterLoginComponent";

export default function DistManageFundCredit(){
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
                                <h3 className="content-title  mt-2">Credit Money</h3>
                                <div className="d-flex p-0">
                                    <i className="fa-solid fa-house"></i>
                                    <p className="text-muted mb-0 hover-cursor">&nbsp;/&nbsp;Credit Money</p>
                                </div>
                            </div>
                        </div>
                        <div className="row main-retailer-report ShowTrans">
                            <div className="col-xl-12">
                                <div className="card retailer-home-balance">

                                    <div className="card-body card-tabs-new">
                                        <ul className="nav nav-pills light" role="tablist">
                                            <li className=" nav-item" role="presentation">
                                                <a href="#credit-history" className="nav-link active" data-bs-toggle="tab"
                                                   aria-expanded="false" aria-selected="true" role="tab">Credit Money</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a href="#debit-history" className="nav-link" data-bs-toggle="tab"
                                                   aria-expanded="false" aria-selected="false" role="tab" tabIndex="-1">Credit History</a>
                                            </li>


                                        </ul>
                                        <div className="tab-content white-bgcolor">
                                            <div id="credit-history" className="tab-pane active show bsstdmt" role="tabpanel">
                                                <div>

                                                    <form >
                                                        <div className="form-row mt-5 mx-auto">
                                                            <div className="col-6 mx-auto">
                                                                <div className="form-group col-12">
                                                                    <select className="form-control form-select form-select-md" aria-label="Default select example">
                                                                        <option>Select Member</option>
                                                                        <option value="1"><b>AMJAD MOBILE REPAIRING : 9540122184 : QPR5589</b></option>
                                                                        <option value="2">HARIOM TELECOM CENTRE : 9818872979 : QPR5460</option>

                                                                    </select>
                                                                </div>
                                                                <div className="form-group col-12">
                                                                    <input type="text" placeholder="Amount" className="form-control form-control-md"/>
                                                                </div>
                                                                <div className="form-group col-12">
                                                                    <input type="text" placeholder="Remarks" className="form-control form-control-md"/>
                                                                </div>
                                                                <div className="form-group col-4 mx-auto">
                                                                    <button type="button" className="btn btn-width btn-success mr-2">Proceed  </button>
                                                                </div>
                                                            </div>

                                                        </div>




                                                    </form>
                                                </div>
                                            </div>
                                            <div id="debit-history" className="tab-pane" role="tabpanel">
                                                <div className="">

                                                    <form>
                                                        <div className="form-row mt-5 m-auto">
                                                            <div className="form-group col-6">
                                                                <select className="form-control form-select form-select-md" aria-label="Default select example">
                                                                    <option>Outlet</option>
                                                                    <option value="1"><b>AMJAD MOBILE REPAIRING : 9540122184 : QPR5589</b></option>
                                                                    <option value="2">HARIOM TELECOM CENTRE : 9818872979 : QPR5460</option>

                                                                </select>
                                                            </div>

                                                            <div className="form-group col-3">
                                                                <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                            </div>

                                                            <div className="form-group col-3">
                                                                <input type="date" className="form-control form-control-md" value="2025-04-14"/>
                                                            </div>





                                                        </div>

                                                        <div className="form-row mt-5 m-auto">

                                                            <div className="form-group col-6">
                                                                <input type="text" placeholder="Transaction No" className="form-control form-control-md"/>
                                                            </div>


                                                            <div className="form-group col-3">
                                                                <input type="text" placeholder="Ref Number" className="form-control form-control-md"/>
                                                            </div>



                                                            <div className="form-group col-3">
                                                                <div className="dmt-trasno btn-group d-flex" role="group">
                                                                    <button type="button" className="btn btn-width btn-success mr-2">Search  </button>
                                                                    <button type="button" className="btn btn-width btn-secondary">Export  </button>
                                                                </div>
                                                            </div>


                                                        </div>


                                                    </form>



                                                    <div className="row m-auto">
                                                        <div className="col-12 mt-3">
                                                            <div className="Recent-Trans retailer-addfund align-items-center">
                                                                <div className="table-responsive">
                                                                    <table className="table border-dashed table-responsive-sm">
                                                                        <thead>
                                                                        <tr className="LightBlue-BgColor">
                                                                            <th scope="col">S#</th>
                                                                            <th scope="col" className="text-end">Date#</th>
                                                                            <th scope="col" className="text-end">Txn Ref No </th>
                                                                            <th scope="col" className="text-end">Credit To </th>
                                                                            <th scope="col" className="text-end"> Amount </th>
                                                                            <th scope="col" className="text-end">Remarks</th>

                                                                        </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                        <tr className="table-bordered ">
                                                                            <th scope="row">1</th>
                                                                            <td className="text-end">01/10/2025 11:22 AM </td>
                                                                            <td className="text-end">1102522234941</td>
                                                                            <td className="text-end green-color">SONY TELECOM : 8860573786 : QPR5443</td>
                                                                            <td className="text-end red-color">50,000.00</td>
                                                                            <td className="text-end">	Ffgg</td>


                                                                        </tr>



                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row d-flex pagination_retailer mt-3 m-auto">
                                                        <div className="col-6 d-flex pt-2">
                                                            <p className="mr-2 pb-0">Show result:</p>
                                                            <select className="form-select"  aria-label="Default select example">
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