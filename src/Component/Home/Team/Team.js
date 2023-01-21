import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
const Team = () => {
  const team = [
    {
      id: 1,
      image:
        "https://demo.themewinter.com/wp/gloreya/wp-content/uploads/2019/10/team2.png",
      post: "Head Chief",
      name: "Tom Curise",
    },
    {
      id: 2,
      image:
        "https://demo.themewinter.com/wp/gloreya/wp-content/uploads/2019/10/team1.png",
      post: "Chief",
      name: "Liss Hellan",
    },
    {
      id: 3,
      image:
        "https://demo.themewinter.com/wp/gloreya/wp-content/uploads/2019/10/team7.png",
      post: "Chief",
      name: "Alex Carry",
    },
    {
      id: 4,
      image:
        "https://demo.themewinter.com/wp/gloreya/wp-content/uploads/2019/10/team3.png",
      post: "Head Chief",
      name: "Nissa Hossian",
    },
    {
      id: 8,
      image:
        "https://demo.themewinter.com/wp/gloreya/wp-content/uploads/2019/10/team4.png",
      post: "Head Chief",
      name: "Tom Kulse",
    },
    {
      id: 5,
      image:
        "https://demo.themewinter.com/wp/gloreya/wp-content/uploads/2019/10/team5.png",
      post: "Head Chief",
      name: "San Harris",
    },
  ];
  return (
    <div className="review-bg">
      <h1 className="mt-40 text-center text-3xl capitalize text-secondary font-semibold">
        our awesome and expert <br />{" "}
        <span className="text-primary">
          Team <span className="border-b-4 border-primary">Members</span>
        </span>
      </h1>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 4500,
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
          {team.map((item) => (
            <SwiperSlide>
              <div class="card w-10/12 mx-auto shadow-primary shadow-md h-[430px] rounded mt-20 mb-12">
                <figure>
                  <img
                    src={item.image}
                    alt="Shoes"
                    className="rounded-xl w-60 h-60 bg-primary pt-4 mt-10"
                  />
                </figure>
                <div class="card-body text-secondary text-center">
                  <h2 class="text-2xl font-semibold text-center">
                    {item.name}
                  </h2>
                  <p>{item.post}</p>
                  <div className="flex justify-center gap-5 text-xl mt-3 text-primary">
                    <ImFacebook2 />
                    <FaTwitterSquare />
                    <SiInstagram />
                    <BsLinkedin />
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

export default Team;
