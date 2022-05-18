import React, {Fragment, useState} from 'react';
import { useForm } from 'react-hook-form';

const Contacto = () => {
    const [datos, setDatos] = useState([]);
    const {register, errors, handleSubmit} = useForm();
    
    const onSubmit = (info) =>{
        //console.log(info);
        setDatos([
            ...datos, info
        ])
    }

    return (  
        <Fragment>
         <div className='container p-5'>
           <h2 className='pb-4'>Contactanos</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Nombre:</label>
                    <input name='nombre' type="text" className="form-control"
                    { ...register('nombre', { required: true } ) } />
                </div>
                <div className="mb-3">
                    <label className="form-label">Correo:</label>
                    <input name='correo' type="email" className="form-control"
                    { ...register('correo', { required: true } ) } />
                </div>
                <div className="mb-3">
                    <label className="form-label">Celular:</label>
                    <input name='celular' type="text" className="form-control"
                    { ...register('celular', { required: true } ) }/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Mensaje:</label>
                    <textarea name='mensaje' className="form-control"  rows="3"
                    { ...register('mensaje', { required: false } ) }></textarea>
                </div>

                <button className='btn btn-success'>Enviar</button>
            </form>
         </div>
        </Fragment>
    );
}
 
export default Contacto;