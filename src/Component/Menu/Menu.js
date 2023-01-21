import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Food from "../Home/Food/Food";
import Loading from "../Shared/Loading/Loading";
import { ImSearch } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";
import './Style.css'
const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(Food);
  useEffect(() => {
    setLoading(true);
    fetch("https://delicious-food-djab.onrender.com/foods")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  }, []);

  const navigate = useNavigate();
  const handleNavigateORder = (id) => {
    navigate(`/singleFood/${id}`);
  };

  const [filter, setFilter] = useState("");
  const searchEvent = (event) => {
      setFilter(event.target.value);
  };

  let dataSeacrch = menu.filter((item) => {
      return Object.keys(item).some((key) =>
          item[key]
              .toString()
              .toLowerCase()
              .includes(filter.toString().toLowerCase())
      );
  });
  return (
    <div>
      <div className="z-10">
        <div className="extra relative">
          <div>
            <img
              src="https://weddingdir.net/wp-content/uploads/2021/07/listing-location-ahmedabad-banner.jpg"
              alt=""
            />
          </div>
          <div className="absolute bottom-16 left-40 text-white">
            <h1 className="font-mono text-3xl flex">
              <span
                onClick={() => navigate(-1)}
                className=" cursor-pointer flex items-center gap-2 font-mono text-yellow-400 mr-2"
              >
                <AiFillHome /> Back
              </span>
            </h1>
          </div>
        </div>
        <div className="bg-info border-b-2 border-primary relative overflow-hidden w-6/12 p-0 mx-auto">
          <input
            type="text"
            className=" placeholder-secondary border-none px-10 text-xl font-mono input py-10 w-full text-secondary"
            value={filter}
            placeholder="Search Your Products"
            onChange={searchEvent.bind(this)}
          />
          <h1 className="absolute bottom-6 right-12 text-primary text-3xl ">
            <ImSearch />
          </h1>
        </div>
      </div>
      <h1 className="text-4xl mt-20 text-primary font-bold text-center">
        Our Food <span className="border-b-4 border-primary">Menu</span>
      </h1>
      {loading && (
        <div className="mt-20">
          <Loading></Loading>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto mt-28">
        {dataSeacrch.map((item) => {
          return (
            <div className="mx-auto mb-20 hover:shadow-md p-10 design hover:shadow-primary first:shadow-lg first:shadow-primary relative h-[480px]">
              <img className="w-60 h-60 mb-4" src={item.image} alt="" />
              <h1 className="text-center text-xl text-secondary font-semibold">
                {item.name}
              </h1>
              <h1 className="text-center text-xl text-secondary font-semibold">
                ${item.price}
              </h1>
              <button
                onClick={() => handleNavigateORder(item._id)}
                className="btn btn-primary text-white text-lg mt-8 ml-14 capitalize btn-outline border-2 shadow-md shadow-primary absolute bottom-10"
              >
                Order Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
