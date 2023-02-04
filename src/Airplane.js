import React from 'react'

export default function Airplane(props) {

 const { image, title, price,description } = props.biman;
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl border-solid border-2 border-sky-500  rounded-lg   hover:bg-black hover:border-yellow-300 ">
        <figure>
          <img className="h-[17rem] w-[fill] p-2 " src={image} alt="Shoes" />
        </figure>
        <div className="card-body text-white hover:text-yellow-400">
          <h2 className="card-title text-fuchsia-500	">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">BUY NOW ${price}</button>
          </div>
        </div>
      </div>


    </>
  );
}
