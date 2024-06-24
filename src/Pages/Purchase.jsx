import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCarts } from "../Utilities/localstorage";
import SingleCart from "./SingleCart";
import Navbar from "../shared/Navbar";
import Footer from "./Footer";
import bg from '../../src/assets/flowers-background-copy-space.jpg'

// All the cart save in the local storage 

const Purchase = () => {
    const data = useLoaderData();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cartId = getStoredCarts();
        if (data.length > 0) {
            const cartData = [];
            for (const id of cartId) {
                const cartmatch = data.find(cartmatch => cartmatch.id === id);
                if (cartmatch) {
                    cartData.push(cartmatch);
                }
            }
            setCart(cartData);

        }
    }, [data])
    return (
        <div style={{backgroundImage : `url(${bg})`}}
        className="text-white bg-cover bg-center bg-no-repeat w-full h-full object-cover bg-fixed"
        >
            
            <Navbar></Navbar>
            <h2 className="text-center font-bold text-5xl py-20">My Purchase History <span className="text-2xl font-bold text-white text-center block mt-2">!!note : after delete You have to relode</span></h2>
            
            <div className="grid md:grid-cols-2 gap-10 md:mb-14 md:px-20">
                {
                    cart.map(singleCart => <SingleCart singleCart={singleCart} key={singleCart.id}></SingleCart>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;