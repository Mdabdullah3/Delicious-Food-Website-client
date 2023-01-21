import React from "react";
import bestFood1 from "../../../Assets/BestFood/breakfast.png";
import bestFood2 from "../../../Assets/BestFood/breakfast3.png";
import bestFood3 from "../../../Assets/BestFood/dinne3r.png";
import bestFood4 from "../../../Assets/BestFood/dinner.png";
import bestFood5 from "../../../Assets/BestFood/dinner6.png";
import bestFood6 from "../../../Assets/BestFood/lunch1.png";
import bestFood7 from "../../../Assets/BestFood/lunch2.png";
import bestFood8 from "../../../Assets/BestFood/lunch3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
const BestFood = () => {
  const food = [
    {
      img: bestFood8,
      price: 12,
      id: 1,
    },
    {
      img: bestFood2,
      price: 14,
      id: 2,
    },
    {
      img: bestFood3,
      price: 15,
      id: 3,
    },
    {
      img: bestFood4,
      price: 17,
      id: 4,
    },
    {
      img: bestFood5,
      price: 16,
      id: 5,
    },
    {
      img: bestFood6,
      price: 12,
      id: 6,
    },
    {
      img: bestFood7,
      price: 22,
      id: 7,
    },
    {
      img: bestFood1,
      price: 13,
      id: 8,
    },
  ];
  return (
    <div className="service-bg">
      <h1 className="mt-40 text-center text-2xl capitalize text-primary font-semibold">
        Our Best <span className="border-b-4 border-primary">Food</span>
      </h1>
      <h1 className="text-center text-3xl font-semibold py-4 text-secondary">Eat Always Tasty</h1>
      <p className="text-center text-lg w-10/12 md:w-6/12 mx-auto text-secondary">
        Affronting everything discretion men now own did. Still round match we
        to. Frankness pronounce daughters remainder has but
      </p>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper w-10/12"
      >
        <>
          {food.map((item) => (
            <SwiperSlide>
              <div class="card w-11/12  mb-16 mt-20">
                <div class="card-actions flex-col mx-auto justify-between mt-5 items-center pb-4">
                  <img
                    className="rounded-full w-60 h-60 ring ring-primary ring-offset-primary ring-offset-2 shadow-xl shadow-primary"
                    src={item.img}
                    alt=""
                  />
                  <h1 className="text-2xl font-bold mt-4 text-secondary">${item.price}</h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </div>
  );
};

export default BestFood;
