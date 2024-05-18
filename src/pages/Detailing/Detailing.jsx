import React, { useState  , useContext} from "react";
import Navbar from "../../components/NavBar/Navbar";
import Login from "../../components/Login/Login";
import Footer from "../../components/Footer/Footer";
import Header from "./Header/Header";
import Detail from "./Detail/Detail";
import { AuthContext } from "../../App";

function Detailing() {

    const { isLoggedIn } = useContext(AuthContext);
    let [showAnimation, setShowAnimation] = useState(false);
    let [showRAnimation, setRShowAnimation] = useState(true);


    return (<div className="bg-bgImg">
        <Navbar />
        <Header />
        <Detail />
        <Footer />
        <div className={`${isLoggedIn ? 'hidden' : 'fixed'} top-0 h-[100vh] w-[100vw] z-20`}>
            <Login showAnimation={showAnimation} showRAnimation={showRAnimation} setRShowAnimation={setRShowAnimation} setShowAnimation={setShowAnimation} />
        </div>

    </div>);
}

export default Detailing;