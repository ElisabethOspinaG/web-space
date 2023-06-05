import React, { useState, useEffect } from 'react';
import './styleDestination.scss';
import '../navBar/styleNavBar.scss';
import { getDestination } from '../../service/getDestination';
import imgfondo from '../../assets/img/imgDestination.png';
import { Outlet, useLocation, useNavigation, useParams } from 'react-router-dom';
import NavDestination from './NavDestination';

const Destination = ({ name }) => {

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

  useEffect(() => {
    document.body.style.background = `url(${imgfondo}) no-repeat center center fixed`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundColor = '#0B0D17';

    return () => {
      document.body.style.backgroundImage = 'none';
    };
  }, []);

  return (
    <>
      <NavDestination />
      <Outlet />
      <div>
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
                  <span className='main__spanName'>{ele.name}</span>
                </div>
                <div className='main__containerParagraph'>
                  <p className='main__paragraph'>{ele.paragraph}</p>
                </div>
                <div className="main__line"></div>
                <div className='main__container-date'>
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
          ))}
      </div>
    </>
  )
}

export default Destination;
