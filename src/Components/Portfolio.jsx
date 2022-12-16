import React from "react";
import fruityvice from "../assets/portfolio/Fruityvice.png";
import country from "../assets/portfolio/countrysearch.png";
import tingdog from "../assets/portfolio/Tingdog.png";

const Portfolio = () => {


    const projects = [
      {
        id: 1,
        src: fruityvice,
      },
      {
        id: 2,
        src: country,
      },
      {
        id: 3,
        src: tingdog,
      },
    ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="p-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of work right here</p>
        </div>

        

<div
            
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"
          >
            {projects.map(({ id, src }) => (
                <div key={id}className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt="img1"
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </div>
              </div>
          
          ))}
            
          </div>
      </div>
    </div>
  );
}

export default Portfolio;
