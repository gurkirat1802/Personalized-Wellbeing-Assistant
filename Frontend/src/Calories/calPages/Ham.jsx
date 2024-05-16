import React from "react";

const Ham = () => {
    return (
        <>
            <div>
                <h1 className="text-5xl font-bold font-serif text-center py-10">Ham & Sausage: Calories</h1>
                <p className="text-xl text-center mx-60">Primarily made up of protein and fat, ham and sausage products can often be highly processed and contain mainly saturated fats. Since salt and spices are sometimes added, they can also be high in sodium. Check out our Ham and Sausage Chart below for more nutritional information.</p>
            </div>
            <table className="border-2 border-gray-500 mt-20 text-center text-lg ml-64 mb-20">
                <tr className="border-2 border-gray-500 bg-gray-300">
                    <th className="py-5 px-48">Food Item</th>
                    <th className="py-5 px-10">Serving Per 100g</th>
                    <th className="py-5 px-10">Calories</th>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Beef Salami</td>
                    <td>100 g</td>
                    <td>380 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Black Pudding</td>
                    <td>100 g</td>
                    <td>244 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Bologna</td>
                    <td>100 g</td>
                    <td>299 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Chicken Spread</td>
                    <td>100 g</td>
                    <td>28 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Ham</td>
                    <td>100 g</td>
                    <td>87 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Ham Slice</td>
                    <td>100 g</td>
                    <td>43 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Ham Steak</td>
                    <td>100 g</td>
                    <td>410 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Italian Sausage</td>
                    <td>100 g</td>
                    <td>293 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Pork Salami</td>
                    <td>100 g</td>
                    <td>902 cal</td>
                </tr>
            </table>
        </>
    );
}

export default Ham;