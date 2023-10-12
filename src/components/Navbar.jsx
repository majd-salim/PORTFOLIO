import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav>
        <a>
        <Link to="/">Majd Salim</Link>
        </a>
        <div className='navbar'>
        <a>
        <Link to="/about">About</Link>
        </a>
        <a>
        <Link to="/contact">Contact</Link>
        </a>
        <a>
        <Link to="/projects">Project</Link>
        </a>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;