import React,{useState,useEffect} from "react";
import { IonPage, IonContent, IonIcon, IonButton } from "@ionic/react";
import {cashOutline, funnelOutline, locationOutline, lockClosedOutline, star} from "ionicons/icons";
import company1 from "../theme/images/company-1.png";
import company2 from "../theme/images/company-2.png";
import company3 from "../theme/images/company-3.png";
import company4 from "../theme/images/company-4.png";
import company5 from "../theme/images/company-5.png";
import FilterSheetModal from "../components/FilterSheetModal";
import JobPortalDesktopPage from "./JobPortalDesktopPage";

const jobs = [
    {
        id: 1,
        title: "Full Stack Developer (React & Node.js)",
        company: "The Night Marketer",
        rating: 4.3,
        img_url:company1,
        location: "New Delhi",
        experience: "2-5 Yrs",
        tags: ["Redux", "Fullstack Development", "CSS"],
        posted: "1d ago"
    },
    {
        id: 2,
        title: "Full Stack Developer React & Next.js",
        company: "Macgence",
        rating: 4.6,
        img_url:company2,
        location: "Noida",
        experience: "1-6 Yrs",
        tags: ["Computer Science", "Automation", "Front End"],
        posted: "2d ago"
    },
    {
        id: 3,
        title: "Fullstack Developer (PHP + React + Node.js Exposure)",
        company: "BERKOWITS HAIR & SKIN CLINIC",
        rating: 3.1,
        img_url:company3,
        location: "New Delhi",
        experience: "3-5 Yrs",
        salary: "₹ 10-12 Lacs PA",
        tags: ["React", "Continuous Integration", "Legacy"],
        posted: "9d ago"
    },
    {
        id: 4,
        title: "Backend Developer (Node.js & MongoDB)",
        company: "TechNova",
        rating: 4.0,
        img_url:company4,
        location: "Bangalore",
        experience: "2-4 Yrs",
        salary: "₹ 8-10 Lacs PA",
        tags: ["Node.js", "API Development", "MongoDB"],
        posted: "5d ago"
    },
    {
        id: 5,
        title: "Frontend Developer (React.js)",
        company: "PixelCraft",
        rating: 4.5,
        img_url:company5,
        location: "Hyderabad",
        experience: "1-3 Yrs",
        salary: "₹ 6-8 Lacs PA",
        tags: ["React.js", "UI/UX", "HTML", "CSS"],
        posted: "3d ago"
    },
    {
        id: 6,
        title: "Data Analyst",
        company: "InsightData",
        rating: 4.7,
        img_url:company2,
        location: "Pune",
        experience: "2-5 Yrs",
        salary: "₹ 7-9 Lacs PA",
        tags: ["SQL", "Power BI", "Excel", "Python"],
        posted: "1d ago"
    },
    {
        id: 7,
        title: "DevOps Engineer",
        company: "CloudBase",
        rating: 4.2,
        img_url:company1,
        location: "Gurgaon",
        experience: "3-6 Yrs",
        salary: "₹ 12-15 Lacs PA",
        tags: ["AWS", "CI/CD", "Docker", "Kubernetes"],
        posted: "4d ago"
    },
    {
        id: 8,
        title: "Business Analyst",
        company: "StratEdge",
        rating: 4.1,
        img_url:company5,
        location: "Chennai",
        experience: "2-4 Yrs",
        salary: "₹ 5-7 Lacs PA",
        tags: ["Business Analysis", "Agile", "Communication"],
        posted: "2d ago"
    },
    {
        id: 9,
        title: "Mobile App Developer (Flutter)",
        company: "AppVerse",
        rating: 4.4,
        img_url:company3,
        location: "Kolkata",
        experience: "1-3 Yrs",
        salary: "₹ 6-9 Lacs PA",
        tags: ["Flutter", "Android", "iOS", "Firebase"],
        posted: "6d ago"
    },
    {
        id: 10,
        title: "QA Engineer",
        company: "TestLogic",
        rating: 4.0,
        img_url:company4,
        location: "Ahmedabad",
        experience: "2-5 Yrs",
        salary: "₹ 5-7 Lacs PA",
        tags: ["Manual Testing", "Automation", "Selenium"],
        posted: "2d ago"
    }
];


export default function JobPortalPage({handleScroll}) {
    const [isSticky, setIsSticky] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

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

    return (
        <IonPage>
            <IonContent fullscreen scrollEvents={true} onIonScroll={callFunctionToHandleScroll} className="mobile-job-list-page page-content">
                <div className={`filter-header-wrapper ${isSticky ? "sticky" : ""}`}>
                    <div className="filter-header">
                        <IonButton fill="clear" size="small" onClick={()=>setIsFilterOpen(true)} className="filter-btn">
                            <IonIcon icon={funnelOutline} slot="start"/>
                        </IonButton>
                        <div className="tags">
                            <span className="tag" onClick={()=>setIsFilterOpen(true)}>Work mode</span>
                            <span className="tag" onClick={()=>setIsFilterOpen(true)}>Department</span>
                            <span className="tag" onClick={()=>setIsFilterOpen(true)}>Experience</span>
                            <span className="tag" onClick={()=>setIsFilterOpen(true)}>Salary</span>
                            <span className="tag" onClick={()=>setIsFilterOpen(true)}>Role</span>
                            <span className="tag" onClick={()=>setIsFilterOpen(true)}>Category</span>
                            <span className="tag" onClick={()=>setIsFilterOpen(true)}>Education</span>
                        </div>
                    </div>
                </div>

                <div className="job-list">
                    {jobs.map(job => (
                        <div key={job.id} className="job-card">
                            <div className="company-icon">
                                <img alt={"company"} src={job?.img_url}/>
                            </div>
                            <div className="job-info">
                                <h3>{job.title}</h3>
                                <div className="company-rating">
                                    {job.company} <IonIcon icon={star}/> {job.rating}
                                </div>
                                <div className="job-meta">
                                    <IonIcon icon={locationOutline}/> {job.location} &nbsp;|&nbsp;
                                    <IonIcon icon={lockClosedOutline}/> {job.experience}
                                    {job.salary && (
                                        <>
                                            &nbsp;|&nbsp; <IonIcon icon={cashOutline}/> {job.salary}
                                        </>
                                    )}
                                </div>
                                <div className="tags-row">
                                    {job.tags.map((tag, i) => (
                                        <span key={i} className="job-tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="posted">{job.posted}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </IonContent>
            <FilterSheetModal
                isOpen={isFilterOpen}
                onDidDismiss={() => setIsFilterOpen(false)}
            />
        </IonPage>
    );
}
