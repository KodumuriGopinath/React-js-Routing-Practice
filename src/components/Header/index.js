// Write your JS code here
import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <nav>
    <div className="header-container">
      <div className="logo-and-text">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="wave-logo"
        />
        <p className="wave-text">Wave</p>
      </div>
      <ul className="nav-items-list">
        <li>
          <Link className="list-item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="list-item" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="list-item" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)
export default Header
