import React, { useEffect, useState } from 'react';
import Airplane from '../airplane/Airplane';

const Airplanes = () => {

  const [airplanes,setAirplanes] =useState(0)
 useEffect(()=>{
  fetch("https://api.instantwebtools.net/v1/airlines")
  .then(res => res.json())
  .then(data => setAirplanes(data))
 },[])

  return (
    <div>
      <h1>Airplane list</h1>
      <div>
        {
          airplanes.map((airplane)=>{
              <Airplane airplane={airplane} />
          })
        }
      </div>
    </div>
  );
};

export default Airplanes;
