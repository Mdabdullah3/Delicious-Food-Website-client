import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
const Dashboard = () => {
  const [user] = useAuthState(auth);

  const [userData, setUserData] = useState([])
  useEffect(() => {
    const email = user?.email;
    const url = `https://delicious-food-djab.onrender.com/user/${email}`
    fetch(url)
      .then(res => res.json())
      .then(data => setUserData(data))
  }, [userData])
  return (
    <div>
      <div class="drawer drawer-mobile ">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col h-auto">
          <Outlet></Outlet>
        </div>
        <div class="drawer-side pl-10 w-72 ">
          <label for="dashboard-sidebar" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 text-base-content">
            <ul>
              <li className="text-secondary text-lg mb-4 w-40">
                <NavLink to="/dashboard">My Orders</NavLink>
              </li>
              <li className="text-secondary text-lg mb-4 w-40">
                <NavLink to="/dashboard/AddReviews">Add Reviews</NavLink>
              </li><li className="text-secondary text-lg mb-4 w-40">
                <NavLink to="/dashboard/yourProfile">My Profile</NavLink>
              </li>
              <li>
                <div className="avatar ">
                  <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ml-6 mt-10">
                    {
                      user?.photoURL ? <img src={userData?.img || user?.photoURL} alt={userData?.name || user.displayName} className="w-12 p-0 text-primary" /> : <img src="https://i.ibb.co/rwGPsQ9/profile.jpg" alt={user.displayName} className="w-14 text-primary" />}
                  </div>
                </div>
                <h1 className="text-sm text-secondary">{user?.displayName}</h1>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
