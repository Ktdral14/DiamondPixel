import React from "react";

import Daniela from "./assets/Daniela.jpeg";

export const About = () => {
    return (
        <div className="mt-5 mx-5">
            <h2>¿Quiénes somos?</h2>
            <p>
                Somos Diamond Pixel, una empresa especializada en el diseño y creación
                de decoraciones o accesorios con hama beads, siempre pensando en el
                bienestar emocional y las preferencias de nuestros clientes brindándoles
                alta calidad y larga durabilidad en cada uno de nuestros productos.
            </p>
            <div className="row">
                <div className="col-5">
                    <img className="img-fluid" src={Daniela} alt="" />
                </div>
                <div className="col-7">
                    <h2 className="text-right">¿Qué somos?</h2>
                    <p>
                    Somos Diamond Pixel, una empresa especializada en el diseño y creación
                    de decoraciones o accesorios con hama beads, siempre pensando en el
                    bienestar emocional y las preferencias de nuestros clientes brindándoles
                    alta calidad y larga durabilidad en cada uno de nuestros productos.
                    </p>
                </div>
            </div>
        </div>
    );
};
