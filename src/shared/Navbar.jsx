import { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Navbar = () => {
    const navlinks = <>
        <li className=" bg-[rgba(176,184,186,.5)] rounded-2xl text-white"><NavLink to="/">Home</NavLink></li>
        <li className="bg-[rgba(176,184,186,.5)] rounded-2xl text-white"><NavLink to="/service">Services</NavLink></li>
        <li className="bg-[rgba(176,184,186,.5)] rounded-2xl text-white"><NavLink to="/purchases">Purchases</NavLink></li>


    </>

    const navigate = useNavigate();
    const location = useLocation();

    const { logOut, user, googleLogin } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="navbar text-white fixed z-30">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="text-xl font-bold text-black menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <a className="hidden md:pt-2 md:block btn btn-ghost bg-white hover:text-white text-xl text-black font-bold">Event Plan</a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 gap-5 text-xl font-bold text-black">
                    {navlinks}
                </ul>
            </div>
            <div className="md:navbar-end  ">
                <h2 className="hidden md:block md:font-bold md:mx-5">{
                    user && user.email
                }</h2>
               {
                 user ? '' : <button
                 onClick={handleGoogleLogin}
                 className="btn bg-[rgba(0,155,0,.5)] mr-5 text-white">Google <br />login</button>
               }
                {
                    user
                        ? <button className="btn md:text-xl font-bold bg-[rgba(176,184,186,.5)]" onClick={handleLogOut}>Log Out</button>
                        : <Link to="/login"> <button className="btn text-white md:text-xl font-bold bg-[rgba(176,184,186,.5)]">Login</button></Link>
                }

            </div>
        </div>
    );
};

export default Navbar;