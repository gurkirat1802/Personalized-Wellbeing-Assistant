import React from "react";

const MeatProducts = () => {
    return (
        <>
            <div>
                <h1 className="text-5xl font-bold font-serif text-center py-10">Meat: Calories</h1>
                <p className="text-xl text-center mx-60">Primarily made up of protein and fat, meat is a great source of essential amino acids, vitamin B12 and iron. The calorie content of meat is highly dependent on the cut and resulting fat-to-protein ratio. The preparation method, sauces and seasoning can also affect the calorie count. Check out our Meat Chart below for more nutritional information.</p>
            </div>
            <table className="border-2 border-gray-500 mt-20 text-center text-lg ml-64 mb-20">
                <tr className="border-2 border-gray-500 bg-gray-300">
                    <th className="py-5 px-48">Food Item</th>
                    <th className="py-5 px-10">Serving Per 100g</th>
                    <th className="py-5 px-10">Calories</th>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Alligator</td>
                    <td>100 g</td>
                    <td>97 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Bear Meat</td>
                    <td>100 g</td>
                    <td>161 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Beef</td>
                    <td>100 g</td>
                    <td>156 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Chicken Breast Fillet</td>
                    <td>100 g</td>
                    <td>118 cal</td>
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
                    <td>Chicken Strips</td>
                    <td>100 g</td>
                    <td>271 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Chicken Thigh</td>
                    <td>100 g</td>
                    <td>173 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Dove</td>
                    <td>100 g</td>
                    <td>391 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Duck</td>
                    <td>100 g</td>
                    <td>227 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Goat Meat</td>
                    <td>100 g</td>
                    <td>149 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Hot Wings</td>
                    <td>100 g</td>
                    <td>243 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Lamb Meat</td>
                    <td>100 g</td>
                    <td>117 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Mutton</td>
                    <td>100 g</td>
                    <td>183 cal</td>
                </tr>
            </table>
        </>
    );
}

export default MeatProducts;