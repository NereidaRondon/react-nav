import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AppNavBar() {
  let activeClassName = 'active';

  return (
    <nav className="nav">
      <h2>New Site</h2>
      <ul>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeClassName : '')}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeClassName : '')}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
