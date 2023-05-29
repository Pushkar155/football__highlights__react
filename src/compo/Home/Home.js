import React from 'react'
import "./home.css";
import {NavLink} from "react-router-dom";
import ved from "./to__bg.mp4";
import image from "./body__center.png";
import image1 from "./logo12.png";

const Home = () => {
  return (
    <div className='home'>
        <video  loop autoPlay muted >
      <source src={ved} type="video/mp4"/>
     </video>
     <div className="conte">
      <div className="nav">
        <img src={image1} alt="" />
      </div>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="center">
        <NavLink className="hatana" to="/contain"><button className="btn-grad">Visit</button></NavLink>
      </div>
     </div>
    </div>
  )
}

export default Home