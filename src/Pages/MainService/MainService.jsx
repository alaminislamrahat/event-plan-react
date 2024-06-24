import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import Navbar from "../../shared/Navbar";
import Footer from "../Footer";
import ServiceElement from "./ServiceElement";
import bg from '../../assets/dried-sprigs-near-retro-stuff.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MainService = () => {
    const datas = useLoaderData();

    const toastCaller = ()=>{
        toast.success('Successfully added !!', {
            position: "top-right",
            autoClose: .5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",

        });
    }

    return (
        <div
        style={{backgroundImage : `url(${bg})`}}
         className="text-white bg-cover bg-center bg-no-repeat w-full h-full object-cover bg-fixed">
            <Navbar></Navbar>
            <h2 className="md:text-6xl font-bold py-24 text-center">service </h2>
            <ServiceElement></ServiceElement>
            <div 
            style={{}}
            className="">
                <h2 className="text-center font-bold text-4xl py-16">Our Prices</h2>
                <div className="md:grid md:grid-cols-4 gap-5 md:px-36 mb-20 mx-auto">
                    {
                        datas.map(serviceCard => <ServiceCard toastCaller={toastCaller} serviceCard={serviceCard} key={serviceCard.id}></ServiceCard>)
                    }
                </div>
            </div>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default MainService;