import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const myURL = import.meta.env.VITE_BASE_URL;
    const handleLogin = async (e) => {
        e.preventDefault();
        fetch(`https://cors-anywhere.herokuapp.com/${myURL}/Signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ emailId: email, password: password}),
        })
            .then(response => {
                if (!response.ok) {
                    alert('Invalid username or password');
                }
                return response.json();
            })
            .then(data => {
                localStorage.setItem("userData", JSON.stringify(data));
                localStorage.setItem("userID", data.id);
                console.log(data);
                if(data.goal === "loseWeight"){
                    navigate("/pages/LosePage");
                }
                else if(data.goal === "maintainWeight"){
                    navigate("/pages/MaintainPage");
                }
                else if(data.goal === "gainWeight"){
                    navigate("/pages/GainPage");
                }
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
    }
    return (
        <>
            <div>
                <h1 className="text-4xl text-center py-10">Login to your account</h1>
                {error && <p>{error}</p>}
                <form className="text-center py-20 bg-slate-200 ml-96 mr-96 h-96 rounded-xl shadow-2xl" onSubmit={handleLogin}>
                    <input type="text" placeholder="Email or username" className="border-2 border-gray-200 py-2 px-2 rounded-lg mb-8 w-72 text-center" onChange={(e) => setUsername(e.target.value)} required></input>
                    <br />
                    <input type="password" placeholder="Password" className="border-2 py-2 px-2 rounded-lg mb-5 w-72 text-center" onChange={(e) => setPassword(e.target.value)} required></input>
                    <br />
                    <a href="" className="block mb-10 underline -ml-40">Forgot Password?</a>
                    <button type="submit" className="bg-blue-400 px-5 py-2 rounded-lg font-medium hover:bg-blue-300 w-72">Log In</button>
                </form>
            </div>
        </>
    );
}

export default Login;