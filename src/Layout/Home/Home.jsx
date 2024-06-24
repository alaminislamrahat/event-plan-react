import Carousel from "../../Pages/Carousel";
import Contact from "../../Pages/Contact";
import Footer from "../../Pages/Footer";
import OurServices from "../../Pages/OurServices";
import Services from "../../Pages/Services";
import Navbar from "../../shared/Navbar";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
            <OurServices></OurServices>
            <Carousel></Carousel>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;