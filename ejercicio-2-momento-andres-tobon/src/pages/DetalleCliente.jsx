import HistorialCliente from "../components/HistorialCliente"; 
import "./DetalleCliente.css";
import { useNavigate } from "react-router-dom";

function DetalleCliente() {
    const navigate = useNavigate();

    const irAlInicio = () => {
        navigate("/");
    };

    const irAListadoClientes = () => {
        navigate("/listado-clientes");
    };

    return (
        <section className="contenedor-general">
            <div className="img-seccion">
                <img
                    src="src\assets\imagenes\clientes\Cliente-01_Mesa-de-trabajo-1.png"
                    alt="Cliente"
                    className="image-cliente"
                />
            </div>
            <div className="contenedor">
                <div className="info-cliente">
                    <h1>Andrés Felipe Martínez Torres</h1>
                    <h2>5141202</h2>
                    <h2>02 mayo 1965</h2>
                    <h2>correocliente@gmail.com</h2>
                    <h2>3512874566</h2>
                    <h2>cr 62 # 76 a 28 sur</h2>
                    <h2>Medellín - Antioquia</h2>
                </div>
                <div className="historial-compras">
                    
                        <HistorialCliente
                            src="src/assets/imagenes/productos/Productos 01-05.jpg"
                            productoNombre="Televisor Samsung Smart 48 Oled S90d"
                            precio="$ 2.549.900"
                            fechaCompra="01 enero 2023"
                        />
                        <HistorialCliente
                            src="src\assets\imagenes\productos\Productos 01-04.jpg"
                            productoNombre="Televisor Samsung Smart 48 Oled S90d"
                            precio="$ 2.549.900"
                            fechaCompra="01 enero 2023"
                        />
                        <HistorialCliente
                            src="src\assets\imagenes\productos\Productos 01-05.jpg"
                            productoNombre="Televisor Samsung Smart 48 Oled S90d"
                            precio="$ 2.549.900"
                            fechaCompra="01 enero 2023"
                        />
                </div>

                {/* 🔘 Botón para ir a listado de clientes */}
                <button onClick={irAListadoClientes} className="boton-listado-clientes">
                    Ir a Listado de Clientes
                </button>
            </div>
        </section>
    );
}

export default DetalleCliente;