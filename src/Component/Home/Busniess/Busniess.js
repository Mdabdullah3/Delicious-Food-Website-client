import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import client from "../../../Assets/business/client.png";
import food from "../../../Assets/business/salad.png";
import review from "../../../Assets/business/chat.png";
import money from "../../../Assets/business/money-bag.png";
const Busniess = () => {
  return (
    <div className="business-bg">
      <h1 className="text-3xl text-center text-secondary font-semibold mt-40">
        Our Resturent Info
      </h1>
      <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 md:px-4 mx-auto w-11/12 mt-20">
        <div className="mx-auto bg-gradient-to-t from-green-500 h-64 px-14 rounded-lg py-4">
          <img className="w-24 mx-auto" src={client} alt="" />
          <p className="text-white text-2xl font-bold py-4">Daily Customer</p>
          <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
            {({ isVisible }) => (
              <div className="mx-auto w-7/12" style={{ height: 100 }}>
                {isVisible ? (
                  <CountUp className="text-4xl text-white font-semibold" end={1520} />
                ) : null}
                <span className="text-5xl text-white">+</span>
              </div>
            )}
          </VisibilitySensor>
        </div>
        <div className="mx-auto bg-gradient-to-t from-yellow-500 h-64 px-14 rounded-lg py-4">
          <img className="w-24 mx-auto" src={review} alt="" />
          <p className="text-white text-2xl font-bold py-4">Happy Clients</p>
          <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
            {({ isVisible }) => (
              <div className="mx-auto w-9/12" style={{ height: 100 }}>
                {isVisible ? (
                  <CountUp
                    className="text-4xl text-white font-semibold"
                    end={12421}
                  />
                ) : null}
                <span className="text-5xl text-white">+</span>
              </div>
            )}
          </VisibilitySensor>
        </div>
        <div className="mx-auto bg-gradient-to-t from-pink-500 h-64 px-14 rounded-lg py-4">
          <img className="w-24 mx-auto" src={money} alt="" />
          <p className="text-white text-2xl font-bold py-4">Daily Revenue</p>
          <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
            {({ isVisible }) => (
              <div className="mx-auto w-10/12" style={{ height: 100 }}>
                <span className="text-4xl text-white">$</span>
                {isVisible ? (
                  <CountUp className="text-4xl text-white font-semibold" end={10220} />
                ) : null}
                <span className="text-5xl text-white">+</span>
              </div>
            )}
          </VisibilitySensor>
        </div>
        <div className="mx-auto bg-gradient-to-t from-blue-500 h-64 px-20 rounded-lg py-4">
          <img className="w-24 mx-auto" src={food} alt="" />
          <p className="text-white text-2xl font-bold py-4">Food Item</p>
          <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
            {({ isVisible }) => (
              <div className="ml-4" style={{ height: 100 }}>
                {isVisible ? (
                  <CountUp className="text-4xl text-white font-semibold" end={120} />
                ) : null}
                <span className="text-5xl text-white">+</span>
              </div>
            )}
          </VisibilitySensor>
        </div>
      </div>
    </div>
  );
};

export default Busniess;
