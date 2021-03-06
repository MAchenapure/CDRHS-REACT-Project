import Styles from './NavBar.css'
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import PachaBrand from '../../images/pacha.png';
import CartContext from '../../context/CartContext'
import { useContext, useEffect, useState } from 'react';

const NavBar = () => {
    const [cartLength, setCartLength] = useState(0);
    const cartContext = useContext(CartContext);

    useEffect(() => {
        setCartLength(cartContext.length);
    });

    return (
        <nav className="navbar navbar-expand-lg navbar-light header-container">
        <div className="container-fluid">
            <NavLink to={`/`} className="navbar-brand">
                <img src={PachaBrand} alt="Pacha Sustentable" width="200" className="d-inline-block"/>
            </NavLink>
            {cartLength !== 0 && <CartWidget cartLength={cartLength}/>}
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
    )
};

export default NavBar;