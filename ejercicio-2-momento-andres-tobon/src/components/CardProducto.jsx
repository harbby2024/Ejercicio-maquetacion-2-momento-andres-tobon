import "./CardProducto.css";

function CardProducto(props){
    return(
      <section className="contenedor-04">
        <img
          src={props.src}
          alt="Producto"
          className="img-producto-002"
        />
        <div className="info-productos-card">
          <h1>{props.nombre}</h1>
          <h2>{props.descripcion}</h2>
          <h1>{props.precio}</h1>
          <h2>{props.stock}</h2>
        </div>
      </section>
    );
}

export default CardProducto;