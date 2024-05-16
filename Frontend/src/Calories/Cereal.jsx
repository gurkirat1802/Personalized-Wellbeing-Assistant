import React from "react";
import CalContent from "../components/CalContent";
import img1 from "../images/rice-products.png";
import img2 from "../images/bread.png";
import img3 from "../images/pasta-noodles.png";
import img4 from "../images/flour.png";

const Cereal = () => {
    return (
        <>
            <div className="flex justify-evenly mb-10">
                <CalContent
                    link = "../Calories/calPages/Rice"
                    img = {img1}
                    title = "Rice & Rice Products"
                    desc = "Rice is high in starch and contains almost no fat. It's also a great source of iron and will keep you feeling full. Opt for whole grain variations, as these contain more fiber, are less processed and are generally healthier overall."
                />
                <CalContent
                    link = "../Calories/calPages/Bread"
                    img = {img2}
                    title = "Bread & Pasteries"
                    desc = "Primarily made of carbs, bread products are generally high in calories, especially when butter, fat and other sugary toppings are added. Whole grain variations will be more nutritious and higher in fiber."
                />
                <CalContent
                    link = "../Calories/calPages/Pasta"
                    img = {img3}
                    title = "Pasta & Noodles"
                    desc = "Primarily made of carbs, pasta and noodles are a great source of energy before a workout. Whole grain variations will be more nutritious and higher in fiber. Depending on the recipe and added ingredients, the fat, protein."
                />
            </div>
            <div className="flex ml-10 space-x-10 mb-10">
                <CalContent
                    link = "../Calories/calPages/Flour"
                    img = {img4}
                    title = "Flour & Cereal"
                    desc = "Flour and grains are generally high in carbohydrates. If you opt for whole grain varieties, they will be less processed and provide more fiber. Highly processed cereals are generally high in fat and sugars."
                />
            </div>
        </>
    );
}

export default Cereal;