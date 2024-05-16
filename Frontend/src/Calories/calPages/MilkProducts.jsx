import React from "react";

const MilkProducts = () => {
    return (
        <>
            <div>
                <h1 className="text-5xl font-bold font-serif text-center py-10">Milk & Dairy Products: Calories</h1>
                <p className="text-xl text-center mx-60">Milk and dairy products generally contain a nice balance of fat, carbs and protein, but their calorie contents are highly dependent on the fat contents of the milk. There is also a wide selection of plant-based milks on the market, but keep an eye out for added sugars. Check out our Milk and Dairy Products Chart below for more nutritional information.</p>
            </div>
            <table className="border-2 border-gray-500 mt-20 text-center text-lg ml-64 mb-20">
                <tr className="border-2 border-gray-500 bg-gray-300">
                    <th className="py-5 px-48">Food Item</th>
                    <th className="py-5 px-10">Serving Per 100g</th>
                    <th className="py-5 px-10">Calories</th>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Almond Milk</td>
                    <td>100 g</td>
                    <td>22 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Butter Oil</td>
                    <td>100 g</td>
                    <td>876 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Butter Milk</td>
                    <td>100 g</td>
                    <td>37 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Chocolate Milk</td>
                    <td>100 g</td>
                    <td>132 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Coconut Milk</td>
                    <td>100 g</td>
                    <td>10 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Cream</td>
                    <td>100 g</td>
                    <td>308 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Goat Milk</td>
                    <td>100 g</td>
                    <td>67 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Human Milk</td>
                    <td>100 g</td>
                    <td>304 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Indian Buffalo Milk</td>
                    <td>100 g</td>
                    <td>97 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Mango Lassi</td>
                    <td>100 g</td>
                    <td>82 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Milk</td>
                    <td>100 g</td>
                    <td>65 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Milkshake Strawberry</td>
                    <td>100 g</td>
                    <td>165 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Soy Milk</td>
                    <td>100 g</td>
                    <td>36 cal</td>
                </tr>
            </table>
        </>
    );
}

export default MilkProducts;