import React from 'react'

import "./card.css";
import style from './cards.module.css';

const Cards =  ({image,team1,team2,link}) => {
  return (
    <div className= {`cards ${style.newDiv}`}>
      <div className='card'>
        <div className="card__image">
          {/* image 70% w==100% */}
          <img src={image} alt="" />
        </div>
        <div className="card__link">
        <h4 style={{color:'white'}}> {team1} VS {team2} </h4>
        <a href={link} target="_blank" rel="noreferrer" className="cont__button">
            <button>Link</button>
          </a>
      </div>
      </div>
    </div>
  )
}

export default Cards
