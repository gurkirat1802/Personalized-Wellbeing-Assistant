import React, { useRef } from "react";
import ServiceDetail from "./ServiceDetail";
import img1 from "../images/yoga.jpeg";
import img2 from "../images/workout.jpeg";
import img3 from "../images/diet.jpeg";
import img4 from "../images/wgtHgt.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
    const sliderRef = useRef(null);

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        // appendDots: (dots, currentSlide) => (
        //     <div style={{ marginTop: "20px", textAlign: "center" }}>
        //         <ul style={{ listStyle: "none", padding: 0 }}>
        //             {dots.map((dot, index) => (
        //                 <li
        //                     key={index}
        //                     style={{
        //                         display: "inline-block",
        //                         margin: "0 5px",
        //                         cursor: "pointer",
        //                         width: "15px",
        //                         height: "15px",
        //                         borderRadius: "50%",
        //                         backgroundColor: index === currentSlide ? "#FF0000" : "#000",
        //                         opacity: index === currentSlide ? 0.8 : 0.4,
        //                     }}
        //                 ></li>
        //             ))}
        //         </ul>
        //     </div>
        // ),
    };

    const goToNextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const goToPrevSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };
    return (
        <>
            <section className="mt-24 overflow-hidden" id="services">
                <div className="text-center py-1">
                    <h3 className="font-normal text-5xl my-3">Features</h3>
                    <p className="text-3xl font-sans">Supporting Your Health and Wellness Goals at Every Stage</p>
                </div>
                <div className="inline-block absolute mt-48 ml-32">
                    <button
                        className="relative top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 rounded-full w-12 h-12 justify-center items-center font-bold text-gray-600 hover:text-gray-900 hover:bg-gray-300 z-10"
                        onClick={goToPrevSlide}
                    >
                        {"<"}
                    </button>
                </div>
                <div className="ml-72 mt-10">
                    <Slider {...settings} ref={sliderRef}>
                        <ServiceDetail
                            image={img1}
                            title="YOGA"
                            subHeading="Find Inner Harmony: Start Your Yoga Journey Today"
                            desc="Discover the path to inner peace and physical well-being with yoga. Cultivate strength, flexibility, and serenity as you embark on a journey of self-discovery and holistic wellness. Find balance in body, mind, and spirit."
                            link="./YogaPage"
                        />
                        <ServiceDetail
                            image={img2}
                            title="WORKOUT"
                            subHeading="Elevate Your Fitness: Transform Your Body, Transform Your Life"
                            desc="Empower yourself through the exhilarating journey of workouts. Sculpt your physique, ignite your energy, and unleash your full potential with each rep, step, and sweat-drenched session."
                            link="./WorkoutPage"
                        />
                        <ServiceDetail
                            image={img3}
                            title="CALORIE CONTENT"
                            subHeading="Nourish Your Body, Fuel Your Life: Discover the Power of Diet"
                            desc="Unlock the secret to vitality and well-being with a balanced diet. Fuel your body with wholesome nutrition, embark on a journey of wellness, and cultivate a healthier, happier you from the inside out."
                            link="./CaloriePage"
                        />
                        <ServiceDetail
                            image={img4}
                            title="HEIGHT VS WEIGHT CHART"
                            subHeading="Finding Balance: Navigating the Height vs Weight Chart"
                            desc="Explore the equilibrium between height and weight with our comprehensive chart. Gain insights into your ideal body proportions, set realistic fitness goals, and embark on a journey toward optimal health and well-being."
                            link="./ChartPage"
                        />
                    </Slider>
                </div>
                <div className="relative -mt-52 mb-72">
                    <div className="inline-block absolute right-0 mr-32">
                        <button
                            className="bg-gray-200 rounded-full w-12 h-12 flex justify-center items-center font-bold text-gray-600 hover:text-gray-900 hover:bg-gray-300 z-10"
                            onClick={goToNextSlide}
                        >
                            {">"}
                        </button>
                    </div>
                </div>

            </section>
        </>
    );
}
const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            className="slick-arrow slick-prev"
            onClick={onClick}
            aria-label="Previous"
        >
            {"<"}
        </button>
    );
};


const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            className="slick-arrow slick-next"
            onClick={onClick}
            aria-label="Next"
        >
            {">"}
        </button>
    );
};
export default Services;