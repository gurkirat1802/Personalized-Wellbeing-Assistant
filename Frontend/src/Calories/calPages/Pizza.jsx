import React from "react";

const Pizza = () => {
    return (
        <>
            <div>
                <h1 className="text-5xl font-bold font-serif text-center py-10">Pizza: Calories</h1>
                <p className="text-xl text-center mx-60">Made up of carbs, fats and protein, the calorie content and nutritional value of pizza is highly dependent on the crust density and the toppings. Toppings such as cheese or fatty meats will add more calories, while vegetables can add valuable nutrients to each slice. Commercially-produced pizzas will generally contain more additives, such as salt, compared to homemade ones. Check out our Pizza Chart below for more nutritional information.</p>
            </div>
            <table className="border-2 border-gray-500 mt-20 text-center text-lg ml-64 mb-20">
                <tr className="border-2 border-gray-500 bg-gray-300">
                    <th className="py-5 px-48">Food Item</th>
                    <th className="py-5 px-10">Serving Per 100g</th>
                    <th className="py-5 px-10">Calories</th>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>BBQ Chicken Pizza</td>
                    <td>100 g</td>
                    <td>237 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>BBQ Pizza</td>
                    <td>100 g</td>
                    <td>242 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Cheese Pizza</td>
                    <td>100 g</td>
                    <td>303 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Chicken Pizza</td>
                    <td>100 g</td>
                    <td>243 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Margherita Pizza</td>
                    <td>100 g</td>
                    <td>240 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Mushroom Pizza</td>
                    <td>100 g</td>
                    <td>201 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Pizza</td>
                    <td>100 g</td>
                    <td>222 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Pizza Slice</td>
                    <td>100 g</td>
                    <td>225 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Salami Pizza</td>
                    <td>100 g</td>
                    <td>239 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Spinach Pizza</td>
                    <td>100 g</td>
                    <td>280 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Veggie Pizza</td>
                    <td>100 g</td>
                    <td>156 cal</td>
                </tr>
            </table>
        </>
    );
}

export default Pizza;