import { Button, Row } from "react-bootstrap"
import { } from "../estilosInvitaciones.css"




export const Informacion = () => {


    return (
        <section className="ceremonia-fiesta">
            <div className="container">
                <Row style={{justifyContent:"center"}}>
                    <div className="col-md-6 columna">
                        <img style={{ height: "12rem" }} src="https://agendalafecha.com/demolepou/assets/img/icono-ceremonia.svg" alt="" className="icon"></img>
                        <h4>Ceremonia y Fiesta</h4>
                        <p>9 de Diciembre a las 18:30 horas en Rut Haus.</p>
                        <p> Av. Int. Cantilo 1429, CABA. </p>
                        <p>No llegues tarde! No queremos empenzar sin vos!</p>
                        <a target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/vT6Rp5kWTjxu4DdV8">
                            <Button className="btn">LLEGAR A LA CEREMONIA</Button>
                        </a>
                    </div>


                    {/* <div className="col-md-6 columna">
                        <img style={{ height: "15rem" }} src="https://agendalafecha.com/demolepou/assets/img/icono-fiesta.svg" alt="" className="icon"></img>
                        <h4>Fiesta</h4>
                        <p>Te esperamos despues de la ceremonia en Arena Golf.</p>
                        <p>Av. Olivos 3215, Tortuguitas.</p>
                        <p>¡A dejar TODO!</p>
                        <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/aDbaVbqfjTau34u87">
                            <Button className="btn">LLEGAR A LA FIESTA</Button>
                        </a>
                    </div> */}
                </Row>
            </div>
        </section>

    )
}