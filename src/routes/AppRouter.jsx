import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import NotFound from '../components/notFound/NotFound';
import Destination from '../components/destination/Destination';
import Crew from '../components/crew/Crew';
import Tecnology from '../components/tecnology/Tecnology';
import Home from '../components/home/Home';


const AppRouter = () => {
    
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path={"destination"} element={<Destination />} />
          <Route path={"crew"} element={<Crew />} />
          <Route path={"tecnology"} element={<Tecnology />} />
        </Route>
        <Route path="*" element={<NotFound/>} /> 
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default AppRouter