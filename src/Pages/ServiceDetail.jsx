import { Link, Navigate, useLoaderData, useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "../shared/Navbar";


const ServiceDetail = () => {
    const datas = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const data = datas.find(data => data.id === idInt);
    const { img, occasion, description, color, question, question2, ans, ans2 } = data;
    return (
        <div>
            <Navbar></Navbar>
            <div className="card  bg-base-100 shadow-xl md:px-16">
                <figure><img className="md:px-16" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2
                        style={{ color: `${color}` }}
                        className="card-title font-bold text-5xl">{occasion}</h2>
                    <p>{description}</p>



                    {/* acordion  */}
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            {question}
                        </div>
                        <div className="collapse-content">
                            <p>{ans}</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            {question2}
                        </div>
                        <div className="collapse-content">
                            <p>{ans2}</p>
                        </div>
                    </div>



                    <div className="card-actions justify-start">
                        <Link to="/"><button
                            style={{ backgroundColor: `${color}` }}
                            className="btn ">Go back</button></Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetail;