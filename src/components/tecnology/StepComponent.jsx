import React, { useState } from 'react';
import launch from '../../assets/img/launch.jpg'
import launchMobile from '../../assets/img/launchMobile.png'
import spaceport from '../../assets/img/spaceport.png'
import capsule from '../../assets/img/capsule.png'
import spaceportMobile from '../../assets/img/spaceportMobile.png'
import capsuleMobile from '../../assets/img/capsuleMobile.png'
import MainTecnology from './MainTecnology';
import './styleTecnology.scss'


const StepComponent = () => {

  

    const technology = [
        {
          id: 1,
          name: "LAUNCH VEHICLE",
          text: "THE TERMINOLOGY…",
          imageDesk: launch,
          imageMobile: launchMobile,
          numTittle: "03",
          title: "SPACE LAUNCH 101",
          paragraph: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!  ",
        },
        {
          id: 2,
          name: "SPACEPORT",
          text: "THE TERMINOLOGY…",
          imageDesk: spaceport,
          imageMobile: spaceportMobile,
          numTittle: "03",
          title: "SPACE LAUNCH 101",
          paragraph: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.  ",
        },
        {
          id: 3,
          name: "SPACE CAPSULE",
          text: "THE TERMINOLOGY…",
          imageDesk: capsule,
          imageMobile: capsuleMobile,
          numTittle: "03",
          title: "SPACE LAUNCH 101",
          paragraph: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.  ",
        }
      ]
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

