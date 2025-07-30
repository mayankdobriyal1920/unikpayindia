import React,{useState} from 'react';
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {actionToMakeDthRechargePayment, actionToSendPaymentRequest} from "../../redux/CommonAction";
import moment from "moment-timezone";

const dthOperatorObject = {tata_sky:'Tata Sky', airtel_digital:'Airtel Digital', dishtv:'Distv', d2h:'D2H', sundirect:'Sun Direct', dd_free_dish:'DD Free Dish'}
const mobileOperators = [
    {id:1, name: "Airtel", code: "AT" },
    {id:2, name: "Jio", code: "RJ" },
    {id:3, name: "Vodafone Idea", code: "VF" },
    {id:4, name: "BSNL", code: "BS" },
    {id:5, name: "MTNL", code: "MT" }
];
const telecomCircles = [
    "Andhra Pradesh",
    "Assam",
    "Bihar & Jharkhand",
    "Chennai",
    "Delhi",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu & Kashmir",
    "Karnataka",
    "Kerala",
    "Kolkata",
    "Madhya Pradesh & Chhattisgarh",
    "Maharashtra & Goa",
    "Mumbai",
    "North East",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Tamil Nadu",
    "Uttar Pradesh (East)",
    "Uttar Pradesh (West) & Uttarakhand",
    "West Bengal"
];

export default function RechargePartPage() {
    const history = useHistory();
    const [mobileNumber, setMobileNumber] = useState("");
    const [operator, setOperator] = useState("");
    const [amount, setAmount] = useState("");
    const [circle, setCircle] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({mobileError:"", operatorError:"", circleError:"",amountError:""})
    const dispatch = useDispatch();
    const paymentTransactionDetailsList = useSelector((state) => state.paymentTransactionDetailsList);
    const [dthObject, setDthObject] = useState({operator:'',customerId:"", amount:''})
    const [dthError, setDthError] = useState({customerIdError:'',operatorError:'',amountError:''});
    const [dthProcessing, setDetProcessing] = useState(false);
    const [dthTransactionList, setDthTransactionList] = useState([]);
    const [mobileTransactionList, setMobileTransactionList] = useState([]);
    const goBack = ()=>{
        history.goBack();
    }


    const resetCustomFields = () =>{
        setError({
            mobileError: "",
            operatorError: "",
            circleError: "",
            amountError: ""
        });
        setLoading(false);
        setMobileNumber("");
        setCircle("");
        setAmount("");
        setOperator("");
    }

    React.useEffect(() => {
        if (paymentTransactionDetailsList?.transactionDetails?.length) {
            const dthRechargeListArray = paymentTransactionDetailsList.transactionDetails.filter(
                tx => tx.transactionType === "dth_recharge"
            );
            const mobileRechargeListArray = paymentTransactionDetailsList.transactionDetails.filter(
                tx => tx.transactionType !== "dth_recharge"
            );

            setDthTransactionList(dthRechargeListArray);
            setMobileTransactionList(mobileRechargeListArray);
        }
    }, [paymentTransactionDetailsList]);

    const handlePayment = (e) => {
        e.preventDefault();

        let hasError = false;

        // Reset all errors first (optional)
        setError({
            mobileError: "",
            operatorError: "",
            circleError: "",
            amountError: ""
        });

        if (!mobileNumber) {
            setError(prev => ({ ...prev, mobileError: "Please add the mobile number" }));
            hasError = true;
        }
        if (!operator) {
            setError(prev => ({ ...prev, operatorError: "Please choose the operator" }));
            hasError = true;
        }
        if (!circle) {
            setError(prev => ({ ...prev, circleError: "Please choose the circle" }));
            hasError = true;
        }
        if (!amount) {
            setError(prev => ({ ...prev, amountError: "Please add the amount" }));
            hasError = true;
        }

        if (!hasError) {
            setLoading(true);
            dispatch(actionToSendPaymentRequest({ mobileNumber, operator, circle, amount }, resetCustomFields));
            setLoading(false)
        }
    };


    const handleDthRechargeSubmit = (e) =>{
        e.preventDefault();


        setDthError({customerIdError: '', operatorError: "", amount:""});
        let hasError = false;

        if(!dthObject.customerId ){
            setDthError(prev => ({...prev, customerIdError: 'Customer ID is required'}));
            hasError = true
        }
        if(!dthObject.operator) {
            setDthError(prev => ({...prev, operatorError: 'Please select Operator'}));
            hasError = true
        }
        if(!dthObject.amount) {
            setDthError(prev => ({...prev, amountError: 'Amount is required'}));
            hasError = true
        }

        if(!hasError){
            setDetProcessing(true);
            dispatch(actionToMakeDthRechargePayment(dthObject, resetDthObject))
            setTimeout(()=>{
                setDetProcessing(false)
            },1000)
        }
    }

    const resetDthObject = () =>{
        setDthObject({operator: '', amount: '', customerId: ''});
        setDthError({operatorError: '', amountError: '', customerIdError: ''});
        setDetProcessing(false);
    }

    return (
        <div className="ShowTrans moneytramsferservice">
            <div className={"header_with_back_button"}>
                <p onClick={goBack} className={"money-closebt"}><i className="fa-solid fa-xmark"></i></p>
                <div className={"row justify-content-center"}>
                    <div className={"col-12"}>
                        <div className="row">
                            <div className="col-xl-12">
                                <h3 className="text-center"> Recharge </h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="retailer-home-balance">
                                    <div className="card-tabs-new">
                                        <ul className="nav nav-pills light" role="tablist">
                                            <li className=" nav-item" role="presentation">
                                                <a href="#navpills-1" className="nav-link active"
                                                   data-bs-toggle="tab"
                                                   aria-expanded="false" aria-selected="true" role="tab">Mobile Recharge</a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a href="#navpills-2" className="nav-link" data-bs-toggle="tab"
                                                   aria-expanded="false" aria-selected="false" role="tab"
                                                   tabIndex="-1">DTH Recharge</a>
                                            </li>

                                        </ul>
                                        <div className="tab-content">
                                            <div id="navpills-1" className="tab-pane active show" role="tabpanel">
                                                <div className="row ">
                                                    <div className="col-md-12 pl-3 ">
                                                        <form>
                                                            <div className="card ml-3 mr-3">
                                                                <div className="card-body">
                                                                    <h3>Mobile Recharge</h3>
                                                                </div>
                                                                <div className="form-row">

                                                                    <div className="col-md-5 pl-3 pr-3 m-auto">
                                                                        <div className="form-group">
                                                                            <label htmlFor="inputAddress">Mobile Number</label>
                                                                            <input type="text"
                                                                                   className="form-control"
                                                                                   id="inputAddress"
                                                                                   onChange={(e)=> {
                                                                                       setMobileNumber(e.target.value);
                                                                                       error.mobileError && setError(prev =>({ ...prev, mobileError: "" }))
                                                                                   }}
                                                                                   value={mobileNumber}
                                                                                   placeholder="Mobile Number"/>
                                                                            <span className={"text-danger"}>{error.mobileError ? error.mobileError : ""}</span>
                                                                        </div>



                                                                        <div className="form-group">
                                                                            <label htmlFor="inputAddress">Operator</label>
                                                                            <select className="custom-select" id="validationDefault04" onChange={(e) => {
                                                                                setOperator(e.target.value);
                                                                                error.operatorError && setError(prev =>({ ...prev, operatorError: "" }))
                                                                            }} >
                                                                                <option selected disabled value="">Choose...</option>
                                                                                {mobileOperators.length && mobileOperators.map((opt)=>(
                                                                                    <option key={opt.id} value={opt.code}>{opt.name}</option>
                                                                                ))}

                                                                            </select>
                                                                            <span className={"text-danger"}>{error.operatorError ? error.operatorError : ""}</span>
                                                                        </div>

                                                                        <div className="form-group">
                                                                            <label htmlFor="inputAddress">Circle</label>
                                                                            <select className="custom-select" id="validationDefault04" onChange={(e)=> {
                                                                                setCircle(e.target.value);
                                                                                error.circleError && setError(prev =>({ ...prev, circleError: "" }))
                                                                            }} >
                                                                                <option selected disabled value="">Choose...</option>
                                                                                {telecomCircles.length && telecomCircles.map((cir,key)=>(
                                                                                    <option key={key} value={cir}>{cir}</option>
                                                                                ))}

                                                                            </select>
                                                                            <span className={"text-danger"}>{error.circleError ? error.circleError : ""}</span>
                                                                        </div>

                                                                        <div className="form-group">
                                                                            <label htmlFor="inputAddress">Amount</label>
                                                                            <input type="number" className="form-control" id="inputAddress" value={amount} onChange={(e)=> {
                                                                                setAmount(e.target.value);
                                                                                error.amountError && setError(prev =>({ ...prev, amountError: "" }))
                                                                            }}  placeholder="Amount"/>
                                                                            <span className={"text-danger"}>{error.amountError ? error.amountError : ""}</span>
                                                                        </div>
                                                                        <div>
                                                                            <button className={"btn btn-primary w-100 p-3 mb-2"} onClick={handlePayment} disabled={loading}>
                                                                                {loading ? "Processing..." : "Pay Now"}
                                                                            </button>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-md-7 pt-3 pb-3 m-auto">
                                                                        <div
                                                                            className="Recent-Trans retailer-addfund align-items-center">
                                                                            <div className="table-responsive">
                                                                                <table className="table border-dashed table-responsive-sm">
                                                                                    <thead>
                                                                                    <tr className="LightBlue-BgColor">
                                                                                        <th scope="col">S#</th>
                                                                                        <th scope="col"
                                                                                            className="text-end">Txn Date
                                                                                        </th>
                                                                                        <th scope="col"
                                                                                            className="text-end">Txn No.
                                                                                        </th>
                                                                                        <th scope="col"
                                                                                            className="text-end">Operator
                                                                                        </th>
                                                                                        <th scope="col"
                                                                                            className="text-end">Amount
                                                                                        </th>
                                                                                        <th scope="col"
                                                                                            className="text-end">Status
                                                                                        </th>

                                                                                    </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                    {mobileTransactionList?.length &&
                                                                                        mobileTransactionList?.map((transaction, index) => (
                                                                                            <tr className="table-bordered " key={transaction.order_id}>
                                                                                                <th scope="row">{index+1}</th>
                                                                                                <td className="text-end">{moment(transaction.completed_at).format("DD/MM/YYYY")}</td>
                                                                                                <td className="text-end">{transaction.transaction_id}</td>
                                                                                                <td className="text-end">{transaction.operator}</td>
                                                                                                <td className="text-end">{transaction.amount}</td>
                                                                                                <td className="text-end">{transaction.status}</td>

                                                                                            </tr>
                                                                                        ))
                                                                                    }


                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>


                                                </div>
                                            </div>
                                            <div id="navpills-2" className="tab-pane" role="tabpanel">
                                                <div className="row ">
                                                    <div className="col-md-12 pl-3">
                                                        <form>
                                                            <div className="card ml-3 mr-3">
                                                                <div className="card-body">
                                                                    <h3>DTH Recharge</h3>
                                                                </div>
                                                            <div className="form-row">
                                                                <div className="col-md-5 pl-3 pr-3 m-auto">
                                                                    <div className="form-group ">
                                                                        <label htmlFor="inputCustomerId">Customer Id</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder="Customer Id"
                                                                            id="inputCustomerId"
                                                                            value={dthObject.customerId}
                                                                            onChange={(e) => {
                                                                                setDthObject((prev) => ({
                                                                                    ...prev,
                                                                                    customerId: e.target.value
                                                                                }))

                                                                               dthError.customerIdError && setDthError(prev=>({...prev, customerIdError: ''}))
                                                                            }
                                                                            }
                                                                        />
                                                                        <span className="text-danger small">{dthError.customerIdError || ""}</span>
                                                                    </div>
                                                                    <div className="form-group ">
                                                                        <label>Operator</label>
                                                                        <select
                                                                            className="custom-select"
                                                                            value={dthObject.operator}
                                                                            onChange={(e) => {
                                                                                setDthObject(prev => ({
                                                                                    ...prev,
                                                                                    operator: e.target.value
                                                                                }))
                                                                                dthError.operatorError && setDthError(prev => ({...prev, operatorError: ''}))
                                                                            }}
                                                                        >

                                                                            <option selected disabled value="">Select Operator</option>
                                                                            <option value="tata_sky">Tata Play</option>
                                                                            <option value="airtel_digital">Airtel Digital TV</option>
                                                                            <option value="dishtv">Dish TV</option>
                                                                            <option value="d2h">d2h</option>
                                                                            <option value="sundirect">Sun Direct</option>
                                                                            <option value="dd_free_dish">DD Free Dish</option>
                                                                        </select>
                                                                        <span className="text-danger small">{dthError.operatorError || ""}</span>
                                                                    </div>

                                                                    <div className="form-group ">
                                                                        <label>Amount</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control fw-bold"
                                                                            placeholder="Amount"
                                                                            value={dthObject.amount}
                                                                            onChange={(e) => {
                                                                                setDthObject((prev) => ({
                                                                                    ...prev,
                                                                                    amount: e.target.value
                                                                                }))

                                                                                dthError.amountError && setDthError(prev => ({...prev, amountError: ''}))
                                                                            }
                                                                            }
                                                                        />
                                                                        <span className="text-danger small">{dthError.amountError || ""}</span>
                                                                    </div>


                                                                    <div className="text-center mb-2">
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-dark w-100 p-3"
                                                                            onClick={handleDthRechargeSubmit}>
                                                                            {dthProcessing ? "Processing..." :'Recharge Now'}
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-7 pt-3 pb-3 m-auto">
                                                                    <div
                                                                        className="Recent-Trans retailer-addfund align-items-center">
                                                                        <div className="table-responsive">
                                                                            <table className="table border-dashed table-responsive-sm">
                                                                                <thead>
                                                                                <tr className="LightBlue-BgColor">
                                                                                    <th scope="col">S#</th>
                                                                                    <th scope="col"
                                                                                        className="text-end">Txn Date
                                                                                    </th>
                                                                                    <th scope="col"
                                                                                        className="text-end">Txn No.
                                                                                    </th>
                                                                                    <th scope="col"
                                                                                        className="text-end">Operator
                                                                                    </th>
                                                                                    <th scope="col"
                                                                                        className="text-end">Amount
                                                                                    </th>
                                                                                    <th scope="col"
                                                                                        className="text-end">Status
                                                                                    </th>

                                                                                </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                {dthTransactionList?.length &&
                                                                                    dthTransactionList?.map((transaction, index) => (
                                                                                        <tr className="table-bordered " key={transaction.order_id}>
                                                                                            <th scope="row">{index+1}</th>
                                                                                            <td className="text-end">{moment(transaction.completed_at).format("DD/MM/YYYY")}</td>
                                                                                            <td className="text-end">{transaction.transaction_id}</td>
                                                                                            <td className="text-end">{dthOperatorObject[transaction.operator]}</td>
                                                                                            <td className="text-end">{transaction.amount}</td>
                                                                                            <td className="text-end">{transaction.status}</td>

                                                                                        </tr>
                                                                                    ))
                                                                                }


                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}