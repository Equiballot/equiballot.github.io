import "../css/styles.css";
import "../css/profile.css";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.js";
import allCandidates from "../allCandidates.json";

function Profile() {
    const navigate = useNavigate();
    const params = useParams();
    const candidate = allCandidates.find(
        (candidate) => candidate.id === params.id
    );

    const goToStance = (i) => {
        navigate(`/profile/${candidate.id}/stance${i + 1}`, {
            state: {
                keyStances: candidate.keyStances,
                stanceInfos: candidate.stanceInfo,
                which: i,
            },
        });
    };

    return (
        <div className="profile-container">
            <Navbar />
            <main className="profile">
                <section className="cand-info">
                    <img
                        className="profile-photo"
                        src={`/img/${candidate.src}`}
                    />
                    <h1 className="candidate-name">{candidate.name}</h1>
                    <h1 className="candidate-position">{candidate.position}</h1>
                    <h1 className="candidate-party">{candidate.party}</h1>
                </section>
                <section className="stances">
                    <h1 className="title">Key Stances</h1>
                    <div className="stance-selectors">
                        {candidate.keyStances.map((s, i) => (
                            <a
                                className="stance-selector"
                                key={i}
                                onClick={() => goToStance(i)}
                            >
                                {s}
                            </a>
                        ))}
                    </div>
                </section>
                <section className="experience-section">
                    <h1 className="title">Experience</h1>
                    <p className="experience">{candidate.experience}</p>
                </section>
            </main>
        </div>
    );
}

export default Profile;
