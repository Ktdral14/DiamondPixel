import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { HashLink } from 'react-router-hash-link';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';

export const NavbarPage = (props) => {
    const [isActive, setIsActive] = useState([false, false, false]);
    const estaEnInicio = props.inicio;
    const onActive = (index) => {
        switch (index) {
            case 0:
                setIsActive([true, false, false]);
                break;
            case 1:
                setIsActive([false, true, false]);
                break;
            case 2:
                setIsActive([false, false, true]);
                break;
            default:
        }
    }
    return (
        <header>
            <Navbar className="nav-custom" expand="lg">
                <Navbar.Brand ><Link className="titlenav" to="/"><span className="diamond">Diamond</span> <span className="pixel">Pixel</span></Link></Navbar.Brand>
                {
                    estaEnInicio ?
                        <>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto">
                                    <HashLink className="nav-link" onClick={() => onActive(0)} to="/#principal">
                                        <span className={isActive[0] ? "link-custom active" : "link-custom"}>Principal</span>
                                    </HashLink>
                                    <HashLink className="nav-link" onClick={() => onActive(1)} to="/#conocenos">
                                        <span className={isActive[1] ? "link-custom active" : "link-custom"}>Conócenos</span>
                                    </HashLink>
                                    <HashLink className="nav-link" onClick={() => onActive(2)} to="/#contacto">
                                        <span className={isActive[2] ? "link-custom active" : "link-custom"}>Contacto</span>
                                    </HashLink>
                                    <Link to="/Designer" className="btn btn-custom">
                                        Crea tu diseño
                                        <FontAwesomeIcon className="ml-2" icon={faPen} />
                                    </Link>
                                </Nav>
                            </Navbar.Collapse>
                        </>
                        :
                        <Nav className="ml-auto flex-row">
                            <Nav.Link href="https://www.facebook.com/DiamondPixelMante/" target="_blank">
                                <FontAwesomeIcon className="icon-nav mr-3 mr-lg-0" size="2x" icon={['fab', 'facebook']} />
                            </Nav.Link>
                            <Nav.Link href="https://www.instagram.com/diamondpixelmante/" target="_blank">
                                <FontAwesomeIcon className="icon-nav" size="2x" icon={['fab', 'instagram']} />
                            </Nav.Link>
                        </Nav>
                }
            </Navbar>
        </header>
    )
}
