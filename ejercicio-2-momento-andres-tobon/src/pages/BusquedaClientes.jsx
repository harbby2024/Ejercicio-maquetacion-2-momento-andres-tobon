import { useEffect } from "react";
import Swal from "sweetalert2";
import './BusquedaClientes.css';
import LogoMercadoLibre from "/mercado-libre-logo-1.png"

function BusquedaCliente() {
    
  useEffect(() => {
    const mostrarAlerta = async () => {
      const { value: email } = await Swal.fire({
        title: "Ingresa el correo del cliente",
        input: "email",
        inputLabel: "Correo electrónico",
        inputPlaceholder: "ejemplo@correo.com",
        customClass: {
          title: "swal-title",
          input: "swal-input",
          popup: "swal-popup",
          confirmButton: "swal-confirm-button"
        }
      });

      if (email) {
        Swal.fire(`Correo ingresado: ${email}`);
      }
    };

    mostrarAlerta();
  }, []);

  return null; // No renderiza nada visible
}

function logoBienvenida(){
    return(
        <section className="logoBienvenida">
                <h1>Buscar Cliente</h1>
                <img src={LogoMercadoLibre}  alt="" srcset="" />
        </section>
    )
}

export default BusquedaCliente;