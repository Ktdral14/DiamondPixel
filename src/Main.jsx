import React from 'react'

import logo from './assets/logo-diamond.svg'

import { NavbarPage } from './NavbarPage'
import { About } from './About'
import { MisionVisionValues } from './MisionVisionValues'
import { Team } from './Team'
import { Products } from './Products'
import { Principal } from './Principal'
import { Contact } from './Contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export const Main = () => {
    return (
        <>
            <NavbarPage inicio={true} />
            <div id="principal" className="container-fluid h-100">
                <h1 className="text-center mt-1 eslogan d-none d-md-block">Te hacemos feliz en 8 bits!</h1>
                <div className="row h-100">
                    <div className="col-12 text-center">
                        <img src={logo} alt="logo" width="240px"></img>
                        <h3 className="text-center eslogan-sm d-md-none d-block mb-3 mb-md-0">Te hacemos feliz en 8 bits!</h3>
                        <Principal />
                    </div>
                </div>
            </div>
            <div id="productos" className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-1">
                                <div className="cir">
                                    <div className="cir-centro"></div>
                                </div>
                            </div>
                            <div className="col-11 p-0">
                                <h1 className="title-section">Productos</h1>
                            </div>
                            <Products />
                        </div>
                    </div>
                </div>
            </div>
            <div id="conocenos" className="container-fluid">
                <div className="row h-100">
                    <div className="col-12">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-1">
                                <div className="cir">
                                    <div className="cir-centro"></div>
                                </div>
                            </div>
                            <div className="col-11 p-0">
                                <h1 className="title-section">Conócenos</h1>
                            </div>
                            <About />
                        </div>
                    </div>
                </div>
            </div>
            <div id="valores" className="container-fluid">
                <MisionVisionValues />
            </div>
            <div id="integrantes" className="container-fluid">
                <div className="row h-100">
                    <div className="col-12">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-1">
                                <div className="cir">
                                    <div className="cir-centro"></div>
                                </div>
                            </div>
                            <div className="col-11 p-0">
                                <h1 className="title-section">Equipo de trabajo</h1>
                            </div>
                            <Team />
                        </div>
                    </div>
                </div>
            </div>
            <div id="contacto" className="container-fluid">
                <div className="row h-100">
                    <div className="col-12">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-1">
                                <div className="cir">
                                    <div className="cir-centro"></div>
                                </div>
                            </div>
                            <div className="col-11 p-0">
                                <h1 className="title-section">Contacto</h1>
                            </div>
                            <Contact />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer h-25 container-fluid mt-3 mt-md-0">
                <div className="row h-100 justify-content-center align-content-center" style={{background: 'black'}}>
                    <div className="col-12">
                        <div className="text-center">
                            <h3 style={{color: 'white'}}>&copy; 2020 TecDevs</h3>
                            <span style={{color: 'white'}}>Todos los derechos reservados</span>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="col-12 text-center mt-2">
                            <a style={{textDecoration: 'none'}} className="ml-2" href="https://github.com/TecDevs" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon-white" icon={['fab', 'github']} size="2x"/> </a>
                            <a style={{textDecoration: 'none'}} className="ml-2" href="https://tecdevsmx.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon-white" icon={faGlobe} size="2x"/> </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
