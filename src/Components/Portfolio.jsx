import React from "react";
import fruityvice from "../assets/portfolio/Fruityvice.png";
import country from "../assets/portfolio/countrysearch.png";
import tingdog from "../assets/portfolio/Tingdog.png";
import simon from "../assets/portfolio/simons.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: fruityvice,
      link: "https://fruityvice-react-app.vercel.app/",
      code: "https://github.com/Kunabharadwaj/fruityvice-react-app",
    },
    {
      id: 2,
      src: country,
      link: "https://country-search-blush.vercel.app/",
      code: "https://github.com/Kunabharadwaj/countrysearch",
    },
    {
      id: 3,
      src: tingdog,
      link: "https://tingdog-lilac.vercel.app/",
      code: "https://github.com/Kunabharadwaj/ToDoList",
    },
    {
      id: 4,
      src: simon,
      link: "https://simon-game-sk7o.vercel.app/",
      code: "https://github.com/Kunabharadwaj/simongame",
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

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, link, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="img1"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={link}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>

                <a href={code}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
