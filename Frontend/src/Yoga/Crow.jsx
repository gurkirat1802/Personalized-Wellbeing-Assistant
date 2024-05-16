import React from "react";
import img from "../images/crow.jpeg";

const Crow = () => {
    return (
        <>
            <div className="bg-gray-300 py-10 px-10">
                <h1 className="text-5xl font-serif text-center">CROW-KAKASANA</h1>
            </div>
            <div className="flex items-center justify-center">
                <img className="rounded-xl mt-10 mb-10 h-60 w-96" src={img}></img>
            </div>
            <div className="bg-slate-100 px-10 py-10 text-justify">
                <h1 className="text-3xl">Crow: Balancing in a squatting position.</h1>
                <p className="mt-5 mb-5">The Crow is one of the most beneficial of balancing poses. Although all asanas are designed as mental as well as physical exercises to prepare the mind and body for meditation, the balancing poses are what gives the most noticeable improvement. Besides increasing physical and mental balance, the Crow develops mental tranquility and also strengthens our arms, wrists, and shoulders. The muscles of fingers, wrists, and forearms are also stretched. Kakasana helps to increase the powers of concentration and remove lethargy.</p>
                <h1 className="text-2xl my-3">Objective: Promote physical and mental balance.</h1>
                <h1 className="text-xl my-2">Step1: Squat to Start</h1>
                <p>To prepare yourself for the Crow, squat with your feet and knees wide apart. Position your arms between your knees, with your hands directly under your shoulders, then put your hands flat on the floor in front of you. Stretch your fingers wide and turn your hands inward slightly.</p>
                <h1 className="text-xl my-2">Step2: Knees to Arms</h1>
                <p>Bend your elbows, and turn them outward. Rest your knees against your upper arms. Next, rock forward until you feel your weight on your wrists. Stay in this position if you are unable to proceed further. This exercise is still useful even if you stop at this point, as your wrists support your weight and your forearm muscles are being stretched.</p>
                <h1 className="text-xl my-2">Step3: Raise Your Feet</h1>
                <p>Slowly raise each foot, then balance on your hands for at least 10 seconds. Aim to increase your time in the pose to 30 seconds; with practice you will be able to hold the position for up to a minute. To come out, lower your feet to the ground, sit up, and shake out your wrists. If you are strong enough, repeat the Crow twice.</p>
                <h1 className="text-xl my-2">Protection - Fear of Falling</h1>
                <p>If you have a fear of falling in the Crow, consider putting a cushion in front of you.</p>
            </div>
        </>
    );
}

export default Crow;