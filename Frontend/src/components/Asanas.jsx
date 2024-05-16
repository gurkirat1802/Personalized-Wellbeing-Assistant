import React from "react";
import { Link } from "react-router-dom";

const Asanas = (props) => {
    return (
        <>
            <a className="p-4 max-w-xs border-2 border-gray-500 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center">
                <img src={props.img} className="shadow rounded-lg overflow-hidden border max-h-44 max-w-72" />
                <div className="mt-4">
                    <div className="max-h-16 flex justify-center">
                        <h4 className="font-bold text-xl text-center">{props.title}</h4>
                    </div>
                    <div className="max-h-22 mb-4">
                        <p className="mt-2 text-gray-600 text-justify">{props.desc}</p>
                    </div>
                </div>
                <div className="flex justify-center mt-auto">
                    <Link to={props.link} target="_top">   
                        <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-md font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Explore</button>
                    </Link>
                </div>
            </a>
        </>
    );
}

export default Asanas;