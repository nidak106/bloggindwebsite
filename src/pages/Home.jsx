import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <button
        className="bg-pink-200 hover:bg-purple-300 text-white text-shadow-2xs font-semibold py-3 px-6 rounded-full shadow-md transition-all"
        onClick={() => navigate("/blogs")}
      >
        Get Inspired
      </button>
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
        <p className="mt-4 text-green-600 font-semibold">
          Thank you for subscribing!
        </p>
      )}
    </section>
  );
};

export default Home;
