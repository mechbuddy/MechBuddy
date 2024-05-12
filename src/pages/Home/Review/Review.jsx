import React, { useEffect, useState } from "react";
import Box from "../../../assets/Box.png";
import demoPhoto from "../../../assets/Home/profileLogo.png";
import Comma1 from "../../../assets/Home/comma1.png";
import Comma2 from "../../../assets/Home/comma2.png";
import SliderCard from "../../../components/Slider/SliderCard";

function Review() {

    let [windowWidth, setWindowWidth] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 850) {
                setWindowWidth(false);
            }
            else {
                if (windowWidth == false) {
                    setWindowWidth(true);
                }
            }
        };

        handleResize(); // Check initial width
        window.addEventListener('resize', handleResize); // Add event listener for resize

        return () => {
            window.removeEventListener('resize', handleResize); // Remove event listener on component unmount
        };
    }, [windowWidth]);

    let reviews = [
        {
            photo: demoPhoto,
            name: "Sandeep Gupta",
            place: "Indore, Madhya Pradesh",
            review: "MechBuddy has been my go-to solution for all my vehicle needs! Their team of skilled mechanics and efficient service have saved me both time and money. With MechBuddy, I never have to worry about car troubles again. Highly recommend!"
        },
        {
            photo: demoPhoto,
            name: "Neha Singh",
            place: "Indore, Madhya Pradesh",
            review: "I can't thank MechBuddy enough for their excellent service! Their professionalism and attention to detail have impressed me every time. MechBuddy is the only place I trust with my car maintenance. Keep up the great work!"
        },
        {
            photo: demoPhoto,
            name: "Rajesh Verma",
            place: "Jabalpur, Madhya Pradesh",
            review: "MechBuddy has made vehicle care hassle-free for me! Their convenient location and friendly staff always make me feel welcome. Thanks to MechBuddy, I can drive with confidence knowing that my car is in good hands!"
        },
        {
            photo: demoPhoto,
            name: "Pooja Patel",
            place: "Jabalpur, Madhya Pradesh",
            review: " Their expertise and reliability make them stand out from the rest. MechBuddy is my trusted partner for all automotive needs and the customer service is also superb"
        },
        {
            photo: demoPhoto,
            name: "Amit Tiwari",
            place: "Ujjain, Madhya Pradesh",
            review: "MechBuddy is a lifesaver! Their prompt service and skilled mechanics have saved me from many stressful situations. I can't imagine managing my car without MechBuddy. Thank you for your exceptional service!"
        },
        {
            photo: demoPhoto,
            name: "Deepika Sharma",
            place: "Jabalpur, Madhya Pradesh",
            review: "I'm so grateful for MechBuddy! Their commitment to customer satisfaction is truly commendable. With MechBuddy, car maintenance is no longer a chore. I highly recommend them to all car owners!"
        }
    ];
    
    let [imgIndex, setImgIndex] = useState(1);
    let lengthOfArray = reviews.length;

    let handleClickRight = () => {
        setImgIndex((prev) => {
            console.log(prev, reviews.length - 1)
            if (reviews.length - 1 > prev) {
                return prev + 1;
            }
            else {
                return 0;
            }
        })
    }
    let handleClickLeft = () => {
        console.log(imgIndex);
        setImgIndex((prev) => {
            console.log(prev, reviews.length - 1)
            if (prev > 0) {
                return prev - 1;
            }
            else {
                return 5;
            }
        })
    }


    return (<div className=" relative mb-[5vh]">
        <div className="relative">
            <div className="absolute top-[50%] transform translate-y-[-50%] w-full text-center font-normal font-[sofia-light] sm:text-3xl md:text-4xl">CUSTOMER <span className=" text-red-600">REVIEWS</span></div>
            <img src={Box} alt="Box" className=" w-[100%] transform scale-125 md:scale-1" />
        </div>


        <div className="flex justify-between items-center">
            <img src={Comma2} alt="Comma2" className="ml-[5vw] w-[10vw]" />
        </div>


        <SliderCard
            onClickRight={handleClickRight}
            onClickLeft={handleClickLeft}
        >
            {reviews.map((reviews, key) => {
                return (<div key={key}>
                    <div className="flex ">

                        <div className={`relative mx-auto my-[5vh]  w-[75%] font-sans text-center border border-t-[16px] border-t-red-600 rounded-2xl pt-16 bg-white shadow-xl transition duration-300 lg:w-[90%]   md:my-[10vh]
                             ${windowWidth && (key === (imgIndex + 1 === lengthOfArray ? 0 : imgIndex + 1)) ? 'transform scale-75 translate-x-[-25%] translate-y-[25%] z-0' : ''}
                             ${windowWidth && key === imgIndex ? 'z-10' : ''}
                              ${windowWidth && (key === (imgIndex === 0 ? 5 : imgIndex - 1)) ? 'transform scale-75 translate-x-[25%] translate-y-[25%] z-0' : ''}
                              transform scale-90 `}
                        >
                            <img src={reviews.photo} alt="reviewPhoto" className="absolute p-[5px] w-[100px] top-[-20%]  left-[35%] md:left-[40%]   lg:left-[40%] bg-white rounded-full border-[5px] border-Primary-red " />
                            <div className="font-[sofia-light] text-2xl text-red-500">{reviews.name}</div>
                            <div className=" text-gray-400">{reviews.place}</div>
                            <div className="px-6 pt-4 pb-8 font-sans font-sm font-medium">{reviews.review}</div>
                        </div>

                    </div>
                </div>)

            })}
        </SliderCard>

        <div className="flex flex-row-reverse justify-between items-center md:mt-10 ">
            <img src={Comma1} alt="Comma1" className="ml-[5vw] w-[10vw] mr-10" />
        </div>


    </div>)
}

export default Review;

