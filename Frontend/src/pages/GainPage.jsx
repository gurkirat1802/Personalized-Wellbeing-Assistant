// 81224506
// 174c5d52e18cf69bfb117e43c4c44619
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GainPage = () => {

    const notify = () => toast("Added !!");
    const notNotified = () => toast("Deleted !!");
    const item = localStorage.getItem("userData");
    const getting = JSON.parse(item);
    var height = parseInt(getting.height);
    var weight = parseInt(getting.height);
    var age = parseInt(getting.height);
    var gender = getting.gender.toLowerCase();
    var fname = getting.firstName;
    var lname = getting.lastName;
    const calculateIdealWeight = () => {
        if (!height || !gender) {
            alert('Please enter your height and select your gender.');
            return;
        }
        let baseWeight;
        if (gender === "male") {
            baseWeight = 48.0;
        } else if (gender === "female") {
            baseWeight = 45.5;
        }
        const inchesOverFiveFeet = (height - 152.4) / 2.54;
        const idealWeightInKg = baseWeight + (gender === 'male' ? 2.7 : 2.2) * inchesOverFiveFeet;
        return idealWeightInKg;
    };
    const idealWeight = calculateIdealWeight();
    // console.log("ideal" + idealWeight.toFixed(2));
    const getRandomOffset = () => {
        return Math.floor(0.5 * (400 - 300 + 1)) + 300;
    };
    const calculateBmr = () => {
        if (!height || !weight || !age || !gender) {
            alert('Please fill in all the fields.');
            return;
        }
        const weightFactor = 10 * weight;
        const heightFactor = 6.25 * height;
        const ageFactor = 5 * age;
        let bmrValue;
        if (gender === 'male') {
            bmrValue = weightFactor + heightFactor - ageFactor + 5;
        } else if (gender === 'female') {
            bmrValue = weightFactor + heightFactor - ageFactor - 161;
        }
        return bmrValue;
    };
    const bmr = calculateBmr();
    // console.log("bmr" + bmr.toFixed(0));
    const maintenanceCalories = bmr + getRandomOffset();
    // console.log("cal" + maintenanceCalories);
    const mildGainCalories = maintenanceCalories * 1.13;
    const gainCalories = maintenanceCalories * 1.27;
    const fastGainCalories = maintenanceCalories * 1.53;
    // console.log("mildgain" + mildGainCalories.toFixed(0));
    // console.log("gain" + gainCalories.toFixed(0));
    // console.log("fastgain" + fastGainCalories.toFixed(0));
    const calorieNeeded = gainCalories;
    // console.log("needed" + calorieNeeded.toFixed(0));
    const calculateCarbsNeeded = () => {
        if (!calorieNeeded) {
            alert('Please enter total daily calories.');
            return;
        }
        const carbsCalories = calorieNeeded * 0.50;
        const carbsGrams = carbsCalories / 4; // 1 gram of carbohydrate = 4
        return carbsGrams;
    };
    const carbs = calculateCarbsNeeded();
    // console.log("carbs" + carbs.toFixed(0));
    const calculateProteinNeeded = () => {
        if (!weight) {
            alert('Please enter your weight.');
            return;
        }
        const proteinLowerRange = weight * 0.8;
        return proteinLowerRange;
    };
    const pro = calculateProteinNeeded();
    // console.log("protein" + pro.toFixed(0));
    const calculateFatNeeded = () => {
        if (!maintenanceCalories) {
            alert('Please calculate BMR first.');
            return;
        }
        const fatCalories = maintenanceCalories * 0.30;
        const fatGrams = fatCalories / 9; // 1 gram of fat = 9 calories
        return fatGrams
    };
    const fat = calculateFatNeeded();
    // console.log("fat" + fat.toFixed(0));
    const [foodItem, setFoodItem] = useState('');
    const [foodData, setFoodData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const handleSearch = async () => {
        setLoading(true);
        if (foodItem.trim() === '') {
            setLoading(false);
            return;
        }
        try {
            const response = await axios.get(`https://api.edamam.com/api/food-database/v2/parser`, {
                params: {
                    app_id: '81224506',
                    app_key: '174c5d52e18cf69bfb117e43c4c44619',
                    ingr: foodItem,
                    nutritionType: 'cooking',
                },
            });
            localStorage.setItem("test", "123");
            var abc = localStorage.getItem("test");
            console.log(abc);
            setFoodData(response.data.hints[0].food);
            setLoading(false);
            setSuggestions([]); // Clear suggestions when search button is clicked
        } catch (error) {
            console.error('Error fetching food data:', error);
            setLoading(false);
        }
    };
    const handleInputChange = async (e) => {
        const inputValue = e.target.value;
        setFoodItem(inputValue);
        if (inputValue.trim() === '') {
            setSuggestions([]);
            return;
        }
        try {
            const response = await axios.get(`https://api.edamam.com/api/food-database/v2/parser`, {
                params: {
                    app_id: '81224506',
                    app_key: '174c5d52e18cf69bfb117e43c4c44619',
                    ingr: inputValue,
                    nutritionType: 'cooking',
                },
            });
            setSuggestions(response.data.hints.map(item => item.food.label));
        } catch (error) {
            console.error('Error fetching food suggestions:', error);
        }
    };
    const handleSuggestionClick = (suggestion) => {
        setFoodItem(suggestion);
        setSuggestions([]);
        handleSearch(); // Trigger search again with selected suggestion
    };
    const myURL = import.meta.env.VITE_BASE_URL;
    const [waterConsumed, setWaterConsumed] = useState(0);
    const [customWater, setCustomWater] = useState(0);
    const addWater = async (amount) => {
        try {
            setWaterConsumed(prevWaterConsumed => prevWaterConsumed + amount);
            await axios.post(`https://cors-anywhere.herokuapp.com/${myURL}/CreateWaterRecord`, {
                Glass: amount,
                UserId: localStorage.getItem("userID")
            });
            notify();
        } catch (error) {
            console.error('Error adding water:', error);
        }
    };
    const handleCustomWater = async () => {
        try {
            setWaterConsumed(prevWaterConsumed => prevWaterConsumed + customWater);
            await axios.post(`https://cors-anywhere.herokuapp.com/${myURL}/CreateWaterRecord`, {
                Glass: customWater,
                UserId: localStorage.getItem("userID")
            });
            setCustomWater(0);
            notify();
        } catch (error) {
            console.error('Error adding custom water:', error);
        }
    };
    const targetCalories = maintenanceCalories.toFixed(0);
    const targetCarbs = carbs.toFixed(0);
    const targetFat = fat.toFixed(0);
    const targetProtein = pro.toFixed(0);
    const [totalCalories, setTotalCalories] = useState(0);
    const [totalCarbs, setTotalCarbs] = useState(0);
    const [totalFat, setTotalFat] = useState(0);
    const [totalProtein, setTotalProtein] = useState(0);
    const [remainingCalories, setRemainingCalories] = useState(targetCalories);
    const [remainingCarbs, setRemainingCarbs] = useState(targetCarbs);
    const [remainingFat, setRemainingFat] = useState(targetFat);
    const [remainingProtein, setRemainingProtein] = useState(targetProtein);
    const [foodItemsInTable, setFoodItemsInTable] = useState([]);
    const [recordData, setRecordData] = useState([]);
    const userData = JSON.parse(localStorage.getItem("userData"));
    const uId = userData.id;
    const selectedDate = new Date().toISOString();
    const [waterRecordData, setWaterRecordData] = useState([]);
    const fetchRecordData = async () => {
        try {
            const response = await axios.post(`https://cors-anywhere.herokuapp.com/${myURL}/GetUserRecord?userId=${uId}&recordDate=${selectedDate}`, null);
            const { data } = response;
            let totalCalories = 0;
            let totalCarbs = 0;
            let totalFat = 0;
            let totalProtein = 0;
            let remainingCalories = 0;
            let remainingCarbs = 0;
            let remainingFat = 0;
            let remainingProtein = 0;
            data.forEach(item => {
                totalCalories += item.totalCalories || 0;
                totalCarbs += item.totalCarbs || 0;
                totalFat += item.totalFat || 0;
                totalProtein += item.totalProtein || 0;
                remainingCalories += item.totalCalories;
                remainingCarbs += item.totalCarbs;
                remainingFat += item.totalFat;
                remainingProtein += item.totalProtein;
            });
            setTotalCalories(totalCalories);
            setTotalCarbs(totalCarbs);
            setTotalFat(totalFat);
            setTotalProtein(totalProtein);
            setRemainingCalories(targetCalories - remainingCalories);
            setRemainingCarbs(targetCarbs - remainingCarbs);
            setRemainingFat(targetFat - remainingFat);
            setRemainingProtein(targetProtein - remainingProtein);
            setFoodItemsInTable(data);
            setRecordData(data);
            const waterRecordResponse = await axios.post(`https://cors-anywhere.herokuapp.com/${myURL}/GetWaterRecord?userId=${uId}&recordDate=${selectedDate}`, null);
            const arr = waterRecordResponse.data;
            let totalGlassesConsumed = 0;
            arr.forEach(item => {
                totalGlassesConsumed += item.glass;
            });
            setWaterConsumed(totalGlassesConsumed);
            setWaterRecordData(arr);
        } catch (error) {
            console.error("Error fetching record data:", error);
        }
    };
    useEffect(() => {
        fetchRecordData();
    }, []);
    const handleAddFoodItem = async () => {
        try {
            if (!foodData) return;
            const { nutrients } = foodData;
            const { ENERC_KCAL, CHOCDF, FAT, PROCNT } = nutrients;
            const updatedTotalCalories = totalCalories + Math.round(ENERC_KCAL);
            const updatedTotalCarbs = totalCarbs + Math.round(CHOCDF);
            const updatedTotalFat = totalFat + Math.round(FAT);
            const updatedTotalProtein = totalProtein + Math.round(PROCNT);
            const updatedRemainingCalories = remainingCalories - Math.round(ENERC_KCAL);
            const updatedRemainingCarbs = remainingCarbs - Math.round(CHOCDF);
            const updatedRemainingFat = remainingFat - Math.round(FAT);
            const updatedRemainingProtein = remainingProtein - Math.round(PROCNT);
            setTotalCalories(updatedTotalCalories);
            setTotalCarbs(updatedTotalCarbs);
            setTotalFat(updatedTotalFat);
            setTotalProtein(updatedTotalProtein);
            setRemainingCalories(updatedRemainingCalories);
            setRemainingCarbs(updatedRemainingCarbs);
            setRemainingFat(updatedRemainingFat);
            setRemainingProtein(updatedRemainingProtein);
            const newItem = {
                label: foodData.label,
                calories: Math.round(ENERC_KCAL),
                carbs: Math.round(CHOCDF),
                fat: Math.round(FAT),
                protein: Math.round(PROCNT)
            };
            const updatedFoodItems = [...foodItemsInTable, newItem];
            setFoodItemsInTable(updatedFoodItems);
            notify();
            setFoodItem('');
            setSuggestions([]);
            setFoodData(null);
            const requestData = {
                UserId: uId,
                Name: foodData.label,
                TotalCalories: Math.round(ENERC_KCAL),
                TotalCarbs: Math.round(CHOCDF),
                TotalFat: Math.round(FAT),
                TotalProtein: Math.round(PROCNT),
                RemainingCalories: Math.round(ENERC_KCAL),
                RemainingCarbs: Math.round(CHOCDF),
                RemainingFat: Math.round(FAT),
                RemainingProtein: Math.round(PROCNT),
                TargetCalories: targetCalories,
                TargetCarbs: targetCarbs,
                TargetFat: targetFat,
                TargetProtein: targetProtein,
            };
            await axios.post(`https://cors-anywhere.herokuapp.com/${myURL}/CreateUserRecord`, requestData);
        } catch (error) {
            console.error('Error adding food item:', error);
        }
    };
    const handleDeleteFoodItem = async (index) => {
        const deletedItem = foodItemsInTable[index];
        console.log(deletedItem);
        try {
            await axios.post(`https://cors-anywhere.herokuapp.com/${myURL}/DeleteUserRecord?id=${deletedItem.id}`, null);
            console.log("Record deleted from database");
        } catch (error) {
            console.error("Error deleting record from database:", error);
            return;
        }
        const updatedTotalCalories = totalCalories - deletedItem.calories;
        const updatedTotalCarbs = totalCarbs - deletedItem.carbs;
        const updatedTotalFat = totalFat - deletedItem.fat;
        const updatedTotalProtein = totalProtein - deletedItem.protein;
        const parsedRemainingCalories = parseInt(remainingCalories);
        const parsedRemainingCarbs = parseInt(remainingCarbs);
        const parsedRemainingFat = parseInt(remainingFat);
        const parsedRemainingProtein = parseInt(remainingProtein);
        const updatedRemainingCalories = parsedRemainingCalories + deletedItem.calories;
        const updatedRemainingCarbs = parsedRemainingCarbs + deletedItem.carbs;
        const updatedRemainingFat = parsedRemainingFat + deletedItem.fat;
        const updatedRemainingProtein = parsedRemainingProtein + deletedItem.protein;
        const updatedFoodItems = foodItemsInTable.filter((_, idx) => idx !== index);
        setTotalCalories(updatedTotalCalories);
        setTotalCarbs(updatedTotalCarbs);
        setTotalFat(updatedTotalFat);
        setTotalProtein(updatedTotalProtein);
        setRemainingCalories(updatedRemainingCalories);
        setRemainingCarbs(updatedRemainingCarbs);
        setRemainingFat(updatedRemainingFat);
        setRemainingProtein(updatedRemainingProtein);
        setFoodItemsInTable(updatedFoodItems);
        setFoodData(null);
        setFoodItem('');
        setSuggestions([]);
        notNotified();
    };

    return (
        <>
            <section>
                <div>
                    <h1 className="text-4xl font-serif text-center italic font-semibold py-3 px-5 mt-10">Hey {fname} {lname}, Welcome to the Ultimate Guide for your Fitness</h1>
                </div>
                <p className="text-2xl text-justify font-medium px-10 mt-5">According to your height your ideal weight should be {idealWeight.toFixed(2)} kg. If you want to gain weight your daily calorie consumption should be more than {mildGainCalories.toFixed(0)}kcal. Let's take steps together to make you healthy and gain your weight. Here is the data showing calorie consumption for you to gain weight.</p>
                <p className="text-2xl text-justify font-medium px-10 mt-5">BMR: {bmr}kcal <br /> Maintainence Calories: {maintenanceCalories}kcal <br /> Mild Gain Calories: {mildGainCalories.toFixed(0)}kcal <br /> Gain Calories: {gainCalories.toFixed(0)}kcal <br /> Fast Gain Calories: {fastGainCalories.toFixed(0)}kcal</p>
                <div className="flex">
                    <p className="text-2xl text-justify font-medium px-5 mt-6 ml-5">Track Your Records</p>
                    <Link to="../pages/Record" target="_top">
                        <button type="button" className="mt-5 font-semibold text-lg bg-green-500 px-5 py-2 rounded-xl hover:bg-green-400 w-24">Here</button>
                    </Link>
                </div>
                <p className="text-2xl text-justify font-medium px-10 mt-5">Let us maintain a calorie log for you to note your daily calorie consumption.</p>
                <div className="bg-slate-100 mx-32 rounded-xl py-5 px-5 mt-10">
                    <h1 className="text-center font-semibold text-3xl mb-2">Search Through our Foods</h1>
                    <p className="text-center text-lg mb-5">NOTE: These calorie values represent the nutritional content per 100 grams.</p>
                    <div className="text-center">
                        <input
                            type="text"
                            placeholder="Find the best food across the world"
                            value={foodItem}
                            onChange={handleInputChange}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSearch();
                                }
                            }}
                            className="mr-10 rounded-xl border-2 border-gray-400 py-2 px-2 w-96"
                        />
                        <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={handleSearch}>Search</button>
                        <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ml-5" onClick={handleAddFoodItem}>Add</button>
                    </div>
                    {loading && <div>Loading...</div>}
                    {suggestions.length > 0 && (
                        <ul>
                            {suggestions.map((suggestion, index) => (
                                <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}
                    {foodData && (
                        <div>
                            <h2>{foodData.label}</h2>
                            <p>Calories: {Math.round(foodData.nutrients.ENERC_KCAL)} kcal</p>
                            <p>Protein: {Math.round(foodData.nutrients.PROCNT)} g</p>
                            <p>Fat: {Math.round(foodData.nutrients.FAT)} g</p>
                            <p>Carbohydrates: {Math.round(foodData.nutrients.CHOCDF)} g</p>
                        </div>
                    )}
                </div>
                <div className="flex">
                    <div className="flex-1">
                        <table className="mt-10 bg-white shadow-md rounded-xl ml-20 mb-10 text-center text-xl mr-20">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="py-4 px-4"></th>
                                    <th className="py-4 px-4">Food Item</th>
                                    <th className="py-4 px-4">Calories (kcal)</th>
                                    <th className="py-4 px-4">Carbs (g)</th>
                                    <th className="py-4 px-4">Fat (g)</th>
                                    <th className="py-4 px-4">Protein (g)</th>
                                    <th className="py-4 px-4"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    recordData.length > 0 ? (
                                        recordData.map((item, index) => (
                                            <tr key={index} className="border-t border-gray-200">
                                                <td className="py-3 px-4"></td>
                                                <td className="py-3 px-4">{item.name}</td>
                                                <td className="py-3 px-4">{item.totalCalories}</td>
                                                <td className="py-3 px-4">{item.totalCarbs}</td>
                                                <td className="py-3 px-4">{item.totalFat}</td>
                                                <td className="py-3 px-4">{item.totalProtein}</td>
                                                <td className="py-3 px-4">
                                                    <button
                                                        type="button"
                                                        className="text-white bg-red-700 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-1.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ml-5 mt-3"
                                                        onClick={() => handleDeleteFoodItem(index)}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        foodItemsInTable.map((item, index) => (
                                            <tr key={index} className="border-t border-gray-200">
                                                <td className="py-3 px-4"></td>
                                                <td className="py-3 px-4">{item.label}</td>
                                                <td className="py-3 px-4">{item.calories}</td>
                                                <td className="py-3 px-4">{item.carbs}</td>
                                                <td className="py-3 px-4">{item.fat}</td>
                                                <td className="py-3 px-4">{item.protein}</td>
                                                <td className="py-3 px-4">
                                                    <button
                                                        type="button"
                                                        className="text-white bg-red-700 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-1.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ml-5 mt-3"
                                                        onClick={() => handleDeleteFoodItem(index)}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )
                                }
                                <tr className="border-t border-gray-200">
                                    <td className="py-3 px-4 font-semibold text-xl">Total</td>
                                    <td className="py-3 px-4"></td>
                                    <td className="py-3 px-4">{recordData.length > 0 ? totalCalories : foodItemsInTable.reduce((acc, item) => acc + item.calories, 0)}</td>
                                    <td className="py-3 px-4">{recordData.length > 0 ? totalCarbs : foodItemsInTable.reduce((acc, item) => acc + item.carbs, 0)}</td>
                                    <td className="py-3 px-4">{recordData.length > 0 ? totalFat : foodItemsInTable.reduce((acc, item) => acc + item.fat, 0)}</td>
                                    <td className="py-3 px-4">{recordData.length > 0 ? totalProtein : foodItemsInTable.reduce((acc, item) => acc + item.protein, 0)}</td>
                                </tr>
                                <tr className="border-t border-gray-200">
                                    <td className="py-3 px-4 font-semibold text-xl">Remaining</td>
                                    <td className="py-3 px-4"></td>
                                    <td className="py-3 px-4">{recordData.length > 0 ? remainingCalories : targetCalories - foodItemsInTable.reduce((acc, item) => acc + item.calories, 0)}</td>
                                    <td className="py-3 px-4">{recordData.length > 0 ? remainingCarbs : targetCarbs - foodItemsInTable.reduce((acc, item) => acc + item.carbs, 0)}</td>
                                    <td className="py-3 px-4">{recordData.length > 0 ? remainingFat : targetFat - foodItemsInTable.reduce((acc, item) => acc + item.fat, 0)}</td>
                                    <td className="py-3 px-4">{recordData.length > 0 ? remainingProtein : targetProtein - foodItemsInTable.reduce((acc, item) => acc + item.protein, 0)}</td>
                                </tr>
                                <tr className="border-t border-gray-200">
                                    <td className="py-3 px-4 font-semibold text-xl">Target</td>
                                    <td className="py-3 px-4"></td>
                                    <td className="py-3 px-4">{targetCalories}</td>
                                    <td className="py-3 px-4">{targetCarbs}</td>
                                    <td className="py-3 px-4">{targetFat}</td>
                                    <td className="py-3 px-4">{targetProtein}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex-1 water-container mb-10 ml-10">
                        <h2 className="text-3xl mt-10  font-semibold">Water Consumption Goal</h2>
                        <p className="text-xl mt-3">Aim to drink at least 8 cups of water today. </p>
                        <div className="water-total">
                            <p className="text-2xl font-bold">{waterConsumed} cups</p>
                        </div>
                        <div className="quick-add">
                            <p>Quick Add</p>
                            <button onClick={() => addWater(5)} className="bg-green-500 text-white px-3 py-1 rounded-md mr-2">+5 cups</button>
                            <button onClick={() => addWater(3)} className="bg-green-500 text-white px-3 py-1 rounded-md mr-2">+3 cups</button>
                            <button onClick={() => addWater(1)} className="bg-green-500 text-white px-3 py-1 rounded-md">+1 cup</button>
                        </div>
                        <div className="add-custom mt-4">
                            <p>Add Custom</p>
                            <input
                                type="number"
                                placeholder="cups"
                                value={customWater}
                                onChange={(e) => {
                                    const value = parseInt(e.target.value);
                                    setCustomWater(isNaN(value) ? '' : value);
                                }}
                                className="border border-gray-300 rounded-md py-1 px-2 mr-2"
                            />
                            <button onClick={handleCustomWater} className="bg-green-500 text-white px-3 py-1 rounded-md">Add</button>
                        </div>
                        <ToastContainer />
                    </div>
                </div>
            </section>
        </>
    );
};

export default GainPage;