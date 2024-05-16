import React from "react";
import CalContent from "../components/CalContent";
import img1 from "../images/meat.png";
import img2 from "../images/beef.png";
import img3 from "../images/pork.png";
import img4 from "../images/poultry-chicken-turkey.png";
import img5 from "../images/ham-sausage.png";
import img6 from "../images/fish-seafood.png";

const Meat = () => {
    return (
        <>
            <div className="flex justify-evenly mb-10">
                <CalContent
                    link = "../Calories/calPages/MeatProducts"
                    img = {img1}
                    title = "Meat"
                    desc = "Made up of protein & fat, meat is great source of essential amino acids, vitamin B12 and iron. The calorie content of meat is highly dependent on the cut & resulting fat-to-protein ratio."
                />
                <CalContent
                    link = "../Calories/calPages/Beef"
                    img = {img2}
                    title = "Beef & Veal"
                    desc = "Primarily made up of protein and fat, beef and veal are great sources of B vitamins, iron and sodium. Their calorie content is highly dependent on amount of fat the cut contains."
                />
                <CalContent
                    link = "../Calories/calPages/Pork"
                    img = {img3}
                    title = "Pork"
                    desc = "Primarily made up of protein and fat, pork is very rich in the B vitamin thiamine. The calorie content of pork is highly dependent on the amount of fat."
                />
            </div>
            <div className="flex ml-10 space-x-10 mb-10">
                <CalContent
                    link = "../Calories/calPages/Chicken"
                    img = {img4}
                    title = "Poultry & Chicken"
                    desc = "Primarily made up of protein and fat, the calorie content of poultry is highly dependent on the cut of the meat. Lean cuts, such as the breast, making them low-calorie & high-protein."
                />
                <CalContent
                    link = "../Calories/calPages/Ham"
                    img = {img5}
                    title = "Ham & Sausage"
                    desc = "Primarily made up of protein and fat, ham and sausage products can often be highly processed & contains saturated fats. Since salt and spices are sometimes added, high in sodium."
                />
                <CalContent
                    link = "../Calories/calPages/FishCal"
                    img = {img6}
                    title = "Fish & Seafood"
                    desc = "Generally low in fat and high in protein, fish and seafood are usually a low-calorie option. Oily fish will have a higher calorie count, but are also packed with healthy omega-3 fatty acids."
                />
            </div>
        </>
    );
}

export default Meat;