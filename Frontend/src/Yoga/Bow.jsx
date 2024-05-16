import React from "react";
import img from "../images/bow.jpeg";

const Bow = () => {
    return (
        <>
            <div className="bg-gray-300 py-10 px-10">
                <h1 className="text-5xl font-serif text-center">BOW-DHANURASANA</h1>
            </div>
            <div className="flex items-center justify-center">
                <img className="rounded-xl mt-10 mb-10 h-60 w-96" src={img}></img>
            </div>
            <div className="bg-slate-100 px-10 py-10 text-justify">
                <h1 className="text-3xl">Bow: Balancing on your abdomen, in the shape of a bow.</h1>
                <p className="mt-5 mb-5">The Bow works all parts of your back simultaneously, increasing suppleness in the spine and hips. In this asana, our head, chest, and legs are lifted, while our body rests on our abdomen. The pose is so named because as we hold it, our body is bent back like a bow and our arms are held straight and taut like a bowstring. Dhanurasana combines and enhances the benefits of both the Cobra and the Locust. The whole body rests on the abdomen, giving a good massage to the abdominal region, especially the digestive organs. Swing, rock, and rejoice. Mentally repeat Om, Om, Om.</p>
                <h1 className="text-2xl my-3">Objective: Give a full backward bend to the entire spine.</h1>
                <h1 className="text-xl my-2">Step1: Catch Hold</h1>
                <p>To begin, lie on your front with your forehead on the ground. Now bend your knees and catch hold of your ankles. Make sure that you do grasp your ankles rather than the top of your feet or your toes. Keep your feet relaxed.</p>
                <h1 className="text-xl my-2">Step2: Lift Up</h1>
                <p>Inhale, raising your head, chest, and legs. Straighten your knees. Hold for 10 seconds, aiming to increase to 30. Breathe as you hold the pose. Exhale, and lower your body. Repeat 3 times.</p>
                <h1 className="text-xl my-2">Rocking Bow</h1>
                <p>For this variation, come into the Bow, arching as high as you can. Keep your head back and gently rock, using your breath to propel your body. Exhale as you rock forward, and inhale as you rock back. Do not forget to relax in the Corpse Pose on your front after you have completed this movement. Grip: Hold your ankles firmly as you rock.</p>
            </div>
        </>
    );
}

export default Bow;