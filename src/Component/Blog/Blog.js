import React from "react";
import blog from "../../Assets/Blog/blog-1.png";
import blog1 from "../../Assets/Blog/blog-2.jpg";
import blog3 from "../../Assets/Blog/blog-4.png";
import { BiPurchaseTag } from "react-icons/bi";
const Blog = () => {
  const thumbs = (
    <>
      <div class="text-sm breadcrumbs text-primary py-4 font-semibold">
        <ul>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="w-4 h-4 mr-2 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              Food
            </a>
          </li>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="w-4 h-4 mr-2 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              2022
            </a>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="w-4 h-4 mr-2 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
            Blogs
          </li>
        </ul>
      </div>
    </>
  );
  return (
    <div className="md:w-10/12 mx-auto mt-[-20px]">
      <h1 className="text-center text-5xl text-primary font-bold">
        Latest <span className="border-b-4 border-primary">Blogs</span>
      </h1>
      <p className="text-center text-xl font-semibold text-secondary mb-40 mt-3">
        The only thing that will possibly be different
      </p>
      <div className="service-bg">
        <div className="ml-4">
          <img src={blog1} className="w-6/12 rounded-3xl" alt="" />
          <h1 className="flex items-center text-xl text-primary gap-3 font-semibold mt-4">
            <BiPurchaseTag /> Fresh Food
          </h1>
          <p className="text-secondary text-xl w-7/12 text-justify py-3">
            You’re cooking a meal, especially a holiday meal, to be served to
            friends or family, the key to success is planning. Don’t run around
            second guessing yourself and what you’re going to make. Plan your
            menu, do the shopping, and do the prep beforehand. If you’re really
            neurotic, do a test run – that way you’ll know the recipes work,
            you’ll have the timing down pat, and best of all, you’ll get to eat
            everything twice!
          </p>
          {thumbs}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-20 mx-auto mb-5">
          <div>
            <img src={blog} className="w-8/12 rounded-3xl" alt="" />
            <h1 className="flex items-center text-xl text-primary gap-3 font-semibold mt-4 ml-4">
              <BiPurchaseTag /> Good Services
            </h1>
            <p className="text-secondary text-xl w-11/12 text-justify py-3">
              "All of the recipes in this series are designed to be simple and
              easy. Part of the joy of the Instant Pot is that there’s no
              guessing. With regular cooking, everyone’s idea of medium high
              heat is different and when you factor in what kind of pan you’re
              using and whether or not you have a gas or electric range means...
            </p>
            {thumbs}
          </div>
          <div>
            <img src={blog3} className="w-8/12 rounded-3xl" alt="" />
            <h1 className="flex items-center text-xl text-primary gap-3 font-semibold mt-4 ml-4">
              <BiPurchaseTag /> Fast Delivery
            </h1>
            <p className="text-secondary text-xl w-11/12 text-justify py-3 pl-2">
              the results are going to be the same. The only thing that will
              possibly be different is seasoning, which should be, because you
              should always season to taste. And speaking of seasoning to taste,
              all of the recipes in this Instant Pot series are 5 ingredients,
              not counting salt and pepper The only thing that will possibly...
            </p>
            {thumbs}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
