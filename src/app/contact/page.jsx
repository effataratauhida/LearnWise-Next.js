"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // API call or email sending logic here
    console.log({ name, email, subject, message });

    setSuccess(true);

    // Clear form
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white mt-10">
      <div className="bg-[#E7F2EF] shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-[#19183B] mb-6">Contact Us</h1>

        {success && (
          <p className="bg-green-100 text-green-700 p-2 rounded mb-4 text-center">
            Thank you! Your message has been sent.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[#19183B] font-semibold mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#19183B]"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-[#19183B] font-semibold mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#19183B]"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label className="block text-[#19183B] font-semibold mb-1">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#19183B]"
              placeholder="Subject"
              required
            />
          </div>

          <div>
            <label className="block text-[#19183B] font-semibold mb-1">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#19183B]"
              placeholder="Your Message"
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#19183B] text-[#E7F2EF] py-2 rounded font-semibold hover:bg-[#15152E] transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
