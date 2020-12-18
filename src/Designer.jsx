import React from 'react'
import { NavbarPage } from './NavbarPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen'
import { faSquare } from '@fortawesome/free-solid-svg-icons/faSquare'
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle'
import { faFillDrip } from '@fortawesome/free-solid-svg-icons/faFillDrip'
import { faEraser } from '@fortawesome/free-solid-svg-icons/faEraser'

export const Designer = () => {
    return (
        <>
            <NavbarPage inicio={false} />
            <div id="desinger" className=" h-100 container-fluid padre">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-text-center">
                        <label htmlFor="" className="eslogan2">!Crea¡!Juega¡!Diseña¡</label>
                    </div>
                    
                </div>
                <div className="row content">
                    <div className="col-lg-5 col-md-12 col-sm-6 d-flex justify-content-center imagen">
                        <img src="https://thumbs.dreamstime.com/b/cuadr%C3%ADcula-de-papel-cuadrada-sobre-un-patr%C3%B3n-transparente-fondo-hoja-mil%C3%ADmetro-168063673.jpg" width="460" height="450"></img>
                    </div>
                    <div className="col-2  d-flex justify-content-center alig-items-center align-text-center columnaColores">
                        
                        <div className="row">
                        <form className="">
                        <label className="datos3">Herramientas</label>
                            <div className="herramientas">
                            <ul>
                                <li className="mb-3 mt-4"><span><FontAwesomeIcon className="" icon={faPen} />   &nbsp;&nbsp;           </span>Lapiz</li>
                                <li className="mb-3"><span><FontAwesomeIcon className="" icon={faSquare} />    &nbsp;&nbsp;            </span>Cuadrado</li>
                                <li className="mb-3"><span><FontAwesomeIcon className="" icon={faCircle} />        &nbsp;&nbsp;        </span>Ovalo</li>
                                <li className="mb-3"><span><FontAwesomeIcon className="" icon={faFillDrip} />    &nbsp;&nbsp;          </span>Rellenar</li>
                                <li className="mb-3"><span><FontAwesomeIcon className="" icon={faEraser} />     &nbsp;&nbsp;           </span>Borrar</li>
                            </ul>
                            </div>
                        </form>
                        </div>
                        
                        <div className="row">
                        <form className="formColores">
                        <label className="datos2">Colores disponibles</label>
                            <div className="herramientas2">
                                <img src="https://miro.medium.com/max/670/1*f5oJNohkk3B1B8WQsAXOtQ.png" alt="" width="120px" height="80"/>
                            </div>
                        </form>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        
                    <form className="form-contacto2 align-items-center">
                        <div className="data">
                        <div className="row d-flex justify-content-center mr-3">
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
