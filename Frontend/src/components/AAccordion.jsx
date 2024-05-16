import React from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform absolute right-3 transform -translate-y-1/2`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

const AAccordion = () => {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <div className="text-5xl mt-10 font-bold italic text-center text-black py-4 rounded-lg mb-5">
                FAQs
            </div>
            <div className="max-w-3xl mx-auto rounded-lg p-10w space-y-4">
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                    <AccordionHeader className="bg-gray-100 px-6 py-4 rounded-md cursor-pointer text-black text-lg" onClick={() => handleOpen(1)}>Is Wellbeing a free calorie tracker platform?</AccordionHeader>
                    <AccordionBody className="px-4 py-2 text-md">
                        Yes! If you're looking for a free calorie counter, you're in the right place. Simply sign up for your free account here and start tracking your food. The Wellbeing does a lot more than track calories in foods. You can also track macros, vitamins, and other micronutrients and see how everything you eat supports your goals.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                    <AccordionHeader className="bg-gray-100 px-6 py-4 rounded-md cursor-pointer text-black text-lg" onClick={() => handleOpen(2)}>How to track calories using a platform like Wellbeing?</AccordionHeader>
                    <AccordionBody className="px-4 py-2 text-md">
                        If you want to know how many calories are in the foods you eat, or how many calories you eat each day, the Wellbeing makes it easy. Sign up for a free account. Then you can quickly look up calories and nutrients for any food and track it all to see the impact of food on your health and fitness goals. However you choose to look up calories for foods, Wellbeing gives you access to over 18 million global foods in one of the world's largest food databases — including fresh foods, packaged goods, restaurant items, and even foods and recipes you save yourself.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                    <AccordionHeader className="bg-gray-100 px-6 py-4 rounded-md cursor-pointer text-black text-lg" onClick={() => handleOpen(3)}>Can i track weight, workouts and water consumption?</AccordionHeader>
                    <AccordionBody className="px-4 py-2 text-md">
                        Yes! The best thing about Wellbeing is that it's an all-in-one platform. You don't need a separate intermittent fasting app, or different apps for water tracking, weight tracking, or fitness tracking. All Wellbeing members can track their weight goals, exercise, and water intake alongside calories and nutrition.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                    <AccordionHeader className="bg-gray-100 px-6 py-4 rounded-md cursor-pointer text-black text-lg" onClick={() => handleOpen(4)}>Does Wellbeing use a BMI calculator or BMR calculator to set goals?</AccordionHeader>
                    <AccordionBody className="px-4 py-2 text-md">
                    Yes, Wellbeing uses a BMR calculator to help you set calorie goals. During signup, you'll be asked questions about your height, weight, age, and sex to estimate your BMR (basal metabolic rate). You can also estimate your own BMR with our BMR calculator. Depending on your weight goals, we either add or subtract calories from your daily calorie needs. To help you set safe weight goals during signup, we use a BMI calculator. BMI is based on the ratio of your weight to your height, and we don't allow you to set weight goals below a certain ratio.
                    </AccordionBody>
                </Accordion>
            </div>
        </>
    );
}

export default AAccordion;