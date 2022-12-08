import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
  const activeStyle = {
    color: '#121212',
  };

  return (
    <div className="header">
      <nav>
        <h1>
          <NavLink to="/">Bookstore CMS</NavLink>
        </h1>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              BOOKS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="categories"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              CATEGORIES
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="user-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#0290ff" className="bi bi-person-fill" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        </svg>
      </div>
    </div>
  );
};

export default Header;
