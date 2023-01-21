import React from "react";
import takewoy from "../../../Assets/Service/takeaway.png";
import chef from "../../../Assets/Service/baker.png";
import food from "../../../Assets/Service/salad.png";
const Services = () => {
  const service = [
    {
      id: 1,
      imge: chef,
      info: "Best Chief",
      services:
        "Our chef is a trained professional cook and tradesman who is proficient in all aspects of food preparation",
    },
    {
      id: 2,
      imge: food,
      info: "Fresh Food",
      services:
        "Fresh food is food which has not been preserved and has not spoiled yet. For vegetables and fruits.",
    },
    {
      id: 3,
      imge: takewoy,
      info: "Fast Delivery",
      services:
        "Get Fast Food delivery, fast. Easy online ordering for takeout and delivery from Fast Food restaurants near you",
    },
  ];
  return (
    <>
      <h1 className="text-center text-2xl mt-40 font-bold text-primary">
        Our <span className="border-b-4 border-primary">Services</span>
      </h1>
      <h1 className="text-center text-3xl font-semibold py-4 text-secondary">
        Why Choose Us
      </h1>
      <p className="text-center text-lg w-10/12 md:w-6/12 mx-auto text-secondary">
        Food service or catering industry defines those businesses,
        institutions, and companies responsible for any meal prepared outside
        the home
      </p>
      <div className="grid mt-28 w-9/12 gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        {service.map((item) => (
          <div className="bg-base-100  even:shadow-lg even:shadow-primary hover:shadow-lg hover:shadow-primary rounded-lg px-8">
            <div className="text-center">
              <img className="w-32 mx-auto pb-5 pt-10" src={item.imge} alt="" />
              <h1 className="text-2xl mb-4 text-secondary font-semibold">
                {item.info}
              </h1>
              <h1 className="text-secondary text-lg pb-4">{item.services}</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
