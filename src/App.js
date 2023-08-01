import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import ViewCandidates from "./pages/ViewCandidates.js";
import Profile from "./pages/Profile.js";
import Stance from "./pages/Stance.js";

function App() {
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
