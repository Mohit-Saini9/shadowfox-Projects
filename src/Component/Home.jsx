import React from "react";
import Mohit from "../Assets/MOHIT.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className=" w-full  text-black ">
      {/* max-h-screen   md:max-h-screen sm:min-h-screen lg:h-screen md:h-screen */}
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center 
      justify-between px-3  md:flex-row "
      >
        <div className="px-3 mx-auto">
          <h2 className="text-4xl cursor-pointer md:text-7xl mt-20 text-gray-300  font-bold">
            <Link to={"home"} smooth duration={400}>
              Hi I am Mohit Saini
            </Link>
          </h2>
          <p className="py-4 justify-between text-xl md:text-xl  items-center text-white max-w-md ">
            Full Stack Developer (MERN Stack) With 6 months of hands-on
            experience in the MERN (MongoDB, Express.js, React, Node.js) stack,
            I am a passionate and dedicated developer eager to create efficient,
            scalable, and user-friendly web applications. My expertise spans
            across building dynamic front-end interfaces, developing robust
            back-end services, and seamlessly integrating databases to deliver
          </p>
          <div className=" flex  justify-items-center items-center max-md:hidden  ">
            <button
              className="bg-orange-400 rounded-lg  px-6 py-3 
          hover:scale-110 duration-300 "
            >
              <a href={require("../Assets/mp.pdf")} download={"Resume.pdf"}>
                DownloadCv
              </a>
            </button>
            <button
              className="bg-orange-400 rounded-lg px-6 py-3 ml-20
          hover:scale-110 duration-30 "
            >
              <Link to={"contact"} smooth duration={400}>
                Conatact
              </Link>
            </button>
          </div>
        </div>
        <div className="">
          <img
            src={Mohit}
            alt="img"
            className=" rounded-xl  w-40  ml-10 md:mt-20 md:h-[90%]w-[80%]  "
          />
        </div>
        <div className="flex justify-between p-2 text-l font-medium mt-0 md:hidden">
          <button
            className="bg-orange-400 rounded-lg  px-6 py-3 
          hover:scale-110 duration-300  "
          >
            <a href={require("../Assets/mp.pdf")} download={"Resume.pdf"}>
              DownloadCv
            </a>
          </button>
          <button
            className="bg-orange-400 rounded-lg px-6 py-3
           hover:scale-110 duration-300 ml-20"
          >
            <Link to={"contact"} smooth duration={400}>
              Conatact
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
