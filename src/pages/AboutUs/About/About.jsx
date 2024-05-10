import React from 'react'
import AboutCss from './About.module.css'
import Navbar from '../../../components/NavBar/Navbar'
import Group148 from "../../../assets/AboutUs/Group148.png";
import Group1085 from "../../../assets/AboutUs/Group1085.png";

const About = () => {
  return (
    <div className="bg-bgImg">
        <Navbar/>
        <div className={AboutCss.container}>
        
            <img  src={Group148}/>
            <div className={AboutCss.subcontainer}>
                <img className='hidden sm:block sm:w-auto' src={Group1085}/>
                <div className={AboutCss.content}>
                  <div className={AboutCss.heading}>
                    <h1>Welcome to <span className='text-[#F31D32]'>Mech</span>Buddy</h1>
                    <p>Your Trusted Companion for All Things Automotive!</p>                    
                  </div>
                    
                  <div className={AboutCss.subcontent}>
                    <p>At MechBuddy, we understand the frustration and inconvenience that comes with vehicle maintenance and repair. That's why we've created a seamless platform where you can easily book services at a trusted mechanic shop near you, putting an end to endless phone calls and long waiting times.</p>
                    <p>With MechBuddy, you have access to a network of certified and experienced mechanics who are dedicated to keeping your vehicle running smoothly. Whether it's routine maintenance like oil changes and tire rotations or more complex repairs, our skilled professionals are here to provide reliable and efficient service.</p>
                    <p>Our platform is designed with convenience in mind. Simply browse through our list of partner mechanic shops, compare prices and services, and book an appointment that fits your schedule. No more guesswork or uncertainty – with MechBuddy, you can rest assured that your vehicle is in good hands.</p>
                  </div>
                </div>
            </div>
        </div>
        <div className="flex justify-between items-center mt-10 mb-44">
            <div className="w-[60vw] h-[1px]  bg-gradient-to-r from-red-600 to-red-40"></div>
        </div>
        

    </div>
  )
}

export default About;