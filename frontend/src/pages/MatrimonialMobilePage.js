import React,{useState} from "react";
import { IonPage, IonContent, IonIcon, IonButton } from "@ionic/react";
import {funnelOutline} from "ionicons/icons";
import matrimony1 from "../theme/images/matrimony-img-1.png";
import matrimony2 from "../theme/images/matrimony-img-2.png";
import matrimony3 from "../theme/images/matrimony-img-3.png";
import matrimony4 from "../theme/images/matrimony-img-4.png";
import matrimony5 from "../theme/images/matrimony-img-5.png";
import matrimony6 from "../theme/images/matrimony-img-6.png";
import MatrimonyProfileCard from "../components/MatrimonyProfileCard";
import MatrimonialFilterSheetModal from "../components/MatrimonialFilterSheetModal";
import MatrimonialDetailSheetPopup from "../components/MatrimonialDetailSheetPopup";

const profiles = [
    {
        id: 1,
        name: "Aarav Sharma",
        age: 28,
        height: "5'8\"",
        religion: "Hindu",
        caste: "Brahmin",
        occupation: "Software Engineer",
        location: "New Delhi",
        status: "Looking for a kind-hearted partner",
        profilePic: matrimony6,
    },
    {
        id: 2,
        name: "Priya Patel",
        age: 25,
        height: "5'4\"",
        religion: "Hindu",
        caste: "Patel",
        occupation: "Teacher",
        location: "Mumbai",
        status: "Family-oriented and caring",
        profilePic: matrimony4,
    },
    {
        id: 3,
        name: "Rohan Verma",
        age: 30,
        height: "5'10\"",
        religion: "Hindu",
        caste: "Kshatriya",
        occupation: "Business Analyst",
        location: "Bengaluru",
        status: "Career-focused and adventurous",
        profilePic: matrimony5,
    },
    {
        id: 4,
        name: "Sneha Iyer",
        age: 27,
        height: "5'5\"",
        religion: "Hindu",
        caste: "Iyer",
        occupation: "Doctor",
        location: "Chennai",
        status: "Loves traveling and music",
        profilePic: matrimony2,
    },
    {
        id: 8,
        name: "Pooja Reddy",
        age: 24,
        height: "5'2\"",
        religion: "Hindu",
        caste: "Reddy",
        occupation: "Software Developer",
        location: "Hyderabad",
        status: "Simple and loving family girl",
        profilePic: matrimony1,
    },
    {
        id: 6,
        name: "Anjali Mehta",
        age: 26,
        height: "5'3\"",
        religion: "Hindu",
        caste: "Vaishya",
        occupation: "Chartered Accountant",
        location: "Ahmedabad",
        status: "Looking for an understanding partner",
        profilePic: matrimony4,
    },
    {
        id: 7,
        name: "Karan Joshi",
        age: 31,
        height: "5'11\"",
        religion: "Hindu",
        caste: "Gupta",
        occupation: "Architect",
        location: "Pune",
        status: "Passionate about designing homes",
        profilePic: matrimony5
    },
    {
        id: 9,
        name: "Siddharth Kapoor",
        age: 32,
        height: "6'0\"",
        religion: "Hindu",
        caste: "Punjabi",
        occupation: "Marketing Manager",
        location: "Gurgaon",
        status: "Fun-loving and ambitious",
        profilePic: matrimony6,
    },
    {
        id: 10,
        name: "Neha Desai",
        age: 29,
        height: "5'6\"",
        religion: "Hindu",
        caste: "Gujarati",
        occupation: "HR Manager",
        location: "Surat",
        status: "Values honesty and care",
        profilePic: matrimony3,
    },
    {
        id: 5,
        name: "Vikram Singh",
        age: 29,
        height: "5'9\"",
        religion: "Sikh",
        caste: "Jat",
        occupation: "Entrepreneur",
        location: "Amritsar",
        status: "Family values with modern outlook",
        profilePic: matrimony5,
    },
];

export default function MatrimonialMobilePage({handleScroll}) {
    const [isSticky, setIsSticky] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [matrimonialProfileDetail, setMatrimonialProfileDetail] = useState(profiles[0]);
    const [isDetailOpen, setIsDetailOpen] = useState(false);

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

    const openMatrimonialProfileDetailPanel = (jobDetail)=>{
        setMatrimonialProfileDetail(jobDetail);
        setIsDetailOpen(true);
    }

    return (
        <IonPage>
            <IonContent fullscreen scrollEvents={true} onIonScroll={callFunctionToHandleScroll}
                        className="mobile-job-list-page page-content">
                <div className={`filter-header-wrapper ${isSticky ? "sticky" : ""}`}>
                    <div className="filter-header">
                        <IonButton fill="clear" size="small" onClick={() => setIsFilterOpen(true)}
                                   className="filter-btn">
                            <IonIcon icon={funnelOutline} slot="start"/>
                        </IonButton>
                        <div className="tags">
                            <span className="tag" onClick={() => setIsFilterOpen(true)}>Religion</span>
                            <span className="tag" onClick={() => setIsFilterOpen(true)}>Caste</span>
                            <span className="tag" onClick={() => setIsFilterOpen(true)}>Community</span>
                            <span className="tag" onClick={() => setIsFilterOpen(true)}>Age Range</span>
                            <span className="tag" onClick={() => setIsFilterOpen(true)}>Education</span>
                            <span className="tag" onClick={() => setIsFilterOpen(true)}>Profession</span>
                            <span className="tag" onClick={() => setIsFilterOpen(true)}>Location</span>
                            <span className="tag" onClick={() => setIsFilterOpen(true)}>Marital Status</span>
                            <span className="tag" onClick={() => setIsFilterOpen(true)}>Manglik</span>
                            <span className="tag" onClick={() => setIsFilterOpen(true)}>Language</span>
                        </div>
                    </div>
                </div>

                <div className="matrimony-list">
                    {profiles.map((profile) => (
                        <MatrimonyProfileCard key={profile.id} handleProfileItemClick={openMatrimonialProfileDetailPanel} profile={profile}/>
                    ))}
                </div>
            </IonContent>
            <MatrimonialDetailSheetPopup
                isOpen={isDetailOpen}
                onDidDismiss={() => setIsDetailOpen(false)}
                matrimonialProfileDetail={matrimonialProfileDetail}/>
            <MatrimonialFilterSheetModal
                isOpen={isFilterOpen}
                onDidDismiss={() => setIsFilterOpen(false)}
            />
        </IonPage>
    );
}
