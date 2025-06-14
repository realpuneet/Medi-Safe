import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4m5rbeg",
        "template_6afewdo",
        form.current,
        "e_5wf2qpyB_8d1MvB"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Try again later.");
          console.log(error);
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-4 py-10">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-8 sm:p-10 border border-blue-200">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          📨 Contact Admin
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-4 max-w-md mx-auto"
        >
          <input
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full border outline-0 border-gray-300 p-3 rounded-lg "
          />
          <input
            name="user_email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full border outline-0 border-gray-300 p-3 rounded-lg "
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="w-full border outline-0 border-gray-300 p-3 rounded-lg resize-none "
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
