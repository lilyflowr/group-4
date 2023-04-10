import React from "react";
import running from "../Img/homeImages/benefitOfEatingImage.png";
import Wellness from "../Img/homeImages/wellness.png";
import Healthy from "../Img/homeImages/Healthy eating img.png";

const Articles = () => {
  return (
    <>
      <div className="text-center pt-4">
        <h1>Accomplish your goals</h1>
        <p>
          Are you trying to loss weight ? We have the right features <br /> to
          help you accomplish your goals.
        </p>
      </div>

      <div className="container p-5">
        <div class="row row-cols-1 row-cols-md-3 g-5">
          <div class="col">
            <div class="card h-100">
              <img src={Healthy} class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title">
                  <strong>Reminder</strong>
                </h5>
                <p class="card-text">Set a reminder to keep your goals</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card  h-100">
              <img src={Wellness} class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title">
                  <strong>Set goals</strong>
                </h5>
                <p class="card-text">
                  Write down your fitness goals and work towards them
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={running} class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title">
                  <strong>Weekly report</strong>
                </h5>
                <p class="card-text">
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

export default Articles;
