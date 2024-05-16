import React from "react";
import CalContent from "../components/CalContent";
import img1 from "../images/juice.png";
import img2 from "../images/coffee.png";
import img3 from "../images/wine.png";
import img4 from "../images/liquor-cocktails.png";
import img5 from "../images/beer.png";

const Drinks = () => {
    return (
        <>
            <div className="flex justify-evenly mb-10">
                <CalContent
                    link = "../Calories/calPages/Juice"
                    img = {img1}
                    title = "Juice & Soft Drinks"
                    desc = "Juice is high in carbs due to its sugar content and generally delivers a high calorie count per serving. Natural juices, however, can be rich in vitamins and micronutrients."
                />
                <CalContent
                    link = "../Calories/calPages/Coffee"
                    img = {img2}
                    title = "Coffee"
                    desc = "Coffee is high in caffeine and its calorie content is highly dependent on what you add to it. Black coffee is considered a zero-calorie drink, containing no carbs, fat or protein."
                />
                <CalContent
                    link = "../Calories/calPages/Wine"
                    img = {img3}
                    title = "Wine"
                    desc = "The alcohol in wine is its primary source of calories, while remaining calories come from sugar of fruit. Wines with high alcohol content usually have more calories than sweeter ones."
                />
            </div>
            <div className="flex ml-10 space-x-10 mb-10">
                <CalContent
                    link = "../Calories/calPages/Liquor"
                    img = {img4}
                    title = "Liquor & Cocktails"
                    desc = "Liquor and cocktails tend to be higher in calories, as they are high in carbs and alcohol content, and provide the body with no nutritional value."
                />
                <CalContent
                    link = "../Calories/calPages/Beer"
                    img = {img5}
                    title = "Beer"
                    desc = "Made from fermented grain, the calories from beer are mainly made up of carbs and alcohol. Craft, seasonal beers and beers with high alcohol content will tend to have more calories."
                />
            </div>
        </>
    );
}

export default Drinks;