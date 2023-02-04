import React from 'react';

const Services = () => {
  return (
    <>
      <div className="p-3 bg-[#8000805b] shadow-2xl">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2.5 justify-center justify-items-center ">
          <img
            className="h-[26rem] w-[fit-content] my-auto"
            src="farmer.png"
            alt="banner"
          />
          <p className="text-4xl text-[ #EBEBEB] font-serif font-bold text-center my-auto mx-auto p-5">
            Check Our All Products. And Get A chance To Win{" "}
            <span className="text-6xl text-rose-500">15% Flat </span> off <br />
            {/* The button to open modal */}
            <label
              htmlFor="my-modal-3"
              className="btn bg-white mt-5 p-3 border border-rose-500 text-black hover:bg-rose-500 hover:text-[white] hover:font-mono rounded-full"
            >
              Grab Your Offer
            </label>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">
                  Use This Promo Code{" "}
                  <span className="text-1xl text-[gold]"> SODAI15</span>
                </h3>
                <p className="py-4 text-[white]">
                  You've been selected for a chance to get one year of sodai
                  flat 15% discount!
                </p>
              </div>
            </div>
            {/* <button className="bg-white mt-5 p-3 border border-rose-500 text-black hover:bg-rose-500 hover:text-[white] hover:font-mono rounded-full ">
              Grab Your Offer
            </button> */}
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
