// JobPortalDesktopPage.tsx
import React, {useState} from 'react';
import { IonPage, IonContent} from '@ionic/react';
import MatrimonyFilterSidebar from "../components/MatrimonyFilterSidebar";
import MatrimonyProfileCard from "../components/MatrimonyProfileCard";
import MatrimonyProfileDetails from "../components/MatrimonyProfileDetails";
import matrimony6 from "../theme/images/matrimony-img-6.png";
import matrimony4 from "../theme/images/matrimony-img-4.png";
import matrimony5 from "../theme/images/matrimony-img-5.png";
import matrimony2 from "../theme/images/matrimony-img-2.png";
import matrimony1 from "../theme/images/matrimony-img-1.png";
import matrimony3 from "../theme/images/matrimony-img-3.png";

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

export default function MatrimonialDesktopPage() {
    const [matrimonialProfileDetail, setMatrimonialProfileDetail] = useState(profiles[0]);
    return (
        <IonPage>
            <IonContent fullscreen className="job-portal-desktop page-content">
                <div className="job-portal-container three-panel-grid">
                    {/* Filter Sidebar */}
                    <aside className="filter-sidebar">
                        <MatrimonyFilterSidebar />
                    </aside>

                    {/* Job List */}
                    <section className="job-list-section">
                        <div className="job-list">
                            {profiles.map((profile) => (
                                <MatrimonyProfileCard key={profile.id} selectedId={matrimonialProfileDetail?.id} profile={profile} handleProfileItemClick={setMatrimonialProfileDetail} />
                            ))}
                        </div>
                    </section>

                    {/* Job Details */}
                    <aside className="job-details-sidebar">
                        <MatrimonyProfileDetails matrimonialProfileDetail={matrimonialProfileDetail}/> {/* Replace with your details component */}
                    </aside>
                </div>
            </IonContent>
        </IonPage>
    );
}
