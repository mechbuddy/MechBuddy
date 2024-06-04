import React, { useContext } from "react";
import axios from 'axios';
import Cookies from 'js-cookie';
import LoginImg from "../../assets/Login/LoginImg.png";
import SignUpImg from "../../assets/Login/SignUp.png";
import { AuthContext } from "../../App";
import "./Login.css";
import { useNavigate } from "react-router-dom";


function Login({ onClick, showAnimation, showRAnimation, setRShowAnimation, setShowAnimation }) {

    let { setIsLoggedIn } = useContext(AuthContext);
    let navigate = useNavigate();

    function handleClick() {
        setShowAnimation(true);
        setRShowAnimation(false);
    }
    function handleClickR() {
        setShowAnimation(false);
        setRShowAnimation(true);
    }

    async function handleSubmitLogin(e) {
        e.preventDefault();
        const formData = {
            "email": e.target.email.value,
            "password": e.target.password.value
        };

        await axios.post("http://localhost:3001/login", formData)
            .then(response => {
                Cookies.set('token', response.data.token, { expires: 1 });
                Cookies.set('userId', response.data.userId, { expires: 1 });
                console.log(response.data)
                setIsLoggedIn(true);
                navigate('/');
                window.location.reload();

            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    async function handleSubmitSignUp(e) {
        e.preventDefault();
        const formData = {
            "email": e.target.email.value,
            "password": e.target.password.value
        };

        await axios.post("https://api-phi-hazel.vercel.app/signup", formData)
            .then(response => {
                Cookies.set('token', response.data.token, { expires: 1 });
                setIsLoggedIn(true);
                navigate('/');
                window.location.reload();

            })
            .catch(error => {
                console.error('Error:', error);
            });
    }



    return (<div className="flex justify-center items-center h-[100vh]">

        <div className="absolute h-[100vh] w-[100vw] bg-black opacity-70" />
        <div className="relative border h-[60%] border-slate-200 w-[80%] overflow-hidden flex items-center rounded-xl bg-bgImg  sm:h-[80%]  md:w-[60%]" >
            <div onClick={onClick} className={`absolute top-5  right-5 z-20 cursor-pointer ${showRAnimation ? 'md:text-white ' : 'text-black'} md:right-16`}>	&#10006;</div>

            {/*Login*/}
            <div className={`flex flex-col w-[100%] z-10  px-[10%] mt-[5%] absolute ${showRAnimation ? 'slide-in-animation ' : 'slide-out-animation'} md:w-[50%] md:z-0`}>
                <div className="mb-[10%]">
                    <div className="text-3xl"><span className=" text-red-500">Mech </span>Buddy</div>
                    <div className="font-sans text-xs font-semibold text-slate-700 ml-3">Merchants & Mechanics</div>
                </div>
                <form className="flex flex-col w-full" onSubmit={handleSubmitLogin}>
                    <div className="text-xl">Login</div>
                    <input type="text" name="email" id="email" className=" bg-gray-100 border border-slate-300 my-1 px-1 py-2  rounded-lg placeholder:font-sans placeholder:text-xs" placeholder="Email" />
                    <input type="text" name="password" id="password" className=" bg-gray-100 border border-slate-300 my-1 px-1 py-2  rounded-lg placeholder:font-sans placeholder:text-xs" placeholder="Password" />
                    <div className="font-sans text-[0.75rem] my-[2%] text-Primary-red underline text-right">Forget Password?</div>
                    <button className="text-white bg-Primary-red text-sm font-sans font-semibold py-3 rounded-md">Login</button>
                    <div className="flex items-center text-gray-300 font-sans my-2">
                        <div className="flex-1 h-[0.5px] bg-gray-300" />
                        <div className="mx-[1px]">or</div>
                        <div className="flex-1 h-[0.5px] bg-gray-300" />
                    </div>
                    <button className="border border-gray-400 text-sm font-sans font-semibold py-3 rounded-md bg-white">Sign in with Google</button>
                </form>
                <div className="mt-[5%] font-sans  text-sm md:mt-[30%] cursor-pointer" onClick={handleClick}>Don't have a account <span className="text-Primary-red underline">Register Yourself !</span></div>
            </div>

            <div className={`hidden z-10 w-[50%] absolute  ${showRAnimation ? 'slide-in-r-animation' : 'slide-out-r-animation'}  md:flex md:place-content-center `}>
                <img src={LoginImg} alt="LoginImg" className="w-[70%]" />
            </div>

            {/*Register*/}
            <div className={`flex flex-col w-[100%]  px-[10%] mt-[5%] absolute ${showAnimation ? 'slide-in-animation ' : ' slide-out-animation'}  md:w-[50%] md:z-0`}>
                <div className="mb-[10%]">
                    <div className="text-3xl"><span className=" text-red-500">Mech </span>Buddy</div>
                    <div className="font-sans text-xs font-semibold text-slate-700 ml-3">Merchants & Mechanics</div>
                </div>
                <form className="flex flex-col w-full" onSubmit={handleSubmitSignUp}>
                    <div className="text-xl">Sign Up</div>
                    <input type="text" name="email" id="email" className=" bg-gray-100 border border-slate-300 my-1 px-1 py-2  rounded-lg placeholder:font-sans placeholder:text-xs" placeholder="Email" />
                    <input type="text" name="password" id="password" className=" bg-gray-100 border border-slate-300 my-1 px-1 py-2  rounded-lg placeholder:font-sans placeholder:text-xs" placeholder="Password" />
                    <button className="text-white bg-Primary-red text-sm font-sans font-semibold py-3 rounded-md">Sign Up</button>
                    <div className="font-sans text-[0.75rem] my-[2%] text-Primary-red underline text-right">Forget Password?</div>
                    <div className="flex items-center text-gray-300 font-sans my-2">
                        <div className="flex-1 h-[0.5px] bg-gray-300" />
                        <div className="mx-[1px]">or</div>
                        <div className="flex-1 h-[0.5px] bg-gray-300" />
                    </div>
                    <button className="border border-gray-400 text-sm font-sans font-semibold py-3 rounded-md">Sign in with Google</button>
                </form>
                <div className="mt-[5%] font-sans  text-sm md:mt-[30%] cursor-pointer" onClick={handleClickR}>Have a account <span className="text-Primary-red underline">Login Yourself !</span></div>
            </div>

            <div className={` w-[50%] hidden absolute  ${showAnimation ? 'slide-in-r-animation' : ' slide-out-r-animation'} md:flex md:place-content-center `}>
                <img src={SignUpImg} alt="LoginImg" className="w-[70%]" />
            </div>

            <div className={`circleLogIn ${showAnimation ? 'circle-animation' : ""} ${showRAnimation ? 'circle-ranimation ' : ""}`} />

        </div>
    </div>)
}

export default Login;