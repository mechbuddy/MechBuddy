import React, { useState } from "react";
import Login from "../../components/Login/Login";
import UpperLine from "../../assets/UpperLine.png";
import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";


export default function TermsCondition() {

     let [modal, setModal] = useState(false);

     let [showAnimation, setShowAnimation] = useState(false);
     let [showRAnimation, setRShowAnimation] = useState(true);

     function onClick() {
          setModal(!modal);
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
          <div>
               <Navbar onClickLogin={onClickLogin} onClickSignUp={onClickSignUp} />
               <div className="flex justify-evenly text-md text-Primary-gray  my-[8%] sm:my-[3%]">
                    <div>
                         <Link to="/TermsCondition">Terms & Conditions</Link>
                    </div>
                    <div>
                         <Link to="/PrivacyPolicies">Privacy Policies</Link>
                    </div>
                    <div>
                         <Link to="/RefundPolicy">Refund Policy</Link>
                    </div>
               </div>
               <div className="relative ">
                    <div className="absolute top-[30%] transform translate-y-[-100%] w-full text-center text-xl font-normal font-[sofia-light]  sm:text-3xl md:text-4xl">TERMS &<span className=" text-red-600"> CONDITIONS</span></div>
                    <img src={UpperLine} alt="UpperLine" className=' w-[100%] ' />
               </div>

               <div className="ml-[5vw]">
                    <h3 className="text-bold text-lg mb-2">Introduction</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · Welcome to MechBuddy registered brand under Sibey India Private
                         Limited, an online automotive marketplace connecting consumers with
                         mechanics, spare parts& accessory manufacturers.
                         <br />. While using the service of Mechbuddy you are requested to
                         comply with the below-mentioned Terms and Conditions.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">Definitions</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · "MechBuddy" refers to our online platform.
                         <br />· "Consumer" refers to individuals or entities using MechBuddy
                         to avail of automotive services.
                         <br />. "Vendor" refers to mechanics, spare parts, and accessory
                         manufacturers providing services through MechBuddy.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">
                         Consumer Responsibilities
                    </h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · Consumers must provide accurate information when availing services.
                         <br />· Payment for services must be made as per the agreed terms.
                         <br />· Consumers are responsible for the condition and maintenance of
                         their vehicles before and after services.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">Vendor Responsibilities</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · Vendors must provide high-quality services as per industry
                         standards.
                         <br />· Pricing for services and products should be transparent and
                         disclosed to consumers upfront.
                         <br />· Vendors must adhere to safety regulations and ethical
                         practices while servicing vehicles.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">Service Offerings</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · MechBuddy offers periodic servicing for two-wheelers, four-wheelers,
                         and heavy-duty vehicles.
                         <br />· Detailed work such as PPF (Paint Protection Film), TPU
                         (Thermoplastic Polyurethane), ceramic coating, and Teflon coating are
                         available.
                         <br />· Modification services for two-wheelers, four-wheelers, and
                         heavy-duty vehicles are offered.
                         <br />· Spare parts and accessories can be purchased through
                         MechBuddy.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">Booking and Payment</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · Consumers can book services and make payments through the MechBuddy
                         platform.
                         <br />· Payment methods accepted include credit/debit cards, digital
                         wallets, and other methods specified by MechBuddy.
                         <br />. Prices listed on the platform are Exclusive of Taxes.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">
                         Cancellations and Refunds
                    </h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · Consumers can cancel their bookings within the specified time
                         mentioned in Annexure-1 & refund will be provided as per the terms
                         mentioned in Annexure-1.
                         <br />· Refunds will be processed as per the terms mentioned in
                         Annexure-1.
                         <br />· Vendors may charge a cancellation fee for bookings.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">Liability and Disputes</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · MechBuddy is not liable for any damages or losses incurred during
                         the provision of services by vendors.
                         <br />· Any disputes between consumers and vendors should be resolved
                         amicably, with MechBuddy providing assistance if necessary.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">Privacy Policy</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · MechBuddy respects the privacy of its users. You are requested to
                         refer to our Privacy Policy for further details.In which we have
                         mentioned that how we collect, use, and protect your personal
                         information.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">Amendments</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · MechBuddy reserves the right to amend these Terms and Conditions at
                         any time. Any changes will be notified to users through the platform.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">Governing Law</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · Terms and Conditions are applicable as per the law. In case Any
                         disputes arising out of or relating to these terms shall be subject to
                         the exclusive jurisdiction of Jabalpur, Madhya Pradesh, India.
                         <br />· By using MechBuddy, you agree to abide by these Terms and
                         Conditions. If you have any questions or concerns, please contact us
                         at customer.mechbuddy@gmail.com
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">Intellectual Property</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · All the contents and materials including but not limited to logos,
                         trademarks, images, and text, are the property of MechBuddy or its
                         licensors.
                         <br />· Users agree not to reproduce, distribute, modify, or create
                         derivative works of any content on MechBuddy without prior written
                         consent.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">User Conduct</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · Users agree to use MechBuddy solely for lawful purposes and in
                         accordance with these Terms and Conditions.
                         <br />· Users must not engage in any activity that may disrupt or
                         interfere with the functioning of MechBuddy or its services.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">Reviews and Feedback</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · Consumers may provide reviews and feedback on the services received
                         through MechBuddy.
                         <br />· Reviews and feedback must be honest, accurate, and respectful.
                         <br />· MechBuddy reserves the right to moderate or remove reviews
                         that violate these Terms and Conditions.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">Warranty Disclaimer</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · MechBuddy does not provide any warranties or guarantees regarding
                         the quality, accuracy, or reliability of services provided by vendors.
                         <br />. Consumers acknowledge that any services or products obtained
                         through MechBuddy are used at their own risk.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">Limitation of Liability</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · In no event shall MechBuddy or its affiliates be liable for any
                         direct, indirect, incidental, special, or consequential damages
                         arising out of or in any way connected with the use of MechBuddy or
                         its services.
                         <br />· Company’s liability to any user for all the claims arising
                         from the use of MechBuddy shall not exceed the amount paid by the user
                         for the services.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">Termination</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · MechBuddy reserves the right to terminate or suspend access to its
                         services at any time, without prior notice or liability, for any
                         reason whatsoever.
                         <br />· Upon termination, users must cease all use of MechBuddy and
                         may be required to delete any downloaded materials or content obtained
                         from MechBuddy.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">Indemnification</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · Users agree to indemnify and hold MechBuddy, its affiliates,
                         officers, directors, employees, and agents harmless from any claims,
                         damages, losses, liabilities, costs, or expenses (including legal
                         fees) arising out of or in connection with their use of MechBuddy.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">Severability</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · If any provision of these Terms and Conditions is found to be
                         unlawful, void, or unenforceable, such provision shall be deemed
                         severable from these Terms and Conditions and shall not affect the
                         validity and enforceability of the remaining provisions.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">Entire Agreement</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · These Terms and Conditions constitute the entire agreement between
                         users and MechBuddy regarding the use of MechBuddy's services,
                         superseding any prior agreements or understandings.
                         <br />· Any waiver of any provision of these Terms and Conditions will
                         be effective only if in writing and signed by MechBuddy.
                         <br />. By continuing to use MechBuddy, you acknowledge and agree to
                         abide by these additional Terms and Conditions.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">User Account</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · Users may be required to create an account to access certain
                         features of MechBuddy.
                         <br />· Users are responsible for maintaining the confidentiality of
                         their account credentials and for any activities that occur under
                         their account.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">Age Restriction</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · Users must be at least 18 years old to create an account and use
                         MechBuddy's services. By accessing MechBuddy, users affirm that they
                         are of legal age.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">Third-Party Links</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · MechBuddy may contain links to third-party websites or services that
                         are not owned or controlled by MechBuddy.
                         <br />· MechBuddy is not responsible for the content, privacy
                         policies, or practices of any third-party websites or services.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">Communication</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · Official communications with MechBuddy, users consent to be received
                         from MechBuddy, including but not limited to promotional emails,
                         newsletters, and updates.
                         <br />· Users can opt out of receiving promotional communication by
                         following the instructions provided in the communication.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">Force Majeure</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · MechBuddy shall not be liable for any failure or delay in performing
                         its obligations under these Terms and Conditions due to causes beyond
                         its reasonable control, including but not limited to acts of nature,
                         war, terrorism, or governmental actions.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">Assignment</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · MechBuddy may assign or transfer its rights and obligations under
                         these Terms and Conditions to any third party without user consent. ·
                         Users may not assign or transfer their rights and obligations under
                         these Terms and Conditions without prior written consent from
                         MechBuddy.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">
                         Modification of Services
                    </h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · MechBuddy reserves the right to modify, suspend, or discontinue any
                         aspect of its services at any time, with or without notice.
                         <br />· MechBuddy shall not be liable to users or any third party for
                         any modification, suspension, or discontinuation of its services.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">Compliance with Laws</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · Users agree to comply with all applicable laws, regulations, and
                         ordinances while using MechBuddy's services.
                         <br />· Users are solely responsible for ensuring compliance with any
                         laws or regulations that may apply to their use of MechBuddy.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">Language</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · These Terms and Conditions may be translated into multiple languages
                         for user convenience. In the event of any discrepancy or conflict
                         between the translated versions and the English version, the English
                         version shall prevail.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">Contact Information</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · For questions, concerns, or inquiries regarding these Terms and
                         Conditions or MechBuddy's services, users can contact MechBuddy at
                         [Contact Information].
                         <br />· These additional Terms and Conditions are designed to provide
                         further clarity and protection for both users and MechBuddy.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">
                         Data Protection and Security
                    </h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · MechBuddy is committed to protecting the privacy and security of
                         user data.
                         <br />· Personal information provided by users will be handled as
                         perthe MechBuddy's Privacy Policy.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">
                         User Responsibilities for Vehicle Condition
                    </h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · Users must ensure that their vehicles are in a safe and roadworthy
                         condition before availing of any services through MechBuddy.
                         <br />· MechBuddy reserves the right to refuse services if a vehicle
                         is deemed to be unsafe or in poor condition.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">
                         Vendor Qualifications and Certification
                    </h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · MechBuddy will verify the qualifications and certifications of
                         vendors listed on the platform to ensure they meet industry standards.
                         <br />. Users can request information regarding a vendor's
                         qualifications before availing of their services.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">
                         Dispute Resolution Mechanism
                    </h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · MechBuddy will provide a dispute resolution mechanism to assist
                         users in resolving any disputes with vendors.
                         <br />· Users must notify MechBuddy of any disputes within a
                         reasonable time frame for assistance in resolution.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">Prohibited Activities</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · Users are prohibited from engaging in any unlawful, fraudulent, or
                         abusive activities while using MechBuddy's services.
                         <br />· MechBuddy reserves the right to suspend or terminate accounts
                         found to be engaging in prohibited activities.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">Geographic Limitations</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · MechBuddy's services may not be available in all geographic
                         locations. Users are responsible for verifying the availability of
                         services in their area before booking.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">Insurance Coverage</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · MechBuddy does not provide insurance coverage for vehicles serviced
                         through the platform.
                         <br />. Users are advised to ensure that their vehicles are adequately
                         insured before availing of any services.{" "}
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">
                         User Feedback Incorporation
                    </h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · MechBuddy may use user feedback to improve its services and
                         offerings.
                         <br />. By providing feedback, users grant MechBuddy the right to use,
                         modify, and incorporate their feedback into MechBuddy's services
                         without any compensation.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">
                         Non-Solicitation Agreemen
                    </h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · Users agree not to solicit MechBuddy's vendors for services outside
                         of the MechBuddy platform.
                         <br />· MechBuddy reserves the right to take legal action against
                         users found to be in violation of this agreement.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">
                         Loyalty Programs and Rewards
                    </h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · MechBuddy may offer loyalty programs or rewards to users for their
                         continued use of the platform.
                         <br />. Participation in loyalty programs is subject to additional
                         terms and conditions specified by MechBuddy.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">Act of God Clause</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · MechBuddy shall not be liable for any delay, failure to perform, or
                         interruption of services caused by circumstances beyond its reasonable
                         control, including but not limited to acts of God, natural disasters,
                         war, terrorism, strikes, or governmental actions.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">
                         User Acknowledgment of Act of God Events
                    </h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · Users acknowledge and agree that MechBuddy cannot be held
                         responsible for any disruptions or delays in services caused by acts
                         of God or other unforeseeable events.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">
                         Notification of Act of God Events
                    </h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · In the event of an act of God or other force majeure event that
                         affects MechBuddy's ability to provide services, MechBuddy will make
                         reasonable efforts to notify users of the situation and any resulting
                         impacts on their bookings.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">
                         Limitation of Liability for Act of God Events
                    </h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · MechBuddy shall not be liable for any damages, losses, or expenses
                         incurred by users as a result of an act of God or force majeure event,
                         including but not limited to property damage, vehicle damage, or
                         financial losses.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">
                         Continuation of Services after Act of God Event
                    </h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · MechBuddy will make reasonable efforts to resume services as soon as
                         practicable following an act of God or force majeure event, subject to
                         any limitations or restrictions imposed by the circumstances.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">
                         User Responsibilities during Act of God Events
                    </h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · Users are responsible for taking appropriate precautions and
                         measures to protect themselves and their property during act of God
                         events, including securing their vehicles and following any safety
                         guidelines provided by MechBuddy.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">
                         Indemnification for Act of God Events
                    </h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · Users agree to indemnify and hold MechBuddy harmless from any
                         claims, damages, losses, or expenses arising out of or related to
                         their use of MechBuddy's services during an act of God or force
                         majeure event.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">No Waiver of Rights</h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · The inclusion of an act of God clause in these Terms and Conditions
                         does not waive or limit any other rights or remedies available to
                         MechBuddy under law or equity.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">
                         User Acknowledgment of Force Majeure
                    </h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · By using MechBuddy's services, users acknowledge and agree to the
                         force majeure provisions outlined in these Terms and Conditions and
                         accept the associated risks and limitations.
                    </p>

                    <h3 className="text-bold text-lg mt-4 mb-2">
                         Modification of Services during Act of God Events
                    </h3>
                    <p
                         style={{
                              fontFamily: "Sofia Pro",
                              fontWeight: 400,
                              fontSize: "16px",
                              lineHeight: "16px",
                              color: "#5E5E5E",
                         }}
                    >
                         · MechBuddy reserves the right to modify, suspend, or terminate its
                         services in whole or in part during an act of God or force majeure
                         event, as necessary to ensure the safety and well-being of its users
                         and vendors.
                    </p>
               </div>
               <div className="mt-20">
                    <Footer />
               </div>
               <div className={`${modal ? 'fixed' : 'hidden'} top-0 h-[100vh] w-[100vw] z-20`}>
                    <Login onClick={onClick} showAnimation={showAnimation} showRAnimation={showRAnimation} setRShowAnimation={setRShowAnimation} setShowAnimation={setShowAnimation} />
               </div>
          </div>
     );
}