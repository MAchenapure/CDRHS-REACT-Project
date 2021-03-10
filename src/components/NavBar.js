import CartWidget from './CartWidget';

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-light header-container">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src="images/pacha.png" alt="Pacha Sustentable" width="200" className="d-inline-block"/>
            </a>
            <CartWidget />
        </div>
    </nav>
);    
    
export default NavBar;