import React from "react";
import {Link, NavLink} from "react-router-dom"

function NavBar() {
  const path = window.location.pathname 
  const splitPath = path.split(':')

  return (
    <nav className="w-full h-14 flex justify-between px-9 items-center text-gray-300">
      <div>
        <h2 className="text-2xl tracking-wider font-semibold"><Link to="/">Hava Durumu</Link></h2>
      </div>
      <ul className="text-center tracking-wide">
        <li className="border-b-2 w-14  border-gray-300 "><NavLink to='/map'>Harita</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;
