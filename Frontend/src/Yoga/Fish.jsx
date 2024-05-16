import React from "react";
import img from "../images/fish.jpeg";

const Fish = () => {
    return (
        <>
            <div className="bg-gray-300 py-10 px-10">
                <h1 className="text-5xl font-serif text-center">FISH POSE-MATSYASANA</h1>
            </div>
            <div className="flex items-center justify-center">
                <img className="rounded-xl mt-10 mb-10 h-60 w-96" src={img}></img>
            </div>
            <div className="bg-slate-100 px-10 py-10 text-justify">
                <h1 className="text-3xl">Fish Pose: Lying on your back and arching your chest.</h1>
                <p className="mt-5 mb-5">The name of this posture, the Fish, derives from the fact that if we adopt the position in water, we float quite easily. On the physical level it is very effective in correcting any tendency to round the shoulders as well as helping to tone the nerves of the neck and the back area. On the mental level, with chest stretched wide open, this āsana does wonders for opening our hearts to the world. After we practice Matsyasana, we find that we experience a much deeper relaxation in the resting position of śavāsana.</p>
                <h1 className="text-2xl my-3">Objective: Give a backward stretch to the cervical and thoracic regions of the spine.</h1>
                <h1 className="text-2xl">Precaution:</h1>
                <p className="my-2">
                • If the extension of the neck causes any discomfort or dizziness, it is best not to practice the posture - or practice it for only a few breaths.
                </p>
                <h1 className="text-xl my-2">Step1: Corpse Pose</h1>
                <p>Assume the Corpse Pose and, when you are ready, begin to come into the fish. Stay flat on your back, and bring your feet together. With your arms straight by your sides, lay your palms on the floor, then tuck your hands in underneath your buttocks. Starting Pose: Prepare yourself for this asana by relaxing in savasana for as long as you need.</p>
                <h1 className="text-xl my-2">Step2: Chest Out & Head Back</h1>
                <p>Having arched your spine, tilt your head so that your crown rests on the ground. Hold for 30 seconds. To come out of the Fish, slide your head back and then lower your chest. To finish, relax by lying in savasana. Chest Lift: Press your elbows down on the floor, inhale, and arch your chest upward as far as you can.</p>
                <h1 className="my-5 text-xl">Fish Variations</h1>
                <p>
                    Try this variation if you are flexible enough: In the Easy Pose, clasp your toes. Lie back, arch up, and rest your buttocks on your heels. Lay the top of your head on the floor.
                    <br />
                    • Knees Bent - Sit cross-legged, then put your arms down behind your knees and catch hold of your toes.
                    <br />
                    • Fish in Lotus  This pose is an advanced variation on the ordinary Fish. It is similar to the Easy Pose variation shown above, except that it begins with the Lotus. The Fish in Lotus pose should not be attempted by beginners, or even by more experienced yoga students, until the full Lotus position can be held comfortably for a long period of time.
                </p>
            </div>
        </>
    );
}

export default Fish;