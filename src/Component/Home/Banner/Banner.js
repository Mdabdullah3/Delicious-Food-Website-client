import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import breakfast from "../../../Assets/Home/banner/breakfast.png";
import dinner from "../../../Assets/Home/banner/dinner.png";
import Lunch from "../../../Assets/Home/banner/lunch.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="background">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="hero">
            <div class="hero-content flex-col w-11/12  lg:flex-row-reverse">
              <img
                className="w-5/12"
                data-aos="fade-left"
                data-aos-duration="2000"
                src={breakfast}
                alt=""
              />
              <div data-aos="fade-right" data-aos-duration="2000">
                <h1 class="text-5xl font-bold text-primary">
                  BreakFast Shandwich
                </h1>
                <p class="py-6 text-secondary">
                  Looking for some easy breakfast sandwich recipes to make the
                  most of your morning? I have you covered
                </p>
                <button class="btn px-8 capitalize btn-primary text-lg text-white text-md">
                  Check
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="hero background">
            <div class="hero-content flex-col lg:flex-row-reverse mt-14">
              <img className="w-6/12" src={Lunch} alt="" />
              <div>
                <h1 class="text-5xl font-bold text-primary">
                  Bengali Hot Lunch
                </h1>
                <p class="py-6 text-secondary">
                  Shorshe Ilish is a dish consisting of hilsa fish cooked in
                  savory mustard gravy, commonly served with white rice for a
                  hearty, must-try meal.
                </p>
                <button class="btn capitalize text-lg px-8 btn-primary text-white text-md">
                  Check
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="hero background">
            <div class="hero-content flex-col lg:flex-row-reverse mt-14">
              <img className="w-5/12" src={dinner} alt="" />
              <div>
                <h1 class="text-5xl font-bold text-primary">
                  Lamoney Salmon Piccate
                </h1>
                <p class="py-6 text-secondary">
                  Lemon salmon piccata combines fresh salmon with a lemony,
                  garlicky pan sauce made with white wine and capers Season the
                  salmon and dredge in flour
                </p>
                <button class="btn capitalize text-lg px-8 btn-primary text-white text-md">
                  Check
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
