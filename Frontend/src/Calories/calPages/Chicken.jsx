import React from "react";

const Chicken = () => {
    return (
        <>
            <div>
                <h1 className="text-5xl font-bold font-serif text-center py-10">Poultry, Chicken & Turkey: Calories</h1>
                <p className="text-xl text-center mx-60">Primarily made up of protein and fat, the calorie content of poultry is highly dependent on the cut of the meat. Lean cuts, such as the breast, generally have the best fat-to-muscle ratio, making them low-calorie and high-protein choices. The protein in poultry is also very digestible. Check out our Poultry, Chicken and Turkey Chart below for more nutritional information.</p>
            </div>
            <table className="border-2 border-gray-500 mt-20 text-center text-lg ml-64 mb-20">
                <tr className="border-2 border-gray-500 bg-gray-300">
                    <th className="py-5 px-48">Food Item</th>
                    <th className="py-5 px-10">Serving Per 100g</th>
                    <th className="py-5 px-10">Calories</th>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Baked Chicken</td>
                    <td>100 g</td>
                    <td>117 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Boiled Chicken</td>
                    <td>100 g</td>
                    <td>118 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Chicken</td>
                    <td>100 g</td>
                    <td>166 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Chicken Biryani</td>
                    <td>100 g</td>
                    <td>253 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Chicken Breast</td>
                    <td>100 g</td>
                    <td>101 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Chicken Leg</td>
                    <td>100 g</td>
                    <td>218 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Chicken Liver</td>
                    <td>100 g</td>
                    <td>136 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Chicken Wing</td>
                    <td>100 g</td>
                    <td>387 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Goose Meat</td>
                    <td>100 g</td>
                    <td>130 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Turkey</td>
                    <td>100 g</td>
                    <td>157 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Turkey Cutlet</td>
                    <td>100 g</td>
                    <td>262 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Turkey Wings</td>
                    <td>100 g</td>
                    <td>196 cal</td>
                </tr>
            </table>
        </>
    );
}

export default Chicken;