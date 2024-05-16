import React from "react";

const Beef = () => {
    return (
        <>
            <div>
                <h1 className="text-5xl font-bold font-serif text-center py-10">Beef & Veal: Calories</h1>
                <p className="text-xl text-center mx-60">Primarily made up of protein and fat, beef and veal are great sources of B vitamins, iron and sodium. Their calorie content is highly dependent on the amount of fat the cut contains. Check out our Beef and Veal Chart below for more nutritional information.</p>
            </div>
            <table className="border-2 border-gray-500 mt-20 text-center text-lg ml-64 mb-20">
                <tr className="border-2 border-gray-500 bg-gray-300">
                    <th className="py-5 px-48">Food Item</th>
                    <th className="py-5 px-10">Serving Per 100g</th>
                    <th className="py-5 px-10">Calories</th>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Beef Bologna</td>
                    <td>100 g</td>
                    <td>617 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Beef Brain</td>
                    <td>100 g</td>
                    <td>220 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Beef Fillet</td>
                    <td>100 g</td>
                    <td>121 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Beef Kidney</td>
                    <td>100 g</td>
                    <td>48 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Beef Lung</td>
                    <td>100 g</td>
                    <td>92 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Beef Neck</td>
                    <td>100 g</td>
                    <td>81 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Beef Pizza</td>
                    <td>100 g</td>
                    <td>348 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Beef Roasted</td>
                    <td>100 g</td>
                    <td>130 cal</td>
                </tr>
            </table>
        </>
    );
}

export default Beef;