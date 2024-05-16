import React from "react";

const Vegetable = () => {
    return (
        <>
            <div>
                <h1 className="text-5xl font-bold font-serif text-center py-10">Vegetables & Legumes: Calories</h1>
                <p className="text-xl text-center mx-60">Vegetables are a great high-volume, low-calorie option. You can eat a lot of them, they're satiating and packed with vitamins. Legumes are more calorie dense but also dense in nutrients, especially protein, making them a great meat alternative for a vegan or vegetarian diet. Check out our Vegetables and Legumes Calorie Chart below for more nutritional information.</p>
            </div>
            <table className="border-2 border-gray-500 mt-20 text-center text-lg ml-64 mb-20">
                <tr className="border-2 border-gray-500 bg-gray-300">
                    <th className="py-5 px-48">Food Item</th>
                    <th className="py-5 px-10">Serving Per 100g</th>
                    <th className="py-5 px-10">Calories</th>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Aloe Vera</td>
                    <td>100 g</td>
                    <td>2 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Arrowroot</td>
                    <td>100 g</td>
                    <td>65 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Baked Beans</td>
                    <td>100 g</td>
                    <td>110 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Beatroot</td>
                    <td>100 g</td>
                    <td>46 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Black Beans</td>
                    <td>100 g</td>
                    <td>373 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Black Chickpeas</td>
                    <td>100 g</td>
                    <td>348 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Brocoli</td>
                    <td>100 g</td>
                    <td>34 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Cabbage</td>
                    <td>100 g</td>
                    <td>30 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Capsicum</td>
                    <td>100 g</td>
                    <td>40 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Cauliflower</td>
                    <td>100 g</td>
                    <td>28 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Celery</td>
                    <td>100 g</td>
                    <td>25 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Cherry Tomato</td>
                    <td>100 g</td>
                    <td>20 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Corn Cooked</td>
                    <td>100 g</td>
                    <td>94 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Garlic</td>
                    <td>100 g</td>
                    <td>143 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Green Beans</td>
                    <td>100 g</td>
                    <td>40 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Green Peas</td>
                    <td>100 g</td>
                    <td>91 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Pumpkin</td>
                    <td>100 g</td>
                    <td>20 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Radish</td>
                    <td>100 g</td>
                    <td>17 cal</td>
                </tr>
            </table>
        </>
    );
}

export default Vegetable;