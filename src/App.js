export default function App() {
  return (
    <div className="main">
      <Header />
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
    <input
      className="search"
      type="text"
      placeholder="Search for any IP address or domain"
    ></input>
  );
}
