import React from "react";

const Coffee = () => {
    return (
        <>
            <div>
                <h1 className="text-5xl font-bold font-serif text-center py-10">Coffee: Calories</h1>
                <p className="text-xl text-center mx-60">Coffee is high in caffeine and its calorie content is highly dependent on what you add to it. Black coffee is considered a zero-calorie drink, containing no carbs, fat or protein. Adding sugars, creams and milk will change the calorie and macronutrients levels of the drink. Check out our Coffee Chart below for more nutritional information.</p>
            </div>
            <table className="border-2 border-gray-500 mt-20 text-center text-lg ml-64 mb-20">
                <tr className="border-2 border-gray-500 bg-gray-300">
                    <th className="py-5 px-48">Food Item</th>
                    <th className="py-5 px-10">Serving Per 100g</th>
                    <th className="py-5 px-10">Calories</th>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Almond Milk Coffee</td>
                    <td>100 g</td>
                    <td>164 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Cappuccino</td>
                    <td>100 g</td>
                    <td>34 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Coffee With Almond Milk</td>
                    <td>100 g</td>
                    <td>531 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Coffee</td>
                    <td>100 g</td>
                    <td>2 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Double Espresso</td>
                    <td>100 g</td>
                    <td>9 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Espresso</td>
                    <td>100 g</td>
                    <td>2 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Instant Coffee</td>
                    <td>100 g</td>
                    <td>362 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Latte</td>
                    <td>100 g</td>
                    <td>44 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>White Coffee</td>
                    <td>100 g</td>
                    <td>551 cal</td>
                </tr>
            </table>
        </>
    );
}

export default Coffee;