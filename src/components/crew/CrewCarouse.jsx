import React, { useState } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';


const CrewCarousel = ({ crew }) => {


  return (
    <>
    <div className='main_container'>

      <div className='main_main'>
        <p className='main_numTitle'>{crew.numTitle}</p>
        <h2 className='main_title'>{crew.title}</h2>
      </div>
      <div className='main_description'>
        <h3 className='main_profession'>{crew.Profession}</h3>
        <h2 className='main_name'>{crew.name}</h2>
        <p className='main_paragraph'>{crew.paragraph}</p>
      </div>
      </div>
      <div className='main_figure'>
        <figure className='main_foto1'>
          <img src={crew.imagen} alt={crew.name} />
        </figure>
      </div>
    
    </>
  )
};

export default CrewCarousel;
