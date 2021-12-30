import React from "react";

const Contact = () => {
  return (
    <div className="w-screen h-[calc(100vh_-_3rem)] flex flex-col justify-center items-center">
      <h3 className="text-center text-2xl underline underline-offset-2 mb-4">
        Contact Me
      </h3>
      <div className="flex flex-wrap w-3/5 justify-center gap-8 text-center text-2xl pt-4">
        <a
          href="mailto:doblegangerlol@gmail.com"
          className="transition-transform duration-500 hover:-translate-y-2"
        >
          <i className="far fa-envelope" title="Email"></i>
          <p className="text-xs mt-1">Email</p>
        </a>
        <a
          href="tel:918837238502"
          className="transition-transform duration-500 hover:-translate-y-2"
        >
          <i className="fas fa-phone-alt" title="Call"></i>
          <p className="text-xs mt-1">Phone</p>
        </a>
        <a
          href="https://github.com/itsdoble"
          target="_blank"
          className="transition-transform duration-500 hover:-translate-y-2"
        >
          <i className="fab fa-github" title="Github"></i>
          <p className="text-xs mt-1">Github</p>
        </a>
        <a
          href="https://wa.me/918837238502"
          target="_blank"
          className="transition-transform duration-500 hover:-translate-y-2"
        >
          <i className="fab fa-whatsapp" title="Whatsapp"></i>
          <p className="text-xs mt-1">Whatsapp</p>
        </a>
        <a
          href="https://instagram.com/itsdoble_"
          target="_blank"
          className="transition-transform duration-500 hover:-translate-y-2"
        >
          <i className="fab fa-instagram" tital="Instagram"></i>
          <p className="text-xs mt-1">Instagram</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
