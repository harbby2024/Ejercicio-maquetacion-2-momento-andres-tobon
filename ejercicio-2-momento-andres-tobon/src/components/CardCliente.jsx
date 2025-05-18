import { useNavigate } from "react-router-dom";
import "./CardCliente.css";
import HistorialCliente from "./HistorialCliente";

function CardCliente(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Detalle-Cliente');
  };

  return (
    <div className="card-cliente">
      <section className="card-info-cliente">
        <div className="imag-cliente">
          <img src={props.src} alt="Foto del cliente" className="ima-cliente" />
        </div>
        <div className="info-cliente">
          <h1 className="nombre-cliente">{props.nombre}</h1>
          <h2>{props.id}</h2>
          <h2>{props.fechaNacimiento}</h2>
          <h2>{props.correo}</h2>
          <h2>{props.celular}</h2>
          <h2>{props.direccion}</h2>
          <h2>{props.ciudad}</h2>
        </div>
      </section>

      <section className="props-historial">
        <div className="producto-destacado">
        <h3>Producto destacado</h3>
            <HistorialCliente 
             src="src/assets/imagenes/productos/Productos 01-03.jpg" 
             productoNombre="Casco Moto Bell Lithium Shear Gris Blanco" 
             precio="$ 622.700" 
              fechaCompra="23 abril 2020"
        />
        </div>
        <HistorialCliente 
          src="src/assets/imagenes/productos/Productos 01-05.jpg" 
          productoNombre="Televisor Samsung Smart 48 Oled S90d" 
          precio="$ 2.549.900" 
          fechaCompra="01 enero 2023"
        />
      </section>

      <button type="button" onClick={handleClick} className="btn-2">
        Ver cliente
      </button>
    </div>
  );
}

export default CardCliente;