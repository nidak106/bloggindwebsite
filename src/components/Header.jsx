import React from 'react';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-pink-200 shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-black">Nida's<span className='text-pink-400'>  Blog</span></div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className=" text-white hover:text-pink-400">Home</a></li>
            <li><a href="#" className=" text-white hover:text-pink-400">About</a></li>
            <li><a href="#" className="text-white hover:text-pink-400">Blog</a></li>
            <li><a href="#" className=" text-white hover:text-pink-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
