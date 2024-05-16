import React from "react";
import CalContent from "../components/CalContent";
import img1 from "../images/potato-products.png";
import img2 from "../images/vegetables-legumes.png";
import img3 from "../images/mushrooms.png";
import img4 from "../images/salad.png";
import img5 from "../images/fruit.png";

const Fruits = () => {
    return (
        <>
            <div className="flex justify-evenly mb-10">
                <CalContent
                    link = "../Calories/calPages/Potato"
                    img = {img1}
                    title = "Potatoes and Potato Products"
                    desc = "Potatoes are very high in vitamin C, their skins are packed with fiber and, although they are higher in carbs."
                />
                <CalContent
                    link = "../Calories/calPages/Vegetable"
                    img = {img2}
                    title = "Vegetables & Legumes"
                    desc = "Vegetables are a great high-volume, low-calorie option. You can eat a lot of them, they're satiating and packed with vitamins."
                />
                <CalContent
                    link = "../Calories/calPages/Mushroom"
                    img = {img3}
                    title = "Mushrooms"
                    desc = "High in protein and low in calories, mushrooms that have been grown in natural sunlight are rich in vitamin D."
                />
            </div>
            <div className="flex ml-10 space-x-10 mb-10">
                <CalContent
                    link = "../Calories/calPages/Salad"
                    img = {img4}
                    title = "Salad"
                    desc = "Packed with nutrients, salads are great high-volume, low-calorie option. While leafy green lettuces are rich in vitamin A, C & antioxidants."
                />
                <CalContent
                    link = "../Calories/calPages/FruitFal"
                    img = {img5}
                    title = "Fruit"
                    desc = "Generally low in calories and rich in vitamins and micronutrients, fruits are primarily made up of carbs. Some calories may also come from fat."
                />
            </div>
        </>
    );
}

export default Fruits;