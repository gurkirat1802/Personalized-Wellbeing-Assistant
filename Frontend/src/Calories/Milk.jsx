import React from "react";
import CalContent from "../components/CalContent";
import img1 from "../images/milk-dairy-products.png";
import img2 from "../images/yogurt.png";
import img3 from "../images/cheese.png";
import img4 from "../images/cream-cheese.png";

const Milk = () => {
    return (
        <>
            <div className="flex justify-evenly mb-10">
                <CalContent
                    link = "../Calories/calPages/MilkProducts"
                    img = {img1}
                    title = "Milk & Dairy Products"
                    desc = "Milk and dairy products generally contain a nice balance of fat, carbs and protein, but their calorie contents are highly dependent on the fat contents of the milk."
                />
                <CalContent
                    link = "../Calories/calPages/Yogurt"
                    img = {img2}
                    title = "Yogurt"
                    desc = "Made from the fermentation of milk, yogurt is generally low in calories. Although, this can be highly dependent on added sugars and overall fat content. Generally high in protein."
                />
                <CalContent
                    link = "../Calories/calPages/Cheese"
                    img = {img3}
                    title = "Cheese"
                    desc = "Made up of mostly fat and protein rich in bone and teeth strengthening calcium, the nutritional value and calorie count of cheese is highly dependent on the fat contents of the milk used."
                />
            </div>
            <div className="flex ml-10 space-x-10 mb-10">
                <CalContent
                    link = "../Calories/calPages/CreamCheese"
                    img = {img4}
                    title = "Cream Cheese"
                    desc = "Made up of mostly fat and protein, the nutritional value and calorie count of cream cheese is highly dependent on the fat contents of the milk used."
                />
            </div>
        </>
    );
}

export default Milk;