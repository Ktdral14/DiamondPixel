import React from 'react'
import { NavbarPage } from './Navbar'
import logo from './assets/logo-diamond.svg'


export const Main = () => {
    return (
        <>
            <NavbarPage />
            <div id="principal" className="container-fluid h-100">
            <h1 className="text-center mt-1">Te hacemos feliz en 8 bits!</h1>
                <div className="row h-100">
                    <div className="col-5">
                        <img src={logo} alt="logo" width="200px"></img>
                    </div>
                    <div className="col-5">
                        
                    </div>
                </div>
            </div>
            <div id="conocenos" className="container-fluid h-100">
                <div className="row h-100">
                    <div className="col-12">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-1">
                                <div className="cir"></div>
                            </div>
                            <div className="col-11">
                                <h1>Conocenos</h1>
                            </div>
                            <div className="col-12 mt-2">
                                <h2>¿Quienes somos?</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="contacto" className="container-fluid h-100">
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
