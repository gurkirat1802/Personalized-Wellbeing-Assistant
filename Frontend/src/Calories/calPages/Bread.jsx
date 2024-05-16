import React from "react";

const Bread = () => {
    return (
        <>
            <div>
                <h1 className="text-5xl font-bold font-serif text-center py-10">Bread, Bread Rolls & Pastries: Calories</h1>
                <p className="text-xl text-center mx-60">Primarily made of carbs, bread products are generally high in calories, especially when butter, fat and other sugary toppings are added. Whole grain variations will be more nutritious and higher in fiber. Check out our Bread, Bread Rolls and Pastries Chart below for more nutritional information.</p>
            </div>
            <table className="border-2 border-gray-500 mt-20 text-center text-lg ml-64 mb-20">
                <tr className="border-2 border-gray-500 bg-gray-300">
                    <th className="py-5 px-48">Food Item</th>
                    <th className="py-5 px-10">Serving Per 100g</th>
                    <th className="py-5 px-10">Calories</th>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Bagel</td>
                    <td>100 g</td>
                    <td>230 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Banana Bread</td>
                    <td>100 g</td>
                    <td>270 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Black Bread</td>
                    <td>100 g</td>
                    <td>236 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Bread Roll</td>
                    <td>100 g</td>
                    <td>279 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Bun</td>
                    <td>100 g</td>
                    <td>250 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Chapati</td>
                    <td>100 g</td>
                    <td>279 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Cheese Bread</td>
                    <td>100 g</td>
                    <td>237 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Chocolate Donut</td>
                    <td>100 g</td>
                    <td>437 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Dosa</td>
                    <td>100 g</td>
                    <td>210 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Egg Bread</td>
                    <td>100 g</td>
                    <td>287 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Paratha</td>
                    <td>100 g</td>
                    <td>326 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>White Bread</td>
                    <td>100 g</td>
                    <td>246 cal</td>
                </tr>
            </table>
        </>
    );
}

export default Bread;