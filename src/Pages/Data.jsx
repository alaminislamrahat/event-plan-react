
import { motion } from "framer-motion"
import { Link } from "react-router-dom";


const Data = ({ data }) => {

   

    const { id, title, img, email, phone, address, description } = data;
    return (
        <div
          
            data-aos="fade-up-right"
         data-aos-duration="2000"
            className="card  bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                   <Link to={`/detail/${id}`}> <button className="btn btn-primary">Detail</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Data;