import React from "react";
import newsletter from "../Img/homeImages/Download.png";

const Newsletter = () => {
  return (
    <>
      <section>
        <div class="audience">
          <img src={newsletter} class="card-img-top first" alt="..." />

          <div class="transform second text-center ">
            <h2 class="title">News Letter</h2>
            <p className="letter">
              Nurture your inbox with health and wellness advice that’s
              inclusive and rooted in medical expertise.
            </p>
            <input
              style={{
                width: "20rem",
                padding: "10px",
                marginLeft: "30px",
                // border: "none",
                borderRadius: "10PX",
              }}
              type="text"
              name="username"
              placeholder="username"
              id="username"
              onkeyup="validateName()"
            />
            <br />
            <button
              style={{
                width: "20rem",
                padding: "10px",
                border: "none",
                marginLeft: "30px",
                borderRadius: "10PX",
                background: "#052e4d",
              }}
              className="button2 text-light"
            >
              Sign Up
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
