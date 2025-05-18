import "./DetalleProducto.css";
import { useNavigate } from "react-router-dom"; // ✅ Importar navegación

function DetalleProducto() {
    const navigate = useNavigate();

    const irAListadoProductos = () => {
        navigate("detalle-Producto"); 
    };

    return (
        <>
            <section className="contenedor">
                <div className="card-info-producto">
                    <img
                        src="src/assets/imagenes/productos/casco-01.jpg"
                        alt="Casco principal"
                        className="img-principal-producto"
                    />
                    <h1>Casco Moto Bell Lithium Shear Gris Blanco</h1>
                    <h2>
                        El Lithium tiene un diseño súper agresivo y aerodinámico, ideal para los que buscan rendimiento al máximo. Viene con una pantalla Clickrelease V2 con cierre doble D, y cuatro rejillas de ventilación que podés cerrar desde afuera del casco. También tiene espacio para ponerle un intercomunicador y cumple con la certificación ECE 22.06.
                    </h2>
                    <h1>$ 622.700</h1>
                    <h2>72 Unidades</h2>
                </div>
                <div className="card-imgen-destacada">
                    <img
                        src="src/assets/imagenes/productos/casco-02.jpg"
                        alt="Imagen destacada"
                        className="img-principal-producto-01"
                    />
                    <h2 className="producto-destacado">Imagen de producto destacada</h2>
                </div>
            </section>
            <section className="barra-boton">
                {/* 🔘 Botón para ir a listado de productos */}
                
                <button onClick={irAListadoProductos} className="boton-listado-clientes-02">
                    Ir a Listado de Productos
                </button>
            </section>
        </>
    );
}

export default DetalleProducto;