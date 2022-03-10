import React, { Component } from 'react';
import './Producto.css';

class Productos extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listaProductos: [],
            productoSelected:''
        }
    }

    componentWillReceiveProps(props) {
        console.log(props.infoPedido)
        this.leerProductos(props.infoPedido.idpedido)
    }

    leerProductos(idpedido) {
        const ruta = "https://servicios.campus.pe/pedidosdetallebuscar.php";
        var formData = new FormData();
        formData.append("idpedido", idpedido);

        fetch(ruta, {
            method: 'POST',
            body: formData
            }).then( res => res.json()
            ).then( (result) => {
                console.log(result);
                    this.setState({
                        listaProductos: result,
                        productoSelected:''
                    })
            })
            
    }

    mostrarDetalle=(datosDetalle)=>{
        let total = datosDetalle.map(itemDetalle => parseFloat(itemDetalle.precio)).reduce((prev, curr) => prev + curr, 0);
        let subtotal = total / 1.18;
        return (
            <>
            <h4>Detalle del pedido</h4>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Nombre-Producto</th>
                        <th>Cantidad</th>
                        <th>Precio (S/)</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {datosDetalle.map(itemDetalle =>
                        <tr key={itemDetalle.idproducto} id={"li-pedido-"+itemDetalle.idproducto}
                            onClick={()=>this.seleccionarProducto(itemDetalle)}>
                            <td>{itemDetalle.idproducto}</td>
                            <td>{itemDetalle.nombre}</td>
                            <td>{itemDetalle.cantidad}</td>
                            <td>{parseFloat(itemDetalle.precio).toFixed(2)}</td>
                        </tr>
                    )}
                    <tr>Total: S/.{total}</tr>
                    <tr>Sub-Total: S/.{subtotal.toFixed(2)}</tr>
                </tbody>
            </table>
            </>
        )
    }
    seleccionarProducto=(itemDetalle)=>{
        //console.log(itemDetalle)
        this.setState({
            productoSelected: itemDetalle 
        })
        //console.log(this.state.productoSelected)

        if(this.state.productoSelected !== ''){
            document.getElementById("li-pedido-"+this.state.productoSelected.idproducto).classList.remove("rowSelect");
            
        }
        document.getElementById("li-pedido-"+itemDetalle.idproducto).classList.add("rowSelect");
        
    }
    mostrarProducto=(item)=>{
        return(
        <div className="imgProd offset-4">
        <img src={"https://servicios.campus.pe/"+ item.imagenchica} alt="..." />

        </div>
        ) 
    }

    render() {
        let contenidoDetalle = ''
        let imgProducto = ''
        if (this.state.listaProductos !== null) {
            contenidoDetalle = this.mostrarDetalle(this.state.listaProductos)
        }
        if (this.state.productoSelected !== '') {
            imgProducto = this.mostrarProducto(this.state.productoSelected)
        }
        
        return (
            <>
            <div>
                {imgProducto}
            </div>
            <div>
                {contenidoDetalle}
            </div>

            </>
        );
    }
}

export default Productos;