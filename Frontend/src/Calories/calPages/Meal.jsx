import React from "react";

const Meal = () => {
    return (
        <>
            <div>
                <h1 className="text-5xl font-bold font-serif text-center py-10">Meals & Dishes: Calories</h1>
                <p className="text-xl text-center mx-60">The nutritional value and calorie content of your meals and dishes will be highly dependent on cooking method, ingredients and level of processing. Frying with high amounts of oils as well as adding products such as creams can both contribute to a higher calorie count. Also keep in mind that ready-made meals often contain more salt and calories overall. Check out our Meals and Dishes Chart below for more nutritional information.</p>
            </div>
            <table className="border-2 border-gray-500 mt-20 text-center text-lg ml-64 mb-20">
                <tr className="border-2 border-gray-500 bg-gray-300">
                    <th className="py-5 px-48">Food Item</th>
                    <th className="py-5 px-10">Serving Per 100g</th>
                    <th className="py-5 px-10">Calories</th>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Aloo Ki Sabzi</td>
                    <td>100 g</td>
                    <td>223 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Aloo Paratha</td>
                    <td>100 g</td>
                    <td>230 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Arhar Dal</td>
                    <td>100 g</td>
                    <td>100 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Bacon And Eggs</td>
                    <td>100 g</td>
                    <td>251 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Banana Oatmeal Pancake</td>
                    <td>100 g</td>
                    <td>202 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Biryani</td>
                    <td>100 g</td>
                    <td>108 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Boiled Egg</td>
                    <td>100 g</td>
                    <td>137 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Butter Chicken</td>
                    <td>100 g</td>
                    <td>168 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Carrot Soup</td>
                    <td>100 g</td>
                    <td>47 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Chana Dal</td>
                    <td>100 g</td>
                    <td>380 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Chicken Biryani</td>
                    <td>100 g</td>
                    <td>253 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Chicken Soup</td>
                    <td>100 g</td>
                    <td>246 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Daal Chawal</td>
                    <td>100 g</td>
                    <td>110 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Egg Fried</td>
                    <td>100 g</td>
                    <td>196 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Fish Curry</td>
                    <td>100 g</td>
                    <td>92 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Khichdi</td>
                    <td>100 g</td>
                    <td>117 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Lasagna</td>
                    <td>100 g</td>
                    <td>171 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Moong Masoor Dal</td>
                    <td>100 g</td>
                    <td>179 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Mushroom Soup</td>
                    <td>100 g</td>
                    <td>88 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Omelet</td>
                    <td>100 g</td>
                    <td>387 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Rajma</td>
                    <td>100 g</td>
                    <td>143 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Samosa</td>
                    <td>100 g</td>
                    <td>112 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Sandwich</td>
                    <td>100 g</td>
                    <td>225 cal</td>
                </tr>
            </table>
        </>
    );
}

export default Meal;