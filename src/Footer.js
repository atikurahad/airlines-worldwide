import React from "react";
// import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-black p-5">
        <div className="grid sm:grid-cols-3 m-5 text-center">
          <div>
            <h1 className="text-2xl text-yellow-300 ">Shop Adress</h1>
            <p className="text-xl">32, Sodaiwala Center, Uttara-6, Dhaka</p>
            <p className="text-xl">Email: sodaiwala@yahoo.com</p>
            <p className="text-xl">Helpline: 01333224455 , 01333224454</p>
          </div>
          <div className="flex flex-col text-2xl font-bold m-2 text-emerald-500	">
            <p className="text-2xl text-yellow-300 font-mono">Know More</p>
            <a href="/">About us</a>
            <a href="/">Terms & condition</a>
            <a href="/">privacy and policy</a>
            <a href="/">Refund policy</a>
          </div>
          <div className="mt-2">
            <p className="text-center text-2xl mb-2 text-yellow-300">
              Opening time
            </p>
            <p>
              Sat-Mon{" "}
              <span className="text-xl text-white">09:00am - 08:15pm</span>
            </p>
            <p>
              Tue-Thu{" "}
              <span className="text-xl text-white">09:45am - 08:45pm</span>
            </p>
            <p>
              Friday <span className="text-xl text-white">Weekend</span>
            </p>
          </div>
        </div>
        <p className="text-center text-2xl m-3 text-orange-700	">
          &copy; all rights reserved{" "}
          <span className="text-2xl font-bold text-yellow-300">sodaiwala</span>{" "}
          2023
        </p>
      </div>
    </>
  );
};

export default Footer;
