import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Informacion } from './Componentes/Informacion/Informacion';
import { Bienvenida } from './Componentes/bienvenida/bienvenida';
import { Portada } from './Componentes/portada/portada';
import { Regalos } from './Componentes/Regalos/Regalos';
import { Asistencia } from './Componentes/Asistencia/Asistencia';
import { DressCode } from './Componentes/DresCode/DressCode';
import { Canciones } from './Componentes/Canciones/Canciones';
import { Gracias } from './Componentes/Gracias/Gracis';
import {ParallaxProvider} from "react-scroll-parallax"

function App() {
  return (
    <>
    <ParallaxProvider>
    <Portada/>
    <Bienvenida/>
    <Informacion/>
    <Regalos/>
    <Asistencia/>
    <DressCode/>
    <Canciones/>
    <Gracias/>
    </ParallaxProvider>
    </>


  )
}

export default App;
