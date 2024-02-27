import {Link} from 'react-router-dom';
import React from 'react'
// import '../App.css';



const LandingPage= () =>{
  return(
    <header className='nav-bar'>
      <div className="logo"><img src="./src/assets/greenland.png" alt="" /></div>
      <div className="menu">
        <Link to={'/'} >HOME</Link>
        <Link to={'/reservation'} >RESERVATION</Link>
        <Link to={'/contactus'} >CONTACT US</Link>
        <Link to={'/ourservices'} >OUR SERVICES</Link>
        <Link to={'/gallery'} >GALLERY</Link>
      </div>
    </header>
  );
};
export default LandingPage
