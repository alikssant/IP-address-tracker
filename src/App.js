export default function App() {
  return (
    <div className="main">
      <Header />
      <Search />
    </div>
  );
}

function Header() {
  return <h3 className="header">IP Address Tracker</h3>;
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
