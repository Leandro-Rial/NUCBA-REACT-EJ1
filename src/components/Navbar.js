import React from 'react'
import { useState } from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">EjNUCBA</Link>
                <button
                    type="button"
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => setIsOpen(!isOpen)}
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className={ isOpen ? "collapse show navbar-collapse" : "collapse navbar-collapse" } id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/todoList" onClick={() => setIsOpen(false)}>TodoList_EJ1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pokeAPI" onClick={() => setIsOpen(false)}>PokeAPI</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>Home</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar