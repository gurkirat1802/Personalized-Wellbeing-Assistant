import React from "react";

const Pork = () => {
    return (
        <>
            <div>
                <h1 className="text-5xl font-bold font-serif text-center py-10">Pork: Calories</h1>
                <p className="text-xl text-center mx-60">Primarily made up of protein and fat, pork is very rich in the B vitamin thiamine. The calorie content of pork is highly dependent on the amount of fat. Keep in mind that the skin of pork is very high in fat and many pork products are highly processed. Check out our Pork Chart below for more nutritional information.</p>
            </div>
            <table className="border-2 border-gray-500 mt-20 text-center text-lg ml-64 mb-20">
                <tr className="border-2 border-gray-500 bg-gray-300">
                    <th className="py-5 px-48">Food Item</th>
                    <th className="py-5 px-10">Serving Per 100g</th>
                    <th className="py-5 px-10">Calories</th>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Bacon</td>
                    <td>100 g</td>
                    <td>270 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Grilled Pork Chop</td>
                    <td>100 g</td>
                    <td>150 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Ground Pork</td>
                    <td>100 g</td>
                    <td>279 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Pork</td>
                    <td>100 g</td>
                    <td>279 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Pork Bacon</td>
                    <td>100 g</td>
                    <td>810 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Pork Cutlet</td>
                    <td>100 g</td>
                    <td>106 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Pork Leg</td>
                    <td>100 g</td>
                    <td>179 cal</td>
                </tr>
            </table>
        </>
    );
}

export default Pork;