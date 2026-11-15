import { useState } from "react";
import "./App.css";

const baseUrl = import.meta.env.BASE_URL;

// Season info. In v1 this moves to a season.json file the app fetches.
const season = {
  name: "Unrivaled Season 3",
  tipOff: "January 8, 2027",
  finale: "March 5, 2027",
};

// The 8 clubs and their 2027 rosters (announced Nov 4, 2026). Everyone starts 0-0.
const clubs = [
  {
    id: "breeze", name: "Breeze BC", coach: "Jarell Christian", instagram: "breezebasketballclub",
    roster: ["Paige Bueckers", "Kahleah Copper", "Dominique Malonga", "Kaitlyn Chen", "DiJonai Carrington", "Monique Billings"],
    wins: 0, losses: 0,
  },
  {
    id: "hive", name: "Hive BC", coach: "Barb Turner", instagram: "hivebc",
    roster: ["Olivia Miles", "Sonia Citron", "Cameron Brink", "Natisha Hiedeman", "Rae Burrell", "Naz Hillmon"],
    wins: 0, losses: 0,
  },
  {
    id: "laces", name: "Laces BC", coach: "Andrew Wade", instagram: "lacesbc",
    roster: ["Jackie Young", "Gabby Williams", "Jess Shepard", "Marine Johannès", "Maddy Siegrist", "Satou Sabally"],
    wins: 0, losses: 0,
  },
  {
    id: "lunar-owls", name: "Lunar Owls BC", coach: "Pokey Chatman", instagram: "lunarowlsbc",
    roster: ["Courtney Williams", "Marina Mabrey", "Napheesa Collier", "Skylar Diggins", "Sydney Taylor", "Temi Fágbénlé"],
    wins: 0, losses: 0,
  },
  {
    id: "mist", name: "Mist BC", coach: "Zach O'Brien", instagram: "mistbc",
    roster: ["Veronica Burton", "Bridget Carleton", "Breanna Stewart", "Arike Ogunbowale", "Kiki Rice", "Izzy Harrison"],
    wins: 0, losses: 0,
  },
  {
    id: "phantom", name: "Phantom BC", coach: "Roneeka Hodges", instagram: "phantombc",
    roster: ["Kelsey Plum", "Kayla McBride", "Aaliyah Edwards", "Natasha Cloud", "Tiffany Hayes", "Li Yueru"],
    wins: 0, losses: 0,
  },
  {
    id: "rose", name: "Rose BC", coach: "Nola Henry", instagram: "rosebc",
    roster: ["Chelsea Gray", "Brittney Sykes", "Shakira Austin", "Aziaha James", "Lexie Hull", "Kayla Thornton"],
    wins: 0, losses: 0,
  },
  {
    id: "vinyl", name: "Vinyl BC", coach: "Teresa Weatherspoon", instagram: "vinylbc",
    roster: ["Allisha Gray", "Rhyne Howard", "Dearica Hamby", "Jordin Canada", "Flau'jae Johnson", "Aneesah Morrow"],
    wins: 0, losses: 0,
  },
];

const logo = (club) => `${baseUrl}logos/unrivaled/${club.id}.png`;

// Leagues the dashboard can show. Only Unrivaled is live for now.
const leagues = [
  { id: "unrivaled", name: "Unrivaled", active: true },
  { id: "wnba", name: "WNBA", active: false },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const schedule = [
  {
    id: 1,
    matchup: "Opening Night",
    date: season.tipOff,
    note: "Matchups announced with the official schedule",
  },
  {
    id: 2,
    matchup: "Regular Season Finale",
    date: season.finale,
    note: "Final standings set the playoff field",
  },
];

const leaderCategories = ["Points", "Rebounds", "Assists", "3PT%"];

function App() {
  // A link straight to a section (like #clubs) opens the dashboard right away
  const [entered, setEntered] = useState(() => window.location.hash !== "");

  function handleEnter() {
    setEntered(true);

    setTimeout(() => {
      document.getElementById("dashboard").scrollIntoView({ behavior: "smooth" });
    }, 300);
  }

  return (
    <main className={`app ${entered ? "entered" : ""}`}>
      <nav className="navbar">
        <img src={`${baseUrl}tp-logo.png`} alt="ThePulse logo" className="nav-logo" />

        <div className="nav-links">
          <a href="#clubs">Clubs</a>
          <a href="#standings">Standings</a>
          <a href="#schedule">Key Dates</a>
          <a href="#leaders">League Leaders</a>
        </div>
      </nav>

      <section className="hero landing-hero">
        <h1>The<span>Pulse</span></h1>

        <h2 className="tagline">Every Game Has a Story.</h2>

        <p className="subtitle">The heartbeat of women&apos;s basketball.</p>

        <button className="scroll-button" onClick={handleEnter}>
          ENTER
        </button>

        <p className="signature">TP • 2027</p>
      </section>

      <section className="dashboard-page" id="dashboard">
        <div className="league-tabs" aria-label="Leagues">
          {leagues.map((league) => (
            <span key={league.id} className={`league-tab ${league.active ? "active" : ""}`}>
              {league.name}
              {!league.active && <small>Coming soon</small>}
            </span>
          ))}
        </div>

        <section className="featured-matchup">
          <p className="featured-label">{season.name}</p>
          <h2>Tip-off: {season.tipOff}</h2>
          <p className="featured-story">
            Standings, league leaders, and a featured game each week start once the season is underway.
          </p>
          <div className="featured-details">
            <span>Regular season ends {season.finale}</span>
          </div>
        </section>

        <section className="clubs-section" id="clubs">
          <h2 className="main-section-title">The Clubs</h2>

          <div className="clubs-grid">
            {clubs.map((club) => (
              <article className="club-card" key={club.id}>
                <img src={logo(club)} alt={`${club.name} logo`} className="club-logo" loading="lazy" />
                <h3>{club.name}</h3>
                <p className="club-coach">Head Coach: {club.coach}</p>
                <ul className="club-roster">
                  {club.roster.map((player) => (
                    <li key={player}>{player}</li>
                  ))}
                </ul>
                <a
                  className="club-instagram"
                  href={`https://www.instagram.com/${club.instagram}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon /> @{club.instagram}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="standings-section" id="standings">
          <h2 className="section-title">Standings</h2>
          <p className="section-note">Pre-season. Every club starts 0-0.</p>

          <table className="standings-table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Club</th>
                <th scope="col">W</th>
                <th scope="col">L</th>
              </tr>
            </thead>
            <tbody>
              {[...clubs]
                .sort((x, y) => y.wins - x.wins || x.losses - y.losses || x.name.localeCompare(y.name))
                .map((club, i) => (
                  <tr key={club.id}>
                    <td>{i + 1}</td>
                    <td>
                      <span className="standings-club">
                        <img src={logo(club)} alt="" />
                        {club.name}
                      </span>
                    </td>
                    <td>{club.wins}</td>
                    <td>{club.losses}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </section>

        <section className="schedule-section" id="schedule">
          <h2 className="section-title">Key Dates</h2>

          <div className="schedule-list">
            {schedule.map((item) => (
              <article className="schedule-card" key={item.id}>
                <h3>{item.matchup}</h3>
                <p>{item.date}</p>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="leaders-section" id="leaders">
          <h2 className="section-title">League Leaders</h2>
          <p className="section-note">Leaders update after opening night.</p>

          <div className="leaders-grid">
            {leaderCategories.map((category) => (
              <article className="leader-card" key={category}>
                <p className="leader-category">{category}</p>
                <h3>Coming soon</h3>
              </article>
            ))}
          </div>
        </section>

        <footer className="footer">
          <p className="footer-brand">The Pulse</p>
          <p className="footer-credit">Project designed and managed by Shanae Revell</p>
          <p className="footer-project">Part of Project Autumn 🍁 | HiddenLeaf Studios 🍃</p>
          <p className="footer-disclaimer">
            Fan project. Not affiliated with Unrivaled or its clubs. Logos and names belong to their owners.
          </p>
        </footer>
      </section>
    </main>
  );
}

export default App;
