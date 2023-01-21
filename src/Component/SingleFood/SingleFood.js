import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { toast } from "react-toastify";
const SingleFood = () => {
  const [order, setOrder] = useState([]);
  const [newData, setNewData] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const url = `https://delicious-food-djab.onrender.com/foods/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [id, newData]);

  // Update Stock
  const [stockNumber, setStockNumber] = useState({
    stockitem: "",
  });
  let name, value;

  const [Quantity, setQuantity] = useState(1)
  const getUserData = (e) => {
    setQuantity(e.target.value);
    e.preventDefault();
    name = e.target.name;
    value = e.target.value;
    setStockNumber({ ...stockNumber, [name]: value });
  };

  const [addres, setAddress] = useState('')

  const handleAddress = event => {
    setAddress(event.target.value);
  }

  const [phone, setPhone] = useState('')
  const handlePhone = event => {
    setPhone(event.target.value);

  }
  const [user] = useAuthState(auth);
  const navigate = useNavigate();


  const hanldeSubmit = async (id, quantity) => {
    console.log("stock", quantity);
    const { stock } = stockNumber;
    const getQuantity = parseInt(quantity) - parseInt(stock);

    const newQuantity = {
      quantity: getQuantity.toString(),
    };
    console.log(newQuantity);


    // send data to the monogod server and update
    const url = `https://delicious-food-djab.onrender.com/foods/${id}`;
    await axios.put(url, newQuantity).then((response) => {
      const { data } = response;
      if (data) {
        setNewData(!newData);
      }
    })
    const Orders = {
      foodId: order._id,
      foodName: order.name,
      foodImg: order.image,
      userName: user.displayName,
      email: user.email,
      price: order.price,
      quantity: Quantity,
      address: addres,
      phone: phone,
    }
    fetch("https://delicious-food-djab.onrender.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(Orders),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success(
          "Your Order Succesfull Please Cheack Dhasboard"
        );
        navigate(`/`);
      });
  };



  return (
    <div className="w-10/12 mx-auto mb-20">
      <div>
        <button
          className="btn btn-primary text-white capitalize text-lg mb-4 mt-[-40px]"
          onClick={() => navigate(-1)}
        >
          &#x2190; Back
        </button>
      </div>
      <h1 className="text-4xl font-bold text-center text-primary mb-20">
        Please <span className="border-b-4 border-primary">Order</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div>
          <img src={order.image} alt="" />
        </div>
        <div>
          <div className="text-secondary">
            <h1 className="text-4xl font-semibold pt-2 text-primary">
              {order.name}
            </h1>
            <p className="text-2xl font-semibold pt-2">Price: ${order.price}</p>
            <p className="text-xl font-semibold pt-2">Stock: {order.stock}</p>
            <p className="text-xl font-semibold py-2">
              Categories: {order.categori}
            </p>
            <p>{order.discription}</p>
            <p>
              <span className="text-xl mr-5 text-primary font-bold">
                #{order.items}
              </span>
              <span className="text-xl mr-2 text-primary font-bold">#Food</span>
            </p>
          </div>
          <input
            type="number"
            className="input input-bordered border-primary w-3/12 text-lg mb-4 border-[3px] text-primary mt-4"
            placeholder="Quantity"
            onChange={getUserData}
            name="stock"
            required
          />
          <div>
            <input
              type="text"
              className="input input-bordered border-primary w-4/12 text-lg mb-4 border-[3px] text-primary mt-4"
              placeholder="Your Address"
              onChange={handleAddress}
              name="address"
              required
            />
            <input
              onChange={handlePhone}
              type="text"
              className="input input-bordered border-primary ml-4 w-4/12 text-lg mb-4 border-[3px] text-primary mt-4"
              placeholder="Your Phone"
              name="phone"
              required
            />
          </div>
          <input
            onClick={() => hanldeSubmit(order._id, order.stock)}
            className="btn btn-primary mt-2 w-7/12 text-white border-2 text-xl capitalize"
            value="Order Now"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
