import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";

export const MisionVisionValues = () => {
    return (
        <div className="text-white h-100 my-5">
            <div className="h-100 mision-vision-values row justify-content-around text-center">
                <div className="col-md-3 col-lg-3 col-xl-3 mt-4 mx-4 h-100">
                    <h1>MISIÓN</h1>
                    <hr className="line-divider" />
                    <p>
                        Servir como una forma de expresión a las personas, cumpliendo los
                        requerimientos solicitados en sus diseños y siempre brindando
                        productos de alta calidad que los hagan sentir cómodos y satisfacer
                        sus gustos.
                    </p>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3 mt-4 mx-4 h-100">
                    <h1>VISIÓN</h1>
                    <hr className="line-divider" />
                    <p>
                        Escalar a una buena posición en el mercado local, sin olvidar a
                        nuestros clientes, ofreciendo calidad en el servicio y en nuestros
                        productos en todo momento.
                    </p>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3 mt-4 mx-4 h-100">
                    <h1>VALORES</h1>
                    <hr className="line-divider" />
                    <div className="row mt-3">
                        <div className="col-sm-6 col-md-12 col-lg-6">
                            <div className="row justify-content-center">
                                <p>Limpieza</p>
                                <FontAwesomeIcon className="ml-2" icon={faCheck} />
                            </div>
                            <div className="row justify-content-center">
                                <p>Calidad</p>
                                <FontAwesomeIcon className="ml-2" icon={faCheck} />
                            </div>
                            <div className="row justify-content-center">
                                <p>Servicio</p>
                                <FontAwesomeIcon className="ml-2" icon={faCheck} />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-12 col-lg-6">
                            <div className="row justify-content-center">
                                <p>Puntualidad</p>
                                <FontAwesomeIcon className="ml-2" icon={faCheck} />
                            </div>
                            <div className="row justify-content-center">
                                <p>Tolerancia</p>
                                <FontAwesomeIcon className="ml-2" icon={faCheck} />
                            </div>
                            <div className="row justify-content-center">
                                <p>Conciencia</p>
                                <FontAwesomeIcon className="ml-2" icon={faCheck} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
