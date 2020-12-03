import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen'
import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const NavbarPage = () => {

    return (
        <header>
            <Navbar className="nav-custom" expand="lg">
                <Navbar.Brand ><Link className="titlenav" to="/"><span className="diamond">DIAMOND</span> <span className="pixel">PIXEL</span></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#principal">
                            <span className="link-custom">Principal</span>
                        </Nav.Link>
                        <Nav.Link href="#conocenos">
                            <span className="link-custom">Conocenos</span>
                        </Nav.Link>
                        <Nav.Link href="#contacto">
                            <span className="link-custom">Contacto</span>
                        </Nav.Link>
                        <Link to="/Designer" className="btn btn-custom">
                            Crea tu diseño
                            <FontAwesomeIcon className="ml-2" icon={faPen} />
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}
