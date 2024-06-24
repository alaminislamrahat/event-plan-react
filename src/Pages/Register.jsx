import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Player } from '@lottiefiles/react-lottie-player';
import bg from '../../src/assets/blue-toned-pack-paper-sheets-with-copy-space.jpg'
import Navbar from "../shared/Navbar";
import Footer from "./Footer";


const Register = () => {
    const { register } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();

    const errorDetect = () => {
        toast.error(`${registerError}`, {
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

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const email = form.get('email');
        const password = form.get('password');

        setRegisterError('');

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,20}$/;

        if (password.length < 6) {
            setRegisterError('Password is less than 6 word');
            errorDetect();
            return;
        }
        else if (!regex.test(password)) {
            setRegisterError('atleast 1 Capital letter and special charecter and 1 small letter');
            errorDetect();
            return;
        }


        // register 
        register(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                updateProfile(user, {
                    displayName: name
                });
               
                navigate(location?.state ? location.state : '/')


            })
            .catch(error => {
                console.log(error.message);
                if(error){
                    setRegisterError('Already have account with this email,please login')
                }
                // setRegisterError(error.message)
                errorDetect();

            })
    }
    return (
        <div style={{ backgroundImage: `url(${bg})` }}
            className="bg-cover bg-no-repeat w-full bg-center h-screen"
        >
            <Navbar></Navbar>

            <h2 className="text-4xl text-pink-600 font-bold text-center pt-24"> Register Now!!!</h2>
            <div className="md:grid md:grid-cols-2 md:ml-8">
                <form onSubmit={handleRegister} className="card-body mx-auto text-center lg:w-1/2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
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
                        <button className="btn btn-secondary">Register</button>
                    </div>
                    <p>ALready have account.  <Link to="/login"><span className="font-bold text-pink-800">login</span></Link> now</p>

                    {
                        registerError && <p>{registerError}</p>
                    }
                </form>
                <div>
                    <Player
                        className="md:h-[400px] md:w-[400px] w-[300px] h-[300px]"
                        autoplay
                        loop
                        src="https://lottie.host/c26a5f7d-ae89-4b22-9680-48172e3c8c3e/8P3pfWq613.json"
                        
                    >

                    </Player>
                </div>
            </div>
            <ToastContainer />
            <Footer></Footer>
        </div>
    );
};

export default Register;