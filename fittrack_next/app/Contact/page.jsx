import React from "react";
import ContactIntro from "@component/ContactIntro.js";
import TalkSection from "@component/TalkSection.js";
import LocateSection from "@component/LocateSection.js";
import LiveSection from "@component/LiveSection.js";
import FollowSection from "@component/FollowSection.js";
import ContactForm from "@component/ContactForm.js";
import Footer from "@component/Footer";


const Contact = () => {
    return (
        <>
        <ContactIntro />
        <TalkSection />
        <LocateSection />
        <LiveSection />
        <FollowSection />
       <ContactForm /> 
        <Footer />
        </>
    );
};

export default Contact;