import React from 'react';
import {useHistory} from "react-router";

export default function MasterWalletToWallet() {
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
                            <div className="col-6">
                                <h3 className="bg-dark white-color mb-3 p-2"> Add Fund To Wallet </h3>

                                <form>
                                    <div className="form-row mt-5 m-auto">
                                        <div className="form-group col-12">
                                            <select className="form-control form-select form-select-md" aria-label="Default select example">
                                                <option>Card Network*</option>
                                                <option value="1">Master Card </option>
                                                <option value="1">Visa Card </option>
                                                <option value="1">Rupay Card </option>

                                            </select>
                                        </div>

                                        <div className="form-group col-12">
                                            <select className="form-control form-select form-select-md" aria-label="Default select example">
                                                <option>Card Type*</option>
                                                <option value="1">Credit Card </option>
                                                <option value="1">Debit Card </option>
                                                <option value="1">Prepaid Card </option>

                                            </select>
                                        </div>

                                        <div className="form-group col-12">
                                            <input type="text" placeholder="Mobile Number" className="form-control form-control-md"/>
                                        </div>

                                        <div className="form-group col-12">
                                            <input type="text" placeholder="Amount" className="form-control form-control-md"/>
                                        </div>

                                        <div className="dmt-trasno btn-group d-flex" role="group">
                                            <button type="button" className="btn btn-width btn-success mr-2">Process</button>
                                            <button type="button" onClick={goBack} className="btn btn-width btn-danger"> Cancel</button>

                                        </div>

                                    </div>
                                </form>
                            </div>

                            <div className="col-6">
                                <h3 className="bg-dark white-color mb-3 p-2"> Bank Charge </h3>
                                <div className="Recent-Trans retailer-addfund align-items-center">
                                    <div className="table-responsive">
                                        <table className="table border-dashed table-responsive-sm">
                                            <thead>
                                                <tr className="LightBlue-BgColor">
                                                    <th scope="col">
                                                        Mode Of Transaction</th>
                                                    <th scope="col">Charge Applied</th>
                                                    <th scope="col">Charge</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="table-bordered ">
                                                    <td className="text-end">Visa Credit Card </td>
                                                    <td className="text-end">₹100 </td>
                                                    <td className="text-end">% 1.5 </td>
                                                </tr>

                                                <tr className="table-bordered ">
                                                    <td className="text-end">Master Card </td>
                                                    <td className="text-end">₹100 </td>
                                                    <td className="text-end">% 1.5 </td>
                                                </tr>

                                                <tr className="table-bordered ">
                                                    <td className="text-end">Rupy Card </td>
                                                    <td className="text-end">₹100 </td>
                                                    <td className="text-end">% 1.5 </td>
                                                </tr>

                                                <tr className="table-bordered ">
                                                    <td className="text-end">Corporate Card </td>
                                                    <td className="text-end">₹100 </td>
                                                    <td className="text-end">% 2.5 </td>
                                                </tr>

                                                <tr className="table-bordered ">
                                                    <td className="text-end">Debit Card</td>
                                                    <td className="text-end">₹100 </td>
                                                    <td className="text-end">% 1.5 </td>
                                                </tr>

                                                <tr className="table-bordered ">
                                                    <td className="text-end">UPI </td>
                                                    <td className="text-end">₹100 </td>
                                                    <td className="text-end">% 2.5 </td>
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
    )
}