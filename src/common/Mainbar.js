import React from 'react';
import './Mainbar.css';
import foto1 from '../assets/logo-lino.png';
import { Link } from 'react-router-dom';

function Mainbar(props) {
    return (
        <div id="mainbar" className="container">
            <div id="menu" className="row">
                <div className="col-2">
                    <img src={foto1} id="logo1" className="d-block" />
                </div>
                <div className="col-9">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categorias">Categorias</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pedidos">Pedidos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="/features">Anuncios</Link >
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                   
                </div>
            </div>
        </div>
    );
}

export default Mainbar;