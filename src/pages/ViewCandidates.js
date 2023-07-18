import "../css/styles.css";
import "../css/viewcandidates.css";
import Navbar from "../components/Navbar.js";
import Biden from "../img/biden.svg";
import Trump from "../img/trump.svg";
import Warren from "../img/warren.svg";
import Cruz from "../img/cruz.svg";
import { useState } from "react";
import Candidate from "../components/Candidate.js";

function ViewCandidates() {
    const [isCityCouncil, setIsCityCouncil] = useState(true);
    const [cityCouncilCandidates, setCityCouncilCandidates] = useState([
        {
            image: Biden,
            name: "Joe Biden",
            position: "Candidate",
            party: "Democrat",
            experience: `I have had the privilege of serving in various roles throughout my career, making a positive impact on the community. I currently hold the position of Senator in the United States Senate, where I have been serving since January 2010. During my tenure, I have been actively involved in shaping policies and have authored and sponsored important legislation on healthcare reform. Additionally, I have been a strong advocate for improving access and affordability in the field of education. Furthermore, I have consistently championed environmental protection and have been dedicated to advancing sustainable energy policies.

Prior to my work in the Senate, I served as the Mayor of the City of Springfield from January 2005 to December 2009. In this role, I successfully implemented economic development strategies that attracted new businesses, created job opportunities, and revitalized our local economy. I also prioritized public safety by introducing community policing programs, fostering closer relationships between law enforcement and residents. Moreover, I led initiatives to modernize the city's infrastructure, enhancing the quality of life for all our residents.

Throughout my career, I have demonstrated a commitment to public service and a track record of delivering results. I am proud of the progress we have made and look forward to continuing to serve and make a positive difference in our community.`,
            keyStances: ["Thing1", "Thing2", "Thing3"],
        },
        {
            image: Trump,
            name: "Donald Trump",
            position: "Candidate",
            party: "Republican",
            experience: `I have had the privilege of serving in various roles throughout my career, making a positive impact on the community. I currently hold the position of Senator in the United States Senate, where I have been serving since January 2010. During my tenure, I have been actively involved in shaping policies and have authored and sponsored important legislation on healthcare reform. Additionally, I have been a strong advocate for improving access and affordability in the field of education. Furthermore, I have consistently championed environmental protection and have been dedicated to advancing sustainable energy policies.

Prior to my work in the Senate, I served as the Mayor of the City of Springfield from January 2005 to December 2009. In this role, I successfully implemented economic development strategies that attracted new businesses, created job opportunities, and revitalized our local economy. I also prioritized public safety by introducing community policing programs, fostering closer relationships between law enforcement and residents. Moreover, I led initiatives to modernize the city's infrastructure, enhancing the quality of life for all our residents.

Throughout my career, I have demonstrated a commitment to public service and a track record of delivering results. I am proud of the progress we have made and look forward to continuing to serve and make a positive difference in our community.`,
            keyStances: ["Thing1", "Thing2", "Thing3"],
        },
    ]);

    const [schoolCommiteeCandidates, setSchoolCommiteeCandidates] = useState([
        {
            image: Warren,
            name: "Elizabeth Warren",
            position: "Candidate",
            party: "Democrat",
            experience: `I have had the privilege of serving in various roles throughout my career, making a positive impact on the community. I currently hold the position of Senator in the United States Senate, where I have been serving since January 2010. During my tenure, I have been actively involved in shaping policies and have authored and sponsored important legislation on healthcare reform. Additionally, I have been a strong advocate for improving access and affordability in the field of education. Furthermore, I have consistently championed environmental protection and have been dedicated to advancing sustainable energy policies.

Prior to my work in the Senate, I served as the Mayor of the City of Springfield from January 2005 to December 2009. In this role, I successfully implemented economic development strategies that attracted new businesses, created job opportunities, and revitalized our local economy. I also prioritized public safety by introducing community policing programs, fostering closer relationships between law enforcement and residents. Moreover, I led initiatives to modernize the city's infrastructure, enhancing the quality of life for all our residents.

Throughout my career, I have demonstrated a commitment to public service and a track record of delivering results. I am proud of the progress we have made and look forward to continuing to serve and make a positive difference in our community.`,
            keyStances: ["Thing1", "Thing2", "Thing3"],
        },
        {
            image: Cruz,
            name: "Ted Cruz",
            position: "Candidate",
            party: "Republican",
            experience: `I have had the privilege of serving in various roles throughout my career, making a positive impact on the community. I currently hold the position of Senator in the United States Senate, where I have been serving since January 2010. During my tenure, I have been actively involved in shaping policies and have authored and sponsored important legislation on healthcare reform. Additionally, I have been a strong advocate for improving access and affordability in the field of education. Furthermore, I have consistently championed environmental protection and have been dedicated to advancing sustainable energy policies.

Prior to my work in the Senate, I served as the Mayor of the City of Springfield from January 2005 to December 2009. In this role, I successfully implemented economic development strategies that attracted new businesses, created job opportunities, and revitalized our local economy. I also prioritized public safety by introducing community policing programs, fostering closer relationships between law enforcement and residents. Moreover, I led initiatives to modernize the city's infrastructure, enhancing the quality of life for all our residents.

Throughout my career, I have demonstrated a commitment to public service and a track record of delivering results. I am proud of the progress we have made and look forward to continuing to serve and make a positive difference in our community.`,
            keyStances: ["Thing1", "Thing2", "Thing3"],
        },
    ]);

    const changeToCityCouncil = () => {
        setIsCityCouncil(true);
    };

    const changeToSchoolCommitee = () => {
        setIsCityCouncil(false);
    };

    return (
        <div className="view-candidates">
            <Navbar />
            <main className="selection-screen">
                <div className="selectors">
                    <button
                        className="city-council"
                        onClick={changeToCityCouncil}
                    >
                        City Council
                    </button>
                    <button
                        className="school-committee"
                        onClick={changeToSchoolCommitee}
                    >
                        School Commitee
                    </button>
                </div>
                <div className="candidates">
                    {isCityCouncil &&
                        cityCouncilCandidates.map((c, i) => (
                            <Candidate candidate={c} key={i} />
                        ))}
                    {!isCityCouncil &&
                        schoolCommiteeCandidates.map((c, i) => (
                            <Candidate candidate={c} key={i} />
                        ))}
                </div>
            </main>
        </div>
    );
}
export default ViewCandidates;
