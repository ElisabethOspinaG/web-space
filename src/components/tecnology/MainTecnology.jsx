import React, { useEffect, useState } from 'react'
import './styleTecnology.scss'


const MainTecnology = ({ technology, techId }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getImageSource = (item) => {
    return windowWidth <= 768 ? item.images.landscape : item.images.portrait;
  }
  return (
    <div>
      {technology
        .filter((item) => item.id === techId) // Reemplaza "desiredId" con el ID que deseas filtrar
        .map((item) => (
          <div key={item.id}>
            <div className='tech__titleSpace'>
              <p className='tech__titleSpace__numTittle'>{item.numTitle}</p>
              <h2 className='tech__titleSpace__tittle'>{item.title}</h2>
            </div>
            <div className='tech__container'>
              <article className='tech__steps'>
                {/* Botones */}
              </article>
              <div className='tech__description'>
                <h3 className='tech__title'>{item.text}</h3>
                <h2 className='tech__name'>{item.name}</h2>
                <p className='tech__paragraph'>{item.paragraph}</p>
              </div>
              <figure className='tech__img'>
                <img src={getImageSource(item)} alt={item.name} />
              </figure>
            </div>
          </div>
        ))}
    </div>

  )
}

export default MainTecnology