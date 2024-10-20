import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Reise Planner </Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">Tipps & Planung</a>
          </li>
          <li>
            <a href="#">Reiseziele</a>
          </li>
          <li>{/* <Link to="/travelplanner">login</Link> */}</li>
          <li>
            <Link to="/travelplanner">Reiseplaner</Link>
          </li>
          <li>
            <Link to="/api">API</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
