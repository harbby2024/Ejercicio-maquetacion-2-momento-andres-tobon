import "./CardProducto.css";
import { useNavigate } from "react-router-dom";

function CardProducto(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/detalle-Producto');
  };

  return (
    <div className="card-producto-wrapper">
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
          <button type="button" onClick={handleClick} className="btn-20">
        Ver cliente
      </button>
        </div>
      </section>

      
    </div>
  );
}

export default CardProducto;