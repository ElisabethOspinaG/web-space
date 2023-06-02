import React, {useEffect } from 'react';
// import React, { useState, useEffect } from 'react';
import './styleDestination.scss';
import '../navBar/styleNavBar.scss';
import imgfondo from '../../assets/img/imgDestination.png';
import { Outlet } from 'react-router-dom';
// import { Outlet, useLocation, useNavigation, useParams  } from 'react-router-dom';
import NavDestination from './NavDestination';

const Destination = () => {

 
  // const [Link, setLink] = useState(1);

  // const handLinkChange = (newLink) => {
  //   setLink(newLink)
  // };
  // const location = useLocation();

  // const navigation = useNavigation();

  // const {name} = useParams();

  // useEffect(() => {
  //   console.log(name);
  // }, []);



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
      <NavDestination/>
      <Outlet/>
    </>
  )
}

export default Destination