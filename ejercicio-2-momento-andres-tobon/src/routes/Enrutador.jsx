import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import BusquedaCliente from "../pages/BusquedaClientes";
import BusquedaProducto from "../pages/BusquedaProductos";
import DetalleCliente from "../pages/DetalleCliente";
import DetalleProducto from "../pages/DetalleProducto";
import ListadoProducto from "../pages/ListadoProductos";
import ListadoClientes from "../pages/ListadoClientes";
import ListadoClienteProducto from "../pages/ListadoClientesyProductos.JSX";
 

const Enrutador = createBrowserRouter([
  /* Enrutador página home -principal*/
    {
    path: "/",
    element: <Home />,
  },
  /*ERUTADORES CLIENTE*/
  /* Enrutador página busqueda de clientes*/
  {
    path: "/busqueda-cliente",
    element: <BusquedaCliente />,
  },

  /* Enrutador página detalle de clientes*/
  {
    path: "/listado-clientes",
    element: <ListadoClientes />,
  },

  /* Enrutador página detalle de clientes*/
  {
    path: "/Detalle-Cliente",
    element: <DetalleCliente />,
  },

   /* Enrutador página lista de clientes y productos*/
  {
    path: "/lista-clientes-y-productos",
    element: <ListadoClienteProducto />,
  },

  /*ERUTADORES PRODUCTO*/
  /* Enrutador página busqueda de productos*/
   {
    path: "/buscar-Producto",
    element: <BusquedaProducto />,
  },

  /* Enrutador página Listado de productos*/
   {
    path: "/listado-producto",
    element: <ListadoProducto />,
  },

  /* Enrutador página detalle de producto*/
  {
    path: "/Detalle-Producto",
    element: <DetalleProducto />,
  },
]);

export default Enrutador;