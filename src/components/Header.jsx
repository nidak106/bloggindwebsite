import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-pink-200 shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold font-mono text-black">Nida's<span className='text-pink-400'> Blog</span></div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-white hover:text-pink-400">Home</Link></li>
            <li><Link to="/blogs" className="text-white hover:text-pink-400">Blog</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
