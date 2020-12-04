import React from "react";

export const About = () => {
    return (
        <div className="mt-4 mx-5">
            <div className="row align-items-start justify-content-between">
                <div className="col-sm-12 col-md-6 col-lg-7 col-xl-6 mx-auto">
                    <h2 className="text-left">¿Quiénes somos?</h2>
                    <p className="mt-4">
                        Somos Diamond Pixel, una empresa especializada en el diseño y creación
                        de decoraciones o accesorios con hama beads, siempre pensando en el
                        bienestar emocional y las preferencias de nuestros clientes brindándoles
                        alta calidad y larga durabilidad en cada uno de nuestros productos.
                    </p>
                </div>
                <div className="col-sm-12 col-md-5 col-lg-5 col-xl-4">
                    <img className="img-fluid" src="http://diamond-pixel.mante.hosting.acm.org/recursos/diamond-pixel-team.jpeg" alt="" />
                </div>
            </div>
        </div>
    );
};
