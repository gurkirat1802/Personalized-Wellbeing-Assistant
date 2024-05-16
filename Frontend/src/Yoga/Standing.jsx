import React from "react";
import img from "../images/standing.jpeg";

const Standing = () => {
    return (
        <>
            <div className="bg-gray-300 py-10 px-10">
                <h1 className="text-5xl font-serif text-center">STANDING FORWARD BEND-PADA HASTASANA</h1>
            </div>
            <div className="flex items-center justify-center">
                <img className="rounded-xl mt-10 mb-10 h-60 w-96" src={img}></img>
            </div>
            <div className="bg-slate-100 px-10 py-10 text-justify">
                <h1 className="text-3xl">Standing Forward Bend: Bending forward in a standing position.</h1>
                <p className="mt-5 mb-5">Pada Hastasana, whose Sanskrit name literally means hands to foot pose, is the first of the standing poses. If it is remembered that “we are as young as our spine is flexible”, the Standing Forward Bend (as it is often known) will be seen as a veritable elixir of youth. This pose quickly lengthens the muscles and ligaments of the entire posterior side of the body - from our heels to the middle of our back. The Standing Forward Bend stretches our spine and increase the blood supply to our brain.</p>
                <h1 className="text-2xl my-3">Objective: To make your spine and legs supple and strong.</h1>
                <h1 className="text-2xl my-3">Precaution:</h1>
                <p>If the backs of your knees are naturally overextended, focus on keeping your knees straight without pushing them backwards.</p>
                <h1 className="text-xl my-2">Forward & Down</h1>
                <p>This pose is similar to the Sitting Forward Bend, but here gravity helps to stretch your body down. Stand with your feet together. Inhale, while lifting your arms straight above your head. Exhale as you bend forward and down. Breathe normally while you are in the pose. Hold for at least 30 seconds: as you gain experience, increase the time to several minutes.</p>
            </div>
        </>
    );
}

export default Standing;