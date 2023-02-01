import React, { useEffect, useState } from "react";
import Airplane from "./Airplane";

const Airplanes = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, []);

  return (
    <>
      <h1 className="text-blue-400">I am here</h1>
      <h1>Length:{products.length}</h1>

      <div>
        {products.map((biman) => (
          <Airplane biman={biman} key={biman.id} />
        ))}
      </div>
    </>
  );
};

export default Airplanes;
