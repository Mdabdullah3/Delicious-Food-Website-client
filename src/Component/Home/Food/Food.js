import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import "./Food.css";
const Food = () => {
  const [items, setItems] = useState([]);
  const [food, setfood] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(food);
  useEffect(() => {
    setLoading(true);
    fetch("https://delicious-food-djab.onrender.com/foods")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setfood(data);
        setLoading(false);
      });
  }, []);
  
    const filterItem = (categItem) => {
    const updatedItems = items.filter((item) => {
    return item.categori === categItem;
    });

    setfood(updatedItems);
  };

  const navigate = useNavigate();
  const handleNavigateORder = (id) => {
    navigate(`/singleFood/${id}`);
  };
  return (
    <div>
      <h1 className="text-center text-2xl mt-40 font-bold text-primary">
        Best Menu <span className="border-b-4 border-primary">Chart</span>
      </h1>
      <h1 className="text-center text-2xl font-bold text-secondary py-2">
        This Special
      </h1>
      <p className="text-center text-lg w-10/12 md:w-6/12 mx-auto text-secondary">
        Affronting everything discretion men now own did. Still round match we
        to. Frankness pronounce daughters remainder has but.
      </p>
      <div className=" mx-auto bg-transparent mt-16">
        <div className="font-mono grid grid-cols-1 md:grid-cols-3 gap-5 md:w-4/12 w-8/12 mx-auto">
            <button
              className="btn btn-outline shadow-md shadow-primary border-2 btn-primary text-white"
              onClick={() => filterItem("Breakfast")}
            >
              Breakfast
            </button>
            <button
              className="btn border-2 shadow-lg shadow-primary btn-outline btn-primary text-white"
              onClick={() => filterItem("lunch")}
            >
              lunch
            </button>
            <button
              className="btn border-2 shadow-lg shadow-primary btn-outline btn-primary text-white"
              onClick={() => filterItem("dinner")}
            >
              dinner
            </button>
        </div>
      </div>
      {loading && (
        <div className="mt-20">
          <Loading></Loading>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto mt-28">
        {food.slice(0, 6).map((item) => {
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
      <div className="md:w-2/12 w-7/12 mx-auto">
        <Link to="/menu">
          <button className="btn md:ml-16 ml-4 text-white capitalize btn-primary border-2 rounded text-xl shadow-lg shadow-primary">
            All Food Menu
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Food;
