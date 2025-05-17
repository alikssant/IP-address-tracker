import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const KEY = process.env.REACT_APP_API_KEY;
const demoApi = "1.35.67.88";

// fetch(`https://geo.ipify.org/api/v2/country?apiKey=${KEY}&ipAddress=${demoApi}`)
//   .then((res) => res.json())
//   .then((data) => console.log(data));

export default function App() {
  const [ipData, setIpData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIpData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://geo.ipify.org/api/v2/country?apiKey=${KEY}&ipAddress=${demoApi}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setIpData(data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch IP data:", err);
        setError("Could not load IP data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchIpData();
  }, []);

  return (
    <div className="main">
      <Header ipData={ipData} error={error} loading={loading} />
      <div className="map-container"></div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

function Header({ ipData, error, loading }) {
  return (
    <div className="header">
      <h3>IP Address Tracker</h3>
      <Search />
      <DisplayIp ipData={ipData} error={error} loading={loading} />
    </div>
  );
}

function Search({ onSearch }) {
  const [input, setInput] = useState("");

  const isValidInput = (value) => {
    const ipRegex =
      /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;
    const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return ipRegex.test(value) || domainRegex.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidInput(input)) {
      toast.error("❌ Invalid IP address or domain.");
      return;
    }

    onSearch(input);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search"
        type="text"
        placeholder="Search for any IP address or domain"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="arrow-button" type="submit">
        <img src="/images/icon-arrow.svg" alt="arrow icon" />
      </button>
    </form>
  );
}

function DisplayIp({ ipData, error, loading }) {
  if (loading) {
    return (
      <div className="ip-display-box">
        <span className="ip-result">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="ip-display-box">
        <span style={{ color: "red", fontWeight: "bold" }}>{error}</span>
      </div>
    );
  }

  if (!ipData) return null;

  return (
    <div className="ip-display-box">
      <div className="header-ip-display">
        <div className="ip-title">IP Address</div>
        <span className="ip-result">{ipData.ip}</span>
      </div>
      <div className="header-ip-display">
        <div className="ip-title">Location</div>
        <span className="ip-result">
          {ipData.location.region}, {ipData.location.country}
        </span>
      </div>
      <div className="header-ip-display">
        <div className="ip-title">Timezone</div>
        <span className="ip-result">UTC {ipData.location.timezone}</span>
      </div>
      <div className="header-ip-display">
        <div className="ip-title">ISP</div>
        <span className="ip-result">{ipData.isp}</span>
      </div>
    </div>
  );
}
