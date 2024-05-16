import React from "react";

const AboutUsDetail2 = (props) => {
    return(
        <div className="flex">
            <div className="text-right">
                <h1 className="text-7xl font-bold mt-44 my-6 mr-14">{props.number}</h1>
                <h3 className="text-4xl mr-14 my-4">{props.title}</h3>
                <p className="text-2xl my-2 text-justify px-14">{props.description}</p>
            </div>
            <img className="w-1/3 cursor-pointer transition ease-in-out delay-150 hover:translate-y-0 hover:scale-110 duration-100 mr-72" src={props.imgSrc} alt={props.altText} />
        </div>
    );
};

export default AboutUsDetail2;