import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from 'js-cookie';
import { createContext, useState  , useEffect} from "react";
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import TermsCondition from './pages/Term&C/Term&C';
import Login from './components/Login/Login';
import Servicing from './pages/Servicing/Servicing';
import Detailing from './pages/Detailing/Detailing';
import PrivacyPolicy from './pages/Privacy&Policy/Privacy&Policy';
import RefundPolicy from './pages/RefundPolicy/RefundPolicy';

export const AuthContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let [showAnimation, setShowAnimation] = useState(false);
  let [showRAnimation, setRShowAnimation] = useState(true);


  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);


  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/TermsCondition' element={<TermsCondition />} />
          <Route path='/PrivacyPolicies' element={<PrivacyPolicy />} />
          <Route path='/RefundPolicy' element={<RefundPolicy />} />
          <Route path='/Login' element={<Login showAnimation={showAnimation} showRAnimation={showRAnimation} setRShowAnimation={setRShowAnimation} setShowAnimation={setShowAnimation} />} />
          <Route path='/Service' element={<Servicing />} />
          <Route path='/Detail' element={<Detailing />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}


export default App;
