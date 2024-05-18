import React, { useState } from "react";
import Navbar from "../../components/NavBar/Navbar";
import Login from "../../components/Login/Login";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import UpperLine from "../../assets/UpperLine.png";

const PrivacyPolicy = () => {

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
      <div className="flex justify-evenly text-md text-Primary-gray my-[8%] sm:my-[3%]">
        <div>
          <Link to="/TermsCondition">Terms & Conditions</Link>
        </div>
        <div>
          <Link to="/PrivacyPolicies">Privacy Policies</Link>
        </div>
        <div><Link to="/RefundPolicy">Refund Policy</Link></div>
      </div>
      <div className="relative ">
        <div className='relative'>
          <div className="absolute top-[30%] transform translate-y-[-100%] w-full text-center text-xl font-normal font-[sofia-light]  sm:text-3xl md:text-4xl">PRIVACY<span className=" text-red-600"> POLICIES</span></div>
          <img src={UpperLine} alt="UpperLine" className=' w-[100%] ' />
        </div>


      </div>
      <div className="ml-[5vw] w-[88vw] mt-[2%]">
        <div
          style={{
            fontFamily: "Sofia Pro",
            fontWeight: 400,
            fontSize: "19px",
            lineHeight: "20px",
            color: "#5E5E5E",
            wordSpacing: "3px",
            letterSpacing: "1px"
          }}>
          MECHBUDDY, a brand under SIBEY INDIA PRIVATE LIMITED ("MECHBUDDY," the
          "Company," "we," "us," and "our"), places paramount importance on your
          privacy and is steadfastly committed to safeguarding it. This Privacy
          Policy delineates:
          <br />
          ·       The categories of information MECHBUDDY may collect from you
          when you access or utilize its websites, applications, and other
          digital platforms (collectively, referred to as "Services").
          <br />
          ·       Our protocols for gathering, utilizing, maintaining,
          safeguarding, and disclosing this information.
          <br />
          This policy exclusively pertains to the data MECHBUDDY collects
          through its Services, encompassing email, text, and other electronic
          communications disseminated via or in association with our Services.
          <br />
          This policy EXCLUDES information you furnish to, or that is amassed
          by, any third-party entities. This includes, but is not limited to,
          automotive service providers listed on MECHBUDDY's platform, payment
          gateways, and social networks integrated with our Services. We urge
          you to directly engage with such third-parties to comprehend their
          privacy paradigms.
          <br />
          We implore you to peruse this policy meticulously to fathom
          MECHBUDDY's stances and operational procedures concerning your data,
          and our commitments towards its sanctity and protection. By accessing
          or availing our Services and/or registering for an account with
          MECHBUDDY, you unequivocally consent to this privacy policy and assent
          to MECHBUDDY's methodologies encompassing the collection, utilization,
          disclosure, retention, and safeguarding of your personal data as
          expounded herein. Should you choose not to provide the requisite
          information, MECHBUDDY may be constrained in delivering its full
          spectrum of Services to you .The designated data controller is
          entrusted with the collection, utilization, disclosure, retention, and
          safeguarding of your personal data in adherence to its privacy
          standards and pertinent national legislations. The data controller may
          effectuate data transfers to other MECHBUDDY affiliates, as delineated
          in this Privacy Policy. Your personal information might be processed
          and retained on MECHBUDDY's servers situated in India, where our data
          centers are based, and/or on servers operated by our third-party
          associates, either within or outside India, pursuant to contractual
          affiliations with MECHBUDDY.
          <br />
          Given that this policy may undergo revisions periodically, your
          persistent utilization of MECHBUDDY's Services post any modifications
          will be construed as an endorsement of those alterations. Hence, it is
          prudent to revisit this policy intermittently to stay abreast of any
          updates.
          <br />
        </div>
        <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Information Collection</h3>
        <div
          style={{
            fontFamily: "Sofia Pro",
            fontWeight: 400,
            fontSize: "19px",
            lineHeight: "20px",
            color: "#5E5E5E",
            wordSpacing: "3px",
            letterSpacing: "1px"
          }}>
          At MechBuddy, we prioritize your privacy and are committed to ensuring
          the protection of your personal information. When you engage with our
          services, make inquiries, or interact with our website or mobile
          application, we may collect the following types of information:
          <br />
          <ul>
            <li>
              ·Contact Details: Your name, email address, phone number, and
              physical address.
              <br />
            </li>
            <li>
              ·Vehicle Details: Information related to your vehicle, including
              make, model, year, Vehicle Identification Number (VIN),
              registration details, and any other relevant details.
              <br />
            </li>
            <li>
              ·Service Preferences: Your service history, preferences, and any
              specific requirements or instructions you provide.
              <br />
            </li>
            <li>
              ·Payment Information: Details of transactions made through our
              platform, including payment method and billing information.
              <br />
            </li>
          </ul>
        </div>
        <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Use of Information</h3>
        <div
          style={{
            fontFamily: "Sofia Pro",
            fontWeight: 400,
            fontSize: "19px",
            lineHeight: "20px",
            color: "#5E5E5E",
            wordSpacing: "3px",
            letterSpacing: "1px"
          }}>
          We use the collected information to provide and enhance our services,
          including:
          <br />
          <ul>
            <li>

              ·Personalizing and tailoring our services to meet your specific
              needs and preferences.
            </li>
            <li>
              · Facilitating transactions, processing service requests, and
              delivering the services you request.
            </li>
            <li>
              · Communicating with you regarding your orders, inquiries, updates,
              and promotional offers.
            </li>
            <li>
              · Analyzing user interactions to improve our website, mobile
              application, and overall user experience.
            </li>
            <li>
              · Conducting market research and analytics to develop and enhance
              our service offerings.
            </li>
            <li>
              · Marketing and promotional activities, with your explicit consent.
            </li>
          </ul>
        </div>


        <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Information Sharing</h3>
        <div style={{
          fontFamily: "Sofia Pro",
          fontWeight: 400,
          fontSize: "19px",
          lineHeight: "20px",
          color: "#5E5E5E",
          wordSpacing: "3px",
          letterSpacing: "1px"
        }}>
          Your privacy is paramount to us. We may share your personal information in the following circumstances:<br />
          · Service      Providers: We may share your      information with trusted third-party service providers and partners who      assist us in delivering our services, processing transactions, and      fulfilling orders. These entities are contractually obligated to protect      your information and only use it for the intended purposes.<br />
          · Legal Obligations: We may disclose your information when required by law, to protect our rights and property, or to comply with legal processes
        </div>

        <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Data Security</h3>
        <div style={{
          fontFamily: "Sofia Pro",
          fontWeight: 400,
          fontSize: "19px",
          lineHeight: "20px",
          color: "#5E5E5E",
          wordSpacing: "3px",
          letterSpacing: "1px"
        }}>We employ robust security measures to safeguard your personal information from unauthorized access, disclosure, alteration, or destruction. While we strive to protect your data, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</div>

        <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Your Choices</h3>
        <div style={{
          fontFamily: "Sofia Pro",
          fontWeight: 400,
          fontSize: "19px",
          lineHeight: "20px",
          color: "#5E5E5E",
          wordSpacing: "3px",
          letterSpacing: "1px"
        }}>You have the right to:
          Access,      review, update, or delete your personal information stored with us.
          Opt-out      of receiving marketing communications from us by following the unsubscribe instructions provided in the communication or by contacting us directly.</div>

        <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Children's Privacy</h3>
        <div style={{
          fontFamily: "Sofia Pro",
          fontWeight: 400,
          fontSize: "19px",
          lineHeight: "20px",
          color: "#5E5E5E",
          wordSpacing: "3px",
          letterSpacing: "1px"
        }}>
          Our services are not designed for or directed towards individuals under the age of 13. We do not knowingly collect personal information from children. If you believe that your child has provided us with personal information, please contact us immediately, and we will take appropriate steps to delete such information
        </div>

        <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Changes to the Privacy Policy</h3>
        <div style={{
          fontFamily: "Sofia Pro",
          fontWeight: 400,
          fontSize: "19px",
          lineHeight: "20px",
          color: "#5E5E5E",
          wordSpacing: "3px",
          letterSpacing: "1px"
        }}>We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We encourage you to review this Policy regularly for updates. Your continued use of our services after the changes constitute your acceptance of the revised Policy.</div>

        <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Contact Us</h3>
        <div style={{
          fontFamily: "Sofia Pro",
          fontWeight: 400,
          fontSize: "19px",
          lineHeight: "20px",
          color: "#5E5E5E",
          wordSpacing: "3px",
          letterSpacing: "1px"
        }}>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact our Privacy Team at privacysibeyindia@gmail.com</div>

        <h3 className=" sm:translate-y-0 text-2xl font-normal font-[sofia-light] sm:text-2xl md:text-3xl ">Additional Terms and Conditions</h3>


        <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Service Booking and Third-Party Contractors</h3>
        <div style={{
          fontFamily: "Sofia Pro",
          fontWeight: 400,
          fontSize: "19px",
          lineHeight: "20px",
          color: "#5E5E5E",
          wordSpacing: "3px",
          letterSpacing: "1px"
        }}>When you book a service through MechBuddy, we connect you with the nearest partner mechanic from our trusted network. These mechanics are independent third-party contractors, not employees of MechBuddy. You have the option to select a mechanic from the list provided on our platform.</div>

        <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Availability and Pricing</h3>
        <div style={{
          fontFamily: "Sofia Pro",
          fontWeight: 400,
          fontSize: "19px",
          lineHeight: "20px",
          color: "#5E5E5E",
          wordSpacing: "3px",
          letterSpacing: "1px"
        }}>While we strive to ensure the availability of services requested, unforeseen circumstances such as traffic jams or road diversions may impact service availability. The prices displayed on our platform are estimates for major repairs and may vary based on actual service requirements.</div>

        <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Subscription and On-the-Spot Services</h3>
        <div style={{
          fontFamily: "Sofia Pro",
          fontWeight: 400,
          fontSize: "19px",
          lineHeight: "20px",
          color: "#5E5E5E",
          wordSpacing: "3px",
          letterSpacing: "1px"
        }}>Subscription services are available for individual vehicles only. While some services are available on-the-spot, immediate resolution may not always be possible in case of breakdowns or complex repairs.</div>

        <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Payment for Replacement Parts</h3>
        <div style={{
          fontFamily: "Sofia Pro",
          fontWeight: 400,
          fontSize: "19px",
          lineHeight: "20px",
          color: "#5E5E5E",
          wordSpacing: "3px",
          letterSpacing: "1px"
        }}>Charges for replacement parts, oils, coolants, etc., will be based on actual costs incurred during the service. Detailed invoices will be provided upon request.</div>

        <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Conditions for Service Provision</h3>
        <div style={{
          fontFamily: "Sofia Pro",
          fontWeight: 400,
          fontSize: "19px",
          lineHeight: "20px",
          color: "#5E5E5E",
          wordSpacing: "3px",
          letterSpacing: "1px"
        }}>We reserve the right to refuse service to anyone under the influence of alcohol, drugs, or exhibiting suspicious behavior. Non-payment of service charges or misuse of our services may result in necessary legal actions.</div>

        <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Accuracy of Information</h3>
        <div style={{
          fontFamily: "Sofia Pro",
          fontWeight: 400,
          fontSize: "19px",
          lineHeight: "20px",
          color: "#5E5E5E",
          wordSpacing: "3px",
          letterSpacing: "1px"
        }}>Customers are responsible for providing accurate information while availing services. MechBuddy is not liable for any issues arising from false or inaccurate information provided by the customer.</div>

        <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Towing and Recovery Services</h3>
        <div style={{
          fontFamily: "Sofia Pro",
          fontWeight: 400,
          fontSize: "19px",
          lineHeight: "20px",
          color: "#5E5E5E",
          wordSpacing: "3px",
          letterSpacing: "1px"
        }}>In case of major repairs or breakdowns, vehicles will be towed using appropriate methods such as flatbed towing or lifting towing, depending on the vehicle's condition. Additional charges may apply for specialized recovery services.</div>
        <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Reviews and Modifications</h3>
        <div style={{
          fontFamily: "Sofia Pro",
          fontWeight: 400,
          fontSize: "19px",
          lineHeight: "20px",
          color: "#5E5E5E",
          wordSpacing: "3px",
          letterSpacing: "1px"
        }}>Customers are prohibited from demanding additional services or benefits in exchange for false reviews. MechBuddy reserves the right to modify or update these terms and conditions without prior notice. Customers are advised to review our terms and conditions before availing any services.</div>
        <h3 className="mt-[4vw] mb-[1.3vw] text-bold text-xl  font-normal font-[sofia-light] sm:text-2xl">Vehicle Modifications and Legal Actions</h3>
        <div style={{
          fontFamily: "Sofia Pro",
          fontWeight: 400,
          fontSize: "19px",
          lineHeight: "20px",
          color: "#5E5E5E",
          marginBottom: "100px"
        }}>While we provide vehicle modification services based on your requirements, MechBuddy is not responsible for any legal actions or consequences arising from vehicle modifications. Customers are advised to comply with local regulations and laws when modifying their vehicles</div>
      </div>
      <Footer />
      <div className={`${modal ? 'fixed' : 'hidden'} top-0 h-[100vh] w-[100vw] z-20`}>
        <Login onClick={onClick} showAnimation={showAnimation} showRAnimation={showRAnimation} setRShowAnimation={setRShowAnimation} setShowAnimation={setShowAnimation} />
      </div>
    </div>
  );
};

export default PrivacyPolicy;