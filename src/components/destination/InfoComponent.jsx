import React, { useEffect, useState } from 'react';
import './styleDestination.scss';
import '../navBar/styleNavBar.scss';
import { getDestination } from '../../service/getDestination';

const InfoComponent = ({name}) => {
 
  const [destination, setDestination] = useState([]);

  useEffect(() => {
    const axiosData = async () => {
      try {
        const data = await getDestination();
        setDestination(data);
        console.log("informacion de la data: ", data);
        console.log("informacion de la destination: ", destination);
      } catch (error) {
        console.error('Error al obtener los datos de Destination:', error);
      }
    };
    axiosData();
  }, []);
    
  return (
    <>
        <div >
        {destination.filter(item => item.name === name)
        .map((ele) => (
          <section className='main' key={ele.id}>
            <div className='main__containerLeft'>
              <div className='main__containerTitle'>
                <span className='main__numTitle'>{ele.numTitle}</span>
                <h5 className='main__title'>{ele.title}</h5>
              </div>
              <div className='main__containerImg'>
                <figure className='main__figureImg'>
                  <img src={ele.images.webp} alt={ele.name} />
                </figure>
              </div>
            </div>
            <div className='main__containerRight'>
              <div className='main__containerName'>
                <span className='main__spanName' >{ele.name}</span>
              </div>
              <div className='main__containerParagraph'> 
                <p className='main__paragraph'>{ele.paragraph}</p>
              </div>
              <div className="main__line"></div>
              <div className='main__container-date' >
                <div className='main__container-distance'> 
                  <span className='main__span-text'>{ele.texDistance}</span>
                  <span className='main__span-date'>{ele.distance}</span>
                </div>
                <div className='main__cointainer-travel'>
                  <span className='main__span-text'>{ele.texTrave}</span>
                  <span className='main__span-date'>{ele.travelTime}</span>
                </div>

              </div>
              
            </div>
          </section>
           ))
          }
      </div>
     
    
    </>
  )
}

export default InfoComponent;