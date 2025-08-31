import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full max-h-screen  ">
      <div className="justify-center items-center px-2 ">
        <p className="text-4xl sm:7xl font-bold underline text-black ">About</p>
      </div>
      <div className="max-w-screen-lg h-auto justify-center text-xl flex flex-col px-4 md:flex-row">
        <p className=" py-2 mx-w-md gap-5  ">
          I am a passionate React.js developer with experience in building
          dynamic, responsive, and high-performance web applications. My
          expertise lies in developing clean and maintainable code, utilizing
          modern front-end technologies, and creating seamless user experiences.
          <br />
          <br />
          <p>Portfolio website, E-commerce Application</p>
        </p>
        {/* <p className=" py-4 my-w-md text-2xl md:ml-20 sm:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea
          animi optio dolores exercitationem autem praesentium odit laudantium
          nihil veniam, reprehenderit deleniti! Amet qui itaque, perferendis
          commodi aperiam doloribus dolorem.
        </p> */}
      </div>
    </div>
  );
};

export default About;
