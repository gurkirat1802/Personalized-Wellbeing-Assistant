import React from "react";
import AboutUsDetail from "./AboutUsDetail";
import AboutUsDetail2 from "./AboutUsDetail2";
import img1 from "../images/track1.png";
import img2 from "../images/track2.png";
import img3 from "../images/track3.png";

const AboutUs = () => {
    return (
        <>
            <section>
                <div className="text-center font-bold text-6xl mt-20 mb-28">
                    <h1>Hit your Health Goals in 3 Steps</h1>
                </div>
                <AboutUsDetail
                    number="1"
                    title="Track food, fitness & fasting"
                    description="Tracking calories and macros is easy with our barcode scanner and device integration"
                    imgSrc={img1}
                    altText="Load"
                />
                <AboutUsDetail2
                    number="2"
                    title="Learn what works"
                    description="Personalized nutrition insights reveal what's working so you can make smarter choices."
                    imgSrc={img2}
                    altText="Load"
                />
                <AboutUsDetail
                    number="3"
                    title="Change your habits and reach your goals"
                    description="Now you have the tools and knowledge to build healthy habits for life."
                    imgSrc={img3}
                    altText="Load"
                />
            </section>
        </>
    );
}

export default AboutUs;