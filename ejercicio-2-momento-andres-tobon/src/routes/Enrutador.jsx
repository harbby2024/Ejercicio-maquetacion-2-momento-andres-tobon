import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import BusquedaCliente from "../pages/BusquedaClientes";
import BusquedaProducto from "../pages/BusquedaProductos";
import DetalleCliente from "../pages/DetalleCliente";
import DetalleProducto from "../pages/DetalleProducto";
import ListadoClienteProducto from "../pages/ListadoClientesyProductos.JSX";
 

const Enrutador = createBrowserRouter([
  /* Enrutador página home -principal*/
    {
    path: "/",
    element: <Home />,
  },

  /* Enrutador página busqueda de clientes*/
  {
    path: "/busqueda-cliente",
    element: <BusquedaCliente />,
  },

  /* Enrutador página busqueda de productos*/
   {
    path: "/Busqueda-Producto",
    element: <BusquedaProducto />,
  },

  /* Enrutador página detalle de clientes*/
  {
    path: "/Detalle-Cliente",
    element: <DetalleCliente />,
  },

  /* Enrutador página detalle de producto*/
  {
    path: "/Detalle-Producto",
    element: <DetalleProducto />,
  },

   /* Enrutador página lista de clientes y productos*/
  {
    path: "/lista-clientes-y-productos",
    element: <ListadoClienteProducto />,
  },
  
]);

export default Enrutador;