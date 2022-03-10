import React, { Component } from 'react';
import Productos from './Productos';
import './Pedidos.css';

class pedidos extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listaPedidos: [],
            pedidoSelected: ''
        }
    }

    componentDidMount() {
        const ruta = "https://servicios.campus.pe/pedidoslista.php";
        fetch(ruta).then(res => res.json())
            .then((res) => {
                    console.log(res);
                    this.setState({listaPedidos: res})
            })
    }
    
    listarColumnaPedidos(datosPedido) {
        return (
            <ul className="list-group">
                {(datosPedido).map(itemP =>
                 <li className="list-group-item"  id={"li-pedido-"+itemP.idpedido}
                    onClick={()=>this.seleccionarPedido(itemP)} key={itemP.idpedido}> 
                     <h5>Cliente: {itemP.nombres}</h5>
                     <small>#Pedido: {itemP.idpedido}</small>
                 </li>
                )}
            </ul>
        )
    }
    seleccionarPedido=(itemP)=>{
        if(this.state.pedidoSelected !== ''){
            document.getElementById("li-pedido-"+this.state.pedidoSelected.idpedido).classList.remove("active-green");
        }
            
        this.setState({pedidoSelected: itemP });
        document.getElementById("li-pedido-"+itemP.idpedido).classList.add("active-green");
        
    }
    render() {
        let listaPedidos = this.listarColumnaPedidos(this.state.listaPedidos);
        let productoPedido = <Productos infoPedido ={this.state.pedidoSelected}/>
        return (
            <section id='pedidos' className='padded'>
                <div className='container'>
                    <h6>Lista de Pedidos:</h6>
                    <div className="row">
                        <div className='col-4'>
                            {listaPedidos}
                        </div>
                        <div className='col-8'>
                           {productoPedido}
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default pedidos;