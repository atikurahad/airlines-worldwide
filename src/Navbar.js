import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-[#538b0aab]">
      <div className="navbar ">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl" href='/'>SODAI</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2331/2331966.png"
                  alt=""
                />
              </div>
            </label>
            {/* <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between text-white">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
