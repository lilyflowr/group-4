import React from "react";
import Follow from "../Img/contactImages/Follow.png";
import {Link} from 'react-router-dom';

const FollowSection = () => {
  return (
    <>
      <section>
        <div class="audience">
          <img src={Follow} class="card-img-top second" alt="..." />

          <div class="transform first">
          <h2 class="title">Follow us</h2><br />
            <p>
            Be a part of our on-line community. We share health and wellness updates everyday.            </p>
            <br />
            <p>
            <Link to="https://facebook.com/" ><strong>Facebook  </strong> </Link>| 
            <Link to="https://facebook.com/" ><strong> Instagram  </strong> </Link>| 
            <Link to="https://twitter.com/" ><strong> Twitter  </strong> </Link> |
            <Link to="https://whatsapp.com/" ><strong> Whatsapp   </strong> </Link>|
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FollowSection;
