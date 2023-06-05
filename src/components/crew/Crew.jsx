
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const CrewCarousel = ({ crew }) => {


  return (
    <>
      <div className='main_container_principal'>
        <div className='main_main'>
          <p className='main_numTitle'>{crew?.numTitle}</p>
          <h2 className='main_title'>{crew?.title}</h2>
        </div>

        <div className='main_container'>
          <div className='main_description'>
            <h3 className='main_profession'>{crew?.Profession}</h3>
            <h2 className='main_name'>{crew?.name}</h2>
            <p className='main_paragraph'>{crew?.paragraph}</p>
          </div>

          <div className='main_figure'>
            <figure className='main_foto1'>
            <img src={crew?.images?.png} alt={crew?.name} />
            </figure>
          </div>
        </div>
      </div>
    </>
  )
};

export default CrewCarousel;


// import 'react-responsive-carousel/lib/styles/carousel.min.css';


// const CrewCarousel = ({ crew }) => {

//   if (!crew || !crew.numTitle) {
//     return null; // O manejo de error alternativo si no hay datos válidos
//   }

//   return (
//     <>
//       <div className='main_container_principal'>
//         <div className='main_main'>
//           <p className='main_numTitle'>{crew.numTitle}</p>
//           <h2 className='main_title'>{crew.title}</h2>
//         </div>

//         <div className='main_container'>
//           <div className='main_description'>
//             <h3 className='main_profession'>{crew.Profession}</h3>
//             <h2 className='main_name'>{crew.name}</h2>
//             <p className='main_paragraph'>{crew.paragraph}</p>
//           </div>

//           <div className='main_figure'>
//             <figure className='main_foto1'>
//               <img src={crew.images.png} alt={crew.name} />
//             </figure>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// };

// export default CrewCarousel;
