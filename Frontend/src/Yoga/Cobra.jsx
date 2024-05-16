import React from "react";
import img from "../images/cobra.jpeg";

const Cobra = () => {
    return (
        <>
            <div className="bg-gray-300 py-10 px-10">
                <h1 className="text-5xl font-serif text-center">COBRA-BHUJANGASANA</h1>
            </div>
            <div className="flex items-center justify-center">
                <img className="rounded-xl mt-10 mb-10 h-60 w-96" src={img}></img>
            </div>
            <div className="bg-slate-100 px-10 py-10 text-justify">
                <h1 className="text-3xl">Cobra: Coiling your upper body up and back.</h1>
                <p className="mt-5 mb-5">Bhujangasana, or the Cobra, is practiced as the first in the series of backward-bending exercises. When this asana is fully done, it gives the appearance of a hooded cobra. “Bhujang” means cobra in Sanskrit. We practice the asana in stages, visualizing the smooth, supple movement of a snake as we stretch the spine up and backward, vertebra by vertebra. Major benefits of this asana is that it works, massages, and tones the back muscles, particularly in the lumbar region. The arching of the spine also increases flexibility, rejuvenates spinal nerves, and provides a rich blood supply.</p>
                <h1 className="text-2xl my-3">Objective: Provide the spine a powerful backward stretch.</h1>
                <h1 className="text-2xl my-3">Step1: Face Down</h1>
                <p className="my-2">
                    Lie on your front. When you are fully relaxed, begin to come into the Cobra. Still lying on your front, place your hands flat on the floor so that they are directly underneath your shoulders. Next lift your head up a little and bend your neck, then lower your forehead to the ground.
                </p>
                <h1 className="text-2xl my-3">Step2: Roll Up</h1>
                <p>Inhale, slowly rolling up and back. First bring your forehead up so that your nose rests on the floor, then continue rolling up and back. Move slowly, so that you feel each vertebra arching back.</p>
                <h1 className="text-2xl my-3">Step3: Hold</h1>
                <p>Hold the pose for 10 to 60 seconds. Slowly roll down, keeping your head back until last. As you do the Cobra, make sure you are not overextending the lower back. No pain should be felt in the lower back. You may want to repeat it two more times.</p>
                <h1 className="text-2xl my-3">The Advanced Cobra - Variations</h1>
                <p>Once you are proficient in the above steps, you can attempt some variations.
                    <br />
                    • In the Cobra, turn your head to look over your right shoulder, trying to see your left heel. Hold for about 10 seconds, then return your head to the center and repeat while looking over the other shoulder.
                    <br />
                    • From the starting position, lift your hands off the ground and roll your body up using only your back muscles.
                    <br />
                    • Always return to a resting position on your abdomen after these poses.
                    <br />
                    • With practice you may be able to attempt the “King Cobra” variation in which your feet touch your head.
                </p>
            </div>
        </>
    );
}

export default Cobra;