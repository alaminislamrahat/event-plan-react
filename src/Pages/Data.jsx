
import { motion } from "framer-motion"
import { Link } from "react-router-dom";


const Data = ({ data }) => {

   

    const { id, title, img, email, phone, address, description,color } = data;
    return (
        <div
          
            data-aos="fade-up-right"
         data-aos-duration="2000"
            className="card  bg-[rgba(255,255,255,.1)]  mb-10">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2
                style={{color : `${color}`}}
                 className="card-title">{title}</h2>
                <p className="text-white">{description}</p>
                <div className="card-actions justify-end">
                   <Link to={`/detail/${id}`}> <button
                   style={{backgroundColor : `${color}`}}
                    className="btn border-none text-white">Detail</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Data;