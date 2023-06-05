import React, { useEffect } from 'react';
// import Layout from '../layout/Layout';
import ImagenHome from '../../assets/img/imagen.png';
import ImagenHomeMobile from '../../assets/img/ovalMobile.png';
import './home.scss'
import imagen from '../../assets/img/Oval.png';




const Home = () => {
  // useEffect(() => {
  //   document.body.style.background = `url(${ImagenHome}) no-repeat center center fixed`;
  //   document.body.style.backgroundSize = 'cover';
  //   document.body.style.backgroundColor = '#0B0D17';



  //   return () => {
  //     document.body.style.backgroundImage = 'none';



  //   };
  // },
  // );

  useEffect(() => {
    const setBackgroundImage = () => {
      const isDesktop = window.matchMedia("(min-width: 1200px)").matches;
      const backgroundImage = isDesktop ? `url(${ImagenHome}) no-repeat center center fixed` : `url(${ImagenHomeMobile}) no-repeat center center fixed`;
      document.body.style.background = backgroundImage;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundColor = '#0B0D17';
    };
  
    setBackgroundImage();
  
    // Actualizar el fondo cuando se cambie el tamaño de la pantalla
    window.addEventListener("resize", setBackgroundImage);
  
    return () => {
      // Eliminar el evento de cambio de tamaño cuando se desmonte el componente
      window.removeEventListener("resize", setBackgroundImage);
      document.body.style.backgroundImage = 'none';
    };
  }, []);
  

  return (
    <div>
      <div className='container__home'>
        <div className="container__home-info">
          <h3>SO, YOU WANT TO TRAVEL TO</h3>
          <h1>SPACE</h1>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
      </div>
      <div>
        <div className='container__home-imagen'>
          <div className='container__home-explore'>
            <img src={imagen} alt="Imagen" />
            <h2>EXPLORE</h2>
          </div>
        </div>
      </div>

    </div>

  );




}






export default Home;