import React from 'react';

export const BlogCard = ({ image, title, link }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 bg-white rounded-md shadow-md p-4">
      <img src={image} alt="blog" className="w-full h-auto rounded-md" />
      <h1 className="text-lg font-semibold mt-2">{title}</h1>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="mt-3 p-2 hover:text-purple-300 bg-pink-200 rounded-md">
          Read More
        </button>
      </a>
    </div>
  );
};
