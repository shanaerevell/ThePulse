import { useState } from "react";
import "./App.css";

const baseUrl = import.meta.env.BASE_URL;

const games = [
  {
    id: 1,
    awayTeam: "Las Vegas Aces",
    homeTeam: "New York Liberty",
    awayScore: 82,
    homeScore: 79,
    status: "Final",
    topPerformer: "A'ja Wilson - 28 PTS, 12 REB",
    watchOn: "ESPN",
  },
  {
    id: 2,
    awayTeam: "Seattle Storm",
    homeTeam: "Phoenix Mercury",
    awayScore: 76,
    homeScore: 80,
    status: "Live",
    topPerformer: "Awa Fam - 22 PTS, 7 AST",
    watchOn: "Prime Video",
  },
  {
    id: 3,
    awayTeam: "Chicago Sky",
    homeTeam: "Indiana Fever",
    awayScore: 0,
    homeScore: 0,
    status: "7:00 PM",
    topPerformer: "Not started yet",
    watchOn: "ION",
  },
];

const featuredMatchup = {
  awayTeam: "Chicago Sky",
  awayLogo: `${baseUrl}logos/ChicagoSKY.png`,
  awayRecord: "12-5",

  homeTeam: "Indiana Fever",
    homeLogo: `${baseUrl}logos/IndFeverLogo.png`,
  homeRecord: "8-9",
  time: "7:00 PM",
  watchOn: "ION",
  story: "A new chapter in this fierce rivalry. ",
  };

const schedule = [
  {
    id: 1,
    matchup: "Chicago Sky vs Indiana Fever",
    date: "Tonight",
    time: "7:00 PM",
    watchOn: "ION",
  },
  {
    id: 2,
    matchup: "Seattle Storm vs Phoenix Mercury",
    date: "Tomorrow",
    time: "6:30 PM",
    watchOn: "Prime Video",
  },
  {
    id: 3,
    matchup: "Las Vegas Aces vs New York Liberty",
    date: "Friday",
    time: "8:00 PM",
    watchOn: "ESPN",
  },
];

const leagueLeaders = [
  {
    id: 1,
    category: "Points",
    player: "A'ja Wilson",
    stat: "26.9 PPG",
  },
  {
    id: 2,
    category: "Assists",
    player: "Caitlin Clark",
    stat: "8.4 APG",
  },
  {
    id: 3,
    category: "Rebounds",
    player: "Angel Reese",
    stat: "12.1 RPG",
  },
  {
    id: 4,
    category: "Steals",
    player: "Napheesa Collier",
    stat: "2.1 SPG",
  },
  {
    id: 5,
    category: "Blocks",
    player: "A'ja Wilson",
    stat: "2.6 BPG",
  },
  {
    id: 6,
    category: "FG%",
    player: "Brittney Griner",
    stat: "57.8%",
  },
  {
    id: 7,
    category: "3PT%",
    player: "Sabrina Ionescu",
    stat: "44.2%",
  },
];


function App() {
  const [entered, setEntered] = useState(false);

  function handleEnter() {
    setEntered(true);
  
    setTimeout(() => {
      document.getElementById("dashboard").scrollIntoView({ behavior: "smooth",
      });
    }, 300);
  }

  return (
    <main className={`app ${entered ? "entered" : ""}`}>
      <nav className="navbar">
        <img src={`${baseUrl}tp-logo.png`} alt="ThePulse logo" className="nav-logo" />

        <div className="nav-links">
          <a href="#scores">Scores</a>
          <a href="#schedule">Schedule</a>
          <a href="#leaders">League Leaders</a>
        </div>
      </nav>
      <section className="hero landing-hero">
        <h1>The<span>Pulse</span></h1>

<h2 className="tagline">
  Every Game Has a Story.
</h2>

<p className="subtitle">
  Follow every game.
  <br />
  Track every player.
  <br />
  Never miss a moment.
</p>

<button className="scroll-button" onClick={handleEnter}>
  ENTER
</button>

<p className="signature">

  TP • 2026

</p>

      </section>

      <section className="dashboard-page" id="dashboard">
      <section className="games-section" id="scores">
      <section className="featured-matchup">
        <p className="featured-label">Featured Matchup</p>

        <div className="matchup-teams">

  <div className="matchup-team">
    <img
      src={featuredMatchup.awayLogo}
      alt={featuredMatchup.awayTeam}
      className="featured-team-logo"
      />

    <h3>{featuredMatchup.awayTeam}</h3>
    <p className="team-record">
      {featuredMatchup.awayRecord}
      </p>
      </div>
      
      <div className="vs">
        VS
        </div>

  <div className="matchup-team">
    <img
    src={featuredMatchup.homeLogo}
    alt={featuredMatchup.homeTeam}
    className="featured-team-logo"
    />

    <h3>{featuredMatchup.homeTeam}</h3>

    <p className="team-record">
      {featuredMatchup.homeRecord}
      </p>
      </div>
    
    </div>

        <p className="featured-story">{featuredMatchup.story}</p>

        <div className="featured-details">
          <span>{featuredMatchup.time}</span>
          <span> Watch on: {featuredMatchup.watchOn}</span>
        </div>
        </section>

        <h2 className="main-section-title">Today&apos;s Games</h2>

        <div className="games-grid">
          {games.map((game) => (
            <article className="game-card" key={game.id}>
              <p
                className={`game-status ${
                  game.status === "Live"
                    ? "live"
                    : game.status === "Final"
                    ? "final"
                    : "upcoming"
                }`}
              >
                {game.status}
              </p>

              <div className="team-row">
                <span>{game.awayTeam}</span>
                <strong>{game.awayScore}</strong>
              </div>

              <div className="team-row">
                <span>{game.homeTeam}</span>
                <strong>{game.homeScore}</strong>
              </div>

              <p className="top-performer">Top Performer: {game.topPerformer}</p>
              <p className="watch-on">Watch on: {game.watchOn}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="schedule-section" id="schedule">
  <h2 className="section-title">Upcoming Schedule</h2>

  <div className="schedule-list">
    {schedule.map((game) => (
      <article className="schedule-card" key={game.id}>
        <h3>{game.matchup}</h3>
        <p>
          {game.date} at {game.time}
        </p>
        <p>Watch on: {game.watchOn}</p>
      </article>
    ))}
    
  </div>
</section>

<section className="leaders-section" id="leaders">
  <h2 className="section-title">League Leaders</h2>

  <div className="leaders-grid">
    {leagueLeaders.map((leader) => (
      <article className="leader-card" key={leader.id}>
        <p className="leader-category">{leader.category}</p>
        <h3>{leader.player}</h3>
        <strong>{leader.stat}</strong>
      </article>
    ))}
  </div>
</section>

<footer className="footer">
  <p className="footer-brand">The Pulse</p>
  <p className="footer-credit">Project designed and managed by Shanae Revell </p>
  <p className="footer-project">Part of Project Autumn 🍁 | HiddenLeaf Studios 🍃</p>
</footer>

    </section>
    </main>
  );
}

export default App;
