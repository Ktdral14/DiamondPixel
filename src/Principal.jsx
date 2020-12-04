import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

export const Principal = () => {
    return (
        <div>
            <div className="row align-items-center justify-content-center">
                <div className="col-12 col-md-1 mb-2 mb-md-0">
                    <a href="https://www.facebook.com/DiamondPixelMante/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon className="ml-2" size="3x" icon={faFacebook} />
                    </a>
                </div>
                <div className="col-12 col-md-1">
                    <a href="https://www.instagram.com/diamondpixelmante/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon className="ml-2" size="3x" icon={faInstagram} />
                    </a>
                </div>
                <div className="col-12 mt-5 text-center">
                    <a href="#productos" className="btn btn-custom">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-6">
                                Productos
                                </div>
                            <div className="col-6">
                                <FontAwesomeIcon className="arrowAnimate" icon={faArrowDown} size="1x" />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
