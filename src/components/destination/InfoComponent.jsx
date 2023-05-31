import React from 'react';
import './styleDestination.scss';
import '../navBar/styleNavBar.scss';
import moon from '../../assets/img/moon.svg';
import mars from '../../assets/img/MARS.svg';
import euro from '../../assets/img/EUROPA.svg';
import titan from '../../assets/img/TITAN.svg';


const InfoComponent = () => {

    const space = [
        {
          id: 1,
          name: 'MOON',
          imagen: moon,
          numTitle: "01",
          title: "PICK YOUR DESTINATION",
          paragraph: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
          texDistance: "AVG. DISTANCE",
          distance: "384,400 KM",
          texTrave: "Est. travel time",
          travelTime: "3 days"
        },
        {
          id: 2,
          name: "MARS",
          imagen: mars,
          numTitle: "01",
          title: "PICK YOUR DESTINATION",
          paragraph: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
          texDistance: "AVG. DISTANCE",
          distance: "225 MIL. km",
          texTrave: "Est. travel time",
          travelTime: "9 months"
        },
        {
          id: 3,
          name: "EUROPA",
          imagen: euro,
          numTitle: "01",
          title: "PICK YOUR DESTINATION",
          paragraph: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
          texDistance: "AVG. DISTANCE",
          distance: "628 MIL. km",
          texTrave: "Est. travel time",
          travelTime: "3 years"
        },
        {
          id: 4,
          name: "TITAN",
          imagen: titan,
          numTitle: "01",
          title: "PICK YOUR DESTINATION",
          paragraph: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
          texDistance: "AVG. DISTANCE",
          distance: "1.6 BIL. km",
          texTrave: "Est. travel time",
          travelTime: "7 years"
        }
      ];
    
  return (
    <>
        <div >
        
        {space.map((ele) => (
          <section className='main' key={ele.id}>
            <div className='main__containerLeft'>
              <div className='main__containerTitle'>
                <span className='main__numTitle'>{ele.numTitle}</span>
                <h5 className='main__title'>{ele.title}</h5>
              </div>
              <div className='main__containerImg'>
                <figure className='main__figureImg'>
                  <img className= 'main' src={ele.imagen} alt={ele.name} />
                </figure>
              </div>
            </div>
            <div className='main__containerRight'>
              
              <div className='main__containerName'>
                <span>{ele.name}</span>
              </div>
              <div className='main__containerParagraph'> 
                <p className='main__paragraph'>{ele.paragraph}</p>
              </div>
              <div className="main__line"></div>
              <div className='main__containerSubtile'> 
                <span>{ele.texDistance}</span>
                <span>{ele.texTrave}</span>
              </div>
              <div className='main__cointainerDate'> 
              <span className='main__distance'>{ele.distance}</span>
              <span className='main__distance'>{ele.travelTime}</span>
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