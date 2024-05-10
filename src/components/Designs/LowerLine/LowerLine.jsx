import React from "react";

function LowerLine({ styles = "flex h-[15vh] absolute top-[4%] justify-between w-full sm:top-[2%]" }) {

    return (
        <div className={styles}>
            <div className="flex">
                <div className="w-[10vw] bg-red-600 h-[1.5px]  md:h-1"></div>
                <div className="w-[12vw] bg-red-600 h-[1.5px] rotate-[35deg] origin-top-left md:h-1 "></div>
            </div>
            <div className="w-[61vw] bg-red-600 h-[1.5px] absolute top-[6.75vw] left-[19.5vw] sm:w-[59vw] md:h-1  lg:w-[60vw]   "></div>
            <div className="flex">
                <div className="w-[12vw] bg-red-600 h-[1.5px] rotate-[-35deg]  origin-top-right  md:h-1"></div>
                <div className="w-[10vw] bg-red-600 h-[1.5px]  md:h-1"></div>
            </div>
        </div>
    )
}

export default LowerLine;