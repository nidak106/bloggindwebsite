import React from "react";
import { BlogCard } from "../components/BlogCard";

const blogs = [
  {
    image: "/blog1.png",
    title: "The Future of Wearable Tech: Innovations Shaping Our Lives",
     description: "Innovations shaping our lives",
    link: "https://websitedemos.net/lifestyle-blogger-04/unplugged-adventures-how-digital-detoxing-transformed-my-travels/?customize=template",
   
  },
  {
    image: "/blog3.png",
    title: "Unplugged Adventures: How Digital Detoxing Transformed My Travels",
     description: "Digital detoxing transformed my travels",
    link: "https://websitedemos.net/lifestyle-blogger-04/unplugged-adventures-how-digital-detoxing-transformed-my-travels/?customize=template",
   
  },
  {
    image: "/blog2.png",
    title: "From Burnout to Balance: My Journey to Wellness and Productivity",
     description: "Innovations shaping our lives",
    link: "https://websitedemos.net/lifestyle-blogger-04/unplugged-adventures-how-digital-detoxing-transformed-my-travels/?customize=template",
  },
  {
    image: "/blog4.png",
    title: "Navigating Social Media Trends: What Marketers Need to Know in 2025",
     description: "Innovations shaping our lives",
    link: "https://websitedemos.net/lifestyle-blogger-04/unplugged-adventures-how-digital-detoxing-transformed-my-travels/?customize=template",
  },
  {
    image: "/blog2.png",
    title: "Smart Homes: How IoT is Revolutionizing Everyday Living",
     description: "Innovations shaping our lives",
    link: "https://websitedemos.net/lifestyle-blogger-04/unplugged-adventures-how-digital-detoxing-transformed-my-travels/?customize=template",
  },
  {
    image: "/blog.png",
    title: "Cybersecurity Basics: Protecting Your Digital Life in 2026",
     description: "Innovations shaping our lives",
    link: "https://websitedemos.net/lifestyle-blogger-04/unplugged-adventures-how-digital-detoxing-transformed-my-travels/?customize=template",
  },
];

const Blog = () => {
  return (
    <section className="p-4">
      <div className="flex flex-wrap gap-6 justify-center">
        {blogs.map((blog, index) => (
          <BlogCard key={index}
            image={blog.image}
            title={blog.title}
            description={blog.description}
            link={blog.link} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
