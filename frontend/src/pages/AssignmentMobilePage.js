import React,{useState} from "react";
import { IonPage, IonContent, IonIcon, IonButton } from "@ionic/react";
import {add, addCircleSharp, funnelOutline} from "ionicons/icons";
import AssignmentDataCard from "../components/AssignmentDataCard";
import AssignmentsFilterSheetModal from "../components/AssignmentsFilterSheetModal";
import AssignmentsDetailSheetPopup from "../components/AssignmentsDetailSheetPopup";
import RaiseRFPModal from "../components/RaiseRFPModal";

const rfpList = [
    {
        id:1,
        title: 'Statutory Audit',
        location: 'New Delhi',
        daysLeft: '7 days left',
        price: '₹50,000',
        scopeOfWork: 'Conduct a statutory audit for FY 2024-25 covering financial statements, statutory compliance, and regulatory filings. The assignment involves verification of books of accounts, testing of internal controls, preparation of audit report, and providing recommendations for improvements. Coordination with management and timely submission of the audit report is expected within the stipulated timeline.',
        retainership: 'Assignment',
        attachPdf: null,
        email: 'audit@company.com'
    },
    {
        id:2,
        title: 'Tax Compliance',
        location: 'Mumbai',
        daysLeft: '10 days left',
        price: '₹30,000',
        scopeOfWork: 'Manage quarterly and annual tax compliance activities including TDS returns, GST filings, advance tax calculations, and final tax return preparation for a mid-sized company. Assist with notices and tax assessments if required. Provide proactive tax planning advice to ensure full compliance with the latest tax laws and minimize penalties.',
        retainership: 'Retainership',
        attachPdf: 'tax-compliance-details.pdf',
        email: 'tax@company.com'
    },
    {
        id:3,
        title: 'Internal Audit',
        location: 'Mumbai',
        daysLeft: '15 days left',
        price: '₹40,000',
        scopeOfWork: 'Perform an internal audit for the retail division focusing on operational efficiency, process adherence, and risk assessment. Evaluate internal controls, identify process gaps, recommend improvements, and submit a detailed report with actionable insights. Support implementation of suggested changes.',
        retainership: 'Assignment',
        attachPdf: null,
        email: 'internal.audit@company.com'
    },
    {
        id:4,
        title: 'Due Diligence',
        location: 'Bengaluru',
        daysLeft: '22 days left',
        price: '₹60,000',
        scopeOfWork: 'Carry out financial and legal due diligence for an upcoming merger. Review company financials, outstanding liabilities, legal compliances, and material contracts. Provide a clear risk matrix and assist stakeholders in informed decision making. Final report should highlight all red flags with mitigation suggestions.',
        retainership: 'Assignment',
        attachPdf: 'due-diligence-checklist.pdf',
        email: 'dd@company.com'
    },
    {
        id:5,
        title: 'Monthly GST Filing',
        location: 'Pune',
        daysLeft: '5 days left',
        price: '₹20,000',
        scopeOfWork: 'Provide ongoing GST compliance services for a small business, including preparation and filing of GSTR-1, GSTR-3B, reconciliation with GSTR-2A, and advising on input tax credits. Ensure timely filings to avoid penalties and interest. Communicate regularly with the client for any clarifications and maintain compliance calendar.',
        retainership: 'Retainership',
        attachPdf: null,
        email: 'gst@company.com'
    },
    {
        id:6,
        title: 'Company Secretarial Services',
        location: 'Chennai',
        daysLeft: '12 days left',
        price: '₹35,000',
        scopeOfWork: 'Provide complete company secretarial services for a private limited company. This includes drafting and filing of ROC forms, maintaining statutory registers, conducting board meetings, preparing minutes, and ensuring compliance with Companies Act 2013. Provide advisory support on corporate governance and regulatory changes.',
        retainership: 'Retainership',
        attachPdf: 'cs-engagement.pdf',
        email: 'cs@company.com'
    },
    {
        id:7,
        title: 'Payroll Processing',
        location: 'Hyderabad',
        daysLeft: '8 days left',
        price: '₹25,000',
        scopeOfWork: 'Monthly payroll processing for a company with 50 employees. Tasks include preparation of salary sheets, TDS computation, generation of payslips, statutory deductions, PF/ESI compliance, and filing of related returns. Provide ongoing support for employee queries related to payroll and taxes.',
        retainership: 'Retainership',
        attachPdf: null,
        email: 'payroll@company.com'
    },
    {
        id:8,
        title: 'Stock Audit',
        location: 'Kolkata',
        daysLeft: '18 days left',
        price: '₹45,000',
        scopeOfWork: 'Perform a detailed stock audit for a retail chain across multiple locations. Verify inventory records, identify discrepancies, assess wastage and pilferage, and provide recommendations for better stock management. Submit an audit report with observations and suggested process improvements.',
        retainership: 'Assignment',
        attachPdf: 'stock-audit-instructions.pdf',
        email: 'stock.audit@company.com'
    },
    {
        id:9,
        title: 'Financial Modelling',
        location: 'Gurgaon',
        daysLeft: '14 days left',
        price: '₹70,000',
        scopeOfWork: 'Develop a comprehensive financial model for a startup seeking funding. Include revenue projections, expense budgets, cash flow forecasts, and break-even analysis. Validate assumptions, perform scenario analysis, and prepare investor-friendly presentations based on the model. Coordinate with founders for inputs.',
        retainership: 'Assignment',
        attachPdf: null,
        email: 'finance@company.com'
    }
];

export default function AssignmentMobilePage({handleScroll}) {
    const [isSticky, setIsSticky] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [assignmentDetail, setAssignmentDetail] = useState(rfpList[0]);
    const [isDetailOpen, setIsDetailOpen] = useState(false);
    const [showRaiseRFP, setShowRaiseRFP] = useState(false);

    const callFunctionToHandleScroll = (event) => {
        handleScroll(event);
        const scrollTop = event.detail.scrollTop;

        if (scrollTop < lastScrollTop) {
            // Scrolling UP → stick
            setIsSticky(false);
        } else {
            // Scrolling DOWN → unstick
            setIsSticky(true);
        }

        setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    const handleDetailItemClick = (jobDetail)=>{
        setAssignmentDetail(jobDetail);
        setIsDetailOpen(true);
    }

    return (
        <IonPage>
            <div className={`filter-header-wrapper ${isSticky ? "sticky" : ""}`}>
                <div className="filter-header assignment_filter_wraper">
                    <IonButton fill="clear" size="small" onClick={() => setShowRaiseRFP(true)} className={"filter-btn add_assignment_button"}>
                        <IonIcon icon={addCircleSharp}></IonIcon>
                    </IonButton>
                    <IonButton fill="clear" size="small" onClick={() => setIsFilterOpen(true)} className="filter-btn">
                        <IonIcon icon={funnelOutline}/>
                    </IonButton>
                    <div className="tags">
                        <span className="tag" onClick={() => setIsFilterOpen(true)}>Assignment Type</span>
                        <span className="tag" onClick={() => setIsFilterOpen(true)}>Location</span>
                        <span className="tag" onClick={() => setIsFilterOpen(true)}>Minimum Price</span>
                        <span className="tag" onClick={() => setIsFilterOpen(true)}>Scope of Work</span>
                        <span className="tag" onClick={() => setIsFilterOpen(true)}>Days Left</span>
                    </div>
                </div>
            </div>
            <IonContent fullscreen scrollEvents={true} onIonScroll={callFunctionToHandleScroll}
                        className="mobile-job-list-page page-content">
                <div className="matrimony-list">
                    {rfpList.map((assignment) => (
                        <AssignmentDataCard key={assignment.id} handleDetailItemClick={handleDetailItemClick}
                                            assignment={assignment}/>
                    ))}
                </div>
            </IonContent>
            <AssignmentsDetailSheetPopup
                isOpen={isDetailOpen}
                onDidDismiss={() => setIsDetailOpen(false)}
                assignmentDetail={assignmentDetail}/>
            <AssignmentsFilterSheetModal
                isOpen={isFilterOpen}
                onDidDismiss={() => setIsFilterOpen(false)}
            />
            <RaiseRFPModal isOpen={showRaiseRFP} onDismiss={() => setShowRaiseRFP(false)}/>
        </IonPage>
    );
}
