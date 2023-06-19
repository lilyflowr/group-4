
// import NavBarComp from '@components/NavBarComp.js';
import Footer from "@component/Footer";
import BlogIntro from "@component/BlogIntro.js";
import BlogCards from "@component/blogCards";



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