import React from "react";
import { Link } from "react-router-dom";

const CalContent = (props) => {
    return (
        <Link to={props.link} target="_top">
            <a className="max-w-sm border-2 border-gray-200 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center">
                <img src={props.img} className="shadow rounded-2xl overflow-hidden w-full h-full object-cover"/>
                <div className="mt-4">
                    <div className="max-h-16 flex justify-center">
                        <h4 className="font-bold text-xl text-center">{props.title}</h4>
                    </div>
                    <div className="max-h-22 mb-4">
                        <p className="mt-2 text-gray-600 text-justify px-5">{props.desc}</p>
                    </div>
                </div>
            </a>
        </Link>
    );
}

export default CalContent;