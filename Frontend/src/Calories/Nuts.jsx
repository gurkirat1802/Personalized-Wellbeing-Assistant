import React from "react";
import CalContent from "../components/CalContent";
import img1 from "../images/nuts-seeds.png";
import img2 from "../images/oils-fats.png";

const Nuts = () => {
    return (
        <>  
            <div className="flex">
                <div className="flex ml-10 mr-10 mb-10">
                    <CalContent
                        link = "../Calories/calPages/Seeds"
                        img = {img1}
                        title = "Nuts & Seeds"
                        desc = "Since they are mostly made up of fats although they also contain protein and carbs nuts and seeds are high in calories but can also be a great source of nutrients."
                    />
                    </div>
                <div className="flex">
                    <CalContent
                        link = "../Calories/calPages/Oils"
                        img = {img2}
                        title = "Oils & Fats"
                        desc = "Oils and fats are both high in calories, but that doesn't mean all are unhealthy for you. These foods can easily be added to balanced diet, just be sure to keep an eye on your portion sizes."
                    />
                </div>
            </div>
        </>
    );
}

export default Nuts;