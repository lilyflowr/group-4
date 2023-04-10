import React from "react";
// import NavBarComp from '../Component/NavBarComp.js';
import Footer from "../Component/Footer";
import CardOne from "../Card/cardOne.js";
import CardTwo from "../Card/cardTwo.js";



const AllArticles = () => {
    return (
        <>
        {/* <NavBarComp /> */}
        <BlogIntro />
        <BlogCards />
        <Footer />
        </>
    );
};