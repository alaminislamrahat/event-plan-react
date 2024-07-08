import { FaEnvelope,  FaMapMarkerAlt, FaPhoneAlt,} from "react-icons/fa";


import bg from '../../src/assets/bg 1.jpg'
// import bg from '../../src/assets/bg 2.jpg'

const Contact = () => {
    return (
        <div 
        style={{backgroundImage : `url(${bg})`}}
        className="py-9 px-10 bg-cover  bg-no-repeat w-full bg-fixed object-cover bg-center">
            <h2 className="text-4xl text-white font-bold py-11 text-center">Contact Us</h2>
            <div className="md:grid md:grid-cols-2 md:gap-12  ">
                <form
                data-aos="flip-up"
                data-aos-duration="2000"
                 className="card-body card bg-[rgba(255,255,255,.1)] ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="email"  placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-white label-text">Email</span>
                        </label>
                        <input type="password" placeholder="Email" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="text-white label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-error text-white">Contact Us</button>
                    </div>
                </form>
                <div
                data-aos="flip-left"
                data-aos-duration="2000"
                >
                    <div className="card bg-[rgba(255,255,255,.2)] mt-10 py-7 md:ml-10">
                        <div className="card-body ">
                            <div className="md:flex items-center gap-2 py-3 mx-auto">
                                <span className="text-2xl  text-red-500 "><FaPhoneAlt></FaPhoneAlt></span>
                                <h2 className="text-red-600"><span className="font-bold text-xl ">Phone :</span> 01575231473</h2>
                            </div>
                            <div className="md:flex items-center gap-2 mx-auto">
                                <span className="text-3xl text-red-500 "><FaMapMarkerAlt></FaMapMarkerAlt></span>
                                <h2 className="text-red-600"><span className="font-bold text-xl">Address :</span> NilKontho,Rangpur</h2>
                            </div>
                            <div className="md:flex items-center md:gap-2 py-2 md:mx-auto pr-9">
                                <span className="text-2xl text-red-500 "><FaEnvelope></FaEnvelope></span>
                                <h2 className="text-red-600"><span className="font-bold  text-xl ">Email :</span> <span className="block lg:inline">alamainislamrahat</span><span>@gmail.com</span></h2>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;