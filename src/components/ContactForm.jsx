import React, { useState } from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsMailbox,
  BsMailbox2,
} from "react-icons/bs";

export const ContactForm = () => {
  const [result, setResult] = useState(""); // Moved inside the component

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "095945b2-b88e-4950-abd9-08d3fe0c2a8f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank you for reaching out! I will get back to you soon.");
      event.target.reset();
    } else {
      setResult(data.message || "Failed to send message. Please try again.");
    }
  };

  return (
    <div className="grid grid-cols-1 border p-3 rounded-lg border-secondary items-center gap-10 mx-auto max-w-4xl text-secondary font-[sans-serif]">
      <div>
        <h1 className="text-3xl font-extrabold">Let's Talk</h1>
        <p className="text-sm text-gray-400 mt-3">
          Have some big idea or brand to develop and need help? Then reach out
          we'd love to hear about your project and provide help.
        </p>
        <div className="mt-6">
          <h2 className="text-lg font-extrabold">Email</h2>
          <ul className="mt-3">
            <li className="flex items-center">
              <div className="bg-[#e6e6e6cf]  h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <BsMailbox2 className="text-primary text-2xl" />
              </div>
              <a
                href="mailto:ousskhayi@gmail.com"
                className="text-gray-300 text-sm ml-3"
              >
                <small className="block">Mail</small>
                <strong>khayi.ouss@gmail.com</strong>
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-7 lg:hidden">
          <h2 className="text-lg font-extrabold">Socials</h2>
          <ul className="flex mt-3 space-x-4">
            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a target="_blank" href="https://facebook.com/khayi.oussama">
                <BsFacebook className="text-primary text-2xl" />
              </a>
            </li>
            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="#contact">
                <BsLinkedin className="text-primary text-2xl" />
              </a>
            </li>
            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a target="_blank" href="https://instagram.com/ousskhayi">
                <BsInstagram className="text-primary text-2xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <form onSubmit={onSubmit} className="ml-auo space-y-4">
        <h2 className="text-lg font-extrabold">Send an email</h2>
        <input
          required
          type="text"
          placeholder="Name"
          name="name"
          className="w-full rounded-md py-3 px-4 bg-secondary bg-opacity-5 text-sm border border-secondary text-white"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          className="w-full rounded-md py-3 px-4 bg-secondary bg-opacity-5 text-sm border border-secondary text-white"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full rounded-md py-3 px-4 bg-secondary bg-opacity-5 text-sm border border-secondary text-white"
        />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          className="min-w-full rounded-md p-3 text-sm bg-secondary bg-opacity-5 border border-secondary"
          placeholder="Have a question, project idea, or just want to say hello? Feel free to drop me a message here! I'll get back to you as soon as possible."
        ></textarea>

        <button
          type="submit"
          className="text-white bg-secondary  font-semibold rounded-md text-sm px-4 py-3 w-full"
        >
          {result ? result : "submit"}
        </button>
      </form>
    </div>
  );
};
