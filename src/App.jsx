import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div>
      <header className="bg-pink-200 fixed top-0 left-0 w-full z-10 shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-lg font-mono mb-2 sm:mb-0 ">
            Nida<span className="text-purple-400">Khan</span>
          </h1>
          <ul className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
            <li>
              <a href="#" className="text-gray-50 hover:text-purple-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-purple-400">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-purple-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-purple-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>
      <main className="pt-28">
        <section className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
          <h2 className="text-3xl font-semibold text-pink-500 mb-2">
            I’m Nida!
          </h2>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-mono font-bold leading-tight mb-6">
            Welcome to My Journey of <br /> Discovery and Growth
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mb-6">
            A marketing professional passionate about exploring the world,
            embracing technology, enhancing personal growth, and nurturing
            wellness.
          </p>
          <button className="bg-pink-200 hover:bg-purple-300 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all">
            Get Inspired
          </button>
        </section>

        <section className="p-4">
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="w-full sm:w-1/2 md:w-1/3 bg-white rounded-md shadow-md p-4">
              <img
                src="/blog1.png"
                alt="pic of a guy"
                className="w-full h-auto rounded-md"
              />
              <h1 className="text-lg font-semibold mt-2">
                The Future of Wearable Tech: Innovations Shaping Our Lives
              </h1>
              <button className="mt-3 p-2 hover:text-purple-300 bg-pink-200 rounded-md">
                Read More
              </button>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 bg-white rounded-md shadow-md p-4">
              <img
                src="/blog3.png"
                alt="pic of a guy"
                className="w-full h-autorounded-md"
              />
              <h1 className="text-lg font-semibold mt-2">
                Unplugged Adventures: How Digital Detoxing Transformed My
                Travels
              </h1>
              <button className="mt-3 p-2 hover:text-purple-300 bg-pink-200 rounded-md">
                Read More
              </button>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 bg-white rounded-md shadow-md p-4">
              <img
                src="/blog2.png"
                alt="pic of a guy"
                className="w-full h-auto rounded-md"
              />
              <h1 className="text-lg font-semibold mt-2">
                From Burnout to Balance: My Journey to Wellness and Productivity
              </h1>
              <button className="mt-3 p-2 hover:text-purple-300 bg-pink-200 rounded-md">
                Read More
              </button>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 bg-white rounded-md shadow-md p-4">
              <img
                src="/blog2.png"
                alt="pic of a guy"
                className="w-full h-auto rounded-md"
              />
              <h1 className="text-lg font-semibold mt-2">
Navigating Social Media Trends: What Marketers Need to Know in 2025
              </h1>
              <button className="mt-3 p-2 hover:text-purple-300 bg-pink-200 rounded-md">
                Read More
              </button>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 bg-white rounded-md shadow-md p-4">
              <img
                src="/blog4.png"
                alt="pic of a guy"
                className="w-full h-auto rounded-md"
              />
              <h1 className="text-lg font-semibold mt-2">
Smart Homes: How IoT is Revolutionizing Everyday Living
              </h1>
              <button className="mt-3 p-2 hover:text-purple-300 bg-pink-200 rounded-md">
                Read More
              </button>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 bg-white rounded-md shadow-md p-4">
              <img
                src="/blog.png"
                alt="pic of a guy"
                className="w-full h-auto rounded-md"
              />
              <h1 className="text-lg font-semibold mt-2">
                Cybersecurity Basics: Protecting Your Digital Life in 2026
              </h1>
              <a
                href="https://websitedemos.net/lifestyle-blogger-04/unplugged-adventures-how-digital-detoxing-transformed-my-travels/?customize=template"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-3 p-2 hover:text-purple-300 bg-pink-200 rounded-md">
                  Read More
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
