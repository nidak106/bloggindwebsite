import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header";
import { BlogCard } from "./components/BlogCard";
import { Footer } from "./components/Footer";
function App() {
const blogs = [
  {
    image: "/blog1.png",
    title: "The Future of Wearable Tech: Innovations Shaping Our Lives",
    link: "https://websitedemos.net/lifestyle-blogger-04/unplugged-adventures-how-digital-detoxing-transformed-my-travels/?customize=template",
  },
  {
    image: "/blog3.png",
    title: "Unplugged Adventures: How Digital Detoxing Transformed My Travels",
    link: "https://websitedemos.net/lifestyle-blogger-04/unplugged-adventures-how-digital-detoxing-transformed-my-travels/?customize=template",
  },
  {
    image: "/blog2.png",
    title: "From Burnout to Balance: My Journey to Wellness and Productivity",
    link: "https://websitedemos.net/lifestyle-blogger-04/unplugged-adventures-how-digital-detoxing-transformed-my-travels/?customize=template",
  },
  {
    image: "/blog2.png",
    title: "Navigating Social Media Trends: What Marketers Need to Know in 2025",
    link: "https://websitedemos.net/lifestyle-blogger-04/unplugged-adventures-how-digital-detoxing-transformed-my-travels/?customize=template",
  },
  {
    image: "/blog4.png",
    title: "Smart Homes: How IoT is Revolutionizing Everyday Living",
    link: "https://websitedemos.net/lifestyle-blogger-04/unplugged-adventures-how-digital-detoxing-transformed-my-travels/?customize=template",
  },
  {
    image: "/blog.png",
    title: "Cybersecurity Basics: Protecting Your Digital Life in 2026",
    link: "https://websitedemos.net/lifestyle-blogger-04/unplugged-adventures-how-digital-detoxing-transformed-my-travels/?customize=template",
  },
];
  return (
    <div>
        <Header/>
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
            {blogs.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>
        </section>
<Footer/>
      </main>
    </div>
  );
}

export default App;
