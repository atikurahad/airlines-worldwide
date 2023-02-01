import React from 'react'

export default function Airplane(props) {

 const { image, title, price, description } = props.biman;
  return (
    <>
      <div className='h-[450px] w-[450px]'>
        <img className='h-[3rem] w-[5rem]' src={image} alt="airways logo" />
        <h1> Name:{title} </h1>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </>
  );
}
