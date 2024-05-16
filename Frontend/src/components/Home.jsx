import React from "react";
import myImage from "../images/bg.jpg";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <section className="flex bg-slate-100" id="home">
                <div>
                    <h1 className="font-semibold text-5xl mt-28 mb-8 ml-24">Eat well, live well.</h1>
                    <div>
                        <h3 className="text-4xl font-semibold mb-6 ml-24">Reach your goals with WELLBEING.</h3>
                        <h3 className="text-2xl font-normal ml-24 mr-10">Build healthy habits with the all-in-one food, exercise, and calorie tracker.</h3>
                    </div>
                    <Link to="../forms/SignUp" target="_top">
                        <button type="button" className="ml-40 mt-10 mb-12 font-semibold text-lg bg-blue-500 px-5 py-2 rounded-xl hover:bg-blue-400 w-60">GET STARTED</button>
                    </Link>
                </div>
                <div style={{
                    backgroundImage: `url(${myImage})`, backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '20px',
                    width: "80%",
                    height: '500px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                }} className="bg-no-repeat mr-10 mt-5 mb-10">
                </div>
            </section>
        </>
    );
}

export default Home;