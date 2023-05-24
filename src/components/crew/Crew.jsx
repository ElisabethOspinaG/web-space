import React, { useDeferredValue, useEffect, useState } from 'react'
import douglas from '../../assets/img/DouglaHurley.png'
import mark from '../../assets/img/MarkShutleworth.png'
import victor from '../../assets/img/Victor Glove.png'
import ansari from '../../assets/img/AnoushehAnsari.png'
import './styleCrew.scss'
import CrewCarousel from './CrewCarouse'

const Crew = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [crewDescription, setCrewDescription] = useState({});
  const crewData = [
    {
      "id": 1,
      "name": "DOUGLAS HURLEY",
      "Profession": "COMMANDER",
      "imagen": douglas,
      "numTitle": "02",
      "title": "MEET YOUR CREW",
      "paragraph": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      "id": 2,
      "name": "MARK SHUTTLEWORTH",
      "Profession": "Mission Specialist",
      "imagen": mark,
      "numTitle": "02",
      "title": "MEET YOUR CREW",
      "paragraph": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist. ",
    },
    {
      "id": 3,
      "name": "VICTOR GLOVER",
      "Profession": "PILOT",
      "imagen": victor,
      "numTitle": "02",
      "title": "MEET YOUR CREW",
      "paragraph": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    },
    {
      "id": 4,
      "name": "ANOUSHEH ANSARI",
      "Profession": "FLIGHT ENGINNER",
      "imagen": ansari,
      "numTitle": "02",
      "title": "MEET YOUR CREW",
      "paragraph": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.  ",
    }]
  const handleSlideChange = (index) => {
    setActiveSlide(index);
   
    const crew = crewData[index]
    setCrewDescription(crew)

  };
  useEffect(() => {
    handleSlideChange(0)
  }, []);
  return (
    <div className='main'>
      <CrewCarousel
        crew={crewDescription}
      />
      <div className='carousel_controls'>
        {crewData.map((_, index) => (
          <div
            key={index}
            className={`carousel_control${activeSlide === index ? ' active_botones' : ''}`}
            onClick={() => handleSlideChange(index)}
          >
            <div className="circle"></div>
          </div>
        ))}

      </div>


    </div>
  );
}

export default Crew