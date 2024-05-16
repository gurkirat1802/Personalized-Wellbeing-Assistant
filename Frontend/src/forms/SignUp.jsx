import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const myURL = import.meta.env.VITE_BASE_URL;

    const handleSignUp = async (e) => {
        e.preventDefault();

        fetch(`https://cors-anywhere.herokuapp.com/${myURL}/Signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ emailId: email, password: password, phoneNumber: contactNumber }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // console.log(data);
                localStorage.setItem("userID", data.id);
                localStorage.setItem("userName", data.username);
                localStorage.setItem("passWord", data.password);
                // console.log(data.id);
                navigate("/pages/SignUpPage");
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
    }

    return (
        <>
            <div>
                <h1 className="text-4xl text-center py-10">Create your free account here</h1>
                {error && <p>{error}</p>}
                <form className="py-8 bg-slate-200 ml-72 text-center mr-72 h-80 rounded-xl shadow-2xl px-10">
                    <label className="">Your Email: </label>
                    <input type="text" placeholder="Enter your email" className="border-2 border-gray-200 py-2 px-2 rounded-lg mb-6 w-72 ml-16" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                    <br />
                    <label className="">Your Password: </label>
                    <input type="password" placeholder="Enter your password" className="border-2 py-2 px-2 rounded-lg mb-6 w-72 ml-10" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                    <br />
                    <label className="">Contact Number: </label>
                    <input type="text" placeholder="Enter your phone number" className="border-2 py-2 px-2 rounded-lg mb-6 w-72 ml-6" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required></input>
                    <br />
                    <button type="submit" className="bg-blue-400 px-5 py-2 rounded-lg font-medium hover:bg-blue-300 w-72 mt-5" onClick={handleSignUp}>Create an account</button>
                </form>
            </div>
        </>
    );
}
export default SignUp;