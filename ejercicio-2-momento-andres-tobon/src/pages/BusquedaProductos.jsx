import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './BusquedaProducto.css';


function InputProducto() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/listado-producto');
  };

  return (
    <div className="container">
        {/* SECCION DE INPUT CLIENTE */}
      <section className="inputCliente">
            <div className="cuadro-input">
                <div className="titulocontainer">Ingresa el ID del producto</div>
                <input
                     type="text"
                     className="input"
                       placeholder="Ingresa el ID del producto"
                 />
                 {/* Boton que redirije a detalle del cliente buscado */}
                <button type="button" onClick={handleClick} className="btn">
                 Buscar producto
                </button>

                {/* Link que redirije a input gestion de cliente */}
                <Link to="/busqueda-cliente" className="link-estilo">
                    Buscar cliente
                </Link>
            </div>
      </section>


        {/* SECCION LOGO Y FRASE */}
      <section className="logo-frase">
        
        {/* Logo de Mercado libre*/}
        <img src="src/assets/imagenes/Logo.png"  alt="" className="logo"/>

        {/* Frase principal página gestion cliente*/}
        <h1 className="frase-principal">Gestión ágil, productos al alcance.</h1>
      </section>
    </div>
  );
}

export default InputProducto;