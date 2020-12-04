<<<<<<< HEAD
import React from 'react'

import logo from './assets/logo-diamond.svg'

import { NavbarPage } from './NavbarPage'
import { About } from './About'
import { MisionVisionValues } from './MisionVisionValues'
import { Team } from './Team'

export const Main = () => {
    return (
        <>
            <NavbarPage inicio={true} />
            <div id="principal" className="container-fluid">
                <h1 className="text-center mt-1 eslogan">Te hacemos feliz en 8 bits!</h1>
                <div className="row h-100">
                    <div className="col-5">
                        <img src={logo} alt="logo" width="200px"></img>
                    </div>
                    <div className="col-5">
                    </div>
                </div>
            </div>
            <div id="conocenos" className="container-fluid">
                <div className="row h-100">
                    <div className="col-12">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-1">
                                <div className="cir"></div>
                            </div>
                            <div className="col-11">
                                <h1>Conocenos</h1>
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
                                <div className="cir"></div>
                            </div>
                            <div className="col-11">
                                <h1>Equipo de trabajo</h1>
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
                                <div className="cir"></div>
                            </div>
                            <div className="col-11">
                                <h1>Contacto</h1>
                            </div>
                            <div className="col-12 mt-2">
                                <h2>¿Quienes somos?</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
=======
import React from 'react'

import logo from './assets/logo-diamond.svg'

import { NavbarPage } from './NavbarPage'
import { About } from './About'
import { Products } from './Products'
import Principal from './Principal'
import Contact from './Contact'

export const Main = () => {
    return (
        <>

            <NavbarPage inicio={true} />
            <div id="principal" className="container-fluid">
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
                            <div className="col-11">
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
                            <div className="col-11">
                                <h1 className="title-section">Conocenos</h1>
                            </div>
                            <About />
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
                            <div className="col-11">
                                <h1 className="title-section">Contacto</h1>
                            </div>
                            <Contact />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
>>>>>>> 3809f42730d41cd6235821c4150d8271e68f46c3
