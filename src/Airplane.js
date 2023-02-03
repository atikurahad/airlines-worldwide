import React from 'react'

export default function Airplane(props) {

 const { image, title, price } = props.biman;
  return (
    <>
      <div className="border-solid border-2 border-sky-500  rounded-lg	h-[25rem] w-[20rem]	grid justify-items-center	bg-dark">
        <img className="h-[15rem] w-[12rem] p-2" src={image} alt="airways logo" />
        <h1> Name:{title} </h1>
        {/* <p>{description}</p> */}
        <p className="m-2 p-2 text-2xl">Price : ${price}</p>
      </div>
    </>
  );
}
