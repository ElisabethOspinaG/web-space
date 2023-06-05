import React, { useEffect, useState } from 'react'

import './styleCrew.scss'
import CrewCarousel from './Crew'
import ImagenCrew from '../../assets/img/Bitmap.png'
import { getCrew } from '../../service/getCrew'

const Crew = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [crewDescription, setCrewDescription] = useState({});
  console.log(crewDescription);
  const[crewData,setCrewData ] =useState([0])
  
  const getData = async () =>{
    const data = await getCrew();
    setCrewData (data)
  }
  useEffect(() => {
  
    getData()
   
  }, []);


  useEffect(() => {
     handleSlideChange(0)
    document.body.style.background = `url(${ImagenCrew}) no-repeat center center fixed`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundColor = '#0B0D17';
    return () => {
      document.body.style.backgroundImage = 'none';
    };
  },
  );

  const handleSlideChange = (index) => {
    setActiveSlide(index);
   
    const crew = crewData[index]
    setCrewDescription(crew)

  };

  return (
    <div className='main_crew'>
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


