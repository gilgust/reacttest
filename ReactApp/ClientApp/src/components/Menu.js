import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => (
    <header className="row p-2">
        <nav className="nav nav-pills nav-fill">
            <li className="nav-item">
                <NavLink exact to="/"activeClassName="active" className="nav-link">home</NavLink>    
            </li>
            <li className="nav-item">
                <NavLink exact to="/todo/" activeClassName="active" className="nav-link" >todo</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/seminars" activeClassName="active" className="nav-link" >seminars</NavLink>
            </li>
        </nav>
    </header>
)

export default Menu