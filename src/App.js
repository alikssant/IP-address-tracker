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
      <DisplayIp />
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

function DisplayIp() {
  return (
    <div className="ip-display-box">
      <div className="header-ip-display">
        <div className="ip-title">IP Address</div>
        <span className="ip-result">118.235.89.211</span>
      </div>
      <div className="header-ip-display">
        <div className="ip-title">Location</div>
        <span className="ip-result">London</span>
      </div>
      <div className="header-ip-display">
        <div className="ip-title">Timezone</div>
        <span className="ip-result">UTC +05:00</span>
      </div>
      <div className="header-ip-display">
        <div className="ip-title">ISP</div>
        <span className="ip-result">U-Mobile (UK Telecom)</span>
      </div>
    </div>
  );
}
