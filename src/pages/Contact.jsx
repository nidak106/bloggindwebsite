import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }
 // Prepare the data object
    const formData = {
      name,
      email,
      message,
      submittedAt: new Date().toISOString(), // Optional: add timestamp
    };

    // Get existing data from localStorage
    const existingData = JSON.parse(localStorage.getItem("contacts")) || [];

    // Add new data
    existingData.push(formData);

    // Save back to localStorage
    localStorage.setItem("contacts", JSON.stringify(existingData));

    console.log("Saved to localStorage:", formData);
    setSuccess(true);

    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };

  return (
    <div className="p-8 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-center font-mono font-bold text-3xl mb-6">Say Hello!!</h1>
        <div className="flex justify-center mb-8">
          <img
            src="/blog2.png"
            alt="Contact Banner"
            className="w-40 h-40 rounded-full object-cover shadow-md"
          />
        </div>
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4 text-center">
            Message successfully sent!
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            className="w-full border border-gray-300 rounded-md p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <button
            type="submit"
            className="w-full text-shadow-2xs bg-pink-200 text-white font-semibold py-3 rounded-md hover:text-pink-300 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
