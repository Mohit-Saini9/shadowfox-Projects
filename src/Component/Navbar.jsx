import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "experience" },
    { id: 4, link: "contact" },
  ];

  return (
    <div
      className="flex justify-between items-center  bg-gradient-to-tr from-slate-700 to-gray-600
      w-full h-15 text-white fixed rounded-sm"
    >
      <div>
        <h1 className="text-xl ml-2 font-signature">Mohit Saini</h1>
      </div>

      <ul className="hidden md:flex  justify-between items-center  h-10 w-1/2 mr-12">
        {links.map((id, link) => (
          <li
            className="px-2 cursor-pointer capitalize font-medium text-xl text-white
             ml-3 hover:scale-105 duration-200 hover:text-gray-300"
            key={id.link}
          >
            <Link to={id.link} smooth duration={400}>
              {id.link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="md:hidden  z-10 cursor-pointer mr-4 "
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}

        {nav && (
          <ul
            className="flex flex-col justify-center items-start absolute mt-4
        left-0 w-[95%] min-h[250] mx-3 bg-gradient-to-bl to from-black to-gray-600  rounded-xl"
          >
            {links.map(({ id, link }) => (
              <li
                key={id.link}
                className=" lg:hidden
             font-medium cursor-pointer capitalize justify-center
             text-grey-600 text-xl  text-white px-4 "
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
