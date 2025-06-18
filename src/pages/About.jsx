import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-pink-0 to-pink-200 min-h-screen">
      
      {/* Profile Image */}
      <div className="mb-8">
        <img 
           src="/blog2.png"//
          alt="img"
          className="w-60 h-60 rounded-full object-cover shadow-2xl border-4 border-white"
        />
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-bold text-pink-600 mb-4">Hey, I'm Nida 👩‍💻</h1>

      {/* Subheading */}
      <h2 className="text-2xl text-gray-700 mb-6 font-bold">Passionate Web Developer & Coder</h2>

      {/* Paragraph */}
      <p className="max-w-3xl text-center text-lg text-gray-800 leading-relaxed mb-8">
        I am a passionate software developer with a growing network of amazing developers, designers, and tech enthusiasts from around the world. 
        With over <span className="font-semibold text-pink-500">500+ connections</span> on LinkedIn, multiple collaborative projects, and a strong presence in coding communities, 
        I'm constantly expanding my knowledge and helping others along the way.
      </p>

      {/* Another Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-xl text-center">
        <h3 className="text-2xl font-bold text-pink-500 mb-4">My Mission 🚀</h3>
        <p className="text-gray-700">
          To build beautiful, user-friendly web applications that make an impact, and to inspire others to pursue careers in technology.
        </p>
      </div>

    </div>
  );
};

export default About;
