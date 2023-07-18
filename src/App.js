import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import ViewCandidates from "./pages/ViewCandidates.js";
import Profile from "./pages/Profile.js";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/candidates" element={<ViewCandidates />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
