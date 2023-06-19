import React from "react";
import Fitrack from "../Img/homeImages/FitTrack.png";
import Facebook from "../Img/homeImages/Facebook.png";
import Instagram from "../Img/homeImages/Instagram.png";
import Twitter from "../Img/homeImages/Twitter.png";
import Whatsapp from "../Img/homeImages/WhatsApp.png";


const Footer = () => {
  return (
    <>
      <footer>
        <div className="foot">
          <div className="footerlogo">
            <div className="mb-4">
              <a href="/">
                <img src={Fitrack} alt="" />
              </a>
            </div>
            <a href="/">
              <img src={Facebook} width="" alt="" />
            </a>
            <a href="/">
              <img src={Instagram} width="" alt="" />
            </a>
            <a href="/">
              <img src={Twitter} width="" alt="" />
            </a>
            <a href="/">
              <img src={Whatsapp} width="" alt="" />
            </a>
          </div>
          <div className="footul">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="Blog">Blog</a>
              </li>
              <li>
                <a href="About">About Us</a>
              </li>
              <li>
                <a href="Contact">Contact Us</a>
              </li>
              <li>
                <a href="PrivacyPolicy">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="Company footerul">
            <ul>
              <li>
                <a href="/">+234 80 800000</a>
              </li>
              <li>
                <a href="/">fittrack@gmail.com</a>
              </li>
              <li>
                <a href="/">Advertise with Us</a>
              </li>
          
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
