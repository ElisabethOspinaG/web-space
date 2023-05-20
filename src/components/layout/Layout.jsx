import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../navBar/NavBar'
import './layout.scss'

const Layout = () => {
  return (
    <div className='main__layout'>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default Layout