import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home/Home";
import Navbar from "./Component/Shared/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blog from "./Component/Blog/Blog";
import Menu from "./Component/Menu/Menu";
import Footer from "./Component/Shared/Footer/Footer";
import Login from "./Component/Account/Login/Login";
import Singup from "./Component/Account/Signup/Singup";
import SingleFood from "./Component/SingleFood/SingleFood";
import PrivateRoute from "./Component/Account/PrivateRoute";
import Dashboard from "./Component/Dashboard/Dashboard/Dashboard";
import MyOrders from "./Component/Dashboard/MyOrders/MyOrders";
import AddReviews from "./Component/Dashboard/AddReviews/AddReviews";
import UpdateProfile from "./Component/Dashboard/MyProfile/UpdateProfile";
import MyProfiles from "./Component/Dashboard/MyProfile/MyProfile";
const App = () => {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Singup />}></Route>
          <Route
            path="/singleFood/:id"
            element={
              <PrivateRoute>
                <SingleFood />
              </PrivateRoute>
            }
          ></Route>
          {/* Dashboard Routes Here  */}
          <Route
            path="/dashboard"
            element={
              <Dashboard />
            }
          >
            <Route index element={<MyOrders />}></Route>
            <Route path="AddReviews" element={<AddReviews />}></Route>
            <Route path="yourProfile" element={<PrivateRoute><MyProfiles /></PrivateRoute>}></Route>
          <Route path="updateProfile" element={<PrivateRoute><UpdateProfile /></PrivateRoute>}></Route>
          </Route>
        </Routes>
        <ToastContainer />
        <Footer></Footer>
      </Navbar>
    </div>
  );
};

export default App;
