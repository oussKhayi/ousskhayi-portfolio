import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsMailbox2,
} from "react-icons/bs";

export const ContactForm = () => {
  const { data } = useLanguage();
  const [result, setResult] = useState(""); // Moved inside the component

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(data.translations.contactForm.sending);
    const formData = new FormData(event.target);

    formData.append("access_key", "095945b2-b88e-4950-abd9-08d3fe0c2a8f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const dataResponse = await response.json();

    if (dataResponse.success) {
      setResult(data.translations.contactForm.successMessage);
      event.target.reset();
    } else {
      setResult(dataResponse.message || data.translations.contactForm.errorMessage);
    }
  };

  return (
    <div className="grid grid-cols-1 border p-3 rounded-lg border-secondary items-center gap-10 mx-auto max-w-4xl text-secondary font-[sans-serif]">
      <div>
        <h1 className="text-3xl font-extrabold">{data.translations.contactForm.title}</h1>
        <p className="text-sm text-gray-400 mt-3">
          {data.translations.contactForm.subtitle}
        </p>
        <div className="mt-6">
          <h2 className="text-lg font-extrabold">{data.translations.contactForm.emailHeader}</h2>
          <ul className="mt-3">
            <li className="flex items-center">
              <div className="bg-[#e6e6e6cf]  h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <BsMailbox2 className="text-primary text-2xl" />
              </div>
              <a
                href="mailto:ousskhayi@gmail.com"
                className="text-gray-300 text-sm ml-3"
              >
                <small className="block">{data.translations.contactForm.mailLabel}</small>
                <strong>khayi.ouss@gmail.com</strong>
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-7 lg:hidden">
          <h2 className="text-lg font-extrabold">{data.translations.contactForm.socialsHeader}</h2>
          <ul className="flex mt-3 space-x-4">
            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/khayi.oussama">
                <BsFacebook className="text-primary text-2xl" />
              </a>
            </li>
            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="#contact">
                <BsLinkedin className="text-primary text-2xl" />
              </a>
            </li>
            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/ousskhayi">
                <BsInstagram className="text-primary text-2xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <form onSubmit={onSubmit} className="ml-auo space-y-4">
        <h2 className="text-lg font-extrabold">{data.translations.contactForm.formHeader}</h2>
        <input
          required
          type="text"
          placeholder={data.translations.contactForm.namePlaceholder}
          name="name"
          className="w-full rounded-md py-3 px-4 bg-secondary bg-opacity-5 text-sm border border-secondary text-white"
        />
        <input
          required
          type="email"
          name="email"
          placeholder={data.translations.contactForm.emailPlaceholder}
          className="w-full rounded-md py-3 px-4 bg-secondary bg-opacity-5 text-sm border border-secondary text-white"
        />
        <input
          type="text"
          name="subject"
          placeholder={data.translations.contactForm.subjectPlaceholder}
          className="w-full rounded-md py-3 px-4 bg-secondary bg-opacity-5 text-sm border border-secondary text-white"
        />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          className="min-w-full rounded-md p-3 text-sm bg-secondary bg-opacity-5 border border-secondary"
          placeholder={data.translations.contactForm.messagePlaceholder}
        ></textarea>

        <button
          type="submit"
          className="text-white bg-secondary  font-semibold rounded-md text-sm px-4 py-3 w-full"
        >
          {result ? result : data.translations.contactForm.submitBtn}
        </button>
      </form>
    </div>
  );
};
