import React from "react";

const FishCal = () => {
    return (
        <>
            <div>
                <h1 className="text-5xl font-bold font-serif text-center py-10">Fish & Seafood: Calories</h1>
                <p className="text-xl text-center mx-60">Generally low in fat and high in protein, fish and seafood are usually a low-calorie option. Oily fish will have a higher calorie count, but are also packed with healthy omega-3 fatty acids. With the exception of canned options, fish and seafood are also low in sodium. Check out our Fish and Seafood Chart below for more nutritional information.</p>
            </div>
            <table className="border-2 border-gray-500 mt-20 text-center text-lg ml-64 mb-20">
                <tr className="border-2 border-gray-500 bg-gray-300">
                    <th className="py-5 px-48">Food Item</th>
                    <th className="py-5 px-10">Serving Per 100g</th>
                    <th className="py-5 px-10">Calories</th>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Baked Mackerel</td>
                    <td>100 g</td>
                    <td>205 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Bluefish</td>
                    <td>100 g</td>
                    <td>124 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Butterfish</td>
                    <td>100 g</td>
                    <td>114 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Crawfish</td>
                    <td>100 g</td>
                    <td>81 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Fish Fingers</td>
                    <td>100 g</td>
                    <td>256 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Lobster</td>
                    <td>100 g</td>
                    <td>83 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Milkfish</td>
                    <td>100 g</td>
                    <td>148 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Octopus</td>
                    <td>100 g</td>
                    <td>81 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Pan Fried Fish</td>
                    <td>100 g</td>
                    <td>213 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Redfish</td>
                    <td>100 g</td>
                    <td>224 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Salmon</td>
                    <td>100 g</td>
                    <td>180 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Shell</td>
                    <td>100 g</td>
                    <td>140 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Tuna</td>
                    <td>100 g</td>
                    <td>226 cal</td>
                </tr>
            </table>
        </>
    );
}

export default FishCal;