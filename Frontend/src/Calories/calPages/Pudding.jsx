import React from "react";

const Pudding = () => {
    return (
        <>
            <div>
                <h1 className="text-5xl font-bold font-serif text-center py-10">Desserts & Pudding: Calories</h1>
                <p className="text-xl text-center mx-60">Desserts and pudding are often high in sugar and fat, meaning they are high in calories and offer the body very little nutritional value. Be sure to enjoy them mindfully and in small portions. Check out our Desserts and Pudding Chart below for more nutritional information.</p>
            </div>
            <table className="border-2 border-gray-500 mt-20 text-center text-lg ml-64 mb-20">
                <tr className="border-2 border-gray-500 bg-gray-300">
                    <th className="py-5 px-48">Food Item</th>
                    <th className="py-5 px-10">Serving Per 100g</th>
                    <th className="py-5 px-10">Calories</th>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Apple Dippers</td>
                    <td>100 g</td>
                    <td>124 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Bread Pudding</td>
                    <td>100 g</td>
                    <td>155 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Chocolate Mousse</td>
                    <td>100 g</td>
                    <td>347 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Custard</td>
                    <td>100 g</td>
                    <td>95 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Lemon Pudding</td>
                    <td>100 g</td>
                    <td>399 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Pie</td>
                    <td>100 g</td>
                    <td>501 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Rice Pudding</td>
                    <td>100 g</td>
                    <td>94 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Vanilla Pudding</td>
                    <td>100 g</td>
                    <td>124 cal</td>
                </tr>
            </table>
        </>
    );
}

export default Pudding;