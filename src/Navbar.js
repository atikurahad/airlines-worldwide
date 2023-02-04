import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#000000]">
        <div className="navbar ">
          <div className="flex-1">
            <a
              className="btn btn-ghost normal-case text-2xl text-red-500"
              href="/"
            >
              SODAIWALA
            </a>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
