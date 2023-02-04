import React from 'react';

const Services = () => {
  return (
    <>
      <div className="h-[30rem] w-[100%] bg-[#8000805b] shadow-2xl">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2.5 justify-center justify-items-center ">
          <img
            className="h-[26rem] w-[fit-content] my-auto"
            src="farmer.png"
            alt="banner"
          />
          <p className="text-4xl text-[ #EBEBEB] font-serif font-bold text-center my-auto mx-auto p-5">
            Check Our All Products. And Get A chance To Win{" "}
            <span className="text-6xl text-rose-500">15% Flat </span> off <br />
            <button className="bg-white mt-5 p-3 border border-rose-500 text-black hover:bg-rose-500 hover:text-[white] hover:font-mono rounded-full ">
              Grab Your Offer
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
