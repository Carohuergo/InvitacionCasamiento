
import { useState } from "react";
import { } from "../estilosInvitaciones.css"
import { ParallaxBanner} from "react-scroll-parallax"

export const Portada = () => {
    
    
    return (
        
       
      <> 
      <section>
      <ParallaxBanner
        layers={[{ image: 'https://firebasestorage.googleapis.com/v0/b/ecommerce-carolahome.appspot.com/o/IMG_0848.jpg?alt=media&token=2e0b7ee1-1d7a-4641-9740-0028493f3713', speed: -20}]}
        className="portadaFondo"
        
      >
      
        <div style={{ position:"absolute", display:"flex", justifyContent:"flex-end", alignItems:"center", flexDirection:"column"}} className="absolute inset-0 flex items-center justify-center">
          <div className="fondoTitulo">
          <h1 className="text-8xl text-6xl text-white font-thin ">Gero & Caro</h1>
          <h2 className=" text-white font-thin ">26-08-2023</h2>
          </div>
        </div>
      </ParallaxBanner>
      </section>
      </>
      
    );
  };

  
