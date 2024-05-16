import React from "react";
import img from "../images/desc1.png";

const Description = () => {
    return(
        <>  
            <section className="mt-16 bg-orange-50 py-10" id="about">
                <div>
                    <h5 className="text-center text-2xl mb-5">Mission</h5>
                    <h2 className="text-6xl font-semibold font-sans text-center my-2">We are all about nutrition,</h2>
                    <h2 className="text-6xl font-semibold font-sans text-center my-2">differentiated by design, </h2>
                    <h2 className="text-6xl font-semibold font-sans text-center">enabled by technology.</h2>
                    <p className="mx-72 font-normal my-10 text-xl text-justify">WellBeing is the leading global healthy eating platform, founded on the belief that food fuels life. WellBeing is democratising healthy eating by empowering people with tools to understand their personal nutritional needs. This enables smarter food choices, whether you want to reach a healthy weight, build better eating habits, run faster, improve your sleep or extend your longevity. The WellBeing app tracks food intake and exercise habits, and offers personalised feedback, recipes and meal plans to suit your lifestyle.</p>
                    <h2 className="text-6xl font-semibold font-sans text-center my-2">Healthy Eating.</h2>
                    <h2 className="text-6xl font-semibold font-sans text-center">Simplified.</h2>
                    {/* <img className="w-52" src={img} alt="...."></img> */}
                </div>
            </section>
        </>
    ); 
}

export default Description;