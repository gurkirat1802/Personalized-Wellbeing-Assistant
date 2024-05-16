import React from "react";

const Liquor = () => {
    return (
        <>
            <div>
                <h1 className="text-5xl font-bold font-serif text-center py-10">Liquor & Cocktails: Calories</h1>
                <p className="text-xl text-center mx-60">Liquor and cocktails tend to be higher in calories, as they are high in carbs and alcohol content, and provide the body with no nutritional value. Since cocktails often include other soft drinks, syrups and sugars, their calories can add up quickly. Check out our Liquor and Cocktails Chart below for more nutritional information.</p>
            </div>
            <table className="border-2 border-gray-500 mt-20 text-center text-lg ml-64 mb-20">
                <tr className="border-2 border-gray-500 bg-gray-300">
                    <th className="py-5 px-48">Food Item</th>
                    <th className="py-5 px-10">Serving Per 100g</th>
                    <th className="py-5 px-10">Calories</th>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Absinthe</td>
                    <td>100 ml</td>
                    <td>443 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Amaretto</td>
                    <td>100 ml</td>
                    <td>318 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Bourbon</td>
                    <td>100 ml</td>
                    <td>248 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Brandy</td>
                    <td>100 ml</td>
                    <td>305 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Dark Rum</td>
                    <td>100 ml</td>
                    <td>231 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Gin</td>
                    <td>100 ml</td>
                    <td>265 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Liquor</td>
                    <td>100 ml</td>
                    <td>286 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Rum</td>
                    <td>100 ml</td>
                    <td>234 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Scotch</td>
                    <td>100 ml</td>
                    <td>231 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Tequila</td>
                    <td>100 ml</td>
                    <td>231 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Vodka</td>
                    <td>100 ml</td>
                    <td>234 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Whiskey</td>
                    <td>100 ml</td>
                    <td>247 cal</td>
                </tr>
            </table>
        </>
    );
}

export default Liquor;