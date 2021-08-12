import React from 'react'
import {NavLink} from 'react-router-dom' 


export const Navbar: React.FC = () => (
    <div>
    <nav>
    <div className="nav-wrapper purple darken-2 px1">
      <a href="/" className="brand-logo">React + Typescript</a>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><NavLink to="/">Список дел</NavLink></li>
        <li><NavLink to="/about">Информация</NavLink></li>
      </ul>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
    <li><NavLink to="/">Список дел</NavLink></li>
    <li><NavLink to="/about">Информация</NavLink></li>
  </ul>
  </div>
)