import React from "react";

const Pasta = () => {
    return (
        <>
            <div>
                <h1 className="text-5xl font-bold font-serif text-center py-10">Pasta & Noodles: Calories</h1>
                <p className="text-xl text-center mx-60">Primarily made of carbs, pasta and noodles are a great source of energy before a workout. Whole grain variations will be more nutritious and higher in fiber. Depending on the recipe and added ingredients, the fat, protein and overall calorie count can differ quite drastically. Check out our Pasta and Noodle Chart below for more nutritional information.</p>
            </div>
            <table className="border-2 border-gray-500 mt-20 text-center text-lg ml-64 mb-20">
                <tr className="border-2 border-gray-500 bg-gray-300">
                    <th className="py-5 px-48">Food Item</th>
                    <th className="py-5 px-10">Serving Per 100g</th>
                    <th className="py-5 px-10">Calories</th>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Chinese Noodles</td>
                    <td>100 g</td>
                    <td>351 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Egg Noodles</td>
                    <td>100 g</td>
                    <td>384 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Homemade Lasagna</td>
                    <td>100 g</td>
                    <td>250 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Instant Noodles</td>
                    <td>100 g</td>
                    <td>257 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Macaroni</td>
                    <td>100 g</td>
                    <td>359 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Pasta</td>
                    <td>100 g</td>
                    <td>365 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Soy Noodles</td>
                    <td>100 g</td>
                    <td>348 cal</td>
                </tr>
            </table>
        </>
    );
}

export default Pasta;