import { Link } from "react-router-dom";


const SingleService = ({ aData }) => {
    const { id, img, description, logo ,occasion,color} = aData;
    return (
        <div
         data-aos="fade-down-right"
         data-aos-duration="2000"
         className="card bg-base-100 shadow-xl image-full">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2
                style={{color : `${color}`}}
                 className="card-title text-center text-4xl">{occasion}</h2>
                <p>{description.slice(0,100)}</p>
                <div className="card-actions justify-center">
                   <Link to={`/serviceDetail/${id}`}> <button 
                    style={{backgroundColor : `${color}`, color : 'white'}}
                    className="btn ">View Detail</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleService;