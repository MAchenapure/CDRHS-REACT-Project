import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-light header-container">
        <div className="container-fluid">
            <NavLink to={`/`} className="navbar-brand">
                <img src="images/pacha.png" alt="Pacha Sustentable" width="200" className="d-inline-block"/>
            </NavLink>
            <CartWidget />
        </div>
    </nav>
);    

export default NavBar;