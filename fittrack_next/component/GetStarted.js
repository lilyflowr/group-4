import React from "react";
import Gets from "@public/Images/homeImages/Getstarted.png";

const GetStarted = () => {
  return (
    <>
      <div
        className="p-5 pt-4"
        style={{
          backgroundImage: `url(${Gets})`,
          backgroundRepeat: "no-repeat",
          // height: 600,
        }}
      >
        <section className="container mt-5 p-5 w-100">
          <div className="row">
            <div className="text-center">
              <h1 className="heading text-white">
                <strong>
                  Get started for free <br />
                  today
                </strong>
              </h1>

              <p className="text-white">
                Start your fitness journey today and get access <br /> to over
                five hundred articles, detailed diary <br />
                information and lot more
              </p>
              <button className="button w-40">Join Up</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GetStarted;
