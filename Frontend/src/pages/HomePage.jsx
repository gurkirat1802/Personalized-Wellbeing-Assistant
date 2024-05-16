import Navbar from "../components/Navbar";
import Home from "../components/Home";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import ContactUs from "../components/ContactUs";
import Description from "../components/Description";
import AAccordion from "../components/AAccordion";

const HomePage = () => {
    return(
        <>
            <Navbar></Navbar>
            <Home></Home>
            <AboutUs></AboutUs>
            <Services></Services>
            <Description></Description>
            <AAccordion></AAccordion>
            <ContactUs></ContactUs>
        </>
    );
}

export default HomePage;