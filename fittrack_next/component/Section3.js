import React from "react";
import Rectangle from "@public/Images/homeImages/Rectangle1.png";
import Rectangle2 from "@public/Images/homeImages/Rectangle2.png";
import Rectangle3 from "@public/Images/homeImages/Rectangle3.png";

const Section4 = () => {
  return (
    <>
      <section className="text-center background pt-4">
        <h1>Join the gobal movement</h1>
        <p className="pb-4">
          Be part of the winning community.Join over one million people in
          achieveon their health and fitness goals.
        </p>

        <div className="downloads">
          <div>
            <img src={Rectangle2} alt="" />
            <h1>1m</h1>
            <p>User</p>
          </div>
          <div>
            <img src={Rectangle} alt="" />
            <h1>1m</h1>
            <p>User</p>
          </div>
          <div>
            <img src={Rectangle3} alt="" />
            <h1>1m</h1>
            <p>User</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section4;
