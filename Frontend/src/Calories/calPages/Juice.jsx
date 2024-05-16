import React from "react";

const Juice = () => {
    return (
        <>
            <div>
                <h1 className="text-5xl font-bold font-serif text-center py-10">Juice & Soft Drinks: Calories</h1>
                <p className="text-xl text-center mx-60">Juice is high in carbs due to its sugar content and generally delivers a high calorie count per serving. Natural juices, however, can be rich in vitamins and micronutrients. Take a look at the ingredients list to determine the amount of added sugars. Soft drinks are generally considered “empty calories,” being highly processed and delivering little nutritional value. Check out our Juice and Soft Drinks Chart below for more nutritional information.</p>
            </div>
            <table className="border-2 border-gray-500 mt-20 text-center text-lg ml-64 mb-20">
                <tr className="border-2 border-gray-500 bg-gray-300">
                    <th className="py-5 px-48">Food Item</th>
                    <th className="py-5 px-10">Serving Per 100g</th>
                    <th className="py-5 px-10">Calories</th>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Apple Juice</td>
                    <td>100 g</td>
                    <td>56 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Banana Juice</td>
                    <td>100 g</td>
                    <td>53 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Carrot Juice</td>
                    <td>100 g</td>
                    <td>24 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Cherry Juice</td>
                    <td>100 g</td>
                    <td>60 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Coconut Water</td>
                    <td>100 g</td>
                    <td>15 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Coke</td>
                    <td>100 g</td>
                    <td>42 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Coke Zero</td>
                    <td>100 g</td>
                    <td>0 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Cranberry Juice</td>
                    <td>100 g</td>
                    <td>179 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Energy Drink</td>
                    <td>100 g</td>
                    <td>46 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Fanta</td>
                    <td>100 g</td>
                    <td>42 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Fruit Juice</td>
                    <td>100 g</td>
                    <td>61 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Grapefruit Juice</td>
                    <td>100 g</td>
                    <td>53 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Orange Juice</td>
                    <td>100 g</td>
                    <td>43 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Papaya Juice</td>
                    <td>100 g</td>
                    <td>334 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Pepsi</td>
                    <td>100 g</td>
                    <td>44 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Pineapple Juice</td>
                    <td>100 g</td>
                    <td>44 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Smoothie</td>
                    <td>100 g</td>
                    <td>133 cal</td>
                </tr>
            </table>
        </>
    );
}

export default Juice;