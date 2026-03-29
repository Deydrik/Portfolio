import { Link } from 'react-router-dom';
import { useTheme, themes } from '../context/ThemeContext';

function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="navbar-card">
        <span className="logo">Mario</span>

        <ul className="nav-links">
          <li className="nav-link"><Link to="/">Home</Link></li>
          <li className="nav-link"><Link to="/about">About</Link></li>
          <li className="nav-link"><Link to="/projects">Projects</Link></li>
        </ul>

        <select
          className="theme-select"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          {themes.map((t) => (
            <option key={t.id} value={t.id}>{t.label}</option>
          ))}
        </select>
      </div>
    </nav>
  );
}

export default Navbar;