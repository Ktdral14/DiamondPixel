import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { Nav, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen'

export const NavbarPage = (props) => {

    const estaEnInicio = props.inicio
    return (
        <header>
            <Navbar className="nav-custom" expand="lg">
                <Navbar.Brand ><Link className="titlenav" to="/"><span className="diamond">Diamond</span> <span className="pixel">Pixel</span></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {
                    estaEnInicio ?
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="#principal">
                                    <span className="link-custom">Principal</span>
                                </Nav.Link>
                                <Nav.Link href="#conocenos">
                                    <span className="link-custom">Conócenos</span>
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
                        :
                        <></>
                }
            </Navbar>
        </header>
    )
}
