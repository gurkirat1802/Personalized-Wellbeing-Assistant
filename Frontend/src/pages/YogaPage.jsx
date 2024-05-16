import React from "react";
import Asanas from "../components/Asanas";
import headstand from "../images/headstand.jpeg";
import shoulder from "../images/shoulderstand.jpeg";
import plough from "../images/plough.jpeg";
import fish from "../images/fish.jpeg";
import sit from "../images/sittingfb.jpeg";
import cobra from "../images/cobra.jpeg";
import locust from "../images/locust.jpeg";
import bow from "../images/bow.jpeg";
import half from "../images/half.jpeg";
import crow from "../images/crow.jpeg";
import stand from "../images/standing.jpeg";
import triangle from "../images/triangle.jpeg";

const YogaPage = () => {
    return(
        <>
            <div className="bg-gray-300 py-10 px-10">
                <h1 className="text-5xl font-serif text-center">Make your life easier with these Yoga Asanas.</h1>
            </div>
            <div className="bg-gray-100 py-10">
                <div className="flex justify-evenly my-10">
                    <Asanas
                        title="HEADSTAND-SIRSASANA"
                        desc="Headstand: An asana in which you balance on your elbows, arms, and head. “King of the Asanas”."
                        img={headstand}
                        link="./Yoga/Headstand"
                    />
                    <Asanas
                        title="SHOULDERSTAND-SARVANGASANA"
                        desc="Shoulderstand: An inverted pose, with your body resting on your shoulders. Strengthens the entire body."
                        img={shoulder}
                        link="./Yoga/Shoulder"
                    />
                    <Asanas
                        title="PLOUGH-HALASANA"
                        desc="Plough: Forward bend, while lying on your back with feet and hands on the floor."
                        img={plough}
                        link="./Yoga/Plough"
                    />
                </div>
                <div className="flex justify-evenly my-10">
                    <Asanas
                        title="FISH POSE-MATSYASANA"
                        desc="Fish Pose: Lying on your back and arching your chest."
                        img={fish}
                        link="./Yoga/Fish"
                    />
                    <Asanas
                        title="Sitting Forward Bend-PASCIMOTHANASANA"
                        desc="Sitting Forward Bend: Stretching your spine forward."
                        img={sit}
                        link="./Yoga/Sitting"
                    />
                    <Asanas
                        title="COBRA-BHUJANGASANA"
                        desc="Cobra: Coiling your upper body up and back."
                        img={cobra}
                        link="./Yoga/Cobra"
                    />
                </div>
                <div className="flex justify-evenly my-10">
                    <Asanas
                        title="THE LOCUST-SALABHASANA"
                        desc="The Locust: Lying face down with lifted legs."
                        img={locust}
                        link="./Yoga/Locust"
                    />
                    <Asanas
                        title="BOW-DHANURASANA"
                        desc="Bow: Balancing on your abdomen, in the shape of a bow."
                        img={bow}
                        link="./Yoga/Bow"
                    />
                    <Asanas
                        title="Half Spinal Twist-ARDHA MATSYENDRASANA"
                        desc="Half Spinal Twist: A seated half twist."
                        img={half}
                        link="./Yoga/Half"
                    />
                </div>
                <div className="flex justify-evenly my-10">
                    <Asanas
                        title="CROW-KAKASANA"
                        desc="Crow: Balancing in a squatting position."
                        img={crow}
                        link="./Yoga/Crow"
                    />
                    <Asanas
                        title="STANDING FORWARD BEND-PADA HASTASANA"
                        desc="Standing Forward Bend: Bending forward in a standing position."
                        img={stand}
                        link="./Yoga/Standing"
                    />
                    <Asanas
                        title="THE TRIANGLE-TRIKONASANA"
                        desc="The Triangle: A lateral bend resembling a triangle."
                        img={triangle}
                        link="./Yoga/Triangle"
                    />
                </div>
            </div>
        </>
    )
}

export default YogaPage;