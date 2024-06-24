import { motion } from "framer-motion"
import { removeCart } from "../Utilities/localstorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleCart = ({ singleCart }) => {
    const { id,occasion, img, description, service, price,color} = singleCart;

    const handleRemove = ()=>{
        removeCart(id);
        toast.warn('Element deleted please relode :) ', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            
            });
    }
    return (
        <div className="card card-side bg-[rgba(255,255,255,.1)]  shadow-xl">
            <figure>
                <img
                    src={img}
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{occasion}</h2>
                <p 
                    style={{color : `${color}`}}
                className="font-bold text-2xl ">{price}</p>
                <p>{description.slice(0,50)}</p>
               
                <div className="card-actions justify-end">
                    <motion.button
                    onClick={handleRemove}
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }} 
                    style={{backgroundColor : `${color}`}}
                    className="btn text-white">Delete</motion.button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SingleCart;