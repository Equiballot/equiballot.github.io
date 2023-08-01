import "../css/styles.css";
import "../css/home.css";
import Navbar from "../components/Navbar.js";

function Home() {
    return (
        <div className="hero">
            <Navbar />

            <main className="landing">
                <section className="info-section">
                    <h1 className="title">When to Vote</h1>
                    <h1 className="subtitle">January 1, 2000</h1>
                </section>
                <section className="info-section">
                    <h1 className="title">Where to Vote</h1>
                    <h1 className="subtitle">Gantcher Center</h1>
                    <p className="info">161 College Ave, Medford, MA 02155</p>
                </section>
                <section className="cta-section">
                    <a className="landing--cta">How to Vote</a>
                    <a className="landing--cta" href="#/candidates">
                        View Candidates
                    </a>
                </section>
            </main>
        </div>
    );
}

export default Home;
