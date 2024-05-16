import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
    const userId = localStorage.getItem("userID");
    const username = localStorage.getItem("userName");
    const pd = localStorage.getItem("passWord");
    // console.log(userId);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [goal, setGoal] = useState('');
    const [level, setLevel] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const myURL = import.meta.env.VITE_BASE_URL;
    const handleGoalChange = (event) => {
        setGoal(event.target.value);
    };
    const handleLevelChange = (event) => {
        setLevel(event.target.value);
    };
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }
    const handleInfoChange = async (e) => {
        e.preventDefault();

        fetch(`https://cors-anywhere.herokuapp.com/${myURL}/AddContactDetails`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Id: userId, userName: username, password: pd, firstName: firstName, lastName: lastName, emailId: email, phoneNumber: phoneNumber, age: age, gender: gender, height: height, weight: weight, goal: goal, exerciseLevel: level, category: category }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                navigate("/forms/Login");
                // return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
                setError('There was a problem with your fetch operation');
            });
    }
    return (
        <>
            <div className="bg-slate-100 py-5">
                <div className="text-4xl text-justify px-10 py-2">
                    <h1>Hey, please provide us with your basic details and your fitness goal to achieve.</h1>
                </div>
                {error && <p>{error}</p>}
                <div className="mt-10 px-10 py-3">
                    <form>
                        <label className="text-xl">What is your first name?</label>
                        <input type="text" placeholder="John" className="border-2 border-gray-400 py-1 px-2 rounded-lg w-72 mb-5 ml-16" value={firstName} onChange={(e) => setFirstName(e.target.value)} required></input>
                        <br />
                        <label className="text-xl">What is your Last name?</label>
                        <input type="text" placeholder="Peter" className="border-2 border-gray-400 py-1 px-2 rounded-lg w-72 mb-5 ml-16" value={lastName} onChange={(e) => setLastName(e.target.value)} required></input>
                        <br />
                        <label className="text-xl">What is your Email?</label>
                        <input type="text" placeholder="xyz@gmail.com" className="border-2 border-gray-400 py-1 px-2 rounded-lg w-72 mb-5 ml-28" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                        <br />
                        <label className="text-xl">What is your Phone Number?</label>
                        <input type="text" placeholder="8975145517" className="border-2 border-gray-400 py-1 px-2 rounded-lg w-72 mb-5 ml-6" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required></input>
                        <br />
                        <label className="text-xl">What is your age?</label>
                        <input type="text" placeholder="21" className="border-2 border-gray-400 py-1 px-2 rounded-lg w-72 mb-5 ml-32" value={age} onChange={(e) => setAge(e.target.value)} required></input>
                        <br />
                        <label className="text-xl">What is your gender?</label>
                        <input type="text" placeholder="male" className="border-2 border-gray-400 py-1 px-2 rounded-lg w-72 mb-5 ml-24" value={gender} onChange={(e) => setGender(e.target.value)} required></input>
                        <br />
                        <label className="text-xl">What is your height?</label>
                        <input type="text" placeholder="in cm" className="border-2 border-gray-400 py-1 px-2 rounded-lg w-72 mb-5 ml-24" value={height} onChange={(e) => setHeight(e.target.value)} required></input>
                        <br />
                        <label className="text-xl">What is your weight?</label>
                        <input type="text" placeholder="in kg" className="border-2 border-gray-400 py-1 px-2 rounded-lg w-72 mb-5 ml-24" value={weight} onChange={(e) => setWeight(e.target.value)} required></input>
                        <br />
                        <label className="text-xl">What is your goal?</label>
                        <br />
                        <input type="radio" className="mb-5 mt-5 cursor-pointer" id="loseWeight" name="goals" value="loseWeight" checked={goal === "loseWeight"} onChange={handleGoalChange}></input>
                        <label className="ml-3 text-lg mr-32">Lose Weight</label>
                        <input type="radio" className="mb-5 cursor-pointer" id="maintainWeight" name="goals" value="maintainWeight" checked={goal === "maintainWeight"} onChange={handleGoalChange}></input>
                        <label className="ml-3 text-lg mr-32">Maintain Weight</label>
                        <input type="radio" className="mb-5 cursor-pointer" id="gainWeight" name="goals" value="gainWeight" checked={goal === "gainWeight"} onChange={handleGoalChange}></input>
                        <label className="ml-3 text-lg">Gain Weight</label>
                        <br />
                        <label className="text-xl">What is your exercise level?</label>
                        <br />
                        <input type="radio" className="mb-5 mt-5 cursor-pointer" id="notActive" name="level" value="notActive" checked={level === "notActive"} onChange={handleLevelChange}></input>
                        <label className="ml-3 text-lg mr-32">Not Active</label>
                        <input type="radio" className="mb-5 cursor-pointer" id="active" name="level" value="active" checked={level === "active"} onChange={handleLevelChange}></input>
                        <label className="ml-3 text-lg mr-32">Active</label>
                        <input type="radio" className="mb-5 cursor-pointer" id="highlyActive" name="level" value="highlyActive" checked={level === "highlyActive"} onChange={handleLevelChange}></input>
                        <label className="ml-3 text-lg">Highly Active</label>
                        <br />
                        <label className="text-xl">Are you vegeterian or non-vegeterian?</label>
                        <br />
                        <input type="radio" className="mb-5 mt-5 cursor-pointer" id="veg" name="category" value="veg" checked={category === "veg"} onChange={handleCategoryChange}></input>
                        <label className="ml-3 text-lg mr-32">Vegeterian</label>
                        <input type="radio" className="mb-5 cursor-pointer" id="nonVeg" name="category" value="nonVeg" checked={category === "nonVeg"} onChange={handleCategoryChange}></input>
                        <label className="ml-3 text-lg">Non-Vegeterian</label>
                    </form>
                </div>
                <div className="flex justify-center items-center mb-10">
                    <button type="button" className="bg-blue-400 px-4 py-2 text-xl rounded-xl mt-5 w-48 hover:bg-blue-300" onClick={handleInfoChange}>Submit</button>
                </div>
            </div>
        </>
    );
}

export default SignUpPage;