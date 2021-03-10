const CartWidget = () => (
    <div className="nav-item dropdown header-cart-container">
        <a className="nav-link dropdown-toggle" href="index.html" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="images/cart.png" alt="Pacha Sustentable" width="75" className="d-inline-block header-cart-image"/>
        </a>
        <ul className="dropdown-menu dropdown-menu-end header-cart-dropdown-ul" aria-labelledby="navbarDropdownMenuLink">
            <li className="header-cart-dropdown-item">Prod1</li>
            <li className="header-cart-dropdown-item">Prod2</li>
            <li className="header-cart-dropdown-item">Prod3</li>
        </ul>
    </div>
);

export default CartWidget;