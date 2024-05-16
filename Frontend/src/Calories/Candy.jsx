import React from "react";
import CalContent from "../components/CalContent";
import img1 from "../images/candy.png";
import img2 from "../images/cakes-pies.png";
import img3 from "../images/desserts.png";

const Candy = () => {
    return (
        <>
            <div className="flex justify-evenly mb-10">
                <CalContent
                    link = "../Calories/calPages/Chocolate"
                    img = {img1}
                    title = "Sweets: Chocolate, Candy, Ice Cream"
                    desc = "The majority of sweets are calorie dense, packed with sugar and highly processed. Be sure to enjoy them mindfully and in small portions. Ice cream is generally calorie dense, high in sugar and fat, and provides little nutritional value for the body."
                />
                <CalContent
                    link = "../Calories/calPages/Cakes"
                    img = {img2}
                    title = "Cakes & Pies"
                    desc = "Thanks to ingredients such as fats, sugar and flour, cakes and pies are often high in calories and provide little nutritional value for the body. Salty pies can also be high in salt and sodium. Portion control is key, especially when it comes to various toppings and add-ons."
                />
                <CalContent
                    link = "../Calories/calPages/Pudding"
                    img = {img3}
                    title = "Desserts & Pudding"
                    desc = "Desserts and puddings have been around for centuries. Desserts and pudding are often high in sugar and fat, meaning they are high in calories and offer the body very little nutritional value. Be sure to enjoy them mindfully and in small portions."
                />
            </div>
        </>
    );
}

export default Candy;