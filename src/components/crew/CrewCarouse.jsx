import React, { useEffect, useState } from 'react'
import './styleCrew.scss'
import CrewCarousel from './Crew'
import ImagenCrew from '../../assets/img/Bitmap.png'
import { getCrew } from '../../service/getCrew'

const Crew = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [crewDescription, setCrewDescription] = useState({});
  const[crewData,setCrewData ] =useState([])
 
  useEffect(() => {
   

    const getData = async () =>{
      const data = await getCrew();
      setCrewData (data)
     
    }
    getData()
    handleSlideChange(0)
  }, []);


  useEffect(() => {
    document.body.style.background = `url(${ImagenCrew}) no-repeat center center fixed`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundColor = '#0B0D17';
    return () => {
      document.body.style.backgroundImage = 'none';
    };
  },

  );
  const handleSlideChange = (index) => {
    console.log(index);
    setActiveSlide(index);
   
    const crew = crewData[index]
    console.log(crew);
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





// import React, { useDeferredValue, useEffect, useState } from 'react'
// // import douglas from '../../assets/img/image-douglas.svg'
// // import mark from '../../assets/img/image-Marks.svg'
// // import victor from '../../assets/img/image-Victor.svg'
// // import ansari from '../../assets/img/image-Ansari.svg'
// import './styleCrew.scss'
// import CrewCarousel from './Crew'
// import ImagenCrew from '../../assets/img/Bitmap.png'
// import { getCrew } from '../../service/getCrew';

// const Crew = () => {

//   const [crew, setCrew] = useState([]);
//   const [activeSlide, setActiveSlide] = useState(0);
  
  
//   const [crewDescription, setCrewDescription] = useState({});

//   useEffect(() => {
//     const axiosData = async () => {
//       try {
//         const data = await getCrew();
//         console.log("informacion de la data: ", data);
//         setCrew(data);
//       } catch (error) {
//         console.error('Error al obtener los datos de Crew:', error);
//       }
//     };
//     // console.log(crew);
//     axiosData();
//   }, []);

//   useEffect(() => {
//     handleSlideChange(0)
//   }, []);
//   const handleSlideChange = (index) => {
//     setActiveSlide(index);
   
//    const crew1 = crew[index]
//     setCrewDescription(crew1)

//   };

//   useEffect(() => {
//     document.body.style.background = `url(${ImagenCrew}) no-repeat center center fixed`;
//     document.body.style.backgroundSize = 'cover';
//     document.body.style.backgroundColor = '#0B0D17';
//     return () => {
//       document.body.style.backgroundImage = 'none';
//     };
//   },
//   );

//   return (
//     <div className='main_crew'>
//       <CrewCarousel
//         crew={crewDescription}
//       />
//       <div className='carousel_controls'>
//         {crew.map((_, index) => (
//           <div
//             key={index}
//             className={`carousel_control${activeSlide === index ? ' active_botones' : ''}`}
//             onClick={() => handleSlideChange(index)}
//           >
//             <div className="circle"></div>
//           </div>
//         ))}

//       </div>


//     </div>
//   );
// }

// export default Crew