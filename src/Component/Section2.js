import React from "react";
import dietary from "../Img/homeImages/Dietary image.png";

const Section2 = () => {
  return (
    <>
      <section>
        <div class="audience">
          <img src={dietary} class="card-img-top first" alt="..." />

          <div class="transform second">
            <h2 class="title">Transform your brand</h2>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
