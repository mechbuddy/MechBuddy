import React from 'react'
import tire from "../../assets/Home/tire.png";
import Wheart from "../../assets/Home/Wheart.png";
import triangle from "../../assets/Home/triangle.png";
import { Link, useNavigate } from 'react-router-dom';

const PartsShop = (props) => {
  const { name, price, _id } = props.data;

  return (
    <div className='w-[35vw] md:w-[17vw] h-[40vh] md:h-[48vh] flex flex-col items-center justify-start bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-sm mb-[5vh]'>
      <div className='flex justify-start items-center text-[white] bg-[#F31D32] w-[18vw] md:w-[7vw] h-[4.5vh] transform translate-x-[9vw] md:translate-x-[5vw] translate-y-[-0vw] mb-[1.3vh] '>
        <img className='w-[5vw] md:w-[2.6vw] transform translate-x-[-1vw] md:translate-x-[-0.53vw]' src={triangle} />
        <p className='pr-[0vw] flex justify-start items-center'>Rs. {price}</p>
      </div>
      <div className='mb-[1.3vh]'>
        <Link to={`/sparePart/${_id}`}><div className='w-[30vw] md:w-[15vw] h-[20vh] md:h-[30vh] bg-gradient-to-b from-red-100 via-red-200 to-red-300 flex justify-center items-center'>
          <img className='w-[28vw] md:w-[15vw] ml-5 mb-7 ' src={tire} />
          <img className='transform translate-x-[-5vw] translate-y-[-10.5vw]' src={Wheart} />
        </div></Link>
      </div>
      <div className='mb-[1.3vh]'>
        <p>{name}</p>
      </div>
      <button className='w-[30vw] md:w-[15vw] text-[white] bg-[#F31D32] rounded p-[0.5vh]' >View More</button>
    </div>
  )
}

export default PartsShop
