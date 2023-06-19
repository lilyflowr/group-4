import React from "react";
import test from "@public/Images/homeImages/Test.png";
import test2 from "@public/Images/homeImages/Test 2.png";
import test3 from "@public/Images/homeImages/Test 3.png";

const Testimonals = () => {
  return (
    <>
      <div className="text-center mt-5 mb-4 container">
        <h1>Testimonals</h1>
        <p>
          With the help of FitTrack ,more than 3,00 0 users accomplish their
          <br />
          objectives each day. Get movited to continue on your path.
        </p>
      </div>

      <div className="downloads2 text-center mb-4">
        <div>
          <img src={test} alt="" />
        </div>
        <div>
          <img src={test2} alt="" />
        </div>
        <div>
          <img src={test3} alt="" />
        </div>
      </div>
    </>
  );
};

export default Testimonals;
