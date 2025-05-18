import { createBrowserRouter } from "react-router-dom";
import BusquedaCliente from "../pages/BusquedaClientes";
import BusquedaProducto from "../pages/BusquedaProductos";
import DetalleCliente from "../pages/DetalleCliente";
import DetalleProducto from "../pages/DetalleProducto";
import ListadoProductos from "../pages/ListadoProductos";
import ListadoClientes from "../pages/ListadoClientes";
import ErrorPage from "../pages/ErrorPage"; // <-- Importa el componente de error

const Enrutador = createBrowserRouter([
  /*ERUTADORES CLIENTE*/
  {
    path: "/",
    element: <BusquedaCliente />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/listado-clientes",
    element: <ListadoClientes />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/detalle-Cliente",
    element: <DetalleCliente />,
    errorElement: <ErrorPage />,
  },

  /*ERUTADORES PRODUCTO*/
  {
    path: "/buscar-Producto",
    element: <BusquedaProducto />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/listado-producto",
    element: <ListadoProductos />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/detalle-Producto",
    element: <DetalleProducto />,
    errorElement: <ErrorPage />,
  },

  /* Ruta por defecto (404) */
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default Enrutador;