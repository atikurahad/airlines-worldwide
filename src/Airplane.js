import React from 'react'

export default function Airplane(props) {

 const { name, established, logo, slogan, website } = props.biman;
  return (
    <>
      <div>
        <img src={logo} alt="airways logo" />
        <h1> Name:{name} </h1>
        <p>{slogan}</p>
        <p>{established}</p>
        <p>Website- {website}</p>
      </div>
    </>
  );
}
