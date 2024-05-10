import React , {useState} from "react";
import Navbar from "../../components/NavBar/Navbar";
import Login from "../../components/Login/Login";
import Header from "./Header/Header";
import Service from "./Service/Service";
import Provider from "./Provider/Provider";
import Footer from "../../components/Footer/Footer";

function Servicing(){

    let [modal, setModal] = useState(false);

    function onClick() {
        setModal(!modal);
    }

    return(<div className="bg-bgImg">
        <Navbar onClick={onClick} />
          <Header/>
          <Service/>
          <Provider/>
          <Footer/>
          <div className={`${modal ? 'fixed' : 'hidden'} top-0 h-[100vh] w-[100vw] z-20`}>
                <Login onClick={onClick} />
            </div>
    </div>)
}

export default Servicing;