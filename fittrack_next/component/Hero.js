import React from "react";
import backgroundImage from "@public/Images/homeImages/Heroimg.png";
import { Link } from "react-bootstrap-icons";

const Hero = () => {
  return (
    <>
      <div
        className="p-5"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          // height: 600,
        }}
      >
        <section className="container mt-5 p-5 w-100">
          <div className="row">
            <div className="text-center">
              <h1 className="heading text-white">
                <strong>
                  Start your wellness <br />
                  journey today
                </strong>
              </h1>

              <p className="text-white">
                Want to eat healthy and stay fit <br />
                resources,plans and articles just for you.
              </p>
              <br />
              <a href="SignUp"><button className="button w-40">Sign Up</button> </a>
              
              
            </div>
          </div>
        </section>
      </div>
    
    </>
  );
};

export default Hero;
