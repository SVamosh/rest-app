
import "./style.css";
import { NavLink } from "react-router-dom";

function Navbar() {
    const normalLink = 'navbar__link';
    const activeLink = 'navbar__link navbar__link--active';
    
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li className="navbar__item">
                    <NavLink className={({isActive}) => isActive ? activeLink : normalLink} to="/">
                        HOME
                    </NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink className={({isActive}) => isActive ? activeLink : normalLink} to="/menu">
                        MENU
                    </NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink className={({isActive}) => isActive ? activeLink : normalLink} to="/about">
                        ABOUT US
                    </NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink className={({isActive}) => isActive ? activeLink : normalLink} to="/events">
                        EVENTS
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export { Navbar };