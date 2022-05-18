import React, { Component } from 'react';
import './Categoria.css';

class Categorias extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listaCategorias: [],
            nombreInput:'',
            descripcionInput:'',
            idCateUpdate: '',
            nombreUpdate: '',
            descripcionUpdate: ''
        }
    }

    componentDidMount() {
        this.leerCategorias();
    }

    leerCategorias() {
        const ruta = "https://servicios.campus.pe/serviciocategorias.php";
        fetch(ruta).then(res => res.json())
            .then((res) => {
                console.log(res);
                this.setState({
                    listaCategorias: res
                })
            })
    }
    mostrarCardCategorias = (datosCate) => {
        return(
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 mt-4">
                {datosCate.map(itemCate =>
                    <div className="col" key={itemCate.idcategoria}>
                        <div className="card border-success mb-3">
                            <div className="card-header bg-success border-success text-center">
                                <h4 className="card-title">{itemCate.nombre}</h4>
                            </div>
                            <div className="card-body text-center">
                                <small>Descripcion:</small>
                                <p className="card-text"> {itemCate.descripcion}</p>
                            </div>
                            <div className="card-footer  border-success text-center">
                                <button className="btn btn-success" 
                                onClick={() => this.actualizarDatos(itemCate)}
                                data-bs-toggle="modal" data-bs-target="#modalActualizar">Editar</button> &nbsp;
                                <button className="btn btn-danger"
                                onClick={() => this.eliminarCategoria(itemCate)}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
    
    eliminarCategoria=(itemCate)=>{
        var respuesta = window.confirm("Seguro desea eliminar la categoria" + itemCate.nombre + " ?")
        if (respuesta) {
            const ruta = "https://servicios.campus.pe/categoriaseliminar.php";
            var formData = new FormData();
            formData.append("idcategoria", itemCate.idcategoria);

            fetch(ruta, {
                method: 'POST',
                body: formData
                }).then(() => {this.leerCategorias();}
            )
        }
    }

    actualizarDatos = (itemCate) => {
        console.log(itemCate)
        this.setState({
            idCateUpdate: itemCate.idcategoria,
            nombreUpdate: itemCate.nombre,
            descripcionUpdate: itemCate.descripcion
        })
    }

    registrarCateActualizada = (e) => {
        e.preventDefault();
        const ruta = "https://servicios.campus.pe/categoriasactualizar.php";
        var formData = new FormData();
        formData.append("idcategoria", this.state.idCateUpdate);
        formData.append("nombre", this.state.nombreUpdate);
        formData.append("descripcion", this.state.descripcionUpdate);

        fetch(ruta, {
            method: 'POST',
            body: formData
            }).then(() => {this.leerCategorias();}
        )
    }

    modalActualizar =()=>{
        return (
            <div className="modal fade" id="modalActualizar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Actualizar Categoria</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={this.registrarCateActualizada}>
                            <div className="modal-body">
                                <div className='mb-2'>
                                    <input type="text" className="form-control" readOnly
                                        value={this.state.idCateUpdate} />
                                </div>
                                <div className='mb-2'>
                                    <input type="text" className="form-control" placeholder='Nombre'
                                        value={this.state.nombreUpdate}
                                        onChange={(e) => this.setState({ nombreUpdate: e.target.value })} />
                                </div>
                                <div className='mb-2'>
                                    <input type="text" className="form-control" placeholder='Descripcion'
                                        value={this.state.descripcionUpdate}
                                        onChange={(e) => this.setState({ descripcionUpdate: e.target.value })} />
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-success"data-bs-dismiss="modal">Grabar</button>&nbsp;
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Salir</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    formAgregarCate=()=>{
        return(
            <div id="formulario-agregar">
                <input type="button" className='btn btn-success' value="Nueva categoría"
                    data-bs-toggle="collapse" data-bs-target="#collapseAdd" />
                <div className="collapse" id="collapseAdd">
                    <div className="card card-body ">
                        <form onSubmit={this.agregarCategoria}>
                            <div className='mb-2'>
                                <input type='text' className='form-control' placeholder='Nombre'
                                    required
                                    value={this.state.nombreInput}
                                    onChange={(e) => this.setState({ nombreInput: e.target.value })} />
                            </div>
                            <div className='mb-2'>
                                <input type='text' className='form-control' placeholder='Descripción'
                                    required
                                    value={this.state.descripcionInput}
                                    onChange={(e) => this.setState({ descripcionInput: e.target.value })} />
                            </div>
                            <div className='card-footer mt-3 text-end'>
                                <input type="submit" className='btn btn-success' value="Registrar"
                                    data-bs-toggle="collapse" data-bs-target="#collapseAdd" /> &nbsp;
                                <input type="button" className='btn btn-secondary' value="Cerrar"
                                    data-bs-toggle="collapse" data-bs-target="#collapseAdd" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    agregarCategoria=(e)=>{
        e.preventDefault();
        const ruta = "https://servicios.campus.pe/registrarcategorias.php";
        var formData = new FormData();
        formData.append("nombre", this.state.nombreInput);
        formData.append("descripcion", this.state.descripcionInput);

        fetch(ruta, {
            method: 'POST',
            body: formData
        }).then(res => res.text())
            .then((result) => {
                    console.log(result);
                    this.leerCategorias();
                    this.setState({
                        nombreInput: '',
                        descripcionInput: ''
                    })
                }
            )
    }

    render() {
        let contenidoCategorias=this.mostrarCardCategorias(this.state.listaCategorias);
        let contenidoAñadirCate = this.formAgregarCate();
        let modalActualizar = this.modalActualizar();
        return (
            <section id="categorias">
                <div className="container">
                    
                    {contenidoAñadirCate}
                    {contenidoCategorias}
                </div>
                {modalActualizar}
            </section>
        );
    }
}

export default Categorias;