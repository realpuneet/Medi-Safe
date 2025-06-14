import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    // Yahan aap backend ya email service se connect kar sakte hain
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow mt-8">
      <h2 className="text-3xl font-bold mb-4 text-blue-700">Contact Admin</h2>
      {sent ? (
        <div className="text-green-600 font-semibold">Thank you! Your message has been sent.</div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            className="w-full p-2 border rounded"
            placeholder="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-2 border rounded"
            placeholder="Your Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Your Message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" type="submit">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;