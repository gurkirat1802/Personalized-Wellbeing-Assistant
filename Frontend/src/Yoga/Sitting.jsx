import React from "react";
import img from "../images/sittingfb.jpeg";

const Sitting = () => {
    return (
        <>
            <div className="bg-gray-300 py-10 px-10">
                <h1 className="text-5xl font-serif text-center">SITTING FORWAORD BENDx-PASCIMOTHANASANA</h1>
            </div>
            <div className="flex items-center justify-center">
                <img className="rounded-xl mt-10 mb-10 h-60 w-96" src={img}></img>
            </div>
            <div className="bg-slate-100 px-10 py-10 text-justify">
                <h1 className="text-3xl">Sitting Forward Bend: Stretching your spine forward.</h1>
                <p className="mt-5 mb-5">The Forward Bend looks, and is, simple - provided we relax into the position, rather than forcing ourselves into it. In a world where exertion is often rewarded, this pose is one of the most powerful and important asanas in teaching us the benefits of working with life as it is. This pose can be very meditative. It encourages conscious letting go by allowing gravity to pull the spine into the pose. As an added bonus, regular practice of Pascimothanasana also helps to counter the typical postural problems developed working a desk job by keeping the spine supple, the joints mobile, the internal organs toned, and the nervous system invigorated.</p>
                <h1 className="text-2xl my-3">Starting</h1>
                <p className="my-2">
                    Inhale, bringing both arms up by your ears. Stretch your spine up. Lean forward from your hips, and try to catch hold of your toes. Keep your spine and legs straight. Exhale into the pose; feel your body stretch. Hold for 30 seconds, then inhale and stretch upward again. Repeat twice. Clasp Position: If you are not able to reach your toes, clasp your ankles, shins, or knees, to hold the position comfortably.
                </p>
                <h1 className="text-2xl my-3">Inclined Plane</h1>
                <p>The Inclined Plane is the counterpose to the Forward Bend. It complements the forward stretch that your body is given in the previous pose, and increase the strength and flexibility of your arms. In this asana your hips are pushed upward, and your body is held straight and balanced on your hands and feet. From the starting position, sitting with the hands flat on the floor behind the hips, with the fingers pointing back, let your head drop back. Next, inhale as you raise your hips. Hold the pose for about 10 seconds. Lower your body, then relax your hands by shaking your wrists.</p>
            </div>
        </>
    );
}

export default Sitting;