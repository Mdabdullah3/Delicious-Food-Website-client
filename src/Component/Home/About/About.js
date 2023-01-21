import React from "react";
import about from "../../../Assets/Home/about3.png";
const About = () => {
  return (
    <div className="about-back">
      <div class="hero mt-40 w-9/12 mx-auto">
        <div class="hero-content flex-col lg:flex-row-reverse gap-10">
          <div>
            <h1 class="text-2xl font-semibold text-primary">Welcome</h1>
            <p class="py-2 text-4xl font-semibold text-secondary">
              About Our Shop
            </p>
            <p className="mb-4 text-lg text-secondary">
              Our Shop is a place where cooked food is sold to the public, and
              where people sit down to eat it. It is also a place where people
              go to enjoy the time and to eat a meal. Some restaurants are a
              chain, meaning that there are restaurants which have the same name
              and serve and where people the same food. time and to eat a meal.
              Some restaurants are a chain, time and to eat a meal. Some
              restaurants are a chain...
            </p>
            <button class="shadow-lg shadow-primary btn btn-primary btn-outline capitalize border-2 text-lg">
              Learn More
            </button>
          </div>
          <img className="md:ml-[-50px]" src={about} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
