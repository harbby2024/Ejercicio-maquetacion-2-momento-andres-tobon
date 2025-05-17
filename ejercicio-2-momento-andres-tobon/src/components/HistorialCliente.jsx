import "./HistorialCliente.css"

function HistorialCliente (props){
    return(
        <section className="historial-productos-cliente">

                <div  className="img-producto-historial">
                    <img src={props.src} alt="" className="ima-producto" />
                </div>
                <div className="info-producto-historial">
                    <h2>{props.productoNombre}</h2>
                    <h2>{props.precio}</h2>
                    <h2>{props.fechaCompra}</h2>
                </div>
            </section> 
    )
}

export default HistorialCliente;