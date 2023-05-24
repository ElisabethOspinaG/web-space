import React from 'react'
import { NavLink } from 'react-router-dom';

const NavDestination = () => {
  return (
    <>
      <div className='nav__container'>
        <ul className='nav__ul'>
          <NavLink className={"nav__link"} to="moon">MOON</NavLink>
          <NavLink className={"nav__link"} to="mars">MARS</NavLink>
          <NavLink className={"nav__link"} to="europa">EUROPA</NavLink>
          <NavLink className={"nav__link"} to="titan">TITAN</NavLink>
        </ul>
      </div>
    </>
  )
}

export default NavDestination;