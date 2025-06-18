import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card";
const Home = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata={
      email
    };
    const existingdata=JSON.parse(localStorage.getItem("email"))||[];
    existingdata.push(formdata);
    localStorage.setItem("email",JSON.stringify(existingdata))
   
    console.log("Email submitted:", email);
    setSuccess(true);
    setEmail("");  // clear input after submission
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 text-center">
      <h2 className="text-3xl font-semibold text-pink-500 mb-2">I’m Nida!</h2>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-mono font-bold leading-tight mb-6">
        Welcome to My Journey of <br /> Discovery and Growth
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mb-6">
        A Tech Enthusiast passionate about exploring the world, embracing technology, enhancing personal growth, and nurturing wellness.
      </p>
      <Button
      className="bg-pink-200 hover:bg-purple-300 text-white text-shadow-2xs font-semibold py-3 px-6 rounded-full shadow-md transition-all p-6"
      onClick={() => navigate("/blogs")}>Get Inspired </Button>
      <br />
      <h1 className="font-semi-bold font-mono text-2xl mb-3">Subscribe for updates!!</h1>
      <button
        className="bg-pink-200 hover:bg-purple-300 text-white text-shadow-2xs font-semibold py-3 px-6 rounded-full shadow-md transition-all"
        onClick={() => setShowForm(true)}
      >
        Subscribe
      </button>

      {showForm && !success && (
        <form onSubmit={handleSubmit} className="mt-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="border p-2 rounded mr-2"
          />
          <button
           disabled={success}
            type="submit"
            className="bg-pink-300 hover:bg-pink-300 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      )}

         {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">
              Thank you for subscribing!
            </h2>
            <Button onClick={() => setSuccess(false)} className="bg-pink-300 text-white">
              Close
            </Button>
          </div>
        </div>
      )}


  <Card className="w-80 shadow-lg mt-8 hover:-translate-y-2">
  <CardHeader>
    <img
      src="/blog4.png"
      alt="Blog Cover"
      className="rounded-lg object-cover h-40 w-full"
    />
    <CardTitle className="mt-4">Exciting Journey</CardTitle>
    <CardDescription>Discover my latest adventures</CardDescription>
  </CardHeader>

  <CardContent>
    <p>Here is a small teaser of my blog post to get you interested.</p>
  </CardContent>

  <CardFooter className="justify-center">
   <a href="https://websitedemos.net/lifestyle-blogger-04/the-future-of-wearable-tech-innovations-shaping-our-lives/?customize=template" target="_blank" rel="noopener noreferrer "> 
   <Button
      className="bg-pink-400 text-white hover:bg-pink-200 transition"
    >Read More </Button> </a>
  </CardFooter>
</Card>

    </section>
  );
};

export default Home;
