import React from 'react'
import { products } from './products'

export const Products = () => {
    return (
        <div className="col-12">
            <div className="card-columns mt-3">
                {
                    products.map((data, key) => {
                        return (
                            <div className="card" key={key}>
                                <img src={data.img} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{data.nombre}</h5>
                                    <h6 className="card-subtitle">Categoría: <small>{data.categoria}</small></h6>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
