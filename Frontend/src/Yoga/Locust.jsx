import React from "react";
import img from "../images/locust.jpeg";

const Locust = () => {
    return (
        <>
            <div className="bg-gray-300 py-10 px-10">
                <h1 className="text-5xl font-serif text-center">LOCUST-SALABHASANA</h1>
            </div>
            <div className="flex items-center justify-center">
                <img className="rounded-xl mt-10 mb-10 h-60 w-96" src={img}></img>
            </div>
            <div className="bg-slate-100 px-10 py-10 text-justify">
                <h1 className="text-3xl">The Locust: Lying face down with lifted legs.</h1>
                <p className="mt-5 mb-5">Of all the asanas, Salabhasana is the one that works most on developing will power. According to Swami Vishnudevananda, exercising will power makes ones thoughts pure and powerful and is one of the primary goals of the practice of asanas. Unlike the other asanas which are done slowly, we achieve the Locust by making a single powerful muscle contraction, similar to that of a locust jumping. This action simultaneously brings together thought, breath, movement, and prana - vital energy. The physical benefits of this pose is that all the internal organs are massaged, especially the pancreas, liver, and kidneys. It also gives a backward bend to the spine and opens the chest, bringing an increased blood supply to the neck and throat region.</p>
                <h1 className="text-2xl my-3">Objective: Increase will power and strengthen the lumbar.</h1>
                <h1 className="text-xl my-2">Step1: Face Down</h1>
                <p>Lie on your front. Rest your chin on the ground, then move it forward as much as you can, so that your throat lies almost flat. Put your arms by your sides, then push your hands under your body, and make them into fists or clasp them together. Bring your elbows as close together as possible.</p>
                <h1 className="text-xl my-2">Step2: Half Locust</h1>
                <p>Inhale as you lift one leg. Hold this position for at least 10 seconds, then exhale while lowering your leg and repeat the pose with your other leg. Practice it 3 times on each side. Chin position: The further forward you push your chin, the more your spine can stretch and the more you will gain from this asana.</p>
                <h1 className="text-xl my-2">Step3: Full Locust</h1>
                <p>Lie with your chin out, as in the Half Locust, then take 3 deep breaths. On the third, lift both legs off the ground. They may not come up far at first, but with practice you may be able to lift them much higher. Hold for as long as you can, then lower your feet. Repeat twice and then relax. Up and Up: With practice, you will be able to raise your legs higher. Eventually, you may even be able to lift your body vertically.</p>
                <h1 className="text-xl my-2">The Advanced Locust</h1>
                <p>This more difficult pose must be attempted only by experienced students of yoga. The aim, in the advanced asana, is to raise your feet straight up and then lower them over your head. This backward bend compresses your vertebrae while stretching the front of your body to its greatest extent. The strength and flexibility necessary for this pose will eventually develop with regular practice.</p>
            </div>
        </>
    );
}

export default Locust;