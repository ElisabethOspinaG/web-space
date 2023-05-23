import React, { useEffect } from 'react';
import bgTech from '../../assets/img/bgTechnology.png'; // Ajusta la ruta según la ubicación real de tu imagen
import './styleTecnology.scss'
import StepComponent from './StepComponent';

const Tecnology = () => {

  useEffect(() => {
    document.body.style.background = `url(${bgTech}) no-repeat center center fixed`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundColor = '#0B0D17';

    return () => {
      document.body.style.backgroundImage = 'none';

    };
  }, []);

  return (
    <StepComponent />

  );
};

export default Tecnology;
