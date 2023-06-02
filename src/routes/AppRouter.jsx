import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import NotFound from '../components/notFound/NotFound';
import Destination from '../components/destination/Destination';
import Crew from '../components/crew/CrewCarouse';
import Tecnology from '../components/tecnology/Tecnology';
import Home from '../components/home/Home';
import InfoComponent from '../components/destination/InfoComponent';

const AppRouter = () => {
    
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path={"destination"} element={<Destination />}>
            <Route path={'moon'} element={<InfoComponent name={"MOON"}/>}/>
            <Route path={'mars'} element={<InfoComponent name={"MARS"}/>}/>
            <Route path={'europa'} element={<InfoComponent name={"EUROPA"}/>}/>
            <Route path={'titan'} element={<InfoComponent name={"TITAN"}/>}/>
          </Route>
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