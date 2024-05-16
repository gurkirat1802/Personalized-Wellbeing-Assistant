import React from "react";
import img from "../images/shoulderstand.jpeg";

const Shoulder = () => {
    return (
        <>
            <div className="bg-gray-300 py-10 px-10">
                <h1 className="text-5xl font-serif text-center">SHOULDERSTAND-SARVANGASANA</h1>
            </div>
            <div className="flex items-center justify-center">
                <img className="rounded-xl mt-10 mb-10 h-60 w-96" src={img}></img>
            </div>
            <div className="bg-slate-100 px-10 py-10 text-justify">
                <h1 className="text-3xl">Shoulderstand: An inverted pose, with your body resting on your shoulders.</h1>
                <p className="mt-5 mb-5">Sarvangasana, the Sanskrit name for the Shoulderstand, comes from the word “sarvanga”, meaning all parts. This asana strengthens the entire body; it gives many of the benefits of the Headstand, but here the circulation is directed to the thyroid gland instead of the head. The thyroid is an important gland of the endocrine system and this exercise gives it a rich supply of blood, improving and balancing the metabolism of literally every cell in the body. Other benefits of this posture includes stimulating cheerfulness, promoting clear thinking, and helping to cure depression.</p>
                <h1 className="text-2xl my-3">Objective: To stretch your cervical and thoracic regions.</h1>
                <h1 className="text-2xl">Contraindications</h1>
                <p className="my-2">It is best not to practice Shoulderstand if you:
                    <br />
                    •Have neck problems.
                    <br />
                    •Have high blood pressure, do not hold the pose for more than 30 seconds.
                    <br />
                    •Are menstruating, consider holding this posture for 15-30 seconds or skip it altogether.
                </p>
                <h1 className="text-xl my-2">Step1: Legs Up</h1>
                <p>Before beginning the Shoulderstand, make sure that there is enough room behind you. You must be able to stretch your arms out behind your head and have at least a foot between your fingertips and any obstructions. Lie flat on your back, with your feet together. Inhale while bringing your legs up to a right angle.</p>
                <h1 className="text-xl my-2">Step2: Body Up</h1>
                <p>Tuck your hands under your buttocks, with your fingers pointing toward your spine. Then, as you exhale, gently raise your body by letting your hands walk down your back and push you into position.</p>
                <h1 className="text-xl my-2">Step3: In Balance</h1>
                <p>Continue to move your hands up your back until you rest on your shoulders. Breathe normally, and keep your legs straight. Hold for 30 seconds; as the pose becomes easier, increase the time to 3 minutes. To come down, drop your feet halfway to the floor behind your head. Put your hands on the floor. Unroll your body vertebra by vertebra to the floor. Hand position: Put your hands on the small of your back, with your fingers toward your spine.</p>
                <h1 className="my-5 text-xl">Variation</h1>
                <p>
                    Inhale with your hands on your back. Exhale and bring one foot to the floor behind your head. Inhale. Raise your leg. Swap sides.
                </p>
            </div>
        </>
    );
}

export default Shoulder;