import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import payload from '../utils/payload'
import '../styles/components/Navbar.scss'
import AppContext from '../context/AppContext'
import '../styles/components/Header.css'

const Navbar = () => {
    const { state } = useContext(AppContext)
    const { cart } = state
    const user = payload()
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                Ecommerce
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                {user ? (<ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/profile">
                            Hola, {user.first_name}!
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile">
                            Mi Perfil
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/logout">
                            Logout
                        </Link>
                    </li>
                    <li className="nav-item" active>
                        <Link className="nav-link" to="/checkout">
                            Cart
                        </Link>            
                    </li>
                    <li className="header-alert" active>
                        {cart.length}              
                    </li>
                </ul>) : (<ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/login">
                            Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">
                            Signup
                        </Link>
                    </li>
                </ul>
                )}
            </div>
        </nav>
    )
}

export default Navbar