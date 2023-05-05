import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar">
            <Link to='/'>Table</Link>
            <Link to='/results'>Results</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    );
}

export default Navbar;