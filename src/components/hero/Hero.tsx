import React from "react";
const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black"
    
    >
  
      <div className="z-10 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white">Tu marca</h1>
      <p className="mt-4 text-xl md:text-2xl text-white">Nuestra misión más importante</p>
      <button className="mt-8 px-8 py-3 text-lg font-medium text-white bg-gray-900 hover:bg-gray-800">
        Comenzar
      </button>
    </div>
    </section>
  );
};

export default Hero;
