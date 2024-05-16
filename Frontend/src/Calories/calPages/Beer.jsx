import React from "react";

const Beer = () => {
    return (
        <>
            <div>
                <h1 className="text-5xl font-bold font-serif text-center py-10">Beer: Calories</h1>
                <p className="text-xl text-center mx-60">Made from fermented grain, the calories from beer are mainly made up of carbs and alcohol. Craft, seasonal beers and beers with high alcohol content will tend to have more calories than lighter ones. If you're keeping an eye on calorie content, opt for alcohol-free options, as these will usually contain fewer calories. Check out our Beer Chart below for more nutritional information.</p>
            </div>
            <table className="border-2 border-gray-500 mt-20 text-center text-lg ml-64 mb-20">
                <tr className="border-2 border-gray-500 bg-gray-300">
                    <th className="py-5 px-48">Food Item</th>
                    <th className="py-5 px-10">Serving Per 100g</th>
                    <th className="py-5 px-10">Calories</th>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Beer</td>
                    <td>100 ml</td>
                    <td>42 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Bud Ice</td>
                    <td>100 ml</td>
                    <td>34 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Bud Select</td>
                    <td>100 ml</td>
                    <td>28 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Busch</td>
                    <td>100 ml</td>
                    <td>17 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Dark Beer</td>
                    <td>100 ml</td>
                    <td>37 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Ginger Beer</td>
                    <td>100 ml</td>
                    <td>45 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Light Beer</td>
                    <td>100 ml</td>
                    <td>30 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Malt Beer</td>
                    <td>100 ml</td>
                    <td>54 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Natural Light</td>
                    <td>100 ml</td>
                    <td>95 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Non Alcoholic Beer</td>
                    <td>100 ml</td>
                    <td>25 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Root Beer</td>
                    <td>100 ml</td>
                    <td>2 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Stout Beer</td>
                    <td>100 ml</td>
                    <td>54 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Strong Beer</td>
                    <td>100 ml</td>
                    <td>70 cal</td>
                </tr>
                <tr className="border-2 border-gray-500 bg-gray-100">
                    <td>Wheat Beer</td>
                    <td>100 ml</td>
                    <td>38 cal</td>
                </tr>
            </table>
        </>
    );
}

export default Beer;