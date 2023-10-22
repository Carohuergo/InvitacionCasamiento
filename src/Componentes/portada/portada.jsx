import { } from "../estilosInvitaciones.css"
import { ParallaxBanner} from "react-scroll-parallax"

export const Portada = () => {
    
    
    return (
        
       
      <> 
      <section>
      <ParallaxBanner
        layers={[{ image: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-carolahome.appspot.com/o/ellos8-PhotoRoom.jpg?alt=media&token=1e6acb5a-2152-4f9f-81f0-990742a59624&_gl=1*12qkfp9*_ga*MTQ0NDI2MTgwMi4xNjg0ODc5MjE5*_ga_CW55HF8NVT*MTY5Nzk4NjA0NC4yMS4xLjE2OTc5ODYwODIuMjIuMC4w', speed: -20,}]}
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

  
