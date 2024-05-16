import React from "react";
import CalContent from "../components/CalContent";
import img1 from "../images/meals-dishes.png";
import img2 from "../images/fast-food-burgers.png";
import img3 from "../images/pizza.png";

const Dishes = () => {
    return (
        <>
            <div className="flex justify-evenly mb-10">
                <CalContent
                    link = "../Calories/calPages/Meal"
                    img = {img1}
                    title = "Meal & Dishes"
                    desc = "The nutritional value and calorie content of your meals and dishes will be highly dependent on cooking method, ingredients and level of processing. Frying with high amounts of oils as well as adding products such as creams can both contribute to a higher calorie count."
                />
                <CalContent
                    link = "../Calories/calPages/Burger"
                    img = {img2}
                    title = "Fast Food & Burgers"
                    desc = "The foods in this category tend to be calorie dense, containing high amounts of fat, added salt and sodium, and sugars. Their ingredients are also generally heavily processed and often fried. Since fast food usually has low nutritional value."
                />
                <CalContent
                    link = "../Calories/calPages/Pizza"
                    img = {img3}
                    title = "Pizza"
                    desc = "Made up of carbs, fats and protein, the calorie content and nutritional value of pizza is highly dependent on the crust density and the toppings. Toppings such as cheese or fatty meats will add more calories, while vegetables can add valuable nutrients to each slice. "
                />
            </div>
        </>
    );
}

export default Dishes;