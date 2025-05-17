import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './BusquedaClientes.css';


function InputCliente() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Detalle-Cliente');
  };

  return (
    <div className="container">
        {/* SECCION DE INPUT CLIENTE */}
      <section className="inputCliente">
            <div className="cuadro-input">
                <div className="titulocontainer">Ingresa el correo del cliente</div>
                <input
                     type="text"
                     className="input"
                       placeholder="Ingresa el correo del cliente"
                 />
                 {/* Boton que redirije a detalle del cliente buscado */}
                <button type="button" onClick={handleClick} className="btn">
                 Buscar cliente
                </button>

                {/* Link que redirije a input buscar producto */}
                <Link to="/buscar-Producto" className="link-estilo">
                    Buscar producto
                </Link>
            </div>
      </section>


      {/* SECCION LOGO Y FRASE */}
      <section className="logo-frase">
        
        {/* Logo de Mercado libre*/}
        <img src="src/assets/imagenes/Logo.png"  alt="" className="logo"/>

        {/* Frase principal página gestion cliente*/}
        <h1 className="frase-principal">Busca, encuentra y gestiona sin complicaciones.</h1>
      </section>
    </div>
  );
}

export default InputCliente;