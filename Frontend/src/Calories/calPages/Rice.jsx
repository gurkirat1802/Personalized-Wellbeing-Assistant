import React from "react";

const Rice = () => {
    return (
        <>
            <div>
                <h1 className="text-5xl font-bold font-serif text-center py-10">Rice & Rice Products: Calories</h1>
                <p className="text-xl text-center mx-60">Rice is high in starch and contains almost no fat. It's also a great source of iron and will keep you feeling full. Opt for whole grain variations, as these contain more fiber, are less processed and are generally healthier overall. Check out our Rice and Rice Products Calorie Chart below for more nutritional information.</p>
            </div>
            <table className="border-2 border-gray-500 mt-20 text-center text-lg ml-64 mb-20">
                <tr className="border-2 border-gray-500 bg-gray-300">
                    <th className="py-5 px-48">Food Item</th>
                    <th className="py-5 px-10">Serving Per 100g</th>
                    <th className="py-5 px-10">Calories</th>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Basmati Rice</td>
                    <td>100 g</td>
                    <td>352 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Black Rice</td>
                    <td>100 g</td>
                    <td>362 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Brown Rice Cake</td>
                    <td>100 g</td>
                    <td>387 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Fried Rice</td>
                    <td>100 g</td>
                    <td>125 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Idly</td>
                    <td>100 g</td>
                    <td>350 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Rice Cake</td>
                    <td>100 g</td>
                    <td>389 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Spanish Rice</td>
                    <td>100 g</td>
                    <td>333 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>White Rice Raw</td>
                    <td>100 g</td>
                    <td>350 cal</td>
                </tr>
            </table>
        </>
    );
}

export default Rice;