import React from 'react'

export default function Airplane(props) {

 const { image, title, price, description } = props.biman;
  return (
    <>
      <div className=''>
        <img className='h-[30rem] w-[25rem]' src={image} alt="airways logo" />
        <h1> Name:{title} </h1>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    </>
  );
}
