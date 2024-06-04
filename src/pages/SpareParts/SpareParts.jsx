import React, { useState, useContext, useEffect } from "react";
import Servicing1 from "../../assets/Home/Servicing1.png";
import Navbar from "../../components/NavBar/Navbar";
import PartsShop from "./PartsShop";
import Footer from "../../components/Footer/Footer";
import Login from "../../components/Login/Login";
import MiddlePart from "../../components/MiddlePart/MiddlePart";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import axios from "axios";

const SpareParts = () => {

  let [product, setProduct] = useState([]);
  let [modal, setModal] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);
  let navigate = useNavigate();

  let [showAnimation, setShowAnimation] = useState(false);
  let [showRAnimation, setRShowAnimation] = useState(true);


  useEffect(() => {

    async function getData() {
      await axios.get(`http://localhost:3001/item`).then(response => {
        setProduct(response.data);
      })
        .catch(error => {
          console.error('Error:', error);
        });
    }

    getData();
  }, [product])


  function onClick() {
    setModal(!modal);
    navigate("/");
  }

  function onClickSignUp() {
    onClick();
    setShowAnimation(true);
    setRShowAnimation(false);
  }

  function onClickLogin() {
    onClick();
    setShowAnimation(false);
    setRShowAnimation(true);
  }


  return (
    <div className="bg-bgImg">
      <Navbar onClickLogin={onClickLogin} onClickSignUp={onClickSignUp} />
      <div className="flex flex-col items-center justify-evenly mt-[4vh]">
        <p className="text-2xl md:text-4xl absolute">Spare Parts</p>
        <img className="mt-4" src={Servicing1} />
      </div>
      <MiddlePart />
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-8 w-[80vw] mt-[3vw]">
         {product.map((p)=>{
          return(<PartsShop data={p}/>)
         })}
        </div>
        <button className="w-[30vw] md:w-[12vw] text-[white] bg-[#F31D32] rounded p-[0.5vh] mt-[8vh] mb-[8vh]">
          See more
        </button>
      </div>
      <Footer />
      <div className={`${isLoggedIn ? 'hidden' : 'fixed'} top-0 h-[100vh] w-[100vw] z-20`}>
        <Login onClick={onClick} showAnimation={showAnimation} showRAnimation={showRAnimation} setRShowAnimation={setRShowAnimation} setShowAnimation={setShowAnimation} />
      </div>
    </div>
  );
};

export default SpareParts;
