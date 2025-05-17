import { useNavigate } from "react-router-dom";
import CardCliente from "../components/CardCliente";
import HistorialCliente from "../components/HistorialCliente";
import "./ListadoClientes.css";

function ListadoClientes() {
  const navigate = useNavigate(); // Hook para navegar

  const irAlInicio = () => {
    navigate("/"); // Redirige a la raíz "/"
  };

  return (
    <section className="card-clientes">
      <div className="props-card-cliente">
        <CardCliente  
                    src="src\assets\imagenes\clientes\Cliente 01_Mesa de trabajo 1.png" 
                    nombre="Juan Sebastián Rodríguez Pérez"
                    id="5141202"
                    fechaNacimiento="02 mayo 1965"
                    correo="correocliente@gmail.com"
                    celular="3512874566"
                    direccion="cr 62 # 76 a 28 sur"
                    ciudad="Medellín - Antioquia"
                    
                    />
                <CardCliente  
                    src="src\assets\imagenes\clientes\Cliente 01-02.png" 
                    nombre="Laura Valentina Gómez Ramírez"
                    id="5141202"
                    fechaNacimiento="02 mayo 1965"
                    correo="correocliente@gmail.com"
                    celular="3512874566"
                    direccion="cr 62 # 76 a 28 sur"
                    ciudad="Medellín - Antioquia"
                    />
                <CardCliente  
                    src="src\assets\imagenes\clientes\Cliente 01-03.png" 
                    nombre="Andrés Felipe Martínez Torres"
                    id="5141202"
                    fechaNacimiento="02 mayo 1965"
                    correo="correocliente@gmail.com"
                    celular="3512874566"
                    direccion="cr 62 # 76 a 28 sur"
                    ciudad="Medellín - Antioquia"
                    />
                <CardCliente  
                    src="src\assets\imagenes\clientes\Cliente 01-03.png" 
                    nombre="Andrés Felipe Martínez Torres"
                    id="5141202"
                    fechaNacimiento="02 mayo 1965"
                    correo="correocliente@gmail.com"
                    celular="3512874566"
                    direccion="cr 62 # 76 a 28 sur"
                    ciudad="Medellín - Antioquia"
                    />
                <CardCliente  
                    src="src\assets\imagenes\clientes\Cliente 01-03.png" 
                    nombre="Andrés Felipe Martínez Torres"
                    id="5141202"
                    fechaNacimiento="02 mayo 1965"
                    correo="correocliente@gmail.com"
                    celular="3512874566"
                    direccion="cr 62 # 76 a 28 sur"
                    ciudad="Medellín - Antioquia"
                    />
        
      </div>
      
      {/* Botón de navegación */}
      <div className="barra-home">
        <img src="src\assets\imagenes\Logo.png" alt="" srcset="" />
        <button onClick={irAlInicio}>
          Ir al Inicio
        </button>
      </div>
    </section>
  );
}

export default ListadoClientes;


