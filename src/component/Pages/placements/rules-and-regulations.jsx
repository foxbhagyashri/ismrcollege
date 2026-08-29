import React from "react";
import "./PlacementRules.css";
import SEO from "../../SEO";

const PlacementRules = () => {
    return (
        <>
            <SEO
                title="Placement Rules & Regulations | ISMR Pune"
                description="Read the official placement cell guidelines, student eligibility criteria, code of conduct, and recruitment rules at ISMR Pune."
                canonical="https://ismrpune.edu.in/placements/rules-and-regulations"
            />
            {/* ---------- TOP BANNER ---------- */}
            <div className="placement-banner">
                <div className="placement-overlay">
                    <h1 className="placement-title">
                        Placement Rules <span>& Regulations</span>
                    </h1>
                    <p className="placement-breadcrumb">
                        Placement • Placement Rules & Regulations
                    </p>
                </div>
            </div>

            {/* ---------- BREADCRUMB BAR ---------- */}


            {/* ---------- BODY SECTION ---------- */}
            <div className="content-section">
                <div className="content-container">
                    <h2 className="content-title">Placement Rules & Regulations</h2>

                    <p>
                        1. Final-year students seeking jobs must register for campus placements with their respective department.
                    </p>
                    <p>
                        2.	Minimum 90% attendance is compulsory to participate in the placement process.
                    </p>
                    <p>
                        3.	Students must submit all assignments on time and have no backlogs in the first three semesters.
                    </p>
                    <p>
                        4.	Students should read all placement announcements, check company details on the website, and inform the Training & Placement Department if they wish to appear for a drive.
                    </p>
                    <p>5.	It is the student’s responsibility to regularly check all notices, updates, shortlisted names, etc., on the department and placement office notice boards, and report on time for all processes.
                    </p>
                    <p>6.	Missing updates due to not checking the notice board or email will not be accepted as an excuse.</p>
                    <p>7.	Students who do not meet the eligibility criteria required by a company will not be allowed to appear for that placement drive.</p>
                    <p>8.	Students must wear college uniform only for every placement activity and carry a folder containing:</p>

                    <ul>
                        <li>	Multiple copies of their resume</li>
                        <li>	Passport-size colour photographs</li>
                        <li>   Photocopies of educational certificates (10th, 12th, Graduation)</li>
                        <li>	College ID card</li>
                        <li>	Government ID/address proof any 1 (Driving Licence, Passport, PAN, Aadhaar, Voter ID)</li>
                        <li>If a selected student rejects the job offer, he/she will be considered placed from our side and no further opportunity will be given to him/her.</li>
                    </ul>


                    <p>9.	Students must maintain discipline, ethics, and respectful behaviour throughout the placement process. Any student found violating company protocols or bringing disrepute to the institute will be debarred.</p>
                    <p>10.	Students who do not apply for three or more suitable job opportunities will be considered not interested, and no further opportunities will be provided.</p>
                    <p>11.	After applying for a job, if a student fails to attend the interview, he/she will be debarred from the placement process.</p>
                    <p>12.	If a selected student rejects the job offer, he/she will also be debarred from all further placement activities.</p>



                </div>
            </div>
        </>
    );
};

export default PlacementRules;
