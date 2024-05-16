import React from "react";
import img from "../images/half.jpeg";

const Half = () => {
    return (
        <>
            <div className="bg-gray-300 py-10 px-10">
                <h1 className="text-5xl font-serif text-center">HALF SPINAL TWIST-ARDHA MATSYENDRASANA</h1>
            </div>
            <div className="flex items-center justify-center">
                <img className="rounded-xl mt-10 mb-10 h-60 w-96" src={img}></img>
            </div>
            <div className="bg-slate-100 px-10 py-10 text-justify">
                <h1 className="text-3xl">Half Spinal Twist: A seated half twist.</h1>
                <p className="mt-5 mb-5">After the forward and backward bending of the spine, the Half Spinal Twist provides a lateral stretch which helps to relieve general lower back pain and muscular rheumatism of the back and hips. Each vertebra is rotated in both directions. The Half Spinal Twist has many beneficial effects on the gall bladder, spleen, kidneys, liver, and intestines. The abdominal muscles are massaged and the large intestine in particular is stimulated. This helps to relieve constipation, indigestion, and other digestive issues. On the spiritual level, this pose is also known to help raise kundalini.</p>
                <h1 className="text-2xl my-3">Objective: To maintain sideways mobility in your spine.</h1>
                <h1 className="text-xl my-2">Step1: Legs Bent</h1>
                <p>Sit up on your heels. Drop your buttocks to the floor, to the left of your legs.</p>
                <h1 className="text-xl my-2">Step2: Leg Position</h1>
                <p>Bend your right leg. Cross your right foot over your left leg, and place it on the floor by the outside of your left knee. Keeping your arm straight, put your right hand flat on the floor behind your back. Arms: Lay your right hand on the floor. Raise your left arm straight up.</p>
                <h1 className="text-xl my-2">Step3: The Twist</h1>
                <p>Lower your left arm, bringing it outside your bent knee, then grasp your right ankle. Hold for at least 30 seconds. Repeat, twisting the other way.</p>
            </div>
        </>
    );
}

export default Half;