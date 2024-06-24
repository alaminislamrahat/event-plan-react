import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Player } from '@lottiefiles/react-lottie-player';
import bg from '../../src/assets/blue-toned-set-triangular-paper-sheets-with-copy-space.jpg'
import Navbar from "../shared/Navbar";
import Footer from "./Footer";


const Login = () => {
    const { login } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();


    const errorDetect = () => {
        toast.error(`${loginError}`, {
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

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const email = form.get('email');
        const password = form.get('password');

        setLoginError('');

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,20}$/;

        if (password.length < 6) {
            setLoginError('Password is less than 6 word');
            errorDetect();
            return;
        }
        else if (!regex.test(password)) {
            setLoginError('atleast 1 Capital letter and special charecter and 1 small letter');
            errorDetect();
            return;
        }


        // register 
        login(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                updateProfile(user, {
                    displayName: name
                });
                navigate(location?.state ? location.state : '/');


            })
            .catch(error => {
                console.log(error);
                errorDetect();

            })
    }
    return (
        <div style={{ backgroundImage: `url(${bg})` }}
            className="bg-cover bg-no-repeat w-full bg-center h-screen"
        >
            <Navbar></Navbar>
            <h2 className=" pt-24 text-4xl text-center font-bold text-purple-800">Pleasse login</h2>

            <div className="md:grid md:grid-cols-2 md:px-24">
                <div className="md:ml-20 md:w-full">
                    <form onSubmit={handleLogin} className="card-body  text-center lg:w-1/2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>New in this website.  <Link to="/register"><span className="font-bold text-purple-800">Register</span></Link> now</p>
                        {
                            loginError && <p>{loginError}</p>
                        }
                    </form>

                </div>
                <div className="">
                    <Player
                        className="md:h-[400px] md:w-[400px] w-[300px] h-[300px]"
                        autoplay
                        loop
                        src="https://lottie.host/074f640b-f8d7-447c-a526-b95e09245591/V0G0A6U1zN.json"
                        
                    >

                    </Player>
                </div>
            </div>
            <ToastContainer />
            <Footer></Footer>
        </div>
    );
};

export default Login;