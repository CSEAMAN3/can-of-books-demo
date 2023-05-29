import "./Header.css";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container container">
        <h1 className="logo">The Book Hive</h1>
        <nav>
          <ul>
            <Link to="/" className="nav-link">
              <li>Home</li>
            </Link>
            <Link to="/about" className="nav-link">
              <li>About</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
