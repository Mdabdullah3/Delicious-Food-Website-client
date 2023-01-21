import React from "react";
import check from "../../../Assets/Home/Check/cheack-2.png";
import check2 from "../../../Assets/Home/Check/cheack-3.png";
import check3 from "../../../Assets/Home/Check/cheack.png";
const Check = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-10/12 mx-auto mt-20 gap-8">
      <div>
        <img src={check} alt="" />
      </div>
      <div>
        <img src={check2} alt="" />
      </div>
      <div className="">
        <img src={check3} alt="" />
      </div>
    </div>
  );
};

export default Check;
