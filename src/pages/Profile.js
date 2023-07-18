import "../css/styles.css";
import "../css/profile.css";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar.js";

function Profile() {
    const location = useLocation();
    const state = location.state;
    const stances = state.candidate.keyStances;

    return (
        <div className="profile-container">
            <Navbar />
            <main className="profile">
                <section className="cand-info">
                    <img
                        className="profile-photo"
                        src={state.candidate.image}
                    />
                    <h1 className="candidate-name">{state.candidate.name}</h1>
                    <h1 className="candidate-position">
                        {state.candidate.position}
                    </h1>
                    <h1 className="candidate-party">{state.candidate.party}</h1>
                </section>
                <section className="stances">
                    <h1 className="title">Key Stances</h1>
                    <div className="stance-selectors">
                        {stances.map((s, i) => (
                            <a className="stance-selector" key={i}>
                                {s}
                            </a>
                        ))}
                    </div>
                </section>
                <section className="experience-section">
                    <h1 className="title">Experience</h1>
                    <p className="experience">{state.candidate.experience}</p>
                </section>
            </main>
        </div>
    );
}

export default Profile;
