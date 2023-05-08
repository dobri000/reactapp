import { Link } from "react-router-dom";
import { Container, Nav, NavLink, Navbar, NavbarBrand } from "react-bootstrap";
import Logo from "../img/volleyball-logo.png";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";


const Menu = () => {
    return (
        <Navbar variant="dark">
            <Container>
                <NavbarBrand href="/">
                    <img src={Logo} style={{height : 20}}></img>
                </NavbarBrand>
                <NavbarCollapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink>
                            <Link className="text-decoration-none text-black" to="/">Tabela</Link>
                        </NavLink>
                        <NavLink>
                            <Link className="text-decoration-none text-black" to="/results">Rezultati</Link>
                        </NavLink>
                        <NavLink>
                            <Link className="text-decoration-none text-black" to="/contact">Kontakt</Link>
                        </NavLink>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar> 
    );
}

export default Menu;