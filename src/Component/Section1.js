import React from "react";
import pictures from "../Img/homeImages/Picture fame.png";
import pictures1 from "../Img/homeImages/Picture fame (1).png";
import pictures2 from "../Img/homeImages/Picture fame (2).png";

const Section1 = () => {
  return (
    <>
      <div className="text-center pt-4">
        <h1>Accomplish your goals</h1>
        <p className="pt-4">
          Are you trying to loss weight ? We have the right features <br /> to
          help you accomplish your goals.
        </p>
      </div>

      <div className="container p-5">
        <div className="row row-cols-1 row-cols-md-3 g-5">
          <div className="col">
            <div className="card h-100">
              <img src={pictures} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">
                  <strong>Reminder</strong>
                </h5>
                <p class="card-text">Set a reminder to keep your goals</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card  h-100">
              <img src={pictures1} class="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">
                  <strong>Set goals</strong>
                </h5>
                <p className="card-text">
                  Write down your fitness goals and work towards them
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={pictures2} class="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">
                  <strong>Weekly report</strong>
                </h5>
                <p className="card-text">
                  Be inform of your progress <br />
                  and seek ways to improve
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
