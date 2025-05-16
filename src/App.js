export default function App() {
  return (
    <div className="main">
      <Header />
      <div className="map-container"></div>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h3>IP Address Tracker</h3>
      <Search />
    </div>
  );
}

function Search() {
  return (
    <div className="search-form">
      <input
        className="search"
        type="text"
        placeholder="Search for any IP address or domain"
      />
      <button className="arrow-button">
        <img src="/images/icon-arrow.svg" alt="arrow icon" />
      </button>
    </div>
  );
}
