
import { setStoredCarts } from '../../Utilities/localstorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ServiceCard = ({ serviceCard,toastCaller }) => {
    const { id, img, occasion, service, price, color } = serviceCard;

    const handleClick = () => {
        toastCaller();
        setStoredCarts(id);
       

    }

    return (
        <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="card bg-[rgba(255,255,255,.1)]  shadow-xl mb-5 ">
            <figure>
                <img
                    src={img}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2
                    style={{ color: `${color}` }}
                    className="card-title underline">Full service planning</h2>



                <h2
                    style={{
                        color: `${color}`,
                        borderColor: `${color}`
                    }}
                    className='text-center font-bold text-4xl border rounded-full py-5'>{price}</h2>

                <h2 className='text-white text-3xl font-bold'>{occasion}</h2>
                <ul>
                    <li>{service.one}</li>
                    <li>{service.two}</li>
                    <li>{service.three}</li>
                    <li>{service.four}</li>
                </ul>
                <div>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <button

                        style={{
                            backgroundColor: `${color}`,

                        }}
                        onClick={handleClick}
                        className="btn text-white hover:bg-gray-50 hover:text-black">PURCHASE</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ServiceCard;