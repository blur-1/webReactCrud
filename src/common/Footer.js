import React from 'react';
import './Footer.css';
import foto1 from '../assets/logo-lino.png';

function Footer(props) {
    return (
        <footer id="main-footer">
        <div className="container">
            <div className="row  footerContainer">
                <div className="col-sm-4 col-md-4 padded">
                    <h5>Company</h5>
                    
                    <nav className="nav flex-column">
                        <a className="nav-link"  href="#"><i className="fa-brands fa-facebook"></i>Facebok</a>
                        <a className="nav-link" href="#"><i className="fa-brands fa-twitter"></i>Twitter</a>
                        <a className="nav-link" href="#"><i className="fa-brands fa-instagram"></i>Instagram</a>
                    </nav>
                </div>
                <div className="col-sm-4 col-md-4 padded">
                    <h5>Customer</h5>
                    
                    <nav className="nav flex-column">
                        <a className="nav-link"  href="#"><i className="fa-brands fa-facebook"></i>Facebok</a>
                        <a className="nav-link" href="#"><i className="fa-brands fa-twitter"></i>Twitter</a>
                        <a className="nav-link" href="#"><i className="fa-brands fa-instagram"></i>Instagram</a>
                    </nav>
                </div>
                <div className="col-sm-4 col-md-4 padded">
                    <h5>Resources</h5>
                    
                    <nav className="nav flex-column">
                        <a className="nav-link"  href="#"><i className="fa-brands fa-facebook"></i>Facebok</a>
                        <a className="nav-link" href="#"><i className="fa-brands fa-twitter"></i>Twitter</a>
                        <a className="nav-link" href="#"><i className="fa-brands fa-instagram"></i>Instagram</a>
                    </nav>
                </div>
                
            </div >
            <div className="row logoContainer">
                    <img src={foto1} id="logo" className="d-block" />
            </div>
        </div>
    </footer>
    );
}

export default Footer;