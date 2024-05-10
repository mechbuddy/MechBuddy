import React, { useEffect, useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function SliderCard({ children, className, onClickLeft, onClickRight }) {
    let [cardShow, setCardShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 850) {
                setCardShow(1);
            }
            else {
                if (cardShow == 1) {
                    setCardShow(3);
                }
            }
        };

        handleResize(); // Check initial width
        window.addEventListener('resize', handleResize); // Add event listener for resize

        return () => {
            window.removeEventListener('resize', handleResize); // Remove event listener on component unmount
        };
    }, [ cardShow]);


    const NextArrow = ({ onClick }) => {
        return (<button onClick={() => { onClickRight(); onClick(); }} className=" absolute font-serif text-6xl top-[50%] left-[90%]  z-10 text-gray-700 sm:left-[97%] ">
            &gt;
        </button>)
    }
    const PrevArrow = ({ onClick }) => {
        return (<div onClick={() => { onClickLeft(); onClick(); }} className=" absolute font-serif text-6xl top-[50%] left-[0%]  z-10 text-gray-700 ">
            &lt;
        </div>)
    }

    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: cardShow,
        slidesToScroll: 1,
        cssEase: 'linear',
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <Slider {...settings} className={className}>
            {children}
        </Slider>
    )
}

export default SliderCard;