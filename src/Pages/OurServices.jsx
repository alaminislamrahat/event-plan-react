import { useEffect, useState } from "react";
import SingleService from "./SingleService";
// import bg from '../../src/assets/top-view-party-decoration-with-balloons-purple-background.jpg'


const OurServices = () => {
    const [datas,setDatas] = useState([]);
    useEffect(()=>{
        fetch('/service.json')
        .then(res => res.json())
        .then(data => setDatas(data))
    },[])
    return (
        <div
       
         className="bg-cover bg-no-repeat bg-center bg-fixed py-16">
            <h2 className="md:text-6xl text-2xl font-bold text-center my-6">Our Services </h2>
            <div className="md:grid md:grid-cols-4 md:gap-9">
                {
                    datas.map(aData => <SingleService aData={aData} key={aData.id}></SingleService>)
                }
            </div>
        </div>
    );
};

export default OurServices;