import React from 'react'

import logo from './assets/logo-diamond.svg'

export const Team = () => {
    return (
        <div className="mt-4 mx-5">
            <div className="row justify-content-center">
                <div className="col-md-5 col-lg-5 col-xl-4">
                    <div className="row mb-2 justify-content-center">
                        <div className="item col-8">
                            <img className="rounded-circle img-fluid" src="http://diamondpixel.tecdevsmx.com/resourses/Daniela.webp" alt="" />
                            <img className="diamond-pixel-badge rounded-circle img-fluid" src={logo} alt="" />
                        </div>
                    </div>
                    <h4 className="team-name">Daniela Segura Tinajero</h4>
                    <div className="row justify-content-center">
                        <div className="col-9">
                            <h5 className="team-position">Jefe de Marketing</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-lg-5 col-xl-4">
                    <div className="row mb-2 justify-content-center">
                        <div className="item col-8">
                            <img className="rounded-circle img-fluid" src="http://diamondpixel.tecdevsmx.com/resourses/Valeria.webp" alt="" />
                            <img className="diamond-pixel-badge rounded-circle img-fluid" src={logo} alt="" />
                        </div>
                    </div>
                    <h4 className="team-name">Valeria Briz Martínez</h4>
                    <div className="row justify-content-center">
                        <div className="col-9">
                            <h5 className="team-position">Encargada de proceso de manufactura y la contabilidad de la empresa</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-2">
                <div className="col-md-5 col-lg-5 col-xl-4">
                    <div className="row mb-2 justify-content-center">
                        <div className="item col-8">
                            <img className="rounded-circle img-fluid" src="http://diamondpixel.tecdevsmx.com/resourses/Antonio.webp" alt="" />
                            <img className="diamond-pixel-badge rounded-circle img-fluid" src={logo} alt="" />
                        </div>
                    </div>
                    <h4 className="team-name">Antonio Reyna Espinoza</h4>
                    <div className="row justify-content-center">
                        <div className="col-9">
                            <h5 className="team-position">Repartidor y encargado de diseños de los productos</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-lg-5 col-xl-4 justify-content-center">
                    <div className="row mb-2 justify-content-center">
                        <div className="item col-8">
                            <img className="rounded-circle img-fluid" src="http://diamondpixel.tecdevsmx.com/resourses/Joel.webp" alt="" />
                            <img className="diamond-pixel-badge rounded-circle img-fluid" src={logo} alt="" />
                        </div>
                    </div>
                    <h4 className="team-name">Joel Eduardo Sánchez Herrera</h4>
                    <div className="row justify-content-center">
                        <div className="col-9">
                            <h5 className="team-position">Repartidor y auxiliar en la creación de los productos</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
