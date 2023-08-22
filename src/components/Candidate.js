import "../css/styles.css";
import "../css/candidate.css";
import { useNavigate } from "react-router-dom";

function Candidate({ candidate }) {
    const navigate = useNavigate();

    const goToProfile = () => {
        navigate(`/profile/${candidate.id}`);
    };

    return (
        <div className="candidate" onClick={goToProfile}>
            <img className="photo" src={`/img/${candidate.src}`} />
            <div className="candidate-info">
                <h1 className="name">{candidate.name}</h1>
                <h1 className="party">{candidate.party}</h1>
            </div>
        </div>
    );
}

export default Candidate;
