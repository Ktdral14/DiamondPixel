import React from "react";

export const About = () => {
    return (
        <div className="mt-5 mx-5">
            <div className="row">
                <div className="col-4">
                    <h2 className="text-left">¿Quiénes somos?</h2>
                    <p>
                    Somos Diamond Pixel, una empresa especializada en el diseño y creación
                    de decoraciones o accesorios con hama beads, siempre pensando en el
                    bienestar emocional y las preferencias de nuestros clientes brindándoles
                    alta calidad y larga durabilidad en cada uno de nuestros productos.
                    </p>
                </div>
                <div className="col-5">
                    <img className="img-fluid" src="http://diamond-pixel.mante.hosting.acm.org/recursos/diamond-pixel-team.jpeg" alt="" />
                </div>
            </div>
        </div>
    );
};
