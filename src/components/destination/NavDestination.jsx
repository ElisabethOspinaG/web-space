import React from 'react'
import { NavLink } from 'react-router-dom';

const NavDestination = () => {

  const navDestination = [
    {
      id: 1,
      name: 'MOON',
      subName: "moon",
      path: '/destination/moon',
    },
    {
      id: 2,
      name: 'MARS',
      subName: "mars",
      path: '/destination/mars',
    },
    {
      id: 3,
      name: 'EUROPA',
      subName: "europa",
      path: '/destination/europa',
    },
    {
      id: 4,
      name: 'TITAN',
      subName: "titan",
      path: '/destination/titan',
    },

  ]
  return (
    <>
      <div className='destination'>
        <ul className='destination__ul'>
          {navDestination.map((item) => (
            <li key={item.id}>
              {/* <NavLink path= {item.path} className={"destination__link"} to={item.name}>{item.name}</NavLink> */}
              <NavLink className={"destination__link"} to={item.path} end={item.name === "MOON"}>{item.name}</NavLink>
              <div className="destination__line"></div>
            </li>
         ))}
        </ul>
      </div>
    </>
  )
}

export default NavDestination;
     
        
          
           
         