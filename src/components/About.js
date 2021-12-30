import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      className="w-screen h-[calc(100vh_-_3rem)] flex flex-col justify-center items-center scroll-my-12 md:flex-row md:justify-start max-w-4xl m-auto"
      id="about"
    >
      <h3 className="text-2xl mb-4 md:hidden">Hello!</h3>
      <img
        src="/media/me.jpg"
        alt="A pic of Darrion"
        className="w-32 h-[171px] rounded-[30px] relative md:left-6"
      />
      <div className="flex flex-col justify-center items-center md:text-left">
        <h3 className="w-[80%] text-2xl mb-4 hidden md:block">Hello!</h3>
        <p className="w-[80%] text-justify mt-4">
          Hey there, my name's Darrion and this is my website xd. I started my
          coding journey back in 2020 and have so far learned the basics, as
          well as a bit of React and Supabase. I'm obviously still learning and
          I hope to be better by the end of 2022.
        </p>
        <p className="w-[80%] text-justify mt-4">
          You can find my projects{" "}
          <Link to="/projects">
            <span className="text-blue-500 target:text-blue-300">here,</span>
          </Link>{" "}
          including websites as well as my other hobbies (like poems, pictures
          or even songs sometimes lol) along with ways to{" "}
          <Link to="/contact" className="text-blue-500 target:text-blue-300">
            contact
          </Link>{" "}
          me.
        </p>
        <p className="w-[80%] text-justify mt-4">
          I hope you have a nice day :) Toodless.
        </p>
        <hr className="relative top-8 h-[1px] w-[60%] bg-white" />
      </div>
    </div>
  );
};

export default About;
