import React from "react";

const AboutUsDetail = (props) => {
    return(
        <div className="flex">
            <img className="ml-64 w-1/3 cursor-pointer transition ease-in-out delay-150 hover:translate-y-0 hover:scale-110 duration-100" src={props.imgSrc} alt={props.altText} />
            <div className="ml-20 mt-32">
                <h1 className="text-7xl font-bold my-6 mx-4">{props.number}</h1>
                <h3 className="text-4xl my-2 mx-4">{props.title}</h3>
                <p className="text-2xl mx-5">{props.description}</p>
            </div>
        </div>
    );
};

export default AboutUsDetail;