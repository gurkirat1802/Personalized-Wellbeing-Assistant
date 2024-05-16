import React from "react";

const Cheese = () => {
    return (
        <>
            <div>
                <h1 className="text-5xl font-bold font-serif text-center py-10">Cheese: Calories</h1>
                <p className="text-xl text-center mx-60">Made up of mostly fat and protein, and rich in bone and teeth strengthening calcium, the nutritional value and calorie count of cheese is highly dependent on the fat contents of the milk used, how it's processed and its age. Check out our Cheese Calorie Chart below for more nutritional information.</p>
            </div>
            <table className="border-2 border-gray-500 mt-20 text-center text-lg ml-64 mb-20">
                <tr className="border-2 border-gray-500 bg-gray-300">
                    <th className="py-5 px-48">Food Item</th>
                    <th className="py-5 px-10">Serving Per 100g</th>
                    <th className="py-5 px-10">Calories</th>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Amercian Cheese</td>
                    <td>100 g</td>
                    <td>500 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Blue Cheese</td>
                    <td>100 g</td>
                    <td>362 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Cheese Fondue</td>
                    <td>100 g</td>
                    <td>274 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Cheese Slices</td>
                    <td>100 g</td>
                    <td>370 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Cheese Spread</td>
                    <td>100 g</td>
                    <td>332 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Cottage Cheese</td>
                    <td>100 g</td>
                    <td>104 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Goat Cheese</td>
                    <td>100 g</td>
                    <td>347 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Light Cheese</td>
                    <td>100 g</td>
                    <td>340 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Mexican Cheese</td>
                    <td>100 g</td>
                    <td>900 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Romano Cheese</td>
                    <td>100 g</td>
                    <td>393 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Soft Cheese</td>
                    <td>100 g</td>
                    <td>278 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Soy Cheese</td>
                    <td>100 g</td>
                    <td>198 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>White Cheese</td>
                    <td>100 g</td>
                    <td>297 cal</td>
                </tr>
            </table>
        </>
    );
}

export default Cheese;