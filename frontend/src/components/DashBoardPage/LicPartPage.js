import React,{useState} from 'react';
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {actionToGetLicPaymentHistory, actionToInitiateLicPolicyPayment} from "../../redux/CommonAction";
import moment from "moment-timezone";

export default function LicPartPage() {
    const history = useHistory();
    const {isLoading, licTransactionHistory} = useSelector((state) => state.licPaymentTransactionHistory)
    const [form, setForm] = useState({
        policyNumber: '',
        dob: '',
        email: '',
        amount: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dispatch = useDispatch();


    React.useEffect(()=>{
        dispatch(actionToGetLicPaymentHistory('lic_policy'))
    },[])
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const validate = () => {
        const newErrors = {};
        if (!form.policyNumber.trim()) newErrors.policyNumber = 'Policy number is required';
        if (!form.dob.trim()) newErrors.dob = 'Date of birth is required';
        if (!form.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(form.email)) {
            newErrors.email = 'Enter a valid email';
        }
        if (!form.amount || Number(form.amount) <= 0) newErrors.amount = 'Enter a valid amount';
        return newErrors;
    };

    const goBack = ()=>{
        history.goBack();
    }

    const resetFunction = () =>{
        setIsSubmitting(false);
        setForm({
            policyNumber: '',
            dob: '',
            email: '',
            amount: '',
        })
    }

    const handleSubmit = async () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        dispatch(actionToInitiateLicPolicyPayment(form, resetFunction))
    };


    return (
            <div className="ShowTrans moneytramsferservice">
                <div className={"header_with_back_button"}>
                    <p onClick={goBack} className={"money-closebt"}><i className="fa-solid fa-xmark"></i></p>
            <div className="container-fluid vh-100">
                <div className="row h-100">
                    {/* Left - 5 columns */}
                    <div className="col-md-5 d-flex align-items-center bg-white border border-light">
                        <div className="w-100 h-100 p-5">
                            <h3 className="mb-4 text-primary">LIC Premium Payment</h3>
                            <div className="mb-3">
                                <label className="form-label">Policy Number</label>
                                <input type="text" autoComplete="off" name="policyNumber" className="form-control" value={form.policyNumber} onChange={handleChange} />
                                {errors.policyNumber && <div className="text-danger mt-1">{errors.policyNumber}</div>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Date of Birth</label>
                                <input type="date" name="dob" autoComplete="off" className="form-control" value={form.dob} onChange={handleChange} />
                                {errors.dob && <div className="text-danger mt-1">{errors.dob}</div>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email Address</label>
                                <input type="email" autoComplete="off" name="email" className="form-control" value={form.email} onChange={handleChange} />
                                {errors.email && <div className="text-danger mt-1">{errors.email}</div>}
                            </div>
                            <div className="mb-4">
                                <label className="form-label">Premium Amount (₹)</label>
                                <input type="number" autoComplete="off" name="amount" className="form-control" value={form.amount} onChange={handleChange} />
                                {errors.amount && <div className="text-danger mt-1">{errors.amount}</div>}
                            </div>
                            <button className="btn btn-primary w-100 p-2" onClick={handleSubmit} disabled={isSubmitting}>
                                {isSubmitting ? 'Processing...' : 'Pay Now'}
                            </button>
                        </div>
                    </div>

                    {/* Right - 7 columns */}
                    <div className="col-md-7 bg-light pt-5 pb-5 d-flex flex-column justify-content-space-evenly h-100">
                        {/* Top Section: Info */}
                        <div className={"mb-4"}>
                            <h4 className="text-dark mb-4">Transaction & Premium Info</h4>
                            <div className="bg-white border rounded p-4 mt-4 shadow-sm">
                                <p className="mb-1"><strong>📞 Customer Care:</strong> 1800-XXX-XXXX</p>
                                <p className="mb-0"><strong>✉️ Email:</strong> support@licindia.in</p>
                            </div>
                        </div>

                        {/* Bottom Section: Transactions */}
                        <div className={"w-100"}>
                            <h5 className="mt-2 mb-3">Transactions</h5>
                            <div className="table-responsive" style={{ maxHeight: '400px' }}>
                                <table className="table table-bordered table-sm table-striped bg-white">
                                    <thead className="table-success">
                                    <tr>
                                        <th>S#</th>
                                        <th>Txn Date</th>
                                        <th>Txn No.</th>
                                        <th>Policy No.</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {isLoading?
                                            <div className="position-absolute top-0 start-0 w-100 pt-5 pb-5 d-flex justify-content-center align-items-center bg-white bg-opacity-75" style={{ zIndex: 10 }}>
                                                <div className="spinner-border text-primary" role="status"></div>
                                            </div>
                                            :
                                            licTransactionHistory.length ?
                                            licTransactionHistory.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{moment(item.completed_at).format("DD-MM-YYYY")}</td>
                                                <td>{item.transaction_id}</td>
                                                <td>{item.policy_number}</td>
                                                <td>{item.amount}</td>
                                                <td><span className="badge bg-success">{item.status}</span></td>
                                            </tr>
                                        )) :

                                            <tr>
                                                <td colSpan="6" className="text-center">No Record Found</td>
                                            </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
            </div>
    )
}