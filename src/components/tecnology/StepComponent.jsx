import React, { useEffect, useState } from 'react';
import MainTecnology from './MainTecnology';
import './styleTecnology.scss'
import { getTechnology } from '../../service/getTechnology';

const StepComponent = () => {

  const [technology, setTechnology] = useState([]);

  useEffect(() => {
    const axiosData = async () => {
      try {
        const data = await getTechnology();
        console.log("informacion de la data: ", data);
        setTechnology(data);
        console.log("informacion de la Technology: ", technology);
      } catch (error) {
        console.error('Error al obtener los datos de technology:', error);
      }
    };
    axiosData();
  }, []);

  
  const [step, setStep] = useState(1);

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  const ButtonComponent = ({ stepNumber }) => {
    const isActive = step === stepNumber;

    return (
      <button
        className={isActive ? 'active__step' : 'inactive__step'}
        onClick={() => handleStepChange(stepNumber)}
      >
        {stepNumber}
      </button>
    );
  };

  const Component1 = () => (
    <div>
      <MainTecnology technology={ technology} techId={1}/>
    </div>
  );

  const Component2 = () => (
    <div>
      <MainTecnology technology={ technology} techId={2}/>
    </div>
  );

  const Component3 = () => (
    <div>
      <MainTecnology technology={ technology} techId={3}/>
    </div>
  );

  return (
    <div>
      <div className="button__container">
        <ButtonComponent stepNumber={1} />
        <ButtonComponent stepNumber={2} />
        <ButtonComponent stepNumber={3} />
      </div>

      {step === 1 && <Component1 />}
      {step === 2 && <Component2 />}
      {step === 3 && <Component3 />}
    </div>
  );
};

export default StepComponent;

