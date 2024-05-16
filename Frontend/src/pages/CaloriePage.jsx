import React from "react";
import Fruits from "../Calories/Fruits";
import Milk from "../Calories/Milk";
import Meat from "../Calories/Meat";
import Cereal from "../Calories/Cereal";
import Dishes from "../Calories/Dishes";
import Drinks from "../Calories/Drinks";
import Candy from "../Calories/Candy";
import Nuts from "../Calories/Nuts";

const CaloriePage = () => {
    return (
        <>
            <div>
                <h1 className="text-5xl font-bold font-serif text-center py-10">Calories in Food: Calorie Chart Database</h1>
                <p className="text-xl text-center mx-60">How many calories are in the foods you eat? You'll find thousands of foods and their calorie values in the calorie charts on calories.info. Whether you're looking to lose weight, gain muscle or simply eat healthily—with each food chart, you'll always have an overview of your diet and can even use it to put together a healthy, wholesome grocery list.</p>
            </div>
            <div className="mt-16 mx-5">
                <h1 className="text-3xl font-bold ml-10 mb-10">Fruits & Vegetables</h1>
                <Fruits/>
            </div>
            <div className="mt-16 mx-5">
                <h1 className="text-3xl font-bold ml-10 mb-10">Milk & Diary Products</h1>
                <Milk/>
            </div>
            <div className="mt-16 mx-5">
                <h1 className="text-3xl font-bold ml-10 mb-10">Meat</h1>
                <Meat/>
            </div>
            <div className="mt-16 mx-5">
                <h1 className="text-3xl font-bold ml-10 mb-10">Cereal Products</h1>
                <Cereal/>
            </div>
            <div className="mt-16 mx-5">
                <h1 className="text-3xl font-bold ml-10 mb-10">Dishes & Meals</h1>
                <Dishes/>
            </div>
            <div className="mt-16 mx-5">
                <h1 className="text-3xl font-bold ml-10 mb-10">Drinks & Beverages</h1>
                <Drinks/>
            </div>
            <div className="mt-16 mx-5">
                <h1 className="text-3xl font-bold ml-10 mb-10">Candy & Sweets</h1>
                <Candy/>
            </div>
            <div className="mt-16 mx-5">
                <h1 className="text-3xl font-bold ml-10 mb-10">Oils, Nuts & Fats</h1>
                <Nuts/>
            </div>
        </>
    );
}

export default CaloriePage;