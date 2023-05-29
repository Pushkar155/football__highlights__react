import React, { useState,useEffect } from 'react'
import "./contain.css"
import image2 from "./logo12.png";
import Cards from '../cards/Cards';
import axios from "axios";

const Conatin =  () => {
    const [data,setData]=useState([])
    useEffect(() => {
        fetchdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const options = {
        method: 'GET',
        url: 'https://free-football-soccer-videos.p.rapidapi.com/',
        headers: {
          'X-RapidAPI-Key': 'dc60be019cmshcdc4388ddb1829fp17c725jsndf904dc66136',
          'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
        }
      };
    const fetchdata = async () =>{
      try {
        const response = await axios.request(options);
        setData(response.data);

      } catch (error) {
        console.error(error);
      }
    }
    console.log(data)
  
  return (
    <div className='Conta'>
        <div className="conta__navbar">
            <img src={image2} alt="" />
        </div>
        <div className='conta__card'>
            {/* <Cards/> */}
            {data.map((item, index) => (
                <Cards  image={item.thumbnail} team1={item.side1.name} team2={item.side2.name} link={item.url}/>
            ))}
        </div>
    </div>
  )
}

export default Conatin