import React from 'react';
import './Gallery.css';
import foto1 from '../assets/b1.jpg';
import foto2 from '../assets/b6.jpg';
import foto3 from '../assets/b3.jpg';

function Gallery(props) {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div id="contenedor"className="carousel-item active">
      <img src={foto1} className="d-block w-100" alt="..."/>
      <div id="banner"className="container">
        <h1>Delivering creative digital products</h1>
      </div>
    </div>
    <div className="carousel-item">
      <img src={foto2} className="d-block w-100" alt="..."/>
      <div id="banner"className="container">
        <h1>Delivering creative digital products</h1>
      </div>
    </div>
    <div className="carousel-item">
      <img src={foto3}className="d-block w-100" alt="..."/>
      <div id="banner"className="container">
        <h1>Delivering creative digital products</h1>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    );
}

export default Gallery;