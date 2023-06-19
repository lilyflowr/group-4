import React from "react";
import Locate from "@public/Images/contactImages/Locate.png";

const LocateSection = () => {
  return (
    <>
      <section>
        <div class="audience">
          <img src={Locate} class="card-img-top second" alt="..." />

          <div class="transform first">
          <h2 class="title">Locate us</h2><br />
            <p>
            Our office is located in the metropolitan city of Lagos, Nigeria.            </p>
            <br />
            <p>
            Plot 1205, Ahmadu Bello Way, Victoria Island, Lagos state, Nigeria.            <br />
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocateSection;
