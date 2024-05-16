import React from "react";

const Mushroom = () => {
    return (
        <>
            <div>
                <h1 className="text-5xl font-bold font-serif text-center py-10">Mushrooms: Calories</h1>
                <p className="text-xl text-center mx-60">High in protein and low in calories, mushrooms that have been grown in natural sunlight are rich in vitamin D. Often categorized as a vegetable, mushrooms are actually a type of fungi. If you pick mushrooms yourself, be careful. Some wild mushrooms can be poisonous. Check out our Mushroom Chart below for more nutritional information.</p>
            </div>
            <table className="border-2 border-gray-500 mt-20 text-center text-lg ml-64 mb-20">
                <tr className="border-2 border-gray-500 bg-gray-300">
                    <th className="py-5 px-48">Food Item</th>
                    <th className="py-5 px-10">Serving Per 100g</th>
                    <th className="py-5 px-10">Calories</th>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Breaded Mushrooms</td>
                    <td>100 g</td>
                    <td>32 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Chanterelle Mushrooms</td>
                    <td>100 g</td>
                    <td>2 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Maitake Mushrooms</td>
                    <td>100 g</td>
                    <td>2 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Morchella</td>
                    <td>100 g</td>
                    <td>3 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Mushrooms</td>
                    <td>100 g</td>
                    <td>37 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Truffles</td>
                    <td>100 g</td>
                    <td>14 cal</td>
                </tr>
            </table>
        </>
    );
}

export default Mushroom;