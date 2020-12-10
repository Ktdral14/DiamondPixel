import React from 'react'
import { products } from './assets/data/products'

export const Products = () => {
    return (
        <div className="col-12">
            <div className="card-columns mt-3 p-5">
                {
                    products.map((data, key) => {
                        return (
                            <div className="card" key={key}>
                                <img src={data.img} className="card-img-top small d-block d-md-none" alt="imagen-producto"/>
                                <img src={data.img} className="card-img-top d-none d-md-block" alt="imagen-producto"/>
                                <div className="card-body-float d-none d-md-block">
                                    <h5 className="card-title">{data.nombre}</h5>
                                    <h6 className="card-subtitle mb-1">Categoría: <small>{data.categoria}</small></h6>
                                    <h6 className="card-subtitle">Precio: <small>{data.precio}</small></h6>
                                </div>
                                <div className="card-body d-block d-md-none">
                                    <h5 className="card-title">{data.nombre}</h5>
                                    <h6 className="card-subtitle mb-1">Categoría: <small>{data.categoria}</small></h6>
                                    <h6 className="card-subtitle">Precio: <small>{data.precio}</small></h6>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
