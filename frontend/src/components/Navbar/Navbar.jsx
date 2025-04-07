import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-title">Portfolio</div>
            <div className="navbar-items">
                <a href="/home" className="nav-link">Home</a>
                <a href="/about" className="nav-link">About</a>
                <a href="/contact" className="nav-link">Contact</a>
            </div>
        </div>

    )

}

export default Navbar;