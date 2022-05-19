import React from 'react'
import { Link } from 'react-router-dom'
import "./header.scss"

const Header: React.FC = () => {
    return (
      <header className="header">
        <div className="header__contents">
          <div className="header__h1">
            <Link to="/" className="header__a">Canban</Link>
          </div>
          <nav className="header__navi">
            <ul className="header__navi__ul">
              <li><Link to="/bookmark" className="header__bookmark">お気に入り</Link></li>
              <li><Link to="/user" className="header__user">ユーザー</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    )
}

export default Header