import React, { useEffect, useState } from "react";
import Airplane from "./Airplane";

const Airplanes = () => {
  const [airways, setAirways] = useState([]);
  useEffect(() => {
    fetch("airways.json")
      .then((res) => res.json())
      .then((data) => setAirways(data))
  }, []);

  return (
    <>
      <h1>I am here</h1>
      <h1>Length:{airways.length}</h1>

      <div className="air-container">
        {airways.map((biman) => (
          <Airplane biman={biman} />
        ))}
      </div>
    </>
  );
};

export default Airplanes;
