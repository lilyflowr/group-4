import React from "react";

import download from "../Img/homeImages/Illustration.png";
import play from "../Img/homeImages/Playstore.png";

const Download = () => {
  return (
    <>
      <section>
        <div class="audience">
          <div class="transform first">
            <h2 class="title">Download the app</h2>
            <p>
              Switch easily between devices. FitTrack is available on iOS and
              android devices
            </p>

            <h5>Available on</h5>
            {/* <img width="10%" src={play} class="card-img-top second" alt="..." /> */}
          </div>
          <img src={download} class="card-img-top second" alt="..." />
        </div>
      </section>
    </>
  );
};

export default Download;
