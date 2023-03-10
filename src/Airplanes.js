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
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-2 p-2 gap-2.5	justify-center justify-items-center">
        {products.map((biman) => (
          <Airplane biman={biman} key={biman.id} />
        ))}
      </div>
    </>
  );
};

export default Airplanes;
