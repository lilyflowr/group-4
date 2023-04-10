import React from "react";
import Talk from "../Img/contactImages/Talk.png";

const TalkSection = () => {
  return (
    <>
      <section>
        <div class="audience">
          <img src={Talk} class="card-img-top first" alt="..."  />

          <div class="transform second">
            <h2 class="title">Talk to us</h2><br />
            <p>
            Do not hesitate to ask us any question. Our help line is open 24/7.
            </p>
            <br />
            <p>
            +234 800 000 0000 
            <br />
            +234 801 111  1111.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TalkSection;
