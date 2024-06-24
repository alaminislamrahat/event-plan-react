import image from '../../assets/5340561.psd.jpg'

import { ReactTyped } from "react-typed";

const Banner = () => {
    return (
        <div className=" w-full h-screen relative bg-neutral-700">
            <img className='w-full h-full object-cover absolute mix-blend-overlay' src={image} alt="" />
            <div className='pt-28 md:pt-72 text-center text-white'>
                <h2 className='md:text-4xl font-bold '>We work in multiple things like</h2>
                <ReactTyped className='md:text-4xl font-bold'
                    strings={[
                        "Wedding",
                        "Birthday Parties",
                        "New Year",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    
                    loop
                >

                </ReactTyped>
            </div>
        </div>
    );
};

export default Banner;