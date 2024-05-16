import React from "react";

function Btn(){
    return(
        <div>
            <button variant="text" className="font-semibold flex items-center ml-28 rounded-lg px-3 py-2 bg-slate-300 gap-2 hover:bg-slate-200">
                Learn More
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                </svg>
            </button>
        </div>
    );
}

export default Btn;