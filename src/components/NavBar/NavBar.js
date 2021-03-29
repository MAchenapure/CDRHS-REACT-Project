import Styles from './NavBar.css'
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import PachaBrand from '../../images/pacha.png';

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-light header-container">
        <div className="container-fluid">
            <NavLink to={`/`} className="navbar-brand">
                <img src={PachaBrand} alt="Pacha Sustentable" width="200" className="d-inline-block"/>
            </NavLink>
            <CartWidget />
        </div>

        <div className="container-fluid">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse header-cat-container" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-link-item">
                        <NavLink to={`/category/bazar`} className="nav-link">Bazar</NavLink>
                    </li>
                    <li className="nav-link-item">
                        <NavLink to={`/category/cuidado-personal`} className="nav-link">Cuidado personal</NavLink>
                    </li>
                    <li className="nav-link-item">
                        <NavLink to={`/category/huerta`} className="nav-link">Huerta</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);    

export default NavBar;