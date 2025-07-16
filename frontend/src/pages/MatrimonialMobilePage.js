import React,{useState} from "react";
import { IonPage, IonContent, IonIcon, IonButton } from "@ionic/react";
import {funnelOutline, manOutline, womanOutline} from "ionicons/icons";
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
    const [selected, setSelected] = useState('');

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
        <>
            {(!selected) ?
                 <IonPage>
                   <IonContent fullscreen className="looking-for-page page-content">
                    <h2 className="looking-title">Looking For?</h2>

                    <div className="option-buttons">
                        <div className={`option-card ${selected === 'Bride' ? 'active' : ''}`}
                             onClick={() => setSelected('Bride')}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="var(--primary-color)" height="80px" width="80px" version="1.2" baseProfile="tiny" id="Layer_1" viewBox="0 0 256 256" ><path d="M182.7,183.7c1-0.6,1.8-1.2,2.8-2.1c6.4-5.7,9.1-15.8,9.1-31.3c0-43.9-24.3-124.1-56.3-144c0-2.8-2.4-5.2-5.5-5.2  c-1.2,0-2.4,0.2-3.6,1.3c-0.1,0-0.2,0-0.2,0c-0.8-1.1-2.3-2.3-4-2.3c-1.8,0-3.3,1.3-4,2.3c0,0-0.1,0-0.2,0c-1.2-1.1-2.4-1.3-3.6-1.3  c-3.1,0-5.5,2.3-5.5,5.1c-32,19.7-56.3,100.1-56.3,144c0,15.5,2.8,25.6,9.1,31.3c1,1,1.8,1.5,2.8,2.1c-6.1,20.1-9.1,38.3-10.3,54.1  c0,1.8-0.3,3.5-0.3,4.6h4.9h36v1.9c0,6.7,5,11.9,11.7,11.9s11.7-5.2,11.7-11.9v-1.8h7.4v1.9c0,6.7,5,11.9,11.7,11.9  s11.7-5.2,11.7-11.9v-1.9h36.8h4.9c0-1.1-0.3-2.7-0.3-4.6C191.8,222,188.7,203.9,182.7,183.7z M65.7,179.8c-5.7-5.2-8.5-15-8.5-29.5  c0-41.4,23.5-119,53.6-140.7c-2.8,3.4-4.4,7.6-4.4,12.5c0,10.3,7.8,18.6,18.4,19.1c10.6-0.5,18.4-8.8,18.4-19.1  c0-4.9-1.6-9.1-4.4-12.5c30.2,21.7,53.6,99.3,53.6,140.7c0,14.7-2.8,24.3-8.5,29.5c-0.6,0.6-1.2,1-1.8,1.5  c-1.8-5.5-3.6-11.3-5.7-16.8c-0.6-1.2-1-2.4-1.5-3.6c-6.4-15.2-14.7-31-25.6-47.1c-0.6-1-2.4-4.2-2.8-6.7  c-1.2-9.4,2.4-24.3,5.2-33.2l16.1,54.5c1,3.4,3.1,5.5,5.2,6.4c1,0.3,1.8,0.6,2.8,0.6c5.5,0.3,10.6-4.9,8.5-12.7l-18.3-59.7  c-0.6-1.8-1.2-3.7-2.4-5.8c-3.6-6.4-9.7-13.2-20.6-13.2h-18.4h-18.3C95.5,43.9,89.3,50.6,86,57c-1.2,2.1-1.8,4-2.4,5.8l-18.3,59.7  c-2.1,8,3.1,13.1,8.5,12.8c1,0,1.8-0.3,2.8-0.6c2.1-1,4.2-3.1,5.2-6.4l16.1-54.5c2.8,8.8,6.4,23.8,5.2,33.2  c-0.3,2.4-2.1,5.7-2.8,6.7c-10.9,16.1-19.2,32-25.6,47.1c-0.6,1.2-1,2.4-1.5,3.6c-2.1,5.5-3.9,11.3-5.7,16.8  C66.8,180.7,66.3,180.4,65.7,179.8z M71.2,185.9c0-1,0.3-1.6,0.6-2.5c1.5-5.2,3.4-10.7,5.5-16.1c0.3-1.2,1-2.1,1.2-3.4  c6.4-15.5,14.7-31.6,25.6-47.5c1-1,3.1-5.2,3.6-8.8c1.2-10.3-2.4-25.3-5.2-34.4c0.3-5.7,5.4-9.4,11.1-9.4c4.4,0,8.2,2.7,10.3,6.3  v4.7h2.1v-4.6c1.1-3.6,5.6-6.3,10.1-6.3c5.7,0,10.6,3.6,10.9,9.4c-2.8,9.1-6.4,24.1-5.2,34.4c0.6,3.6,2.8,8,3.6,8.8  c10.9,15.8,19.2,32,25.6,47.5c0.3,1.2,1,2.1,1.2,3.4c2.1,5.5,3.9,10.9,5.5,16.1c0.3,1,0.6,1.6,0.6,2.5c5.4,18.3,8.1,35.2,9.8,49.5  H61.4C62.9,221.2,65.7,204.3,71.2,185.9z"/></svg>
                        </div>
                        <div className={`option-card ${selected === 'Bridegroom' ? 'active' : ''}`}
                             onClick={() => setSelected('Bridegroom')}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="var(--primary-color)" height="80px" width="80px" version="1.1" id="Layer_1" viewBox="0 0 512 512" >
                                <g>
                                    <g>
                                        <circle cx="256.004" cy="42.143" r="42.143"/>
                                    </g>
                                </g>
                                                                <g>
                                    <g>
                                        <path
                                            d="M358.697,145.59c-0.133-26.399-21.718-47.877-48.118-47.877h-17.954c-4.181,11.169-31.131,83.162-36.626,97.84    c-5.494-14.676-32.446-86.673-36.626-97.84h-17.954c-26.4,0-47.984,21.478-48.117,47.877l-0.751,149.38    c-0.057,11.229,9.002,20.378,20.231,20.435c0.036,0,0.07,0,0.104,0c11.181,0,20.274-9.036,20.331-20.231l0.751-149.38    c0.012-2.256,1.846-4.077,4.101-4.07c2.255,0.007,4.079,1.836,4.079,4.091c-0.006,202.263-0.216,19.047-0.216,341.785    c0,13.475,10.924,24.4,24.4,24.4s24.4-10.924,24.4-24.4V292.571h10.535V487.6c0,13.475,10.924,24.4,24.4,24.4    s24.4-10.924,24.4-24.4c0-317.693-0.212-145.664-0.216-341.785c0-2.255,1.825-4.085,4.079-4.091    c2.255-0.007,4.09,1.814,4.101,4.07l0.751,149.38c0.057,11.195,9.148,20.231,20.331,20.231c0.034,0,0.07,0,0.104,0    c11.229-0.057,20.286-9.206,20.231-20.435L358.697,145.59z M298.16,165.394h-18.873v-8.87h18.873V165.394z"/>
                                    </g>
                                </g>
                                <g>
                                <g>
                                    <path
                                        d="M274.826,87.971c-0.899-0.531-2.011-0.549-2.927-0.045l-15.9,8.742l-15.9-8.742c-0.915-0.503-2.028-0.486-2.927,0.045    c-0.899,0.531-1.45,1.498-1.45,2.542v6.864v13.049c0,1.044,0.551,2.011,1.45,2.542c0.899,0.531,2.011,0.549,2.927,0.045    l15.9-8.742l15.9,8.742c0.916,0.505,2.029,0.487,2.927-0.044c0.899-0.531,1.45-1.498,1.45-2.542v-13.05v-6.864    C276.276,89.469,275.725,88.502,274.826,87.971z"/>
                                </g>
                            </g>
                                                            <g>
                                <g>
                                    <circle cx="256.004" cy="126.029" r="5.544"/>
                                </g>
                            </g>
                                                            <g>
                                <g>
                                    <circle cx="256.004" cy="152.649" r="5.544"/>
                                </g>
                            </g>
                            </svg>
                        </div>
                    </div>

                       <p className="description">
                           Begin your journey to love and companionship today. Connect with caring individuals, discover true compatibility, and experience the joy of building a lasting relationship with the one who’s meant for you.
                       </p>

                       <div className="rings-image">
                           <svg xmlns="http://www.w3.org/2000/svg"
                                fill="#ff9e00" width="150px" height="150px" version="1.1" id="Layer_1" viewBox="0 0 512 512">
                                <g>
                                    <g>
                                        <path
                                            d="M371.769,176.364l30.47-30.47l-21.71-25.265h-52.305l-21.71,25.265l30.47,30.47    c-29.557,3.279-57.658,14.863-80.982,33.507c-23.324-18.644-51.425-30.228-80.982-33.507l30.47-30.47l-21.71-25.265h-52.305    l-21.71,25.265l30.47,30.47C61.471,185.049,0,251.988,0,333.024c0,86.914,70.71,157.625,157.625,157.625    c35.834,0,70.513-12.2,98.375-34.472c27.862,22.272,62.542,34.472,98.375,34.472C441.29,490.649,512,419.938,512,333.024    C512,251.988,450.529,185.049,371.769,176.364z M327.237,145.11l7.97-9.275h38.337l7.969,9.275l-27.138,27.138L327.237,145.11z     M130.486,145.11l7.97-9.275h38.337l7.969,9.275l-27.138,27.138L130.486,145.11z M157.625,475.441    c-78.529,0-142.417-63.888-142.417-142.417s63.888-142.417,142.417-142.417c34.337,0,67.503,12.392,93.387,34.894    c8.035,6.984,15.308,14.898,21.618,23.522c17.933,24.508,27.412,53.555,27.412,84.002c0,27.573-7.775,54-22.563,76.946    c-0.192-0.192-0.376-0.39-0.566-0.583c-0.834-0.847-1.659-1.702-2.465-2.574c-0.357-0.386-0.705-0.781-1.055-1.172    c-0.661-0.736-1.315-1.479-1.955-2.233c-0.368-0.433-0.731-0.869-1.092-1.308c-0.618-0.751-1.225-1.513-1.823-2.28    c-0.337-0.432-0.675-0.863-1.005-1.3c-0.655-0.867-1.293-1.748-1.921-2.636c-0.195-0.275-0.396-0.545-0.589-0.823    c10.887-18.81,16.619-40.153,16.619-62.037c0-21.925-5.759-43.301-16.685-62.137l0.061-0.096l-2.58-4.072    c-4.983-7.859-10.817-15.117-17.407-21.662c-2.197-2.182-4.478-4.285-6.839-6.304l-6.234-5.332l-0.161,0.22    c-21.339-15.929-47.37-24.62-74.156-24.62c-68.375,0-124.002,55.628-124.002,124.002s55.627,124.001,124.002,124.001    c26.853,0,52.947-8.733,74.315-24.737c0.095,0.118,0.196,0.231,0.291,0.348c0.539,0.661,1.092,1.311,1.641,1.964    c0.423,0.501,0.841,1.007,1.269,1.503c0.586,0.677,1.185,1.342,1.782,2.01c0.409,0.457,0.812,0.92,1.226,1.372    c0.656,0.716,1.326,1.418,1.995,2.122c0.37,0.389,0.734,0.787,1.108,1.172c0.815,0.841,1.646,1.666,2.48,2.488    c0.228,0.225,0.449,0.456,0.677,0.68C219.606,465.022,189.107,475.441,157.625,475.441z M289.077,246.04    c18.767-14.095,41.689-21.81,65.298-21.81c59.989,0,108.794,48.805,108.794,108.794c0,59.989-48.805,108.792-108.794,108.792    c-23.608,0-46.531-7.715-65.298-21.81c17.142-25.819,26.172-55.735,26.172-86.984C315.249,301.775,306.22,271.858,289.077,246.04z     M256,379.489c-6.834-14.454-10.418-30.285-10.418-46.465c0-16.18,3.584-32.012,10.418-46.465    c6.834,14.454,10.418,30.285,10.418,46.465C266.418,349.204,262.834,365.035,256,379.489z M222.923,246.04    c-17.142,25.819-26.172,55.735-26.172,86.984c0,31.248,9.029,61.165,26.172,86.984c-18.767,14.095-41.69,21.81-65.298,21.81    c-59.989,0-108.794-48.804-108.794-108.793S97.636,224.23,157.625,224.23C181.234,224.23,204.156,231.945,222.923,246.04z     M354.375,475.441c-34.337,0-67.503-12.392-93.387-34.894c-8.034-6.983-15.308-14.898-21.618-23.522    c-17.933-24.508-27.412-53.555-27.412-84.001c0-27.573,7.775-54.001,22.562-76.946c0.194,0.194,0.38,0.394,0.572,0.589    c0.833,0.845,1.656,1.698,2.46,2.569c0.355,0.384,0.701,0.778,1.05,1.167c0.664,0.739,1.32,1.485,1.964,2.243    c0.364,0.429,0.724,0.862,1.082,1.296c0.622,0.756,1.233,1.522,1.835,2.294c0.334,0.428,0.669,0.855,0.997,1.289    c0.655,0.867,1.292,1.748,1.921,2.635c0.196,0.277,0.398,0.548,0.591,0.827c-10.887,18.81-16.619,40.153-16.619,62.038    c0,21.925,5.759,43.3,16.685,62.136l-0.062,0.096l2.581,4.072c6.643,10.478,14.8,19.888,24.245,27.966l6.234,5.332l0.161-0.221    c21.34,15.929,47.369,24.62,74.156,24.62c68.375,0,124.002-55.626,124.002-124.001s-55.626-124.001-124.002-124.001    c-26.853,0-52.947,8.733-74.315,24.738c-0.095-0.118-0.196-0.231-0.291-0.348c-0.538-0.66-1.089-1.309-1.638-1.96    c-0.424-0.503-0.844-1.011-1.274-1.508c-0.58-0.67-1.173-1.329-1.764-1.989c-0.416-0.464-0.825-0.935-1.246-1.394    c-0.642-0.701-1.298-1.387-1.951-2.075c-0.385-0.406-0.763-0.818-1.153-1.221c-0.781-0.805-1.577-1.594-2.373-2.382    c-0.262-0.259-0.516-0.525-0.78-0.783c24.804-19.075,55.302-29.493,86.786-29.493c78.529,0,142.417,63.888,142.417,142.417    C496.792,411.554,432.904,475.441,354.375,475.441z"/>
                                    </g>
                                </g>
                                                               <g>
                                    <g>
                                        <rect x="248.396" y="21.351" width="15.208" height="47.344"/>
                                    </g>
                                </g>
                                                               <g>
                                    <g>

                                            <rect x="294.983" y="52.217" transform="matrix(0.4198 -0.9076 0.9076 0.4198 130.5873 323.9224)"
                                                  width="47.343" height="15.207"/>
                                    </g>
                                </g>
                                                               <g>
                                    <g>
                                        <rect x="185.738" y="36.156" transform="matrix(0.9076 -0.4198 0.4198 0.9076 -7.2537 86.6932)" width="15.207"
                                              height="47.343"/>
                                    </g>
                                </g>
                                </svg>
                       </div>
                   </IonContent>
                 </IonPage>
                :
                <IonPage>
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
                    <IonContent fullscreen scrollEvents={true} onIonScroll={callFunctionToHandleScroll}
                                className="mobile-job-list-page page-content">

                        <div className="matrimony-list">
                            {profiles.map((profile) => (
                                <MatrimonyProfileCard key={profile.id}
                                                      handleProfileItemClick={openMatrimonialProfileDetailPanel}
                                                      profile={profile}/>
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
            }
        </>
    );
}
