import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home.js";
import ViewCandidates from "./pages/ViewCandidates.js";
import Profile from "./pages/Profile.js";
import Stance from "./pages/Stance.js";
import ReactGA from "react-ga";

const G_ID = process.env.G_ID;

ReactGA.initialize(G_ID);

function App() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <HashRouter basename="/">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/candidates" element={<ViewCandidates />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/stance" element={<Stance />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
