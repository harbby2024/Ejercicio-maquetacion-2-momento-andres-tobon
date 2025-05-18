
import CardProducto from "../components/CardProducto";
import "./ListadoProductos.css";
import { useNavigate } from "react-router-dom";

function ListadoProductos() {
  const navigate = useNavigate();

  const irAlInicio = () => {
    navigate("/buscar-Producto"); 
  };

  return (
    <>
      <section className="props-card-productos">
        <CardProducto 
        src="src\assets\imagenes\productos\casco-01.jpg"
        nombre="Camara Sony 34522"
        descripcion ="Cámara digital compacta de alta resolución, ideal para capturar fotos y videos nítidos con gran detalle. Ligera, fácil de usar y perfecta para llevar a cualquier parte."
        precio= "$685345"
        stock="89 en Stock"
        />
        <CardProducto 
        src="src\assets\imagenes\productos\Productos 01_Mesa de trabajo 1.jpg"
        nombre="Camara Sony 34522"
        descripcion ="Cámara digital compacta de alta resolución, ideal para capturar fotos y videos nítidos con gran detalle. Ligera, fácil de usar y perfecta para llevar a cualquier parte."
        precio= "$685345"
        stock="89 en Stock"
        />
        <CardProducto 
        src="src\assets\imagenes\productos\Productos 01-02.jpg"
        nombre="Camara Sony 34522"
        descripcion ="Cámara digital compacta de alta resolución, ideal para capturar fotos y videos nítidos con gran detalle. Ligera, fácil de usar y perfecta para llevar a cualquier parte."
        precio= "$685345"
        stock="89 en Stock"
        />
        <CardProducto 
        src="src\assets\imagenes\productos\Productos 01_Mesa de trabajo 1.jpg"
        nombre="Camara Sony 34522"
        descripcion ="Cámara digital compacta de alta resolución, ideal para capturar fotos y videos nítidos con gran detalle. Ligera, fácil de usar y perfecta para llevar a cualquier parte."
        precio= "$685345"
        stock="89 en Stock"
        />
        <CardProducto 
        src="src\assets\imagenes\productos\Productos 01-04.jpg"
        nombre="Camara Sony 34522"
        descripcion ="Cámara digital compacta de alta resolución, ideal para capturar fotos y videos nítidos con gran detalle. Ligera, fácil de usar y perfecta para llevar a cualquier parte."
        precio= "$685345"
        stock="89 en Stock"
        />
        <CardProducto 
        src="src\assets\imagenes\productos\Productos 01-06.jpg"
        nombre="Camara Sony 34522"
        descripcion ="Cámara digital compacta de alta resolución, ideal para capturar fotos y videos nítidos con gran detalle. Ligera, fácil de usar y perfecta para llevar a cualquier parte."
        precio= "$685345"
        stock="89 en Stock"
        />
      </section>

      {/* Botón de navegación */}
      <div className="barra-home">
        <img src="src/assets/imagenes/Logo.png" alt="Logo" className="logo-menu" />
        <button onClick={irAlInicio} className="boton-inicio">
          Ir al Inicio
        </button>
      </div>
    </>
  );
}

export default ListadoProductos;