import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import moment from "moment-timezone";
import {actionToGetLpgBookingTransactionDetails, actionToSendGasBookingRequest} from "../../redux/CommonAction";
import {useDispatch, useSelector} from "react-redux";

let LPG_PRICE = 950
export default function GASPartPage() {
    const history = useHistory();
    const {lpgTransactionBooking} = useSelector((state) => state.lpgBookingTransactionHistory);

    const [form, setForm] = useState({
        mobile: '',
        provider: '',
        consumerNumber: '',
        bookingType: 'Refill',
        address: '',
        preferredDate: '',
        timeSlot: 'Any',
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [showBookingSummary, setShowBookingSummery] = useState(null);
    const dispatch = useDispatch();
    const [payLoader,setPayLoader] = useState(false);
    const gasProviders = ['Indane', 'HP', 'Bharat'];
    const timeSlots = ['Morning', 'Evening', 'Any'];
    const bookingTypes = ['Refill', 'New Connection'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const goBack = () => {
        history.goBack();
    };

    const validate = () => {
        let temp = {};
        if (!form.mobile || form.mobile.length !== 10) temp.mobile = "Enter a valid 10-digit mobile number";
        if (!form.provider) temp.provider = "Please select a provider";
        if (!form.consumerNumber) temp.consumerNumber = "Consumer / LPG number is required";
        if (!form.bookingType) temp.bookingType = "Please select booking type";
        if (!form.address) temp.address = "Address is required";
        setErrors(temp);
        return Object.keys(temp).length === 0;
    };

    React.useEffect(()=>{
        dispatch(actionToGetLpgBookingTransactionDetails())
    },[])

    const resetBookingForm = () =>{
        let initialFormData = {
            mobile: '',
            provider: '',
            consumerNumber: '',
            bookingType: 'Refill',
            address: '',
            preferredDate: '',
            timeSlot: 'Any',
        }
        setForm(initialFormData)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setLoading(true)
            console.log("Submitted form data:", form);
            // Proceed to payment or booking API call


            setTimeout(()=> {
                setShowBookingSummery({
                    amount: LPG_PRICE,
                    ...form
                })
                setLoading(false);
                resetBookingForm()
            },3000)
        }
    };
    const resetBookingSummery = () =>{
        setShowBookingSummery(null);
        setPayLoader(false)
    }

    const handlePayment = (e,payload) => {
        e.preventDefault();
        setPayLoader(true)
        dispatch(actionToSendGasBookingRequest(payload))
        setTimeout(()=>{
            resetBookingSummery()
        },2000)
    }

    return (
        <>
            <div className="ShowTrans moneytramsferservice">
                <div className={"header_with_back_button"}>
                    <p onClick={goBack} className={"money-closebt"}><i className="fa-solid fa-xmark"></i></p>
                    <div className={"row justify-content-center"}>
                        <div className={"col-12"}>
                            <div className="row">
                                <div className="col-xl-12 mb-2">
                                    <h3 className="text-center"> Gas Booking </h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="retailer-home-balance">
                                        <div className="col-md-12 pl-3 ">
                                            <form>
                                                <div className="card ">
                                                    <div className="form-row">
                                                        {showBookingSummary ?
                                                            <div className="col-md-5 pl-3 pr-3 m-auto">
                                                                <div className="card p-3 m-5 p-2">
                                                                    <h3 className=" mb-3">Booking Summary</h3>
                                                                    <p><strong>Consumer / LPG number:</strong> {showBookingSummary?.consumerNumber}</p>
                                                                    <p><strong>Agency:</strong> {showBookingSummary?.provider}</p>
                                                                    <p><strong>Amount to Pay:</strong> ₹{(showBookingSummary?.amount)}</p>
                                                                    <button className="btn btn-success btn-block w-100 p-3 mb-2" onClick={(e) =>handlePayment(e,showBookingSummary)}>
                                                                        {payLoader ? "Processing..." : "Pay Now"}
                                                                    </button>
                                                                </div>
                                                            </div>

                                                        :
                                                        <div className="col-md-5 pl-3 pr-3 m-auto">
                                                            <div className="for-group">
                                                                <label htmlFor="inputAddressForMobile" className="form-label">Mobile Number<span className="text-danger">*</span></label>
                                                                <input
                                                                    type="text"
                                                                    className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                                                                    name="mobile"
                                                                    value={form.mobile}
                                                                    onChange={handleChange}
                                                                />
                                                                {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="inputAddressForProvider" className="form-label">Gas Provider<span className="text-danger">*</span></label>
                                                                <select
                                                                    className={`custom-select form-select ${errors.provider ? 'is-invalid' : ''}`}
                                                                    name="provider"
                                                                    value={form.provider}
                                                                    onChange={handleChange}
                                                                >
                                                                    <option value="">Select Provider</option>
                                                                    {gasProviders.map((p) => (
                                                                        <option key={p} value={p}>{p}</option>
                                                                    ))}
                                                                </select>
                                                                {errors.provider && <div className="invalid-feedback">{errors.provider}</div>}
                                                            </div>

                                                            <div className="form-group">
                                                                <label htmlFor="inputAddressForCN" className="form-label">Consumer / LPG Number*</label>
                                                                <input
                                                                    type="text"
                                                                    className={`form-control ${errors.consumerNumber ? 'is-invalid' : ''}`}
                                                                    name="consumerNumber"
                                                                    value={form.consumerNumber}
                                                                    onChange={handleChange}
                                                                />
                                                                {errors.consumerNumber && <div className="invalid-feedback">{errors.consumerNumber}</div>}
                                                            </div>

                                                            <div className="form-group">
                                                                <label className="form-label">Booking Type<span className="text-danger">*</span></label>
                                                                <select
                                                                    className="custom-select form-select"
                                                                    name="bookingType"
                                                                    value={form.bookingType}
                                                                    onChange={handleChange}
                                                                >
                                                                    {bookingTypes.map((type) => (
                                                                        <option key={type} value={type}>{type}</option>
                                                                    ))}
                                                                </select>
                                                            </div>

                                                            <div className="form-group">
                                                                <label className="form-label">Delivery Address<span className="text-danger">*</span></label>
                                                                <textarea
                                                                    className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                                                                    name="address"
                                                                    value={form.address}
                                                                    onChange={handleChange}
                                                                    rows={2}
                                                                />
                                                                {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                                                            </div>

                                                            <div className="form-group">
                                                                <label className="form-label">Preferred Delivery Date</label>
                                                                <input
                                                                    type="date"
                                                                    className="form-control"
                                                                    name="preferredDate"
                                                                    value={form.preferredDate}
                                                                    onChange={handleChange}
                                                                />
                                                            </div>

                                                            <div className="form-group">
                                                                <label className="form-label">Time Slot</label>
                                                                <select
                                                                    className="custom-select form-select"
                                                                    name="timeSlot"
                                                                    value={form.timeSlot}
                                                                    onChange={handleChange}
                                                                >
                                                                    {timeSlots.map((slot) => (
                                                                        <option key={slot} value={slot}>{slot}</option>
                                                                    ))}
                                                                </select>
                                                            </div>

                                                            <div>
                                                                <button className={"btn btn-primary w-100 p-3 mb-2"} onClick={handleSubmit} disabled={loading}>
                                                                    {loading ? "Processing..." : "Proceed to Booking"}
                                                                </button>
                                                            </div>
                                                        </div>
                                                        }

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
                                                                                className="text-end">Provider
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
                                                                        {lpgTransactionBooking?.length &&
                                                                            lpgTransactionBooking?.map((transaction, index) => (
                                                                                <tr className="table-bordered " key={transaction.order_id}>
                                                                                    <th scope="row">{index+1}</th>
                                                                                    <td className="text-end">{moment(transaction.created_at).format("DD/MM/YYYY")}</td>
                                                                                    <td className="text-end">{transaction.transaction_id}</td>
                                                                                    <td className="text-end">{transaction.provider}</td>
                                                                                    <td className="text-end">{transaction.amount}</td>
                                                                                    <td className="text-end">{transaction.payment_status}</td>

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
        </>

    );
}
