import React from "react";
import img from "../images/triangle.jpeg";

const Triangle = () => {
    return (
        <>
            <div className="bg-gray-300 py-10 px-10">
                <h1 className="text-5xl font-serif text-center">TRIANGLE-TRIKONASANA</h1>
            </div>
            <div className="flex items-center justify-center">
                <img className="rounded-xl mt-10 mb-10 h-60 w-96" src={img}></img>
            </div>
            <div className="bg-slate-100 px-10 py-10 text-justify">
                <h1 className="text-3xl">The Triangle: A lateral bend resembling a triangle.</h1>
                <p className="mt-5 mb-5">Since this asana gives the appearance of a triangle, it bears the name Trikonasana. The Triangle is a unique asana. It provides very good lateral movement to the spine and stretches and strengthens several muscles on the side of the body at the same time. It also helps with balance. It augments the movement of the Half Spinal Twist and is the last of the twelve basic asanas in the cycle. With the completion of this pose, we have now stretched the spine in every direction: front-to-back, side-to-side, and twisting to both sides.</p>
                <h1 className="text-2xl my-3">Objective: A lateral stretch for the spine on both sides.</h1>
                <h1 className="text-2xl my-3">Initial Pose</h1>
                <p>Stand up straight, and place your feet slightly more than shoulder width apart.</p>
                <h1 className="text-xl my-2">To the Side</h1>
                <p>The Triangle is a lateral stretch for your trunk muscles and spine, and makes your hips, legs, and shoulders more flexible. Stretch your right arm up, then bend to your left, sliding your left hand down your thigh. Do not twist your body. Hold for 30 seconds, working up to two minutes with practice. Inhale as you straighten up again. Repeat the pose on the other side.</p>
                <h1 className="text-xl my-2">Body Line</h1>
                <p>Your body forms a straight line, parallel to the floor, from your waist to your fingertips.</p>
            </div>
        </>
    );
}

export default Triangle;