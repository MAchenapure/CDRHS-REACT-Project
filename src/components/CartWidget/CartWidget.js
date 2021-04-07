import Styles from './CartWidget.css';
import CartIcon from '../../images/cart.png';
import { NavLink } from 'react-router-dom';

const CartWidget = ({cartLength}) => (
    <div className="nav-item header-cart-container">
        <NavLink to='/cart'>
            <img src={CartIcon} alt="Pacha Sustentable" className="header-cart-image"/>
            <span className="badge bg-secondary rounded-pill bg-light text-dark">{cartLength}</span>
        </NavLink>
    </div>
);

export default CartWidget;