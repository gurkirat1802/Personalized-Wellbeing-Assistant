import React from "react";
import img from "../images/plough.jpeg";

const Plough = () => {
    return (
        <>
            <div className="bg-gray-300 py-10 px-10">
                <h1 className="text-5xl font-serif text-center">PLOUGH-HALASANA</h1>
            </div>
            <div className="flex items-center justify-center">
                <img className="rounded-xl mt-10 mb-10 h-60 w-96" src={img}></img>
            </div>
            <div className="bg-slate-100 px-10 py-10 text-justify">
                <h1 className="text-3xl">Plough: Forward bend, while lying on your back with feet and hands on the floor.</h1>
                <p className="mt-5 mb-5">Halasana, the sanskrit name for the Plough, helps to keep the whole spine youthful. It stretches the back of the body completely which invigorates the entire spine. It also loosens tight hamstrings. It is said that he/she who practices Halasana is very nimble, agile, and full of energy. Develop a consistent practice and see for yourself.</p>
                <h1 className="text-2xl my-3">Objective: To ease tension and improve spinal flexibility.</h1>
                <h1 className="text-2xl">Precaution:</h1>
                <p className="my-2">
                    • If you suffer from kyphosis (exaggerated forward bend of the upper back), be very gentle and easy in this posture.
                    <br />
                    • Have asthma? You may experience tightness in the chest if you hold Halasana for long. Hold it for a short time and then immediately come into the Fish.
                </p>
                <h1 className="text-xl my-2">Step1: Legs Over</h1>
                <p>In the Plough, your body is bent forward; this stretches your entire spine, particularly your cervical vertebrae and shoulders. Come up into a Shoulderstand, and inhale deeply. Exhale while lowering your feet to the floor behind your head.</p>
                <h1 className="text-xl my-2">Step2: Legs Down</h1>
                <p>Rest your toes on the floor, then lay your arms down flat. Hold for 30 seconds at first, but aim to build up to 2 minutes. If you cannot lower your feet all the way, keep your hands on your back for support. Your feet may not reach the floor to begin with but as your spine becomes more supple with practice, the weight of your legs will gradually pull them down. To come out, lift your feet off the floor, and slowly roll down. Relax in the Corpse.</p>
                <h1 className="my-5 text-xl">Plough Variation</h1>
                <p>
                    You may try this variation if you are supple enough. Once in the Plough, lower your knees to the floor by your ears. Hook your arms over your legs. To come out, straighten your knees, then roll down as described above.
                </p>
            </div>
        </>
    );
}

export default Plough;