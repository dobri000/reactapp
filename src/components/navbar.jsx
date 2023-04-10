import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar">
            <Link to='/'>Table</Link>
            <Link to='/results'>Results</Link>
        </div>
    );
}

export default Navbar;