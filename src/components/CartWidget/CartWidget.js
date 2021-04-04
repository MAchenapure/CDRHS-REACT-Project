import Styles from './CartWidget.css';
import CartIcon from '../../images/cart.png';
import { NavLink } from 'react-router-dom';

const CartWidget = () => (
    <div className="nav-item header-cart-container">
        <NavLink to='/cart'>
            <img src={CartIcon} alt="Pacha Sustentable" className="header-cart-image"/>
        </NavLink>
    </div>
);

export default CartWidget;