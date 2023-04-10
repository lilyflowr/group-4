import React from "react";
import ContactIntro from "../Component/ContactIntro.js";
import TalkSection from "../Component/TalkSection.js";
import LocateSection from "../Component/LocateSection.js";
import LiveSection from "../Component/LiveSection.js";
import FollowSection from "../Component/FollowSection.js";
// import ContactForm from "../Component/ContactForm.js";
import Footer from "../Component/Footer";


const Contact = () => {
    return (
        <>
        <ContactIntro />
        <TalkSection />
        <LocateSection />
        <LiveSection />
        <FollowSection />
       {/* <ContactForm />  */}
        <Footer />
        </>
    );
};

export default Contact;