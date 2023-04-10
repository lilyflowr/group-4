import React from "react";
// import NavBarComp from '../Component/NavBarComp.js';
import Footer from "../Component/Footer";
import BlogIntro from "../Component/BlogIntro.js";
import BlogCards from "../Component/blogCards";



const Blog = () => {
    return (
        <>
        {/* <NavBarComp /> */}
        <BlogIntro />
        <BlogCards />
        <Footer />
        </>
    );
};

export default Blog;