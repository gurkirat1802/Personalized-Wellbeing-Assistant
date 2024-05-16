import React from "react";

const Flour = () => {
    return (
        <>
            <div>
                <h1 className="text-5xl font-bold font-serif text-center py-10">Flour, Cereal, Grains & Baking Ingredients: Calories</h1>
                <p className="text-xl text-center mx-60">Flour and grains are generally high in carbohydrates. If you opt for whole grain varieties, they will be less processed and provide more fiber. Baking ingredients can vary drastically in their nutritional values depending on type and portion size. Check out our Flour, Grains and Baking Ingredients. Primarily made of carbs, the nutritional values of cereals vary depending on their level of processing. Highly processed cereals are generally high in fat and sugars, while non-processed, whole grain varieties are richer in fiber and protein. Check out our Chart below for more nutritional information.</p>
            </div>
            <table className="border-2 border-gray-500 mt-20 text-center text-lg ml-64 mb-20">
                <tr className="border-2 border-gray-500 bg-gray-300">
                    <th className="py-5 px-48">Food Item</th>
                    <th className="py-5 px-10">Serving Per 100g</th>
                    <th className="py-5 px-10">Calories</th>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Acorn Flour</td>
                    <td>100 g</td>
                    <td>501 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Baking Powder</td>
                    <td>100 g</td>
                    <td>100 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Bread Flour</td>
                    <td>100 g</td>
                    <td>367 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Cake Flour</td>
                    <td>100 g</td>
                    <td>362 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Corn Flour</td>
                    <td>100 g</td>
                    <td>344 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Corn</td>
                    <td>100 g</td>
                    <td>341 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Egg</td>
                    <td>100 g</td>
                    <td>137 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Flour</td>
                    <td>100 g</td>
                    <td>344 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Cereal</td>
                    <td>100 g</td>
                    <td>363 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Corn Flakes</td>
                    <td>100 g</td>
                    <td>363 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Oatmeal</td>
                    <td>100 g</td>
                    <td>128 cal</td>
                </tr>
            </table>
        </>
    );
}

export default Flour;