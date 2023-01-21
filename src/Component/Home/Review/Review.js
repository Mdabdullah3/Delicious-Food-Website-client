import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import UseReviews from "../../../Hooks/UseReviews";
import Loading from "../../Shared/Loading/Loading";
import { AiTwotoneStar } from 'react-icons/ai';

const Review = () => {
  const [review, loading] = UseReviews();
  const reverse = [...review].reverse();
  return (
    <div className="reviews-background">
      <h1 className="mt-40 text-center text-3xl capitalize text-secondary font-semibold">
        What Our Customers Says
      </h1>
      <h1 className="text-center text-2xl font-bold text-primary pt-3">
        Customer <span className="border-b-4 border-primary">Review</span>
      </h1>
      {loading && (
        <div className="mt-20">
          <Loading></Loading>
        </div>
      )}
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper w-10/12"
      >
        <>
          {reverse.slice(0, 6).map((item) => (
            <SwiperSlide>
              <div className="card card-side grid md:grid-cols-2 pb-14 pt-20 grid-cols-1 px-2 items-center w-9/12 mx-auto mb-6">
                {!item.img ? (
                  <img className="w-60 mt-10 mx-auto" src="" alt="" />
                ) : (
                  <img className="w-72 h-80 mx-auto" src={item.img} alt="" />
                )}
                <div className="items-center font-mono">
                  <h2 data-aos="zoom-out-left " data-aos-duration="1800" className="text-secondary text-3xl font-semibold">{item.name}, <span>{item.address}</span></h2>
                  <p data-aos="zoom-out-left" data-aos-duration="1600" className="text-secondary text-[18px] mt-4">{item?.description}.</p>
                  <div data-aos="zoom-out-left" data-aos-duration="1400" className="flex justify-start mt-3">
                    {Array.from(Array(parseInt(item?.rating)), (e, i) => (
                      <AiTwotoneStar
                      key={i}
                      className="w-6 text-4xl text-yellow-500"
                    />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </div>
  );
};

export default Review;


