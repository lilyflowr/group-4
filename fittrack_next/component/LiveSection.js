import React from "react";
import Live from "@public/Images/contactImages/Live.png";

const LiveSection = () => {
  return (
    <>
      <section>
        <div className="audience">
          <img src={Live} class="card-img-top first" alt="..." />

          <div className="transform second">
          <h2 className="title">Live chat</h2><br />
            <p>
            Chat with a member of our in-house team at no cost.          </p>
            <br />
            <div className="liveChatButton" >
            <button className="button w-40" borderRadius >Chat Now</button>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default LiveSection;
