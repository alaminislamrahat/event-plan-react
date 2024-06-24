import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "./Footer";


const Detail = () => {
  const datas = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id)
  console.log(datas, id);
  const data = datas.find(data => data.id === idInt);
  const { address, description, email, img, phone, title } = data;
  return (
    <div>
      <Navbar></Navbar>
      <div className="card  bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-4xl">{title}</h2>
          <p>{description}</p>
          <p className="font-bold">Email : {email}</p>
          <p className="font-bold">Phone : {phone}</p>
          <p className="font-bold">Adress : {address}</p>
          <div className="card-actions ">
            <Link to="/"><button className="btn btn-primary">Go Back</button></Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Detail;