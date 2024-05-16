import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Record = () => {
    const [recordData, setRecordData] = useState(null);
    const [waterRecordData, setWaterRecordData] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [fetchingData, setFetchingData] = useState(false);
    const userData = JSON.parse(localStorage.getItem("userData"));
    const uId = userData.id;
    const myURL = import.meta.env.VITE_BASE_URL;

    const fetchData = async () => {
        try {
            const formattedDate = selectedDate.toISOString().substring(0, 10);
            const recordResponse = await axios.post(`https://cors-anywhere.herokuapp.com/${myURL}/GetUserRecord?userId=${uId}&recordDate=${formattedDate}`, null);
            setRecordData(recordResponse.data);
            const waterRecordResponse = await axios.post(`https://cors-anywhere.herokuapp.com/${myURL}/GetWaterRecord?userId=${uId}&recordDate=${formattedDate}`, null);
            setWaterRecordData(waterRecordResponse.data);
            setFetchingData(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setFetchingData(false);
        }
    };
    const handleDateChange = (date) => {
        setSelectedDate(date);
        setShowDatePicker(false);
    };
    const handleFetchData = () => {
        setFetchingData(true);
        fetchData();
    };

    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8 text-center">User Record Data</h1>
                <div className="mb-10 flex items-center">
                    <p className="mr-4 font-semibold">Select Date:</p>
                    <div>
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            dateFormat="dd/MM/yyyy"
                            className="rounded-md border border-gray-300 px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                            wrapperClassName="w-full"
                            onClickOutside={() => setShowDatePicker(false)}
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                        />
                    </div>
                    <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={handleFetchData}>Fetch Data</button>
                </div>
                {fetchingData && (
                    <p className="text-center text-gray-600">Fetching data...</p>
                )}
                {recordData !== null && waterRecordData !== null && ( // Render data only when both recordData and waterRecordData are not null
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5 mt-10">
                            {waterRecordData.length === 0 ? (
                                <div className="col-span-3">
                                    <p className="text-center text-gray-600">No water record to mention</p>
                                </div>
                            ) : (
                                <>
                                    <div className="col-span-3 border border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 ease-in-out text-center w-96">
                                        <h2 className="text-lg font-semibold mb-2">Water Records</h2>
                                        <p className="text-gray-600 mb-2 text-xl">Total Number of Glasses: <span className="font-semibold text-xl">{waterRecordData.reduce((total, item) => total + item.glass, 0)}</span></p>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                            {recordData.length === 0 ? (
                                <div className="col-span-3">
                                    <p className="text-center text-gray-600">No record to mention</p>
                                </div>
                            ) : (
                                recordData.map(item => {
                                    console.log("item", item);
                                    return (
                                        <div key={item.id} className="border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
                                            <h2 className="text-xl font-semibold mb-4">{item.name}</h2>
                                            <div className="flex justify-between items-center mb-2">
                                                <p className="text-gray-600">Calories:</p>
                                                <p className="font-semibold">{item.totalCalories} kcal</p>
                                            </div>
                                            <div className="flex justify-between items-center mb-2">
                                                <p className="text-gray-600">Carbs:</p>
                                                <p className="font-semibold">{item.totalCarbs} g</p>
                                            </div>
                                            <div className="flex justify-between items-center mb-2">
                                                <p className="text-gray-600">Fat:</p>
                                                <p className="font-semibold">{item.totalFat} g</p>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <p className="text-gray-600">Protein:</p>
                                                <p className="font-semibold">{item.totalProtein} g</p>
                                            </div>
                                        </div>)
                                })
                            )}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Record;