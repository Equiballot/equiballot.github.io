import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home.js";
import ViewCandidates from "./pages/ViewCandidates.js";
import Profile from "./pages/Profile.js";
import Stance from "./pages/Stance.js";
import ReactGA from "react-ga4";

ReactGA.initialize("G-61B5TYE8PJ");

function App() {
    return (
        <HashRouter basename="/">
            <Analytics />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/candidates" element={<ViewCandidates />} />
                <Route path="/profile/:id" element={<Profile />} />
                <Route path="/profile/:id/:num" element={<Stance />} />
            </Routes>
        </HashRouter>
    );
}

function Analytics() {
    const location = useLocation();

    useEffect(() => {
        console.log(location);
        ReactGA.send({
            hitType: "pageview",
            page: location.pathname,
            title: `Page ${location.pathname} hit`,
        });
    }, [location]);

    return null;
}

export default App;
