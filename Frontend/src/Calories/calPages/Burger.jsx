import React from "react";

const Burger = () => {
    return (
        <>
            <div>
                <h1 className="text-5xl font-bold font-serif text-center py-10">Fast Food & Burgers: Calories</h1>
                <p className="text-xl text-center mx-60">The foods in this category tend to be calorie dense, containing high amounts of fat, added salt and sodium, and sugars. Their ingredients are also generally heavily processed and often fried. Since fast food usually has low nutritional value, it's best to enjoy them mindfully and in smaller portions. Check out our Fast Food and Burgers Chart for more nutritional information.</p>
            </div>
            <table className="border-2 border-gray-500 mt-20 text-center text-lg ml-64 mb-20">
                <tr className="border-2 border-gray-500 bg-gray-300">
                    <th className="py-5 px-48">Food Item</th>
                    <th className="py-5 px-10">Serving Per 100g</th>
                    <th className="py-5 px-10">Calories</th>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>BBQ Rib</td>
                    <td>100 g</td>
                    <td>302 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Beef Pizza</td>
                    <td>100 g</td>
                    <td>348 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Burger</td>
                    <td>100 g</td>
                    <td>297 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Burger King Whooper</td>
                    <td>100 g</td>
                    <td>233 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Burger King Triple Whooper</td>
                    <td>100 g</td>
                    <td>258 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Burger Patty</td>
                    <td>100 g</td>
                    <td>212 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Cheese Sandwich</td>
                    <td>100 g</td>
                    <td>285 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Double Hamburger</td>
                    <td>100 g</td>
                    <td>252 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Egg Roll</td>
                    <td>100 g</td>
                    <td>307 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Egg Sandwich</td>
                    <td>100 g</td>
                    <td>298 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Hot Wings</td>
                    <td>100 g</td>
                    <td>243 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Spring Roll</td>
                    <td>100 g</td>
                    <td>212 cal</td>
                </tr>
            </table>
        </>
    );
}

export default Burger;