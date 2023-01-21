import React from "react";
import discount from "../../../Assets/Home/cheack.webp";
const Discount = () => {
  return (
    <div className="discount mt-20 md:h-[450px]">
      <div className="hero-content flex-col lg:flex-row-reverse w-10/12 mx-auto">
        <img src={discount} alt="" />
        <div>
          <div>
            <p className="text-4xl text-center pb-2 font-bold text-primary">
              Friday Deal
            </p>
            <h1 className="md:text-7xl text-4xl text-primary font-bold pb-2">
              Special Offer{" "}
              <div class="badge badge-primary text-3xl md:text-7xl rounded-full py-4 md:py-14 md:px-8 px-4 text-white">
                25%
              </div>
            </h1>
            <p className="text-3xl text-primary text-center font-semibold">
              Every Friday Buy 4 Items Get 25%
            </p>
          </div>
          <div className="md:w-3/12 w-6/12 mx-auto mt-6">
            <button class="shadow-lg shadow-primary btn btn-primary btn-outline capitalize border-2 text-lg">
              Get Offer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
