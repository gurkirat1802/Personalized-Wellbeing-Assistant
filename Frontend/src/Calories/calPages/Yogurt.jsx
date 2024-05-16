import React from "react";

const Yogurt = () => {
    return (
        <>
            <div>
                <h1 className="text-5xl font-bold font-serif text-center py-10">Yogurt: Calories</h1>
                <p className="text-xl text-center mx-60">Made from the fermentation of milk, yogurt is generally low in calories. Although, this can be highly dependent on added sugars and overall fat content. Generally high in protein, yogurt can be made from various sources, including cow's milk or other plant-based alternatives. Check out our Yogurt Chart below for more nutritional information.</p>
            </div>
            <table className="border-2 border-gray-500 mt-20 text-center text-lg ml-64 mb-20">
                <tr className="border-2 border-gray-500 bg-gray-300">
                    <th className="py-5 px-48">Food Item</th>
                    <th className="py-5 px-10">Serving Per 100g</th>
                    <th className="py-5 px-10">Calories</th>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Blueberry Yogurt</td>
                    <td>100 g</td>
                    <td>67 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Fruit Yogurt</td>
                    <td>100 g</td>
                    <td>105 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Greek Yogurt</td>
                    <td>100 g</td>
                    <td>71 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Low Fat Yogurt</td>
                    <td>100 g</td>
                    <td>45 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Natural Yogurt</td>
                    <td>100 g</td>
                    <td>69 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Plain Yogurt</td>
                    <td>100 g</td>
                    <td>106 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Vanilla Yogurt</td>
                    <td>100 g</td>
                    <td>102 cal</td>
                </tr>
            </table>
        </>
    );
}

export default Yogurt;