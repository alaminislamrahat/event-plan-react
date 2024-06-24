
import { useEffect, useState } from 'react';
import bg from '../../src/assets/25815.jpg'
import Data from './Data';



const Services = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('/info.json')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])

    return (
        <div
            className='py-28 bg-no-repeat bg-cover bg-center bg-fixed bg-gray-600'
            style={{
                backgroundImage: `url(${bg})`,
                
                
            }}>
            <h2 className='text-center text-black text-xl md:text-6xl font-bold mb-9'>This is Our customers</h2>
            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4'>
                { 
                    datas.map(data => <Data data={data} key={data.id}></Data>)
                }
            </div>


        </div>
    );
};

export default Services;