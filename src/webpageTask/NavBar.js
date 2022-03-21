import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <header className="home">
        
          <div className="brand-logo">
            <Link to="" className='logo_name'>
              <h2>Your Logo</h2>
            </Link>
          </div>
          <input type="checkbox" id="toggle-btn" />
          <label for="toggle-btn" className="show-menu-btn">
            <i className="fas fa-bars"></i>
          </label>
          <nav className="Nav_items">
            <ul className="navigation">
              <li>
                <Link to="/"> Explore</Link>
              </li>
              <li>
                <Link to="/"> About us</Link>
              </li>
              <li>
                <Link to="/"> cities</Link>
              </li>
              <label for="toggle-btn" className="hide-menu-btn">
                <i className="fas fa-times"></i>
              </label>
            </ul>
          </nav>
          <div className="home_content">
            <div className="title">
              <h1>Rethink Your Living & Renting</h1>
              <h2>make your stay painless with us</h2>
            </div>
            <div className="div_container">
              <div className="first_div">
                <h4>select your city</h4>
              </div>
              <div className="first_div">
                <h4>select your dates</h4>
              </div>
              <div className="first_div">
                <h4>Add guest</h4>
              </div>
              <div className="first_div">
                <h4><i class="fa fa-search" aria-hidden="true"></i>Search</h4>
              </div>
            </div>
          </div>
      </header>
    </div>
  )
}

export default NavBar