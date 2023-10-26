import { } from "../estilosInvitaciones.css"
import { ParallaxBanner} from "react-scroll-parallax"

export const Portada = () => {
    
    
    return (
        
       
      <> 
      <section>
      <ParallaxBanner
        layers={[{ image: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-carolahome.appspot.com/o/fondocorrecciones.jpg?alt=media&token=a536c7cc-a031-4e3e-a852-a4cdd5d5da5f&_gl=1*1vxnfbh*_ga*MTQ0NDI2MTgwMi4xNjg0ODc5MjE5*_ga_CW55HF8NVT*MTY5ODM2MDY5Mi4yMi4xLjE2OTgzNjA4NjkuMy4wLjA.', speed: -20,}]}
        className="portadaFondo"
        
      >
      
        <div style={{ position:"absolute", display:"flex", justifyContent:"flex-end", alignItems:"center", flexDirection:"column"}} className="absolute inset-0 flex items-center justify-center">
          <div className="fondoTitulo">
          <h1 className="text-8xl text-6xl text-white font-thin ">Silvina & Baby</h1>
          <h2 className=" text-white font-thin ">09.12.2023</h2>
          </div>
          
        </div>
        
      </ParallaxBanner>
      
   
      
      
      </section>
      </>
      
    );
  };

  
