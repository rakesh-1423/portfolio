import React, { useRef, useState } from "react";
import {ToastContainer, toast} from 'react-toastify'
import emailjs from '@emailjs/browser'

function Contact() {

  const [isSent, setIsSent] = useState(false)

  const form = useRef()

  const sendEmail = (e)=>{
    e.preventDefault();

    emailjs.sendForm(
  "service_qq50euf",  // Service Id
  "template_9klqdyq", // Template Id
  form.current,
  "lxZmKsmrNmbRZrtAo" // Public key
)
.then(
  () => {
    setIsSent(true);

    form.current.reset(); // ✅ fixed

    toast.success("Message Sent Successfully! ✅", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark" // ✅ fixed
    });
  },
  (error) => {
    console.error(error); // optional debug

    toast.error("Failed To Send Message. Please Try Again ❌", {
      position: "top-right",
      autoClose: 3000,
      theme: "dark"
    });
  }
);
    
  }
  return (
    <section
      id="contact"
      className=" flex flex-col items-center justify-center bt-12 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer/>  {/*  For email send notification */}

      {/* Title section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white uppercase">Contact</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I'd love to hear from you — feel free to reach out for any
          opportunities or questions.
        </p>
      </div>

      {/* Contact form  */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-white font-semibold text-xl text-center">
          Contact with me
        </h3>

        <form ref={form} onSubmit={sendEmail} className=" mt-4 flex flex-col space-y-4">
          <input
            type="email"
            name="user_email"
            required
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Message"
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />
          <button
            type="submit"
            className="cursor-pointer w-full bg-linear-to-r from-purple-500 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transform"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
