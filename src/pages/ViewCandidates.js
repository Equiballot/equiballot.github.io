import "../css/styles.css";
import "../css/viewcandidates.css";
import { useState } from "react";
import Navbar from "../components/Navbar.js";
import Candidate from "../components/Candidate.js";
import cityCouncilCandidates from "../cityCouncilCandidates.json";
import schoolCommitteeCandidates from "../schoolCommitteeCandidates.json";

function ViewCandidates() {
    const [isCityCouncil, setIsCityCouncil] = useState(true);

    const changeToCityCouncil = () => {
        setIsCityCouncil(true);
    };

    const changeToSchoolCommittee = () => {
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
                        onClick={changeToSchoolCommittee}
                    >
                        School Committee
                    </button>
                </div>
                <div className="candidates">
                    {isCityCouncil &&
                        cityCouncilCandidates.map((c, i) => (
                            <Candidate candidate={c} key={i} />
                        ))}
                    {!isCityCouncil &&
                        schoolCommitteeCandidates.map((c, i) => (
                            <Candidate candidate={c} key={i} />
                        ))}
                </div>
            </main>
        </div>
    );
}
export default ViewCandidates;
