import React from "react";

const Salad = () => {
    return (
        <>
            <div>
                <h1 className="text-5xl font-bold font-serif text-center py-10">Salad: Calories</h1>
                <p className="text-xl text-center mx-60">Packed with nutrients, salads are a great high-volume, low-calorie option. While leafy green lettuces are rich in vitamin A and C, darker leaves contain more antioxidants. Be mindful with toppings and dressings. The calorie content and nutritional value can change drastically depending on what you choose. Check out our Salad Chart below for more nutritional information.</p>
            </div>
            <table className="border-2 border-gray-500 mt-20 text-center text-lg ml-64 mb-20">
                <tr className="border-2 border-gray-500 bg-gray-300">
                    <th className="py-5 px-48">Food Item</th>
                    <th className="py-5 px-10">Serving Per 100g</th>
                    <th className="py-5 px-10">Calories</th>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Arugula</td>
                    <td>100 g</td>
                    <td>7 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Bacon Ranch Salad</td>
                    <td>100 g</td>
                    <td>325 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Corn Salad</td>
                    <td>100 g</td>
                    <td>228 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Grilled Chicken Salad</td>
                    <td>100 g</td>
                    <td>180 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Mixed Salad</td>
                    <td>100 g</td>
                    <td>28 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Side Salad</td>
                    <td>100 g</td>
                    <td>95 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Spring Mixed</td>
                    <td>100 g</td>
                    <td>21 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Vegetable Salad</td>
                    <td>100 g</td>
                    <td>14 cal</td>
                </tr>
            </table>
        </>
    );
}

export default Salad;