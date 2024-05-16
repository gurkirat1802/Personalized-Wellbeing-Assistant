import React from "react";

const Wine = () => {
    return (
        <>
            <div>
                <h1 className="text-5xl font-bold font-serif text-center py-10">Wine: Calories</h1>
                <p className="text-xl text-center mx-60">he alcohol in wine is its primary source of calories, while the remaining calories come from the sugar of the fruit. Did you know that since alcohol contains more calories per 100 milliliters than carbs do, wines with high alcohol content usually have more calories than sweeter ones? Check out our Wine Chart below for more nutritional information.</p>
            </div>
            <table className="border-2 border-gray-500 mt-20 text-center text-lg ml-64 mb-20">
                <tr className="border-2 border-gray-500 bg-gray-300">
                    <th className="py-5 px-48">Food Item</th>
                    <th className="py-5 px-10">Serving Per 100g</th>
                    <th className="py-5 px-10">Calories</th>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Brut Champagne</td>
                    <td>100 g</td>
                    <td>82 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Cava</td>
                    <td>100 g</td>
                    <td>75 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Champagne</td>
                    <td>100 g</td>
                    <td>83 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Dry Red Wine</td>
                    <td>100 g</td>
                    <td>83 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Marsala Wine</td>
                    <td>100 g</td>
                    <td>117 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Merlot</td>
                    <td>100 g</td>
                    <td>83 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Moscato Wine</td>
                    <td>100 g</td>
                    <td>365 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Plum Wine</td>
                    <td>100 g</td>
                    <td>106 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Wine</td>
                    <td>100 g</td>
                    <td>74 cal</td>
                </tr>
            </table>
        </>
    );
}

export default Wine;