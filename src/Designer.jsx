import React from 'react'
import { NavbarPage } from './NavbarPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen'
import { faSquare } from '@fortawesome/free-solid-svg-icons/faSquare'
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'
import { faFillDrip } from '@fortawesome/free-solid-svg-icons/faFillDrip'
import { faEraser } from '@fortawesome/free-solid-svg-icons/faEraser'
import { faMouse } from '@fortawesome/free-solid-svg-icons/faMouse'

export const Designer = () => {
    return (
        <>
            <NavbarPage inicio={false} />
            <div id="desinger" className=" h-100 container-fluid padre">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-4 d-flex justify-content-center align-text-left">
                        <label htmlFor="" className="eslogan2">¡Crea!¡Juega!¡Diseña!</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 cuadricula">
                        <img src="https://3.bp.blogspot.com/-D2aGdQKxd28/Wg58lUYNuKI/AAAAAAAAUSQ/XdFg_RcGTY4k34SwJ3poNOzTb6iU-ymJACLcBGAs/s1600/8x8.jpg" alt=""></img>
                    </div>


                    <div className="col-lg-3 col-md-2 col-sm-2 cuadro">
                        <div className="row">
                            <label htmlFor="" className="texto">Herramientas</label>
                            <div>
                                <div class="card card1">
                                    <div class="container">
                                        <i><FontAwesomeIcon icon={faEraser}></FontAwesomeIcon></i><h6><b>Borrar</b></h6>
                                        <i><FontAwesomeIcon icon={faPen}></FontAwesomeIcon></i><h6><b>Dibujar</b></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                        <label htmlFor="" className="texto">Colores</label>
                            <div className="">
                                <div class="card card1">
                                    <div class="container">
                                        aqui va la paleta
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-5 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
                    <form className="form-contacto2">
                    <div className="info">
                        <div className="row d-flex justify-content-center">
                        <label className="align-text-center datos">Datos de entrega</label>
                        </div>
                   
                        <div className="row">
                        
                            <div className="col-11 p-0">
                                <div className="form-group2">
                                    <input type="text" className="form-control" placeholder="Nombre completo"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        
                            <div className="col-11 p-0">
                                <div className="form-group2">
                                    <input type="text" className="form-control" placeholder="Correo electrónico"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        
                            <div className="col-11 p-0">
                                <div className="form-group2">
                                    <input type="text" className="form-control" placeholder="Dirección"/>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        
                            <div className="col-11 p-0">
                                <div className="form-group2">
                                    <input type="text" className="form-control" placeholder="Telefono"/>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            
                        <div className="text-center col-6">
                            <button className="btn btn-enviar2">Enviar</button>
                        </div>
                        <div className="text-center col-6">
                            <button className="btn btn-enviar2">Descargar</button>
                        </div>
                        </div>
                        </div>
                        
                    </form> 
                    </div>
                </div>
                
                </div>
                
        </>
    )
}
