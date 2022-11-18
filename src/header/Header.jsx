import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {

  return (
    <div className="header">
      <h1>Header</h1>
      <nav className="top-nav">
        <Link to="/" className="top-nav-link head-home">Home</Link>
        <Link to="/about" className="top-nav-link head-about">About</Link>
        <Link to="/projects" className="top-nav-link head-projects">Projects</Link>
        <Link to="https://www.linkedin.com/in/jordan-wallace-34a594170/" className="top-nav-link head-contact">Projects</Link>
      </nav>
    </div>
  )
}

export default Header