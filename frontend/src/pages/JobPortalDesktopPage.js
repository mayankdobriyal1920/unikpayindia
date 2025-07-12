// JobPortalDesktopPage.tsx
import React, {useState} from 'react';
import { IonPage, IonContent, IonButton, IonIcon } from '@ionic/react';
import { funnelOutline } from 'ionicons/icons';
import FilterSidebar from '../components/FilterSidebar';
import JobCard from '../components/JobCard';
import company1 from "../theme/images/company-1.png";
import company2 from "../theme/images/company-2.png";
import company3 from "../theme/images/company-3.png";
import company4 from "../theme/images/company-4.png";
import company5 from "../theme/images/company-5.png";
import JobDetails from "../components/JobDetails";

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

export default function JobPortalDesktopPage({handleScroll}) {
    const [jobDetailsData, setJobDetailsData] = useState(jobs[0]);
    return (
        <IonPage>
            <IonContent fullscreen scrollEvents={true} onIonScroll={handleScroll} className="job-portal-desktop page-content">
                <div className="job-portal-container">
                    {/* Filter Sidebar */}
                    <aside className="filter-sidebar">
                        <FilterSidebar />
                    </aside>

                    {/* Job List */}
                    <section className="job-list-section">
                        <div className="job-list">
                            {jobs.map((job) => (
                                <JobCard key={job.id} job={job} handleJobItemClick={setJobDetailsData} />
                            ))}
                        </div>
                    </section>

                    {/* Job Details */}
                    <aside className="job-details-sidebar">
                        <div className="job-detail-sidebar-content">
                            <JobDetails jobDetailsData={jobDetailsData}/>
                        </div>
                    </aside>
                </div>
            </IonContent>
        </IonPage>
    );
}
