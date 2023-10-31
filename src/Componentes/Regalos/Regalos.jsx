import { } from "../estilosInvitaciones.css"
import regalo from "../Images/icono-regalo.svg"
import { Button, Container } from "react-bootstrap"

export const Regalos = () => {


    return (

        <section className="frase">
        <Container>
                <img src={regalo} alt="regalo" className="icon"></img>
                <p>El mejor regalo es que puedas venir, pero si querés hacernos un regalo...</p>
                <a target="_blank" rel="noopener noreferrer" href="https://www.aynic.com.ar/sitio/listas-clientes.aspx?i=1&idl=3739">
                <Button className="btn-alt"> LISTA DE REGALOS
                </Button>
                </a>

            </Container>
        </section>
    )
} 