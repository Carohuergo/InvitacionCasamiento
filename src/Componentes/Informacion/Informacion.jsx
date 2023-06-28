import { Button, Row } from "react-bootstrap"
import { } from "../estilosInvitaciones.css"




export const Informacion = () => {


    return (
        <section className="ceremonia-fiesta">
            <div className="container">
                <Row>
                    <div className="col-md-6 columna">
                        <img style={{ height: "15rem" }} src="https://agendalafecha.com/demolepou/assets/img/icono-ceremonia.svg" alt="" className="icon"></img>
                        <h4>Ceremonia</h4>
                        <p>26 de Agosto a las 16:30 horas en la Capilla Santa Teresita.</p>
                        <p> Golf Club Golfers 2911, Garin, Buenos Aires. </p>
                        <p>No llegues tarde! La novia es muy puntual!</p>
                        <a target="_blank" href="https://goo.gl/maps/JJSDDcMjrenVqJou8">
                            <Button className="btn">LLEGAR A LA CEREMONIA</Button>
                        </a>
                    </div>


                    <div className="col-md-6 columna">
                        <img style={{ height: "15rem" }} src="https://agendalafecha.com/demolepou/assets/img/icono-fiesta.svg" alt="" className="icon"></img>
                        <h4>Fiesta</h4>
                        <p>Te esperamos despues de la ceremonia en Arena Golf.</p>
                        <p>Av. Olivos 3215, Tortuguitas.</p>
                        <p>¡A dejar TODO!</p>
                        <a target="_blank" href="https://goo.gl/maps/aDbaVbqfjTau34u87">
                            <Button className="btn">LLEGAR A LA FIESTA</Button>
                        </a>
                    </div>
                </Row>
            </div>
        </section>

    )
}