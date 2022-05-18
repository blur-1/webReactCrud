import React from 'react';
import './Mainbar.css';
import foto1 from '../assets/logo-lino.png';
import { Link } from 'react-router-dom';

function Mainbar(props) {
    return (
        <div id="mainbar" className="container">
            <div id="menu" className="row">
                <div className="col-3 ">
                    <img src={foto1} id="logo1" className="d-block" />
                </div>
                <div className="col-9">
                    <nav className="navContainer">
                        <div className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link" to="/categorias">Categorias</Link>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link" to="/pedidos">Pedidos</Link>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link " to="/contacto">Contacto</Link >
                        </div>
                    </nav>
                </div>
                
            </div>
        </div>
    );
}

export default Mainbar;