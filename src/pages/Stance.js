import "../css/styles.css";
import "../css/stance.css";
import "../css/home.css";
import { useLocation } from "react-router-dom";

function Stance() {
    const location = useLocation();
    const state = location.state;
    const keyStances = state.keyStances;
    const stanceInfos = state.stanceInfos;
    const i = state.which;

    return (
        <div className="stance">
            <h1 className="title">{keyStances[i]}</h1>
            <p>{stanceInfos[i]}</p>
        </div>
    );
}

export default Stance;
