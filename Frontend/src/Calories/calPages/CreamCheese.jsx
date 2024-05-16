import React from "react";

const CreamCheese = () => {
    return (
        <>
            <div>
                <h1 className="text-5xl font-bold font-serif text-center py-10">Cream Cheese: Calories</h1>
                <p className="text-xl text-center mx-60">Made up of mostly fat and protein, the nutritional value and calorie count of cream cheese is highly dependent on the fat contents of the milk used. Since cream cheese tends to be highly processed, it's best to opt for natural varieties. Check out our Cream Cheese Chart below for more nutritional information.</p>
            </div>
            <table className="border-2 border-gray-500 mt-20 text-center text-lg ml-64 mb-20">
                <tr className="border-2 border-gray-500 bg-gray-300">
                    <th className="py-5 px-48">Food Item</th>
                    <th className="py-5 px-10">Serving Per 100g</th>
                    <th className="py-5 px-10">Calories</th>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Cottage Cheese</td>
                    <td>100 g</td>
                    <td>104 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Cream Cheese</td>
                    <td>100 g</td>
                    <td>341 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Labneh</td>
                    <td>100 g</td>
                    <td>179 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Paneer</td>
                    <td>100 g</td>
                    <td>321 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Ricotta Cheese</td>
                    <td>100 g</td>
                    <td>176 cal</td>
                </tr>
            </table>
        </>
    );
}

export default CreamCheese;