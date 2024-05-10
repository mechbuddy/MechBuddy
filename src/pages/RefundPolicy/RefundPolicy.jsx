import React from 'react'
import UpperLine from "../../assets/UpperLine.png";
import Navbar from '../../components/NavBar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
const RefundPolicy = () => {
    return (
        <div className='bg-bgImg'>
            <Navbar />
            <div className="flex justify-evenly text-md text-Primary-gray  my-[8%] sm:my-[3%]">
                <div>
                    <Link to="/TermsCondition">Terms & Conditions</Link>
                </div>
                <div>
                    <Link to="/PrivacyPolicies">Privacy Policies</Link>
                </div>
                <div><Link to="/RefundPolicy">Refund Policy</Link></div>
            </div>
            <div className="relative ">
                <div className="relative ">
                    <div className="absolute top-[30%] transform translate-y-[-100%] w-full text-center text-xl font-normal font-[sofia-light]  sm:text-3xl md:text-4xl">REFUND<span className=" text-red-600"> POLICY</span></div>
                    <img src={UpperLine} alt="UpperLine" className=' w-[100%] ' />
                </div>

                <div className="flex justify-end items-center">
                    <div className="w-[60vw] h-[1.7px]  bg-gradient-to-l from-red-600 to-red-40 mt-10 mb-10"></div>
                </div>
            </div>

            <div className="ml-[5vw] w-[88vw]">
                <h3 className=" sm:translate-y-0 text-2xl font-normal font-[sofia-light] sm:text-2xl md:text-3xl ">In terms with spares and accessories</h3>

                <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Eligibility</h3>
                <p
                    style={{
                        fontFamily: "Sofia Pro",
                        fontWeight: 400,
                        fontSize: "19px",
                        lineHeight: "20px",
                        color: "#5E5E5E",
                        wordSpacing: "3px",
                        letterSpacing: "1px"
                    }}>
                    Refunds are applicable only if the product is returned within 4 days from the date of delivery
                </p>
                <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Condition of the Product</h3>
                <p
                    style={{
                        fontFamily: "Sofia Pro",
                        fontWeight: 400,
                        fontSize: "19px",
                        lineHeight: "20px",
                        color: "#5E5E5E",
                        wordSpacing: "3px",
                        letterSpacing: "1px"
                    }}>
                    Products must be returned in their original condition, unused, and with all tags intact.
                </p>

                <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Inspection Process</h3>
                <p
                    style={{
                        fontFamily: "Sofia Pro",
                        fontWeight: 400,
                        fontSize: "19px",
                        lineHeight: "20px",
                        color: "#5E5E5E",
                        wordSpacing: "3px",
                        letterSpacing: "1px"
                    }}>
                    Refunds will be processed after a thorough inspection of the returned product to ensure it meets the eligibility criteria.
                </p>

                <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Initiating Refund</h3>
                <p
                    style={{
                        fontFamily: "Sofia Pro",
                        fontWeight: 400,
                        fontSize: "19px",
                        lineHeight: "20px",
                        color: "#5E5E5E",
                        wordSpacing: "3px",
                        letterSpacing: "1px"
                    }}>
                    Refunds will be initiated promptly upon completion of the inspection and approval of the return
                </p>

                <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Refund Method</h3>
                <p
                    style={{
                        fontFamily: "Sofia Pro",
                        fontWeight: 400,
                        fontSize: "19px",
                        lineHeight: "20px",
                        color: "#5E5E5E",
                        wordSpacing: "3px",
                        letterSpacing: "1px"
                    }}>
                    Refunds will be processed using the same payment method used for the original purchase.
                </p>

                <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Exclusions</h3>
                <p
                    style={{
                        fontFamily: "Sofia Pro",
                        fontWeight: 400,
                        fontSize: "19px",
                        lineHeight: "20px",
                        color: "#5E5E5E",
                        wordSpacing: "3px",
                        letterSpacing: "1px"
                    }}>
                    Customized or personalized products are not eligible for refunds.
                </p>

                <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Communication</h3>
                <p
                    style={{
                        fontFamily: "Sofia Pro",
                        fontWeight: 400,
                        fontSize: "19px",
                        lineHeight: "20px",
                        color: "#5E5E5E",
                        wordSpacing: "3px",
                        letterSpacing: "1px"
                    }}>
                    Keep us informed throughout the return process for a seamless experience.
                </p>

                <h3 className=" mt-8 sm:translate-y-0 text-2xl font-normal font-[sofia-light] sm:text-2xl md:text-3xl ">In terms with spares and accessories</h3>

                <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Advance Payment</h3>
                <p
                    style={{
                        fontFamily: "Sofia Pro",
                        fontWeight: 400,
                        fontSize: "19px",
                        lineHeight: "20px",
                        color: "#5E5E5E",
                        wordSpacing: "3px",
                        letterSpacing: "1px"
                    }}>
                    Customers are required to pay a minimum of 40% of the total service amount in advance to initiate the detailing service.
                </p>

                <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Remaining Amount</h3>
                <p
                    style={{
                        fontFamily: "Sofia Pro",
                        fontWeight: 400,
                        fontSize: "19px",
                        lineHeight: "20px",
                        color: "#5E5E5E",
                        wordSpacing: "3px",
                        letterSpacing: "1px"
                    }}>
                    The remaining balance must be settled before taking delivery of the vehicle post-detailing.
                </p>

                <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Cancellation After Commencement</h3>
                <p
                    style={{
                        fontFamily: "Sofia Pro",
                        fontWeight: 400,
                        fontSize: "19px",
                        lineHeight: "20px",
                        color: "#5E5E5E",
                        wordSpacing: "3px",
                        letterSpacing: "1px"
                    }}>
                    If the order is cancelled after the vendor has started the work, the company reserves the right to charge for materials used and 15% of the labour cost.
                </p>

                <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Post-Warranty Damages</h3>
                <p
                    style={{
                        fontFamily: "Sofia Pro",
                        fontWeight: 400,
                        fontSize: "19px",
                        lineHeight: "20px",
                        color: "#5E5E5E",
                        wordSpacing: "3px",
                        letterSpacing: "1px"
                    }}>
                    The company is not responsible for damages occurring after the warranty period for the detailing service has expired.
                </p>

                <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Customer-Induced Damages</h3>
                <p
                    style={{
                        fontFamily: "Sofia Pro",
                        fontWeight: 400,
                        fontSize: "19px",
                        lineHeight: "20px",
                        color: "#5E5E5E",
                        wordSpacing: "3px",
                        letterSpacing: "1px"
                    }}>
                    No refunds will be provided for damages caused by the customer to the vehicle, whether within or outside the warranty period.
                </p>

                <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Expectations Disclaimer</h3>
                <p
                    style={{
                        fontFamily: "Sofia Pro",
                        fontWeight: 400,
                        fontSize: "19px",
                        lineHeight: "20px",
                        color: "#5E5E5E",
                        wordSpacing: "3px",
                        letterSpacing: "1px"
                    }}>
                    Refunds will not be issued if the final detailing product does not meet the customer's subjective expectations. We aim for customer satisfaction, but individual preferences may vary.
                </p>

                <h3 className=" mt-8 sm:translate-y-0 text-2xl font-normal font-[sofia-light] sm:text-2xl md:text-3xl ">In Terms of Servicing</h3>

                <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl"></h3>
                <p
                    style={{
                        fontFamily: "Sofia Pro",
                        fontWeight: 400,
                        fontSize: "19px",
                        lineHeight: "20px",
                        color: "#5E5E5E",
                        wordSpacing: "3px",
                        letterSpacing: "1px"
                    }}>

                </p>

                <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Non-Covered Breakdowns</h3>
                <p
                    style={{
                        fontFamily: "Sofia Pro",
                        fontWeight: 400,
                        fontSize: "19px",
                        lineHeight: "20px",
                        color: "#5E5E5E",
                        wordSpacing: "3px",
                        letterSpacing: "1px"
                    }}>
                    No refunds will be issued if a breakdown occurs due to a major reason not covered in the customer's servicing package.
                </p>

                <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Acts of God or Natural Causes</h3>
                <p
                    style={{
                        fontFamily: "Sofia Pro",
                        fontWeight: 400,
                        fontSize: "19px",
                        lineHeight: "20px",
                        color: "#5E5E5E",
                        wordSpacing: "3px",
                        letterSpacing: "1px"
                    }}>
                    The company is not liable for refunds in cases of vehicle breakdowns resulting from acts of God, natural disasters, or other unforeseen circumstances beyond our control
                </p>

                <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Other Unspecified Reasons</h3>
                <p
                    style={{
                        fontFamily: "Sofia Pro",
                        fontWeight: 400,
                        fontSize: "19px",
                        lineHeight: "20px",
                        color: "#5E5E5E",
                        marginBottom: "100px"
                    }}
                >
                    Refunds will not be provided for breakdowns arising from reasons not explicitly covered in the customer's servicing package or mentioned in our service terms
                </p>

            </div>
            <Footer />
        </div>
    )
}

export default RefundPolicy