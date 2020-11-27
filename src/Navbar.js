import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const Navbar = () => {
    return (
        <header>
            <h1>
                <Link to="/">Diamond Pixel</Link>
            </h1>
            <button>
                <Link to="/Designer">Crea tu diseño</Link>
            </button>
        </header>
    )
}
