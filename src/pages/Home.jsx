import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
      <h2 className="text-3xl font-semibold text-pink-500 mb-2">I’m Nida!</h2>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-mono font-bold leading-tight mb-6">
        Welcome to My Journey of <br /> Discovery and Growth
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mb-6">
        A Tech Enthusiast passionate about exploring the world, embracing technology, enhancing personal growth, and nurturing wellness.
      </p>
      <button
        className="bg-pink-200 hover:bg-purple-300 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all"
        onClick={() => navigate("/blogs")}
      >
        Get Inspired
      </button>
    </section>
  );
};

export default Home;
