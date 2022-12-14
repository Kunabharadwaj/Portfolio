import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500"> About</p>
        </div>
        <p className="text-xl mt-20">
        👋 Hello there,

         😎 My name is Kuna Bharadwaj Swamy and I'm a self-taught Front End Developer I recently graduated from a apprenticeship program provided by Mindera Custom Software development company in Leicester and also completed advanced React JS specialization from Meta provided my Coursera, also got a Master's Degree this year 🥳, I aspire to become a great Front End developer 👨‍💻.

        </p>
      </div>

      <br />
    </div>
  );
}

export default About;
